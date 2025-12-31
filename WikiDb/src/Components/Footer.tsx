import { useState, useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function Footer() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [ultraInstinct, setUltraInstinct] = useState(false);
  const [powerLevel, setPowerLevel] = useState(0);
  const footerRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const konamiRef = useRef<string[]>([]);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      konamiRef.current.push(e.key);
      if (konamiRef.current.length > 10) konamiRef.current.shift();
      
      if (JSON.stringify(konamiRef.current) === JSON.stringify(konamiCode)) {
        setUltraInstinct(true);
        setTimeout(() => setUltraInstinct(false), 5000);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const colors = ultraInstinct 
      ? ['#00d4ff', '#0088ff', '#ffffff'] 
      : ['#fb923c', '#f97316', '#ea580c', '#fbbf24'];
    
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    setParticles(newParticles);

    const animate = () => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: (p.x + p.vx + 100) % 100,
        y: (p.y + p.vy + 100) % 100,
        opacity: Math.sin(Date.now() * 0.001 + p.id) * 0.3 + 0.5
      })));
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [ultraInstinct]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPowerLevel(prev => (prev + 1) % 9001);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleFooterClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 6) {
      setUltraInstinct(true);
      setClickCount(0);
      setTimeout(() => setUltraInstinct(false), 5000);
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer 
      ref={footerRef}
      onClick={handleFooterClick}
      className={`relative overflow-hidden py-4! px-0! border-t transition-all duration-1000 cursor-pointer flex items-center justify-center ${
        ultraInstinct 
          ? 'bg-linear-to-br from-slate-900 via-slate-950 to-slate-950 border-cyan-400/50' 
          : 'bg-linear-to-b from-slate-950 via-slate-950 to-black border-slate-700/30'
      }`}
      style={{
        backgroundSize: '200% 200%',
        animation: 'gradientShift 15s ease infinite'
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
          animation: 'scan 8s linear infinite'
        }} />
      </div>

      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            transition: 'all 0.3s ease'
          }}
        />
      ))}

      <div 
        className="absolute pointer-events-none rounded-full blur-3xl transition-all duration-300"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '300px',
          height: '300px',
          background: ultraInstinct 
            ? 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)' 
            : 'radial-gradient(circle, rgba(251,146,60,0.2) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className={`backdrop-blur-xl rounded-2xl p-8! border transition-all duration-700 w-full max-w-2xl ${
          ultraInstinct
            ? 'bg-cyan-500/10 border-cyan-400/30 shadow-[0_0_50px_rgba(0,212,255,0.3)]'
            : 'bg-slate-800/20 border-slate-700/30 shadow-[0_0_50px_rgba(251,146,60,0.1)]'
        }`}>
          
          <div className="flex justify-center mb-6! w-full">
            <div className={`inline-flex items-center gap-3 px-6! py-3! rounded-full backdrop-blur-md border transition-all duration-500 ${
              ultraInstinct
                ? 'bg-cyan-500/20 border-cyan-400/40'
                : 'bg-orange-500/20 border-orange-400/40'
            }`}>
              <div className="relative">
                <div className={`w-3 h-3 rounded-full animate-pulse ${
                  ultraInstinct ? 'bg-cyan-400' : 'bg-orange-500'
                }`} />
                <div className={`absolute inset-0 w-3 h-3 rounded-full animate-ping ${
                  ultraInstinct ? 'bg-cyan-400' : 'bg-orange-500'
                }`} />
              </div>
              <span className={`font-mono text-sm font-bold tracking-wider ${
                ultraInstinct ? 'text-cyan-300' : 'text-orange-300'
              }`}>
                POWER LEVEL: {powerLevel.toString().padStart(4, '0')}
              </span>
            </div>
          </div>

          <div className="text-center space-y-6 w-full">
            {ultraInstinct && (
              <div className="mb-4!">
                <h3 className="text-2xl font-bold bg-linear-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent animate-pulse text-center">
                   ULTRA INSTINCT ACTIVATED 
                </h3>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-6 mb-8 w-full">
              {['About', 'Characters', 'Sagas', 'Contact'].map((link, i) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`group relative px-6! py-3! rounded-lg font-semibold transition-all duration-300 hover:scale-110 text-white! ${
                    ultraInstinct
                      ? 'text-cyan-300 hover:text-cyan-100'
                      : 'text-orange-300 hover:text-orange-100'
                  }`}
                  style={{
                    animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`
                  }}
                >
                  <span className="relative z-10">{link}</span>
                  <div className={`absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    ultraInstinct
                      ? 'bg-cyan-500/30'
                      : 'bg-orange-500/30'
                  }`} />
                  <div className={`absolute inset-0 rounded-lg border opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    ultraInstinct
                      ? 'border-cyan-400/50 shadow-[0_0_20px_rgba(0,212,255,0.5)]'
                      : 'border-orange-400/50 shadow-[0_0_20px_rgba(251,146,60,0.5)]'
                  }`} />
                </a>
              ))}
            </div>

            <div className="relative h-px w-full my-8! mx-auto max-w-md">
              <div className={`absolute inset-0 ${
                ultraInstinct
                  ? 'bg-linear-to-r from-transparent via-cyan-400 to-transparent'
                  : 'bg-linear-to-r from-transparent via-orange-400 to-transparent'
              }`} style={{
                animation: 'shimmer 3s linear infinite'
              }} />
            </div>

            <p className={`text-sm font-medium transition-colors duration-500 text-center ${
              ultraInstinct ? 'text-cyan-200' : 'text-slate-400'
            }`}>
              © {year} Dragon Ball Characters Database
            </p>
            
            <p className="text-xs text-slate-500 text-center">
               Made with Ki Energy • Click {7 - clickCount} more times or try the Konami Code
            </p>
          </div>

          <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
            <div className={`w-12 h-12 rounded-full border-2 border-t-transparent animate-spin ${
              ultraInstinct ? 'border-cyan-400' : 'border-orange-500'
            }`} style={{ animationDuration: '3s' }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
         0%, 100% { background-position: 0% 50%; }
         50% { background-position: 100% 50%; }
        }
        
        @keyframes scan {
         0% { transform: translateY(0); }
         100% { transform: translateY(10px); }
        }
        
        @keyframes float {
         0%, 100% { transform: translateY(0px); }
         50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
         0% { transform: translateX(-100%); }
         100% { transform: translateX(100%); }
        }
      `}</style>
    </footer>
  );
}