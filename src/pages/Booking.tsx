import { services, vehicleTypes, calculatePrice, timeSlots } from '@/data/services';
import type { Service, VehicleType } from '@/data/services';
import { useBooking } from '@/hooks/useBooking';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArrowLeft, ArrowRight, Check, Car, Clock, Phone, User, Palette, CreditCard } from 'lucide-react';
import { useState } from 'react';

const steps = ['Serviço', 'Veículo', 'Data & Hora', 'Dados do Carro', 'Seus Dados', 'Confirmação'];

export default function BookingFlow() {
  const { booking, setStep, setService, setVehicleType, setDate, setTime, setVehicleDetails, setClientDetails, reset } = useBooking();
  const [confirmed, setConfirmed] = useState(false);

  // Local form state for vehicle/client details
  const [plate, setPlate] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const finalPrice = booking.service && booking.vehicleType
    ? calculatePrice(booking.service, booking.vehicleType)
    : 0;

  if (confirmed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto">
            <Check className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-serif text-gradient-gold">Agendamento Confirmado!</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Seu agendamento foi realizado com sucesso. Aguardamos você!
          </p>
          <div className="bg-card rounded-lg p-6 text-left space-y-2 max-w-sm mx-auto border border-border">
            <p className="text-sm text-muted-foreground">Serviço: <span className="text-foreground">{booking.service?.name}</span></p>
            <p className="text-sm text-muted-foreground">Veículo: <span className="text-foreground">{booking.vehicleType?.label}</span></p>
            <p className="text-sm text-muted-foreground">Data: <span className="text-foreground">{booking.date && format(booking.date, "dd 'de' MMMM", { locale: ptBR })}</span></p>
            <p className="text-sm text-muted-foreground">Horário: <span className="text-foreground">{booking.time}</span></p>
            <p className="text-sm text-muted-foreground">Valor: <span className="text-gradient-gold font-semibold">R$ {finalPrice},00</span></p>
          </div>
          <div className="flex flex-col gap-3">
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                Voltar ao WhatsApp
              </a>
            </Button>
            <Button variant="ghost" onClick={() => { reset(); setConfirmed(false); }}>
              Novo Agendamento
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Progress */}
      <div className="sticky top-0 z-10 glass px-4 py-3">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <button onClick={() => booking.step > 0 && setStep(booking.step - 1)} className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-muted-foreground">{steps[booking.step]}</span>
            <span className="text-sm text-muted-foreground">{booking.step + 1}/{steps.length}</span>
          </div>
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-gold transition-all duration-500" style={{ width: `${((booking.step + 1) / steps.length) * 100}%` }} />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Step 0: Service Selection */}
        {booking.step === 0 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-serif text-gradient-gold">Escolha o Serviço</h2>
              <p className="text-muted-foreground mt-1">Selecione o tipo de lavagem desejada</p>
            </div>
            <div className="grid gap-4">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setService(s)}
                  className="bg-card hover:bg-surface-hover border border-border hover:border-gold/30 rounded-lg p-5 text-left transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{s.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-gradient-gold transition-colors">{s.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="text-gold font-semibold">A partir de R$ {s.basePrice}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {s.durationMinutes} min
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors mt-1" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Vehicle Type */}
        {booking.step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-serif text-gradient-gold">Tipo de Veículo</h2>
              <p className="text-muted-foreground mt-1">O preço varia conforme o tamanho do veículo</p>
            </div>
            <div className="grid gap-4">
              {vehicleTypes.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVehicleType(v)}
                  className="bg-card hover:bg-surface-hover border border-border hover:border-gold/30 rounded-lg p-5 text-left transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{v.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{v.label}</h3>
                      <p className="text-sm text-muted-foreground">{v.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-gold font-semibold">
                        R$ {booking.service ? calculatePrice(booking.service, v) : 0}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Calendar & Time */}
        {booking.step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-serif text-gradient-gold">Data & Horário</h2>
              <p className="text-muted-foreground mt-1">Escolha o melhor dia e horário</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <Calendar
                mode="single"
                selected={booking.date ?? undefined}
                onSelect={(d) => d && setDate(d)}
                locale={ptBR}
                disabled={(date) => {
                  const day = date.getDay();
                  return day === 0 || date < new Date(new Date().setHours(0,0,0,0));
                }}
                className="pointer-events-auto mx-auto"
              />
            </div>
            {booking.date && (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Horários disponíveis em {format(booking.date, "dd 'de' MMMM", { locale: ptBR })}:
                </p>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setTime(slot)}
                      className={cn(
                        "py-2 px-3 rounded-md text-sm font-medium transition-all",
                        booking.time === slot
                          ? "bg-gradient-gold text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-surface-hover hover:text-foreground"
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Vehicle Details */}
        {booking.step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-serif text-gradient-gold">Dados do Veículo</h2>
              <p className="text-muted-foreground mt-1">Informe os dados do seu carro</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Car className="w-4 h-4 text-gold" /> Placa *
                </label>
                <Input
                  placeholder="ABC-1234"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value.toUpperCase())}
                  maxLength={8}
                  className="bg-muted border-border"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Car className="w-4 h-4 text-gold" /> Modelo *
                </label>
                <Input
                  placeholder="Ex: Honda Civic 2022"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="bg-muted border-border"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Palette className="w-4 h-4 text-gold" /> Cor (opcional)
                </label>
                <Input
                  placeholder="Ex: Preto"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="bg-muted border-border"
                />
              </div>
            </div>
            <Button
              variant="hero"
              size="lg"
              className="w-full"
              disabled={!plate || !model}
              onClick={() => setVehicleDetails(plate, model, color)}
            >
              Continuar <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        {/* Step 4: Client Details */}
        {booking.step === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-serif text-gradient-gold">Seus Dados</h2>
              <p className="text-muted-foreground mt-1">Informe seus dados de contato</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-gold" /> Nome *
                </label>
                <Input
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-muted border-border"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" /> WhatsApp *
                </label>
                <Input
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-muted border-border"
                />
              </div>
            </div>
            <Button
              variant="hero"
              size="lg"
              className="w-full"
              disabled={!name || !phone}
              onClick={() => setClientDetails(name, phone)}
            >
              Revisar Agendamento <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        {/* Step 5: Confirmation */}
        {booking.step === 5 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-serif text-gradient-gold">Resumo do Agendamento</h2>
              <p className="text-muted-foreground mt-1">Confira os dados antes de confirmar</p>
            </div>
            <div className="bg-card border border-border rounded-lg divide-y divide-border">
              <div className="p-4 flex justify-between">
                <span className="text-muted-foreground">Serviço</span>
                <span className="font-medium text-foreground">{booking.service?.name}</span>
              </div>
              <div className="p-4 flex justify-between">
                <span className="text-muted-foreground">Veículo</span>
                <span className="font-medium text-foreground">{booking.vehicleType?.label}</span>
              </div>
              <div className="p-4 flex justify-between">
                <span className="text-muted-foreground">Data</span>
                <span className="font-medium text-foreground">{booking.date && format(booking.date, "dd/MM/yyyy")}</span>
              </div>
              <div className="p-4 flex justify-between">
                <span className="text-muted-foreground">Horário</span>
                <span className="font-medium text-foreground">{booking.time}</span>
              </div>
              <div className="p-4 flex justify-between">
                <span className="text-muted-foreground">Placa</span>
                <span className="font-medium text-foreground">{booking.plate}</span>
              </div>
              <div className="p-4 flex justify-between">
                <span className="text-muted-foreground">Modelo</span>
                <span className="font-medium text-foreground">{booking.model}</span>
              </div>
              <div className="p-4 flex justify-between">
                <span className="text-muted-foreground">Cliente</span>
                <span className="font-medium text-foreground">{booking.clientName}</span>
              </div>
              <div className="p-4 flex justify-between items-center">
                <span className="text-muted-foreground flex items-center gap-2">
                  <CreditCard className="w-4 h-4" /> Total
                </span>
                <span className="text-xl font-bold text-gradient-gold">R$ {finalPrice},00</span>
              </div>
            </div>
            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={() => setConfirmed(true)}
            >
              <Check className="w-5 h-5 mr-2" /> Confirmar Agendamento
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
