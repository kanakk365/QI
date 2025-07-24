"use client";
import React, { useRef, useEffect, useState } from "react";

const WaveAnimation: React.FC = () => {
  const segmentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const currentContainer = containerRef.current;
    if (currentContainer) observer.observe(currentContainer);
    return () => {
      if (currentContainer) observer.unobserve(currentContainer);
    };
  }, []);

  useEffect(() => {
    let s = 0;
    const animate = () => {
      let r = 0;
      segmentRefs.current.forEach((segment, t) => {
        if (segment) {
          r += Math.max(0, 20 * Math.sin((s + t) * 0.3));
          segment.style.transform = `translateY(${t + r}px)`;
        }
      });
      s += 0.1;
      animationRef.current = requestAnimationFrame(animate);
    };
    if (isVisible) {
      animate();
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      s = 0;
    };
  }, [isVisible]);

  const waveSegments = [...Array(23).keys()].map((s) => (
    <div
      key={s}
      ref={(el) => {
        segmentRefs.current[s] = el;
      }}
      className="wave-segment bg-gray-300 dark:bg-white"
      style={{
        height: `${s + 1}px`,
        transition: "transform 0.1s ease",
        willChange: "transform",
        marginTop: "-2px",
      }}
    />
  ));

  return (
    <div className="w-screen bottom-0 flex items-end">
      <div
        ref={containerRef}
        id="waveContainer"
        aria-hidden="true"
        className="mt-8 w-full"
        style={{ height: "200px", overflow: "hidden" }}
      >
        <div style={{ marginTop: "0px" }}>{waveSegments}</div>
      </div>
    </div>
  );
};

export default WaveAnimation;