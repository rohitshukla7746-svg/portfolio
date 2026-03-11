import { useEffect, useRef } from "react";

export const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Stars
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight * 0.6,
      r: Math.random() * 1.2 + 0.2,
      opacity: Math.random() * 0.7 + 0.2,
      twinkleSpeed: Math.random() * 3 + 0.5,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    // Aurora curtain bands — each has its own wave signature
    const auroraLayers = [
      {
        color: [0, 255, 150],   // green
        yBase: 0.28,
        amplitude: 0.08,
        freq: 2.2,
        speed: 0.18,
        thickness: 0.22,
        opacity: 0.55,
        phase: 0,
      },
      {
        color: [0, 200, 255],   // cyan
        yBase: 0.32,
        amplitude: 0.07,
        freq: 1.8,
        speed: 0.13,
        thickness: 0.18,
        opacity: 0.45,
        phase: 1.2,
      },
      {
        color: [160, 0, 255],   // violet
        yBase: 0.22,
        amplitude: 0.09,
        freq: 2.8,
        speed: 0.22,
        thickness: 0.15,
        opacity: 0.35,
        phase: 2.4,
      },
      {
        color: [0, 255, 100],   // bright green shimmer
        yBase: 0.38,
        amplitude: 0.05,
        freq: 3.5,
        speed: 0.3,
        thickness: 0.1,
        opacity: 0.3,
        phase: 0.8,
      },
      {
        color: [255, 80, 200],  // magenta accent
        yBase: 0.18,
        amplitude: 0.06,
        freq: 2.0,
        speed: 0.15,
        thickness: 0.12,
        opacity: 0.25,
        phase: 3.5,
      },
    ];

    const drawAuroraLayer = (layer, t) => {
      const W = canvas.width;
      const H = canvas.height;
      const steps = Math.ceil(W / 3);

      // Build curtain path
      const topPoints = [];
      const bottomPoints = [];

      for (let i = 0; i <= steps; i++) {
        const px = (i / steps) * W;
        const nx = px / W;

        const wave =
          Math.sin(nx * Math.PI * layer.freq + t * layer.speed + layer.phase) * layer.amplitude +
          Math.sin(nx * Math.PI * layer.freq * 1.7 + t * layer.speed * 0.6 + layer.phase + 1) * layer.amplitude * 0.4 +
          Math.sin(nx * Math.PI * layer.freq * 0.5 + t * layer.speed * 1.4 + layer.phase + 2) * layer.amplitude * 0.3;

        const topY = (layer.yBase + wave) * H;
        const bottomY = topY + layer.thickness * H * (0.7 + Math.sin(nx * Math.PI * 2 + t * 0.2) * 0.3);

        topPoints.push({ x: px, y: topY });
        bottomPoints.push({ x: px, y: bottomY });
      }

      // Draw vertical light streaks (curtain effect)
      const streakCount = 18;
      for (let s = 0; s < streakCount; s++) {
        const si = Math.floor((s / streakCount) * steps);
        const tp = topPoints[si];
        const bp = bottomPoints[si];
        if (!tp || !bp) continue;

        const streakOpacity = layer.opacity * (0.3 + Math.sin(t * 0.4 + s * 0.7) * 0.15) * 0.4;
        const streakGrad = ctx.createLinearGradient(tp.x, tp.y, bp.x, bp.y);
        streakGrad.addColorStop(0, `rgba(${layer.color.join(",")}, 0)`);
        streakGrad.addColorStop(0.3, `rgba(${layer.color.join(",")}, ${streakOpacity})`);
        streakGrad.addColorStop(0.7, `rgba(${layer.color.join(",")}, ${streakOpacity * 0.6})`);
        streakGrad.addColorStop(1, `rgba(${layer.color.join(",")}, 0)`);

        ctx.beginPath();
        ctx.moveTo(tp.x, tp.y);
        ctx.lineTo(bp.x, bp.y);
        ctx.strokeStyle = streakGrad;
        ctx.lineWidth = (W / streakCount) * 0.6;
        ctx.stroke();
      }

      // Fill the curtain band
      ctx.beginPath();
      ctx.moveTo(topPoints[0].x, topPoints[0].y);
      topPoints.forEach((p) => ctx.lineTo(p.x, p.y));
      for (let i = bottomPoints.length - 1; i >= 0; i--) {
        ctx.lineTo(bottomPoints[i].x, bottomPoints[i].y);
      }
      ctx.closePath();

      // Vertical gradient within the band
      const minY = Math.min(...topPoints.map((p) => p.y));
      const maxY = Math.max(...bottomPoints.map((p) => p.y));
      const bandGrad = ctx.createLinearGradient(0, minY, 0, maxY);
      const alpha = layer.opacity * (0.8 + Math.sin(t * 0.25 + layer.phase) * 0.2);
      bandGrad.addColorStop(0, `rgba(${layer.color.join(",")}, 0)`);
      bandGrad.addColorStop(0.2, `rgba(${layer.color.join(",")}, ${alpha})`);
      bandGrad.addColorStop(0.6, `rgba(${layer.color.join(",")}, ${alpha * 0.7})`);
      bandGrad.addColorStop(1, `rgba(${layer.color.join(",")}, 0)`);

      ctx.fillStyle = bandGrad;
      ctx.fill();
    };

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Arctic night sky gradient
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, "#000508");
      bg.addColorStop(0.3, "#010c10");
      bg.addColorStop(0.6, "#011208");
      bg.addColorStop(0.8, "#020e04");
      bg.addColorStop(1, "#010804");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Stars (only upper portion of sky)
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.35 + 0.65;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 240, 255, ${star.opacity * twinkle})`;
        ctx.fill();
      });

      // Aurora curtains
      ctx.globalCompositeOperation = "screen";
      auroraLayers.forEach((layer) => drawAuroraLayer(layer, time));
      ctx.globalCompositeOperation = "source-over";

      // Horizon glow — green tint on the ground
      const horizonGlow = ctx.createLinearGradient(0, H * 0.55, 0, H);
      horizonGlow.addColorStop(0, "rgba(0, 60, 20, 0.0)");
      horizonGlow.addColorStop(0.4, "rgba(0, 40, 15, 0.25)");
      horizonGlow.addColorStop(1, "rgba(0, 20, 8, 0.6)");
      ctx.fillStyle = horizonGlow;
      ctx.fillRect(0, H * 0.55, W, H * 0.45);

      // Subtle ground/snow silhouette
      ctx.beginPath();
      ctx.moveTo(0, H);
      ctx.lineTo(0, H * 0.88);
      for (let x = 0; x <= W; x += 8) {
        const hillY = H * 0.88 +
          Math.sin((x / W) * Math.PI * 4) * H * 0.025 +
          Math.sin((x / W) * Math.PI * 9 + 1) * H * 0.01;
        ctx.lineTo(x, hillY);
      }
      ctx.lineTo(W, H);
      ctx.closePath();
      const snowGrad = ctx.createLinearGradient(0, H * 0.85, 0, H);
      snowGrad.addColorStop(0, "rgba(8, 25, 15, 0.95)");
      snowGrad.addColorStop(1, "rgba(2, 10, 5, 1)");
      ctx.fillStyle = snowGrad;
      ctx.fill();

      // Snow shimmer on horizon
      const shimmer = ctx.createLinearGradient(0, H * 0.86, 0, H * 0.92);
      shimmer.addColorStop(0, `rgba(80, 180, 120, ${0.05 + Math.sin(time * 0.4) * 0.02})`);
      shimmer.addColorStop(1, "transparent");
      ctx.fillStyle = shimmer;
      ctx.fillRect(0, H * 0.86, W, H * 0.08);

      // Vignette
      const vignette = ctx.createRadialGradient(W * 0.5, H * 0.4, H * 0.1, W * 0.5, H * 0.4, H * 1.0);
      vignette.addColorStop(0, "transparent");
      vignette.addColorStop(1, "rgba(0, 3, 2, 0.6)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, W, H);

      time += 0.016;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ display: "block" }}
    />
  );
};
