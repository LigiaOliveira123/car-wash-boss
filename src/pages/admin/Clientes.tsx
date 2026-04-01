import { Phone } from 'lucide-react';

const customers = [
  { name: 'João Silva', phone: '(11) 99999-1111', visits: 12, lastVisit: '28/03/2026', vehicle: 'Honda Civic · ABC-1234' },
  { name: 'Maria Santos', phone: '(11) 99999-2222', visits: 8, lastVisit: '25/03/2026', vehicle: 'VW Gol · DEF-5678' },
  { name: 'Pedro Costa', phone: '(11) 99999-3333', visits: 5, lastVisit: '20/03/2026', vehicle: 'Toyota Hilux · GHI-9012' },
  { name: 'Ana Oliveira', phone: '(11) 99999-4444', visits: 15, lastVisit: '30/03/2026', vehicle: 'Hyundai HB20 · JKL-3456' },
  { name: 'Carlos Mendes', phone: '(11) 99999-5555', visits: 3, lastVisit: '15/03/2026', vehicle: 'Jeep Compass · MNO-7890' },
];

export default function AdminClientes() {
  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">Clientes</h2>
        <span className="text-xs text-muted-foreground">{customers.length} clientes</span>
      </div>

      <div className="bg-card border border-border rounded-2xl divide-y divide-border">
        {customers.map((c) => (
          <div key={c.name} className="px-4 py-3 hover:bg-secondary/50 transition-colors">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                  <Phone className="w-3 h-3" /> {c.phone}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{c.vehicle}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-sm font-semibold text-primary">{c.visits}</span>
                <p className="text-[10px] text-muted-foreground">visitas</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
