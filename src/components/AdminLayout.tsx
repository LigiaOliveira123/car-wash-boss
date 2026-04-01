import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, CalendarDays, Wrench, DollarSign, Users, Car, Settings, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import logoImg from '@/assets/logo.png';

const navItems = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
  { to: '/admin/agenda', icon: CalendarDays, label: 'Agenda' },
  { to: '/admin/servicos', icon: Wrench, label: 'Serviços' },
  { to: '/admin/financeiro', icon: DollarSign, label: 'Financeiro' },
  { to: '/admin/clientes', icon: Users, label: 'Clientes' },
  { to: '/admin/frota', icon: Car, label: 'Frota' },
  { to: '/admin/configuracoes', icon: Settings, label: 'Configurações' },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-background/80 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border flex flex-col transition-transform duration-300",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-6 flex items-center gap-3 border-b border-border">
          <img src={logoImg} alt="LCM" className="w-8 h-8" width={512} height={512} />
          <span className="font-serif text-lg text-gradient-gold">Admin</span>
          <button className="ml-auto lg:hidden text-muted-foreground" onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 py-4 space-y-1 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-gradient-gold text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface-hover"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border flex items-center px-4 lg:px-6 gap-4">
          <button className="lg:hidden text-muted-foreground" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="font-serif text-lg text-gradient-gold">Lava Car Mendes</h1>
        </header>
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
