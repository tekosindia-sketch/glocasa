'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

export interface CartItem {
    id: string; // This will now be the Shopify variant ID
    name: string;
    price: string;
    priceNumber: number;
    image: string;
    quantity: number;
    variantId?: string; // Optional but helpful for clarity
}

interface CartContextType {
    items: CartItem[];
    isOpen: boolean;
    addItem: (item: Omit<CartItem, 'quantity'>) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, qty: number) => void;
    openCart: () => void;
    closeCart: () => void;
    checkout: (buyNowItem?: { variantId: string, quantity: number }) => Promise<void>;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

import { createCheckout } from './shopify';

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const addItem = useCallback((newItem: Omit<CartItem, 'quantity'>) => {
        setItems(prev => {
            const existing = prev.find(i => i.id === newItem.id);
            if (existing) {
                return prev.map(i => i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { ...newItem, quantity: 1 }];
        });
        setIsOpen(true);
    }, []);

    const removeItem = useCallback((id: string) => {
        setItems(prev => prev.filter(i => i.id !== id));
    }, []);

    const updateQuantity = useCallback((id: string, qty: number) => {
        if (qty < 1) {
            setItems(prev => prev.filter(i => i.id !== id));
        } else {
            setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
        }
    }, []);

    const checkout = async (buyNowItem?: { variantId: string, quantity: number }) => {
        let lineItems;

        if (buyNowItem) {
            lineItems = [buyNowItem];
        } else {
            if (items.length === 0) return;
            lineItems = items.map(item => ({
                variantId: item.id, // We assume id is variantId
                quantity: item.quantity
            }));
        }

        try {
            const result = await createCheckout(lineItems);
            if (result.checkout?.webUrl) {
                window.location.href = result.checkout.webUrl;
            } else if (result.checkoutUserErrors?.length > 0) {
                alert(result.checkoutUserErrors[0].message);
            }
        } catch (error) {
            console.error('Checkout error:', error);
            alert('Something went wrong during checkout. Please try again.');
        }
    };

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const totalItems = items.reduce((sum, i) => sum + (Number(i.quantity) || 0), 0);
    const totalPrice = items.reduce((sum, i) => sum + (Number(i.priceNumber) || 0) * (Number(i.quantity) || 0), 0);

    return (
        <CartContext.Provider value={{ items, isOpen, addItem, removeItem, updateQuantity, openCart, closeCart, checkout, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
}
