import heroImg from '@/assets/hero-carwash.jpg';
import logoImg from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Droplets, Shield, Clock, Star, ArrowRight, MapPin, Phone } from 'lucide-react';

const features = [
  { icon: Droplets, title: 'Lavagem Premium', desc: 'Produtos de alta qualidade para o melhor resultado.' },
  { icon: Shield, title: 'Proteção', desc: 'Tratamentos que preservam seu veículo.' },
  { icon: Clock, title: 'Agilidade', desc: 'Agendamento online, atendimento pontual.' },
  { icon: Star, title: 'Confiança', desc: 'Centenas de clientes satisfeitos.' },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100svh] bg-background">
      {/* Hero */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-end overflow-hidden pb-12 sm:justify-center sm:pb-0">
        <img
          src={heroImg}
          alt="Premium car wash"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="relative z-10 text-center px-6 w-full max-w-md mx-auto space-y-5">
          <img
            src={logoImg}
            alt="Lava Car Mendes"
            className="w-20 h-20 mx-auto drop-shadow-2xl animate-fade-up"
            width={512}
            height={512}
          />
          <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Lava Car Mendes
            </h1>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Agendamento rápido e profissional
            </p>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
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

      {/* Features */}
      <section className="py-14 px-5">
        <div className="max-w-md mx-auto lg:max-w-4xl">
          <h2 className="text-lg sm:text-xl font-bold text-center text-foreground mb-8">
            Por que nos escolher?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-card border border-border rounded-2xl p-4 text-center hover:border-primary/30 transition-all duration-200 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <f.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-xs sm:text-sm text-foreground mb-1">{f.title}</h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-14">
        <div className="max-w-md mx-auto bg-card border border-border rounded-2xl p-6 text-center">
          <h2 className="text-lg font-bold text-foreground mb-1">Pronto para o brilho?</h2>
          <p className="text-xs text-muted-foreground mb-5">Agende em menos de 2 minutos.</p>
          <Button variant="hero" size="lg" className="w-full sm:w-auto" onClick={() => navigate('/agendar')}>
            Agendar Lavagem <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 px-5 border-t border-border">
        <div className="max-w-md mx-auto lg:max-w-4xl flex flex-col items-center gap-2 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Seg-Sáb · 08–18h</span>
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> WhatsApp</span>
          </div>
          <span>© 2026 Lava Car Mendes</span>
        </div>
      </footer>
    </div>
  );
}
