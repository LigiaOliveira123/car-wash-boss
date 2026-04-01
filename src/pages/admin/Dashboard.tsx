import { Car, DollarSign, CalendarDays, Clock, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Carros Hoje', value: '12', icon: Car },
  { label: 'Receita Hoje', value: 'R$ 1.240', icon: DollarSign },
  { label: 'Agendamentos', value: '8', icon: CalendarDays },
  { label: 'Receita Mês', value: 'R$ 18.5k', icon: TrendingUp },
];

const upNext = [
  { time: '10:00', client: 'João Silva', service: 'Lavagem Completa', plate: 'ABC-1234' },
  { time: '10:30', client: 'Maria Santos', service: 'Lavagem com Cera', plate: 'DEF-5678' },
  { time: '11:00', client: 'Pedro Costa', service: 'Higienização', plate: 'GHI-9012' },
  { time: '13:00', client: 'Ana Oliveira', service: 'Lavagem Simples', plate: 'JKL-3456' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6 animate-fade-up">
      <h2 className="text-lg font-bold text-foreground">Dashboard</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                <s.icon className="w-4 h-4 text-primary" />
              </div>
            </div>
            <span className="text-xl font-bold text-foreground">{s.value}</span>
            <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-2xl">
        <div className="px-4 py-3 border-b border-border flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Próximos</h3>
        </div>
        <div className="divide-y divide-border">
          {upNext.map((item, i) => (
            <div key={i} className="px-4 py-3 flex items-center gap-3 hover:bg-secondary/50 transition-colors">
              <span className="text-xs font-mono text-primary w-12">{item.time}</span>
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
