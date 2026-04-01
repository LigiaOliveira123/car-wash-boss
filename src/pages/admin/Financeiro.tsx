import { DollarSign, TrendingUp } from 'lucide-react';

const monthlyData = [
  { month: 'Jan', revenue: 15200 },
  { month: 'Fev', revenue: 17800 },
  { month: 'Mar', revenue: 16400 },
  { month: 'Abr', revenue: 19100 },
  { month: 'Mai', revenue: 21300 },
  { month: 'Jun', revenue: 18500 },
];

const topServices = [
  { name: 'Lavagem Completa', count: 145, revenue: 'R$ 10.150' },
  { name: 'Lavagem com Cera', count: 89, revenue: 'R$ 8.900' },
  { name: 'Higienização', count: 42, revenue: 'R$ 6.300' },
  { name: 'Lavagem Simples', count: 210, revenue: 'R$ 8.400' },
];

export default function AdminFinanceiro() {
  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue));

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-serif text-gradient-gold">Financeiro</h2>

      {/* Revenue Chart (simple bar chart) */}
      <div className="bg-card border border-border rounded-lg p-5">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-gold" />
          <h3 className="font-semibold text-foreground">Receita Mensal</h3>
        </div>
        <div className="flex items-end gap-3 h-48">
          {monthlyData.map((d) => (
            <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground">R$ {(d.revenue / 1000).toFixed(1)}k</span>
              <div
                className="w-full bg-gradient-gold rounded-t-md transition-all duration-500"
                style={{ height: `${(d.revenue / maxRevenue) * 100}%` }}
              />
              <span className="text-xs text-muted-foreground">{d.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Services */}
      <div className="bg-card border border-border rounded-lg">
        <div className="p-5 border-b border-border flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-gold" />
          <h3 className="font-semibold text-foreground">Serviços Mais Vendidos</h3>
        </div>
        <div className="divide-y divide-border">
          {topServices.map((s, i) => (
            <div key={s.name} className="p-4 flex items-center gap-4">
              <span className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.count} atendimentos</p>
              </div>
              <span className="text-sm font-semibold text-gold">{s.revenue}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
