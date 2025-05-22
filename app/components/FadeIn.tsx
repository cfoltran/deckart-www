"use client";

import { useEffect, useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
}

export default function FadeIn({ children }: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className="fade-in">
      {children}
    </div>
  );
} 