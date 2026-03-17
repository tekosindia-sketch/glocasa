const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function shopifyFetch({ query, variables }: { query: string; variables?: any }) {
  const endpoint = `https://${domain}/api/2024-01/graphql.json`;

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken!,
      },
      body: JSON.stringify({ query, variables }),
    });

    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error('Error fetching from Shopify:', error);
    return {
      status: 500,
      body: { errors: [{ message: 'Error fetching from Shopify' }] },
    };
  }
}

export async function getAllProducts() {
  const query = `
    {
      products(first: 20) {
        edges {
          node {
            id
            title
            handle
            description
            descriptionHtml
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  availableForSale
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch({ query });
  if (response.body.errors) {
    console.error('GraphQL errors in getAllProducts:', response.body.errors);
    return [];
  }
  return response.body.data?.products?.edges?.map((edge: any) => edge.node) || [];
}

export async function getProductByHandle(handle: string) {
  const query = `
    query getProduct($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        images(first: 5) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
              availableForSale
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch({ query, variables: { handle } });
  if (response.body.errors) {
    console.error('GraphQL errors in getProductByHandle:', response.body.errors);
    return null;
  }
  return response.body.data?.product;
}

export async function createCheckout(lineItems: { variantId: string; quantity: number }[]) {
  const query = `
    mutation cartCreate($input: CartInput) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const variables = {
    input: {
      lines: lineItems.map(item => ({
        merchandiseId: item.variantId,
        quantity: item.quantity
      }))
    },
  };

  const response = await shopifyFetch({ query, variables });

  if (response.body.errors) {
    console.error('Shopify cart errors:', response.body.errors);
    return { checkoutUserErrors: response.body.errors };
  }

  const cartData = response.body.data?.cartCreate;
  return {
    checkout: {
      webUrl: cartData?.cart?.checkoutUrl
    },
    checkoutUserErrors: cartData?.userErrors || []
  };
}

export function mapShopifyProduct(shopifyProduct: any) {
  if (!shopifyProduct) return null;

  const firstVariant = shopifyProduct.variants.edges[0]?.node;
  const price = firstVariant?.price;

  return {
    id: firstVariant?.id || shopifyProduct.id, // Use variant ID for cart
    productId: shopifyProduct.id,
    handle: shopifyProduct.handle,
    name: shopifyProduct.title,
    price: `${price?.currencyCode === 'INR' ? '₹' : price?.currencyCode}${Number(price?.amount).toLocaleString('en-IN')}`,
    priceNumber: Number(price?.amount),
    description: shopifyProduct.description,
    descriptionHtml: shopifyProduct.descriptionHtml,
    images: shopifyProduct.images.edges.map((edge: any) => edge.node.url),
    rating: 5.0, // Default for now
    reviewsCount: 0, // Default for now
    badge: shopifyProduct.tags?.includes('Best Seller') ? 'BESTSELLER' : undefined,
    benefits: ["Premium Glass", "Airtight Seal", "Eco-friendly"], // Default/Fallback
    specifications: {
      material: "Borosilicate Glass",
      care: "Dishwasher safe",
    },
    category: "Glassware",
    reviews: [],
    variants: shopifyProduct.variants.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.title,
      price: edge.node.price,
    })),
  };
}
