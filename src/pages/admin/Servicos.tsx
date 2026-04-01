import { services } from '@/data/services';
import { Badge } from '@/components/ui/badge';

const mockAppointments = [
  { id: 1, client: 'João Silva', service: 'Lavagem Completa', status: 'em_andamento' as const, plate: 'ABC-1234' },
  { id: 2, client: 'Maria Santos', service: 'Lavagem com Cera', status: 'agendado' as const, plate: 'DEF-5678' },
  { id: 3, client: 'Pedro Costa', service: 'Higienização', status: 'concluido' as const, plate: 'GHI-9012' },
];

const statusMap = {
  agendado: { label: 'Agendado', class: 'bg-muted text-muted-foreground' },
  em_andamento: { label: 'Em Andamento', class: 'bg-gold/20 text-gold' },
  concluido: { label: 'Finalizado', class: 'bg-green-900/30 text-green-400' },
};

export default function AdminServicos() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-serif text-gradient-gold">Serviços</h2>

      {/* Service list */}
      <div className="bg-card border border-border rounded-lg">
        <div className="p-5 border-b border-border">
          <h3 className="font-semibold text-foreground">Atendimentos de Hoje</h3>
        </div>
        <div className="divide-y divide-border">
          {mockAppointments.map((a) => (
            <div key={a.id} className="p-4 flex items-center gap-4 hover:bg-surface-hover transition-colors">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{a.client}</p>
                <p className="text-xs text-muted-foreground">{a.service} · {a.plate}</p>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusMap[a.status].class}`}>
                {statusMap[a.status].label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Services catalog */}
      <div className="bg-card border border-border rounded-lg">
        <div className="p-5 border-b border-border">
          <h3 className="font-semibold text-foreground">Catálogo de Serviços</h3>
        </div>
        <div className="divide-y divide-border">
          {services.map((s) => (
            <div key={s.id} className="p-4 flex items-center gap-4">
              <span className="text-2xl">{s.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.durationMinutes} min</p>
              </div>
              <span className="text-sm font-semibold text-gold">R$ {s.basePrice}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
