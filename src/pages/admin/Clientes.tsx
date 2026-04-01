import { Users, Phone } from 'lucide-react';

const customers = [
  { name: 'João Silva', phone: '(11) 99999-1111', visits: 12, lastVisit: '28/03/2026', vehicle: 'Honda Civic - ABC-1234' },
  { name: 'Maria Santos', phone: '(11) 99999-2222', visits: 8, lastVisit: '25/03/2026', vehicle: 'VW Gol - DEF-5678' },
  { name: 'Pedro Costa', phone: '(11) 99999-3333', visits: 5, lastVisit: '20/03/2026', vehicle: 'Toyota Hilux - GHI-9012' },
  { name: 'Ana Oliveira', phone: '(11) 99999-4444', visits: 15, lastVisit: '30/03/2026', vehicle: 'Hyundai HB20 - JKL-3456' },
  { name: 'Carlos Mendes', phone: '(11) 99999-5555', visits: 3, lastVisit: '15/03/2026', vehicle: 'Jeep Compass - MNO-7890' },
];

export default function AdminClientes() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif text-gradient-gold">Clientes</h2>
        <span className="text-sm text-muted-foreground">{customers.length} clientes</span>
      </div>

      <div className="bg-card border border-border rounded-lg divide-y divide-border">
        {customers.map((c) => (
          <div key={c.name} className="p-4 hover:bg-surface-hover transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <Phone className="w-3 h-3" /> {c.phone}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{c.vehicle}</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-gold">{c.visits} visitas</span>
                <p className="text-xs text-muted-foreground mt-1">Última: {c.lastVisit}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
