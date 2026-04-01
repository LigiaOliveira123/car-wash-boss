import { Car, DollarSign, CalendarDays, Clock } from 'lucide-react';

const stats = [
  { label: 'Carros Hoje', value: '12', icon: Car, color: 'text-gold' },
  { label: 'Receita Hoje', value: 'R$ 1.240', icon: DollarSign, color: 'text-gold' },
  { label: 'Agendamentos', value: '8', icon: CalendarDays, color: 'text-gold' },
  { label: 'Receita Mensal', value: 'R$ 18.500', icon: DollarSign, color: 'text-gold' },
];

const upNext = [
  { time: '10:00', client: 'João Silva', service: 'Lavagem Completa', plate: 'ABC-1234' },
  { time: '10:30', client: 'Maria Santos', service: 'Lavagem com Cera', plate: 'DEF-5678' },
  { time: '11:00', client: 'Pedro Costa', service: 'Higienização', plate: 'GHI-9012' },
  { time: '13:00', client: 'Ana Oliveira', service: 'Lavagem Simples', plate: 'JKL-3456' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-serif text-gradient-gold">Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-3 mb-2">
              <s.icon className={`w-5 h-5 ${s.color}`} />
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </div>
            <span className="text-2xl font-bold text-foreground">{s.value}</span>
          </div>
        ))}
      </div>

      {/* Up Next */}
      <div className="bg-card border border-border rounded-lg">
        <div className="p-5 border-b border-border flex items-center gap-2">
          <Clock className="w-5 h-5 text-gold" />
          <h3 className="font-semibold text-foreground">Próximos Atendimentos</h3>
        </div>
        <div className="divide-y divide-border">
          {upNext.map((item, i) => (
            <div key={i} className="p-4 flex items-center gap-4 hover:bg-surface-hover transition-colors">
              <span className="text-sm font-mono text-gold w-14">{item.time}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{item.client}</p>
                <p className="text-xs text-muted-foreground">{item.service}</p>
              </div>
              <span className="text-xs text-muted-foreground font-mono">{item.plate}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
