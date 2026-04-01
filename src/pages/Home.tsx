import heroImg from '@/assets/hero-carwash.jpg';
import logoImg from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Droplets, Shield, Clock, Star } from 'lucide-react';

const features = [
  { icon: Droplets, title: 'Lavagem Premium', desc: 'Produtos de alta qualidade para cuidar do seu veículo.' },
  { icon: Shield, title: 'Proteção Garantida', desc: 'Cera protetora e tratamentos que preservam a pintura.' },
  { icon: Clock, title: 'Agilidade', desc: 'Agendamento online e atendimento no horário marcado.' },
  { icon: Star, title: 'Satisfação', desc: 'Centenas de clientes satisfeitos confiam em nós.' },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Premium car wash"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 text-center px-4 space-y-8 max-w-3xl animate-fade-in">
          <img src={logoImg} alt="Lava Car Mendes" className="w-24 h-24 mx-auto" width={512} height={512} />
          <h1 className="text-4xl md:text-6xl font-serif text-gradient-gold leading-tight">
            Lava Car Mendes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Cuidamos do seu carro com excelência. Lavagem premium, atendimento diferenciado e resultados impecáveis.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-10 py-6" onClick={() => navigate('/agendar')}>
            Agendar Agora
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-center text-gradient-gold mb-12">Por que escolher a Lava Car Mendes?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-gold/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-serif text-gradient-gold">Pronto para o brilho?</h2>
          <p className="text-muted-foreground">Agende online em menos de 2 minutos e garanta seu horário.</p>
          <Button variant="hero" size="lg" className="text-lg px-10 py-6" onClick={() => navigate('/agendar')}>
            Agendar Lavagem
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">© 2026 Lava Car Mendes. Todos os direitos reservados.</span>
          <span className="text-sm text-muted-foreground">Seg-Sáb: 08:00 - 18:00</span>
        </div>
      </footer>
    </div>
  );
}
