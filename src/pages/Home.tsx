import heroImg from '@/assets/hero-carwash.jpg';
import logoImg from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Droplets, Shield, Clock, Star, ArrowRight } from 'lucide-react';

const features = [
  { icon: Droplets, title: 'Lavagem Premium', desc: 'Produtos de alta qualidade para o melhor resultado.' },
  { icon: Shield, title: 'Proteção', desc: 'Cera e tratamentos que preservam seu veículo.' },
  { icon: Clock, title: 'Agilidade', desc: 'Agendamento online, atendimento pontual.' },
  { icon: Star, title: 'Confiança', desc: 'Centenas de clientes satisfeitos.' },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Premium car wash" className="absolute inset-0 w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="relative z-10 text-center px-5 py-20 max-w-lg mx-auto">
          <img src={logoImg} alt="Lava Car Mendes" className="w-16 h-16 mx-auto mb-6 animate-fade-up" width={512} height={512} />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground animate-fade-up" style={{ animationDelay: '100ms' }}>
            Lava Car Mendes
          </h1>
          <p className="text-muted-foreground mt-3 text-base md:text-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
            Agendamento rápido e profissional
          </p>
          <Button variant="hero" size="xl" className="mt-8 animate-fade-up" style={{ animationDelay: '300ms' }} onClick={() => navigate('/agendar')}>
            Agendar agora <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-5">
        <div className="max-w-lg mx-auto lg:max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold text-center text-foreground mb-10">Por que a Lava Car Mendes?</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div key={f.title} className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/30 transition-all duration-200 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5">
        <div className="max-w-lg mx-auto bg-card border border-border rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-foreground mb-2">Pronto para o brilho?</h2>
          <p className="text-sm text-muted-foreground mb-6">Agende em menos de 2 minutos.</p>
          <Button variant="hero" size="lg" onClick={() => navigate('/agendar')}>
            Agendar Lavagem <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-5 border-t border-border">
        <div className="max-w-lg mx-auto lg:max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© 2026 Lava Car Mendes</span>
          <span>Seg-Sáb · 08:00 – 18:00</span>
        </div>
      </footer>
    </div>
  );
}
