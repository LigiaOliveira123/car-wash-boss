import { Car } from 'lucide-react';

const vehicles = [
  { plate: 'ABC-1234', model: 'Honda Civic 2022', type: 'Sedan', color: 'Preto', owner: 'João Silva' },
  { plate: 'DEF-5678', model: 'VW Gol 2020', type: 'Hatch', color: 'Prata', owner: 'Maria Santos' },
  { plate: 'GHI-9012', model: 'Toyota Hilux 2023', type: 'SUV', color: 'Branco', owner: 'Pedro Costa' },
  { plate: 'JKL-3456', model: 'Hyundai HB20 2021', type: 'Hatch', color: 'Vermelho', owner: 'Ana Oliveira' },
  { plate: 'MNO-7890', model: 'Jeep Compass 2024', type: 'SUV', color: 'Azul', owner: 'Carlos Mendes' },
];

export default function AdminFrota() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif text-gradient-gold">Frota</h2>
        <span className="text-sm text-muted-foreground">{vehicles.length} veículos</span>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-xs font-medium text-muted-foreground">Placa</th>
                <th className="text-left p-4 text-xs font-medium text-muted-foreground">Modelo</th>
                <th className="text-left p-4 text-xs font-medium text-muted-foreground">Tipo</th>
                <th className="text-left p-4 text-xs font-medium text-muted-foreground">Cor</th>
                <th className="text-left p-4 text-xs font-medium text-muted-foreground">Proprietário</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {vehicles.map((v) => (
                <tr key={v.plate} className="hover:bg-surface-hover transition-colors">
                  <td className="p-4 text-sm font-mono text-gold">{v.plate}</td>
                  <td className="p-4 text-sm text-foreground">{v.model}</td>
                  <td className="p-4 text-sm text-muted-foreground">{v.type}</td>
                  <td className="p-4 text-sm text-muted-foreground">{v.color}</td>
                  <td className="p-4 text-sm text-foreground">{v.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
