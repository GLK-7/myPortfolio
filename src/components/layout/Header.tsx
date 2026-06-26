import { useState, useEffect, useRef } from 'react';
import Contacts from './Contacts';
import Navbar from './Navbar';

/* ── Estrelas animadas no canvas ─────────────────────────── */
const StarCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Gera estrelas
    const STAR_COUNT = 160;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      r:       Math.random() * 1.4 + 0.3,
      alpha:   Math.random(),
      speed:   Math.random() * 0.004 + 0.002,
      drift:   (Math.random() - 0.5) * 0.12,
    }));

    // Nebulosas (blobs coloridos)
    const nebulae = [
      { x: 0.15, y: 0.25, r: 220, color: 'rgba(98,0,238,0.18)' },
      { x: 0.80, y: 0.60, r: 180, color: 'rgba(3,218,198,0.12)' },
      { x: 0.50, y: 0.80, r: 160, color: 'rgba(187,134,252,0.10)' },
      { x: 0.70, y: 0.10, r: 140, color: 'rgba(207,102,121,0.09)' },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fundo escuro
      ctx.fillStyle = '#0d0d1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nebulosas
      nebulae.forEach(n => {
        const grd = ctx.createRadialGradient(
          n.x * canvas.width, n.y * canvas.height, 0,
          n.x * canvas.width, n.y * canvas.height, n.r
        );
        grd.addColorStop(0, n.color);
        grd.addColorStop(1, 'transparent');
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Estrelas
      stars.forEach(s => {
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0) s.speed *= -1;
        s.x += s.drift;
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, s.alpha))})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
};

/* ── Header principal ────────────────────────────────────── */
const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeaderVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const el = headerRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="relative text-white text-center overflow-hidden"
        style={{ minHeight: '420px' }}
      >
        {/* Canvas galáxia */}
        <StarCanvas />

        {/* Overlay gradiente suave na base para transição ao body */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d0d1a] to-transparent z-10" />

        {/* Conteúdo */}
        <div className="relative z-20 flex flex-col items-center pt-14 pb-16 px-4">

          {/* Avatar flutuante com anel pulsante */}
          <div className="relative animate-float mb-6">
            <div className="avatar-pulse relative w-36 h-36 rounded-full">
              <div className="w-36 h-36 rounded-full overflow-hidden border-[3px] border-[#03dac6] shadow-[0_0_32px_rgba(3,218,198,0.45)]">
                <img
                  src="https://github.com/glk-7.png"
                  alt="Foto de perfil de Gabriel Lino"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Nome com shimmer */}
          <h1 className="text-shimmer text-4xl sm:text-5xl font-bold tracking-wide mb-3">
            Gabriel Lino
          </h1>

          {/* Subtítulo */}
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-5 font-light">
            Analista de Dados &bull; BI &bull; Desenvolvedor
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {[
              { icon: 'fa-solid fa-chart-simple', label: 'Analista de Dados | BI' },
              { icon: 'fa-solid fa-code',         label: 'Desenvolvedor'          },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-[#0d0d1a]
                           bg-gradient-to-r from-[#03dac6] to-[#bb86fc]
                           shadow-[0_0_14px_rgba(3,218,198,0.35)]"
              >
                <i className={icon} />
                {label}
              </div>
            ))}
          </div>

          <Contacts />
        </div>
      </header>

      <Navbar isHeaderVisible={isHeaderVisible} />
    </>
  );
};

export default Header;
