'use client';

import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver<T extends HTMLElement = any>(options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    // Once revealed, we don't need to observe anymore
                    if (targetRef.current) observer.unobserve(targetRef.current);
                }
            });
        }, { threshold: 0.1, ...options });

        const currentTarget = targetRef.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [options]);

    return { targetRef, isIntersecting };
}
