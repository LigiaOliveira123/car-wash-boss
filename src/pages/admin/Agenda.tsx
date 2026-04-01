export default function AdminAgenda() {
  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const hours = Array.from({ length: 20 }, (_, i) => {
    const h = Math.floor(i / 2) + 8;
    const m = i % 2 === 0 ? '00' : '30';
    return `${String(h).padStart(2, '0')}:${m}`;
  });

  return (
    <div className="space-y-6 animate-fade-up">
      <h2 className="text-lg font-bold text-foreground">Agenda</h2>
      <div className="bg-card border border-border rounded-2xl overflow-auto">
        <div className="min-w-[600px]">
          <div className="grid grid-cols-7 border-b border-border">
            <div className="p-3 text-xs text-muted-foreground">Hora</div>
            {days.map(d => (
              <div key={d} className="p-3 text-xs font-medium text-foreground text-center">{d}</div>
            ))}
          </div>
          {hours.map(h => (
            <div key={h} className="grid grid-cols-7 border-b border-border last:border-0">
              <div className="p-2 text-xs text-muted-foreground font-mono">{h}</div>
              {days.map(d => (
                <div key={d} className="p-1 border-l border-border min-h-[36px] hover:bg-secondary/50 transition-colors cursor-pointer" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
