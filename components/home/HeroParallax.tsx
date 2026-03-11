"use client";
import { useEffect, useRef } from "react";

export default function HeroParallax() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const onMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 12;
            const y = (e.clientY / window.innerHeight - 0.5) * 8;
            el.style.transform = `translate(${x}px, ${y}px)`;
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <div className="hero-deco" ref={ref} aria-hidden>
            <div className="hero-deco-ring" />
            <div className="hero-deco-ring hero-deco-ring--2" />
        </div>
    );
}