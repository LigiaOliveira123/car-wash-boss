import heroImg from '@/assets/hero-carwash.jpg';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, Phone } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100svh] bg-background flex flex-col">
      {/* Hero — full screen */}
      <section className="relative flex-1 flex flex-col overflow-hidden">
        <img
          src={heroImg}
          alt="Premium car wash"
          className="absolute inset-0 w-full h-full object-cover object-[center_60%] sm:object-center opacity-30"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />

        {/* Content pinned to top on mobile, centered on desktop */}
        <div className="relative z-10 text-center px-6 w-full max-w-md mx-auto pt-10 sm:pt-0 sm:my-auto space-y-5">
          <div className="animate-fade-up">
            <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Lava Car Mendes
            </h1>
            <p className="text-muted-foreground mt-2 text-xs sm:text-base">
              Agendamento rápido e profissional
            </p>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            <Button
              variant="hero"
              size="xl"
              className="w-full sm:w-auto"
              onClick={() => navigate('/agendar')}
            >
              Agendar agora <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 px-5 border-t border-border shrink-0">
        <div className="max-w-md mx-auto flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Seg-Sáb · 08–18h</span>
          <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> WhatsApp</span>
        </div>
      </footer>
    </div>
  );
}
