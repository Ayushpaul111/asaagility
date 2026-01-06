"use client";
import React, { useRef, useEffect } from "react";

const MapCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isAnimating = false;

    const sparkleProbability = 0.002;
    const dotColor = "#E6ECF1";
    const sparkleColor = "#CDDFEE";
    const sparkleDuration = 60;
    const fadeInDuration = 10;
    const sparkles: {
      x: number;
      y: number;
      opacity: number;
      phase: "fadeIn" | "fadeOut";
    }[] = [];
    let cols: number, rows: number;
    let dotRadius = window.innerWidth < 480 ? 2 : 4;
    let dotGap = window.innerWidth < 480 ? 3 : 6;

    const initializeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.scale(dpr, dpr);

      cols = Math.floor(rect.width / (dotRadius * 2 + dotGap));
      rows = Math.floor(rect.height / (dotRadius * 2 + dotGap));
    };

    const drawDot = (x: number, y: number, color: string, offsetX = 0) => {
      if (!ctx) return;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(
        x * (dotRadius * 2 + dotGap) + dotRadius + offsetX,
        y * (dotRadius * 2 + dotGap) + dotRadius,
        dotRadius,
        0,
        Math.PI * 2
      );
      ctx.fill();
    };

    const drawBackground = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const offsetX = y % 2 === 0 ? dotRadius + dotGap / 2 : 0;
          drawDot(x, y, dotColor, offsetX);
        }
      }
    };

    const animateSparkles = () => {
      if (!ctx) return;
      // Add new sparkles
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          if (Math.random() < sparkleProbability) {
            sparkles.push({ x, y, opacity: 0, phase: "fadeIn" });
          }
        }
      }

      const fadeRate = 1 / sparkleDuration;
      const fadeInRate = 1 / fadeInDuration;

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const sparkle = sparkles[i];

        if (sparkle.phase === "fadeIn") {
          sparkle.opacity += fadeInRate;
          if (sparkle.opacity >= 1) {
            sparkle.opacity = 1;
            sparkle.phase = "fadeOut";
          }
        } else {
          sparkle.opacity -= fadeRate;
          if (sparkle.opacity <= 0) {
            sparkles.splice(i, 1);
            continue;
          }
        }
        const offsetX = sparkle.y % 2 === 0 ? dotRadius + dotGap / 2 : 0;
        ctx.globalAlpha = sparkle.opacity;
        drawDot(sparkle.x, sparkle.y, sparkleColor, offsetX);
        ctx.globalAlpha = 1;
      }
    };

    const animate = () => {
      drawBackground();
      animateSparkles();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isAnimating) {
            isAnimating = true;
            animate();
          }
        } else {
          if (isAnimating) {
            isAnimating = false;
            cancelAnimationFrame(animationFrameId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });
    observer.observe(canvas);

    const handleResize = () => {
      dotRadius = window.innerWidth < 480 ? 2 : 4;
      dotGap = window.innerWidth < 480 ? 3 : 6;
      initializeCanvas();
    };

    initializeCanvas();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        maskImage:
          'url("https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/667a968d565f94f79f5d8429_us-map.png")',
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskImage:
          'url("https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/667a968d565f94f79f5d8429_us-map.png")',
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
      }}
    />
  );
};

export default MapCanvas;
