import { Settings, Clock, Wrench } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AdminConfiguracoes() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-serif text-gradient-gold">Configurações</h2>

      {/* Business Hours */}
      <div className="bg-card border border-border rounded-lg p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-gold" />
          <h3 className="font-semibold text-foreground">Horário de Funcionamento</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Abertura</label>
            <Input defaultValue="08:00" className="bg-muted border-border" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Fechamento</label>
            <Input defaultValue="18:00" className="bg-muted border-border" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">Capacidade (carros simultâneos)</label>
          <Input type="number" defaultValue="3" className="bg-muted border-border w-24" />
        </div>
      </div>

      {/* Service Config */}
      <div className="bg-card border border-border rounded-lg p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Wrench className="w-5 h-5 text-gold" />
          <h3 className="font-semibold text-foreground">Serviços</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Edite nomes, preços e durações dos serviços disponíveis.
        </p>
        <Button variant="gold-outline" size="sm">Editar Serviços</Button>
      </div>

      <Button variant="hero">Salvar Configurações</Button>
    </div>
  );
}
