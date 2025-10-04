"use client";

import { useState } from "react";
import { 
  Activity, 
  AlertTriangle,
  BarChart3, 
  Calendar, 
  Camera,
  Check,
  ChevronRight, 
  Crown, 
  Dumbbell, 
  Flame, 
  Heart, 
  Home, 
  Medal, 
  MessageCircle, 
  Plus, 
  Send,
  Settings, 
  Star, 
  Target, 
  Trophy, 
  TrendingUp, 
  User, 
  Users, 
  Utensils, 
  Zap 
} from "lucide-react";

export default function MuscleIQ() {
  const [currentView, setCurrentView] = useState("landing");
  const [user, setUser] = useState(null);
  const [workoutData, setWorkoutData] = useState({
    exercises: [],
    currentExercise: { name: "", sets: [], reps: "", weight: "" }
  });
  const [chatMessages, setChatMessages] = useState([
    { type: "ai", message: "Olá! Sou sua IA Personal Trainer. Como posso te ajudar hoje?" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-x-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">MuscleIQ</span>
        </div>
        <button 
          onClick={() => setCurrentView("login")}
          className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
        >
          Entrar
        </button>
      </header>

      {/* 1️⃣ HERO SECTION */}
      <section className="relative px-4 py-12 md:py-20 text-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Treine com Inteligência:
            </span>
            <br />
            <span className="text-white">
              Evolua Mais Rápido com IA
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            O único app fitness que <strong className="text-blue-400">registra seus treinos</strong>, 
            <strong className="text-purple-400"> analisa suas cargas</strong> e 
            <strong className="text-indigo-400"> mostra exatamente onde você está errando</strong> 
            para acelerar sua evolução na academia
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12 px-4">
            <button 
              onClick={() => setCurrentView("signup")}
              className="px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold text-lg md:text-xl rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/25"
            >
              🚀 Começar Grátis por 7 Dias
            </button>
            <button className="px-6 md:px-10 py-3 md:py-5 border-2 border-blue-400 text-blue-400 font-semibold text-lg md:text-xl rounded-xl hover:bg-blue-400/10 transition-colors">
              Ver Demo
            </button>
          </div>

          {/* App Mockup */}
          <div className="relative max-w-sm md:max-w-md mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 md:p-6 rounded-3xl border border-gray-700 shadow-2xl">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 md:p-4 rounded-2xl border border-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Zap className="w-4 md:w-5 h-4 md:h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-bold">IA Personal Trainer</div>
                    <div className="text-xs text-green-400">● Analisando seu treino...</div>
                  </div>
                </div>
                <div className="bg-gray-800/50 p-2 md:p-3 rounded-lg mb-3">
                  <div className="text-xs text-gray-300">
                    "Detectei que sua carga no supino estagnou há 3 semanas. 
                    Vou sugerir uma nova estratégia de progressão..."
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-blue-500/20 p-2 rounded text-xs text-center">+5kg</div>
                  <div className="flex-1 bg-purple-500/20 p-2 rounded text-xs text-center">Drop Set</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ DOR/PROBLEMA SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-y border-red-500/20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <div className="mb-8 md:mb-12">
            <AlertTriangle className="w-12 md:w-16 h-12 md:h-16 text-red-400 mx-auto mb-4 md:mb-6 animate-pulse" />
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-red-400 mb-6 md:mb-8">
              PARE DE PERDER TEMPO!
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-red-900/30 p-6 md:p-8 rounded-xl border border-red-500/30">
              <div className="text-4xl md:text-6xl mb-4">😤</div>
              <h3 className="text-lg md:text-2xl font-bold text-red-300 mb-4">
                Meses de academia e NENHUM resultado?
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                Você treina, sua, se esforça... mas o corpo continua igual. 
                <strong className="text-red-400">Frustrante, não é?</strong>
              </p>
            </div>

            <div className="bg-orange-900/30 p-6 md:p-8 rounded-xl border border-orange-500/30">
              <div className="text-4xl md:text-6xl mb-4">📉</div>
              <h3 className="text-lg md:text-2xl font-bold text-orange-300 mb-4">
                Sua carga estagnou e você nem percebeu?
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                Fazendo os mesmos pesos há meses sem saber. 
                <strong className="text-orange-400">Sem evolução = sem resultados.</strong>
              </p>
            </div>

            <div className="bg-yellow-900/30 p-6 md:p-8 rounded-xl border border-yellow-500/30">
              <div className="text-4xl md:text-6xl mb-4">😫</div>
              <h3 className="text-lg md:text-2xl font-bold text-yellow-300 mb-4">
                Treina forte, mas continua com o mesmo corpo?
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                Esforço máximo, resultados mínimos. 
                <strong className="text-yellow-400">Algo está errado na sua estratégia.</strong>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 p-6 md:p-8 rounded-2xl border border-red-500/50">
            <h3 className="text-xl md:text-3xl font-bold text-white mb-4">
              O PROBLEMA É QUE VOCÊ TREINA NO ESCURO! 🔦
            </h3>
            <p className="text-lg md:text-xl text-gray-200">
              Sem dados, sem análise, sem inteligência. 
              <strong className="text-red-400">É hora de treinar com ciência!</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 3️⃣ COMO FUNCIONA SECTION */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Como Funciona
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              4 passos simples para revolucionar seus treinos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Passo 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-6 md:p-8 rounded-2xl border border-blue-500/30 text-center">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Plus className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
                <div className="text-blue-400 font-bold text-sm md:text-lg mb-2">PASSO 1</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Cadastre seus treinos</h3>
                <p className="text-gray-300 text-sm">
                  Registre exercícios, séries e repetições de forma rápida e intuitiva
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                <ChevronRight className="w-8 h-8 text-blue-400" />
              </div>
            </div>

            {/* Passo 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 md:p-8 rounded-2xl border border-purple-500/30 text-center">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Dumbbell className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
                <div className="text-purple-400 font-bold text-sm md:text-lg mb-2">PASSO 2</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Registre as cargas</h3>
                <p className="text-gray-300 text-sm">
                  Anote o peso usado em cada série diariamente - é rápido e essencial
                </p>
              </div>
              <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                <ChevronRight className="w-8 h-8 text-purple-400" />
              </div>
            </div>

            {/* Passo 3 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 md:p-8 rounded-2xl border border-green-500/30 text-center">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Zap className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
                <div className="text-green-400 font-bold text-sm md:text-lg mb-2">PASSO 3</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">IA analisa tudo</h3>
                <p className="text-gray-300 text-sm">
                  Identifica estagnação, sugere quando aumentar peso e otimiza sua evolução
                </p>
              </div>
              <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                <ChevronRight className="w-8 h-8 text-green-400" />
              </div>
            </div>

            {/* Passo 4 */}
            <div>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-6 md:p-8 rounded-2xl border border-yellow-500/30 text-center">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Trophy className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
                <div className="text-yellow-400 font-bold text-sm md:text-lg mb-2">PASSO 4</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Acompanhe resultados</h3>
                <p className="text-gray-300 text-sm">
                  Gráficos de progresso, medalhas de constância e evolução garantida
                </p>
              </div>
            </div>
          </div>

          {/* Visual Demo */}
          <div className="mt-12 md:mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 md:p-8 rounded-2xl border border-gray-700">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-500/20 p-4 rounded-xl mb-4">
                  <BarChart3 className="w-8 md:w-12 h-8 md:h-12 text-blue-400 mx-auto" />
                </div>
                <h4 className="font-bold mb-2">Análise Inteligente</h4>
                <p className="text-sm text-gray-400">Gráficos que mostram sua evolução real</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/20 p-4 rounded-xl mb-4">
                  <AlertTriangle className="w-8 md:w-12 h-8 md:h-12 text-purple-400 mx-auto" />
                </div>
                <h4 className="font-bold mb-2">Alertas Precisos</h4>
                <p className="text-sm text-gray-400">Aviso quando sua carga estagnar</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 p-4 rounded-xl mb-4">
                  <Target className="w-8 md:w-12 h-8 md:h-12 text-green-400 mx-auto" />
                </div>
                <h4 className="font-bold mb-2">Sugestões Personalizadas</h4>
                <p className="text-sm text-gray-400">Dicas baseadas no seu histórico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ BENEFÍCIOS/FUNCIONALIDADES SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Funcionalidades Revolucionárias
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Tudo que você precisa para dominar a academia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                icon: <BarChart3 className="w-6 md:w-8 h-6 md:h-8" />, 
                title: "Análise de Evolução", 
                desc: "Gráficos detalhados de progresso com alertas automáticos de estagnação",
                color: "from-blue-500 to-indigo-500"
              },
              { 
                icon: <Trophy className="w-6 md:w-8 h-6 md:h-8" />, 
                title: "Gamificação Total", 
                desc: "Pontos, medalhas, ranking e desafios para manter você sempre motivado",
                color: "from-yellow-500 to-orange-500"
              },
              { 
                icon: <Zap className="w-6 md:w-8 h-6 md:h-8" />, 
                title: "IA Personal Trainer", 
                desc: "Chat inteligente que analisa seus treinos e dá dicas personalizadas 24/7",
                color: "from-purple-500 to-pink-500"
              },
              { 
                icon: <Utensils className="w-6 md:w-8 h-6 md:h-8" />, 
                title: "Nutrição Inteligente", 
                desc: "Cálculo automático de macros integrado - sem precisar de outros apps",
                color: "from-green-500 to-emerald-500"
              },
              { 
                icon: <MessageCircle className="w-6 md:w-8 h-6 md:h-8" />, 
                title: "Lembretes Inteligentes", 
                desc: "Notificações personalizadas baseadas no seu padrão de treino",
                color: "from-blue-500 to-indigo-500"
              },
              { 
                icon: <Users className="w-6 md:w-8 h-6 md:h-8" />, 
                title: "Rede Social Fitness", 
                desc: "Compartilhe conquistas, siga amigos e participe de desafios em grupo",
                color: "from-pink-500 to-red-500"
              }
            ].map((feature, i) => (
              <div key={i} className="group p-4 md:p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className={`w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ PROVA SOCIAL SECTION */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Resultados Reais
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Veja o que nossos usuários estão conquistando
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {[
              { number: "50.000+", label: "Treinos Registrados", icon: <Dumbbell className="w-6 md:w-8 h-6 md:h-8" /> },
              { number: "2.5M+", label: "Séries Analisadas", icon: <BarChart3 className="w-6 md:w-8 h-6 md:h-8" /> },
              { number: "15.000+", label: "Usuários Ativos", icon: <Users className="w-6 md:w-8 h-6 md:h-8" /> },
              { number: "94%", label: "Taxa de Evolução", icon: <TrendingUp className="w-6 md:w-8 h-6 md:h-8" /> }
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 md:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                <div className="text-blue-400 mb-2 md:mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-black text-white mb-1 md:mb-2">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Carlos Silva",
                result: "Ganhei 10kg de força em 6 semanas",
                text: "A IA detectou que eu estava subestimando minha capacidade. Seguindo as sugestões, meu supino foi de 80kg para 90kg rapidamente!",
                avatar: "CS",
                rating: 5
              },
              {
                name: "Maria Santos",
                result: "Perdi 8kg mantendo massa muscular",
                text: "O cálculo automático de macros foi um divisor de águas. Finalmente consegui emagrecer sem perder os ganhos da academia.",
                avatar: "MS",
                rating: 5
              },
              {
                name: "João Costa",
                result: "Quebrei platô de 2 anos",
                text: "Estava estagnado há muito tempo. O app mostrou exatamente onde eu estava errando e me deu um plano para sair do platô.",
                avatar: "JC",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 md:p-6 rounded-xl border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-green-400 text-xs md:text-sm font-semibold">{testimonial.result}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ PLANOS SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Planos que Cabem no Seu Bolso
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Comece grátis e evolua quando quiser
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Plano Gratuito */}
            <div className="p-6 md:p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Gratuito</h3>
                <div className="text-4xl md:text-5xl font-black mb-2">R$ 0</div>
                <div className="text-gray-400">Para sempre</div>
              </div>
              
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Registro básico de treinos",
                  "7 dias de teste premium",
                  "Gamificação básica",
                  "Análise simples de progresso",
                  "Comunidade fitness"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 md:w-5 h-4 md:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => setCurrentView("signup")}
                className="w-full py-3 md:py-4 border-2 border-gray-600 rounded-xl hover:bg-gray-700 transition-colors font-semibold"
              >
                Começar Grátis
              </button>
            </div>

            {/* Plano Premium */}
            <div className="relative p-6 md:p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border-2 border-blue-500">
              <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold">
                🔥 MAIS POPULAR
              </div>
              
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Premium</h3>
                <div className="text-4xl md:text-5xl font-black mb-2">R$ 39</div>
                <div className="text-gray-400">por mês</div>
                <div className="text-green-400 text-sm font-semibold mt-2">
                  7 dias grátis para testar
                </div>
              </div>
              
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "IA Personal Trainer ilimitada",
                  "Análise nutricional completa",
                  "Planos personalizados",
                  "Alertas de estagnação",
                  "Relatórios avançados",
                  "Suporte prioritário",
                  "Sem anúncios"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 md:w-5 h-4 md:h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-white font-medium text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => setCurrentView("signup")}
                className="w-full py-3 md:py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold text-base md:text-lg rounded-xl hover:scale-105 transition-transform shadow-2xl shadow-blue-500/25"
              >
                🚀 Começar Teste Grátis
              </button>
              
              <div className="text-center mt-4">
                <div className="text-xs text-gray-400">
                  Cancele quando quiser • Sem compromisso
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <div className="inline-flex items-center gap-2 bg-green-500/20 px-4 md:px-6 py-2 md:py-3 rounded-full border border-green-500/30">
              <div className="w-2 md:w-3 h-2 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold text-sm md:text-base">
                Teste grátis por 7 dias • Sem cartão de crédito
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ FAQ/GARANTIA SECTION */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Perguntas Frequentes
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Tire suas dúvidas antes de começar
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {[
              {
                question: "Como funciona o teste grátis de 7 dias?",
                answer: "Você tem acesso completo a todas as funcionalidades premium por 7 dias, sem precisar cadastrar cartão de crédito. Após o período, pode continuar no plano gratuito ou assinar o premium."
              },
              {
                question: "A IA realmente funciona para análise de treinos?",
                answer: "Sim! Nossa IA analisa padrões em mais de 2.5 milhões de séries registradas. Ela identifica estagnação, sugere progressões e personaliza dicas baseadas no seu histórico específico."
              },
              {
                question: "Posso usar sem internet?",
                answer: "Sim, você pode registrar treinos offline. Os dados são sincronizados automaticamente quando você se conectar à internet novamente."
              },
              {
                question: "Como cancelo se não gostar?",
                answer: "Pode cancelar a qualquer momento com 1 clique nas configurações. Não fazemos perguntas e você mantém acesso até o final do período pago."
              },
              {
                question: "Funciona para iniciantes?",
                answer: "Perfeitamente! A IA se adapta ao seu nível. Para iniciantes, foca em formar hábitos e progressão segura. Para avançados, otimiza cargas e detecta platôs."
              },
              {
                question: "Meus dados ficam seguros?",
                answer: "Totalmente. Usamos criptografia de nível bancário e nunca compartilhamos seus dados pessoais. Você pode exportar ou deletar tudo quando quiser."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-800/50 p-4 md:p-6 rounded-xl border border-gray-700">
                <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-blue-400">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Garantia */}
          <div className="mt-12 md:mt-16 bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-6 md:p-8 rounded-2xl border border-green-500/50 text-center">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Check className="w-6 md:w-8 h-6 md:h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Garantia de Satisfação</h3>
            <p className="text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Teste por 7 dias completamente grátis. Se não ficar satisfeito, 
              cancele sem custo algum. Sem pegadinhas, sem cartão de crédito.
            </p>
            <button 
              onClick={() => setCurrentView("signup")}
              className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-base md:text-lg rounded-xl hover:scale-105 transition-transform"
            >
              Começar Teste Grátis Agora
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-12 md:py-16 bg-gradient-to-r from-black to-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6">
            Pronto para Revolucionar Seus Treinos?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            Junte-se a milhares de pessoas que já estão evoluindo com inteligência artificial
          </p>
          <button 
            onClick={() => setCurrentView("signup")}
            className="px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold text-lg md:text-xl rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/25"
          >
            🚀 Começar Grátis por 7 Dias
          </button>
          <div className="text-xs md:text-sm text-gray-400 mt-4">
            Sem cartão • Sem compromisso • Cancele quando quiser
          </div>
        </div>
      </footer>
    </div>
  );

  // Login/Signup Component
  const AuthPage = ({ isLogin = true }) => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">MuscleIQ</h1>
          <p className="text-gray-400">{isLogin ? "Entre na sua conta" : "Crie sua conta gratuita"}</p>
        </div>

        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
          <form className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Seu nome"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Senha</label>
              <input 
                type="password" 
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            <button 
              type="button"
              onClick={() => {
                setUser({ name: "João Silva", level: 15, xp: 2340, streak: 7 });
                setCurrentView("onboarding");
              }}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
            >
              {isLogin ? "Entrar" : "Criar Conta Grátis"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button 
              onClick={() => setCurrentView(isLogin ? "signup" : "login")}
              className="text-blue-400 hover:text-blue-300"
            >
              {isLogin ? "Não tem conta? Cadastre-se" : "Já tem conta? Entre"}
            </button>
          </div>
        </div>

        <button 
          onClick={() => setCurrentView("landing")}
          className="mt-4 text-gray-400 hover:text-white flex items-center justify-center w-full"
        >
          ← Voltar
        </button>
      </div>
    </div>
  );

  // Onboarding Component
  const OnboardingPage = () => {
    const [step, setStep] = useState(1);
    const [profile, setProfile] = useState({
      goal: "",
      level: "",
      frequency: ""
    });

    const goals = [
      { id: "muscle", label: "Ganhar Massa", icon: <Dumbbell className="w-6 h-6" /> },
      { id: "lose", label: "Perder Peso", icon: <Flame className="w-6 h-6" /> },
      { id: "strength", label: "Ficar Forte", icon: <Trophy className="w-6 h-6" /> },
      { id: "health", label: "Saúde Geral", icon: <Heart className="w-6 h-6" /> }
    ];

    const levels = [
      { id: "beginner", label: "Iniciante", desc: "Menos de 6 meses" },
      { id: "intermediate", label: "Intermediário", desc: "6 meses - 2 anos" },
      { id: "advanced", label: "Avançado", desc: "Mais de 2 anos" }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white p-6">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Passo {step} de 3</span>
              <span>{Math.round((step/3)*100)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step/3)*100}%` }}
              ></div>
            </div>
          </div>

          {step === 1 && (
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Qual seu objetivo principal?</h2>
              <p className="text-gray-400 mb-8">Vamos personalizar sua experiência</p>
              <div className="grid grid-cols-2 gap-4">
                {goals.map(goal => (
                  <button
                    key={goal.id}
                    onClick={() => setProfile({...profile, goal: goal.id})}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      profile.goal === goal.id 
                        ? 'border-blue-500 bg-blue-500/20' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <div className="text-blue-400 mb-2 flex justify-center">{goal.icon}</div>
                    <div className="font-semibold">{goal.label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Qual seu nível atual?</h2>
              <p className="text-gray-400 mb-8">Isso nos ajuda a criar treinos ideais</p>
              <div className="space-y-4">
                {levels.map(level => (
                  <button
                    key={level.id}
                    onClick={() => setProfile({...profile, level: level.id})}
                    className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                      profile.level === level.id 
                        ? 'border-blue-500 bg-blue-500/20' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <div className="font-semibold text-lg">{level.label}</div>
                    <div className="text-gray-400">{level.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Quantas vezes treina por semana?</h2>
              <p className="text-gray-400 mb-8">Para criar sua rotina perfeita</p>
              <div className="grid grid-cols-3 gap-4">
                {[2,3,4,5,6,7].map(freq => (
                  <button
                    key={freq}
                    onClick={() => setProfile({...profile, frequency: freq})}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      profile.frequency === freq 
                        ? 'border-blue-500 bg-blue-500/20' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <div className="text-2xl font-bold">{freq}x</div>
                    <div className="text-sm text-gray-400">semana</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-12">
            <button 
              onClick={() => step > 1 ? setStep(step - 1) : setCurrentView("login")}
              className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Voltar
            </button>
            <button 
              onClick={() => step < 3 ? setStep(step + 1) : setCurrentView("dashboard")}
              disabled={
                (step === 1 && !profile.goal) || 
                (step === 2 && !profile.level) || 
                (step === 3 && !profile.frequency)
              }
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === 3 ? "Começar Jornada!" : "Próximo"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // 1️⃣ Dashboard Component
  const Dashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white pb-20">
      {/* Header */}
      <header className="p-6 border-b border-gray-800">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              JS
            </div>
            <div>
              <h1 className="text-xl font-bold">Olá, João! 💪</h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-orange-400" />
                  {user?.streak} dias seguidos
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  Level {user?.level}
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setCurrentView("settings")}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Settings className="w-6 h-6" />
          </button>
        </div>

        {/* XP Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-400 mb-1">
            <span>XP: {user?.xp}/3000</span>
            <span>Próximo level: {user?.level + 1}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-emerald-500 h-3 rounded-full"
              style={{ width: `${(user?.xp / 3000) * 100}%` }}
            ></div>
          </div>
        </div>
      </header>

      {/* Quick Stats */}
      <section className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Treinos", value: "23", icon: <Dumbbell className="w-5 h-5" />, color: "text-blue-400" },
            { label: "Calorias", value: "1.2k", icon: <Flame className="w-5 h-5" />, color: "text-orange-400" },
            { label: "Medalhas", value: "8", icon: <Medal className="w-5 h-5" />, color: "text-yellow-400" },
            { label: "Ranking", value: "#12", icon: <Trophy className="w-5 h-5" />, color: "text-emerald-400" }
          ].map((stat, i) => (
            <div key={i} className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
              <div className={`${stat.color} mb-2`}>{stat.icon}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* IA Insights */}
        <div className="bg-gradient-to-r from-blue-600/20 to-emerald-600/20 p-6 rounded-xl border border-blue-500/50 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Análise da IA</h3>
              <span className="text-sm text-emerald-400">● Analisando seus dados...</span>
            </div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-300 text-sm">
              "Detectei que você está progredindo bem no supino (+15kg em 4 semanas)! 
              Mas sua carga no agachamento estagnou. Sugiro aumentar 5kg na próxima sessão."
            </p>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 bg-emerald-500/20 p-2 rounded text-xs text-center text-emerald-400">
              Progresso Excelente
            </div>
            <div className="flex-1 bg-yellow-500/20 p-2 rounded text-xs text-center text-yellow-400">
              Atenção: Agachamento
            </div>
          </div>
        </div>

        {/* Today's Workout */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/50 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Treino de Hoje</h3>
            <span className="text-sm text-gray-400">Peito e Tríceps</span>
          </div>
          <p className="text-gray-300 mb-4">5 exercícios • 45-60 min • Intermediário</p>
          <button 
            onClick={() => setCurrentView("workout")}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
          >
            Iniciar Treino
          </button>
        </div>

        {/* Progress Chart */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-6">
          <h3 className="text-xl font-bold mb-4">Evolução da Semana</h3>
          <div className="h-32 bg-gray-700/50 rounded-lg flex items-end justify-between p-4">
            {[65, 80, 45, 90, 75, 85, 95].map((height, i) => (
              <div key={i} className="flex flex-col items-center">
                <div 
                  className="w-6 bg-gradient-to-t from-blue-500 to-emerald-500 rounded-t"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-gray-400 mt-2">
                  {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-bold mb-4">Conquistas Recentes</h3>
          <div className="space-y-3">
            {[
              { title: "Constância de Ferro", desc: "7 dias seguidos treinando", icon: "🔥", color: "text-orange-400" },
              { title: "Força Crescente", desc: "Aumentou 15kg no supino", icon: "💪", color: "text-blue-400" },
              { title: "Meta Calórica", desc: "Atingiu meta de proteína 5x", icon: "🎯", color: "text-emerald-400" }
            ].map((achievement, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                <span className="text-2xl">{achievement.icon}</span>
                <div className="flex-1">
                  <h4 className={`font-semibold ${achievement.color}`}>{achievement.title}</h4>
                  <p className="text-sm text-gray-400">{achievement.desc}</p>
                </div>
                <Medal className="w-5 h-5 text-yellow-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4">
        <div className="flex justify-around">
          {[
            { icon: <Home className="w-6 h-6" />, label: "Dashboard", view: "dashboard", active: true },
            { icon: <Dumbbell className="w-6 h-6" />, label: "Treinos", view: "workout" },
            { icon: <Utensils className="w-6 h-6" />, label: "Calorias", view: "calories" },
            { icon: <MessageCircle className="w-6 h-6" />, label: "IA Chat", view: "ai-chat" }
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => setCurrentView(item.view)}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                item.active ? 'text-blue-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );

  // 2️⃣ Workout Registration Component
  const WorkoutPage = () => {
    const addExercise = () => {
      if (workoutData.currentExercise.name) {
        setWorkoutData({
          ...workoutData,
          exercises: [...workoutData.exercises, {
            ...workoutData.currentExercise,
            id: Date.now(),
            sets: workoutData.currentExercise.sets.length > 0 ? workoutData.currentExercise.sets : [
              { reps: workoutData.currentExercise.reps, weight: workoutData.currentExercise.weight }
            ]
          }],
          currentExercise: { name: "", sets: [], reps: "", weight: "" }
        });
      }
    };

    const addSet = () => {
      if (workoutData.currentExercise.reps && workoutData.currentExercise.weight) {
        setWorkoutData({
          ...workoutData,
          currentExercise: {
            ...workoutData.currentExercise,
            sets: [...workoutData.currentExercise.sets, {
              reps: workoutData.currentExercise.reps,
              weight: workoutData.currentExercise.weight
            }],
            reps: "",
            weight: ""
          }
        });
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white pb-20">
        {/* Header */}
        <header className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentView("dashboard")}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              ←
            </button>
            <div>
              <h1 className="text-xl font-bold">Registro de Treino</h1>
              <p className="text-sm text-gray-400">Peito e Tríceps • {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Current Exercise Form */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-6">
            <h3 className="text-lg font-bold mb-4">Adicionar Exercício</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome do Exercício</label>
                <input
                  type="text"
                  value={workoutData.currentExercise.name}
                  onChange={(e) => setWorkoutData({
                    ...workoutData,
                    currentExercise: { ...workoutData.currentExercise, name: e.target.value }
                  })}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Ex: Supino reto"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Repetições</label>
                  <input
                    type="number"
                    value={workoutData.currentExercise.reps}
                    onChange={(e) => setWorkoutData({
                      ...workoutData,
                      currentExercise: { ...workoutData.currentExercise, reps: e.target.value }
                    })}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Carga (kg)</label>
                  <input
                    type="number"
                    value={workoutData.currentExercise.weight}
                    onChange={(e) => setWorkoutData({
                      ...workoutData,
                      currentExercise: { ...workoutData.currentExercise, weight: e.target.value }
                    })}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="80"
                  />
                </div>
              </div>

              {/* Current Sets */}
              {workoutData.currentExercise.sets.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Séries Adicionadas:</h4>
                  <div className="space-y-2">
                    {workoutData.currentExercise.sets.map((set, i) => (
                      <div key={i} className="flex justify-between items-center bg-gray-700/50 p-2 rounded">
                        <span className="text-sm">Série {i + 1}</span>
                        <span className="text-sm text-blue-400">{set.reps} reps × {set.weight}kg</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <button
                  onClick={addSet}
                  className="flex-1 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Adicionar Série
                </button>
                <button
                  onClick={addExercise}
                  className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                >
                  Finalizar Exercício
                </button>
              </div>
            </div>
          </div>

          {/* Exercises List */}
          {workoutData.exercises.length > 0 && (
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-6">
              <h3 className="text-lg font-bold mb-4">Exercícios do Treino</h3>
              <div className="space-y-4">
                {workoutData.exercises.map((exercise, i) => (
                  <div key={exercise.id} className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">{exercise.name}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {exercise.sets.map((set, j) => (
                        <div key={j} className="text-sm text-gray-300">
                          Série {j + 1}: {set.reps} reps × {set.weight}kg
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* IA Analysis */}
          {workoutData.exercises.length > 0 && (
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/50 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Análise da IA</h3>
                  <span className="text-sm text-emerald-400">● Analisando treino...</span>
                </div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-gray-300 text-sm">
                  "Excelente treino! Detectei uma evolução de 5kg no supino desde a semana passada. 
                  Sugestão: Na próxima sessão, tente aumentar 2.5kg ou adicionar uma série extra."
                </p>
              </div>
            </div>
          )}

          {/* Finish Workout */}
          {workoutData.exercises.length > 0 && (
            <button
              onClick={() => {
                // Simulate workout completion
                setWorkoutData({ exercises: [], currentExercise: { name: "", sets: [], reps: "", weight: "" } });
                setCurrentView("dashboard");
              }}
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-bold text-lg rounded-xl hover:scale-105 transition-transform"
            >
              Finalizar Treino 🎉
            </button>
          )}
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4">
          <div className="flex justify-around">
            {[
              { icon: <Home className="w-6 h-6" />, label: "Dashboard", view: "dashboard" },
              { icon: <Dumbbell className="w-6 h-6" />, label: "Treinos", view: "workout", active: true },
              { icon: <Utensils className="w-6 h-6" />, label: "Calorias", view: "calories" },
              { icon: <MessageCircle className="w-6 h-6" />, label: "IA Chat", view: "ai-chat" }
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => setCurrentView(item.view)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                  item.active ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    );
  };

  // 3️⃣ Calories Counter Component
  const CaloriesPage = () => {
    const [meals, setMeals] = useState([
      {
        id: 1,
        name: "Café da Manhã",
        time: "08:30",
        foods: [
          { name: "Ovos mexidos (2 unidades)", calories: 140, protein: 12, carbs: 2, fat: 10 },
          { name: "Pão integral (2 fatias)", calories: 160, protein: 6, carbs: 30, fat: 2 }
        ],
        image: null
      }
    ]);

    const [dailyGoals] = useState({
      calories: 2200,
      protein: 150,
      carbs: 250,
      fat: 80
    });

    const totalNutrition = meals.reduce((total, meal) => {
      meal.foods.forEach(food => {
        total.calories += food.calories;
        total.protein += food.protein;
        total.carbs += food.carbs;
        total.fat += food.fat;
      });
      return total;
    }, { calories: 0, protein: 0, carbs: 0, fat: 0 });

    const simulatePhotoAnalysis = () => {
      // Simulate IA analysis
      const newMeal = {
        id: Date.now(),
        name: "Almoço",
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        foods: [
          { name: "Peito de frango grelhado (150g)", calories: 250, protein: 46, carbs: 0, fat: 5 },
          { name: "Arroz integral (1 xícara)", calories: 220, protein: 5, carbs: 45, fat: 2 },
          { name: "Brócolis refogado (100g)", calories: 35, protein: 3, carbs: 7, fat: 0 }
        ],
        image: "📸 Foto analisada"
      };
      setMeals([...meals, newMeal]);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white pb-20">
        {/* Header */}
        <header className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentView("dashboard")}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              ←
            </button>
            <div>
              <h1 className="text-xl font-bold">Contador de Calorias</h1>
              <p className="text-sm text-gray-400">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Daily Summary */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-6">
            <h3 className="text-lg font-bold mb-4">Resumo do Dia</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {[
                { label: "Calorias", value: totalNutrition.calories, goal: dailyGoals.calories, color: "text-blue-400", unit: "kcal" },
                { label: "Proteína", value: totalNutrition.protein, goal: dailyGoals.protein, color: "text-emerald-400", unit: "g" },
                { label: "Carboidratos", value: totalNutrition.carbs, goal: dailyGoals.carbs, color: "text-yellow-400", unit: "g" },
                { label: "Gordura", value: totalNutrition.fat, goal: dailyGoals.fat, color: "text-purple-400", unit: "g" }
              ].map((macro, i) => (
                <div key={i} className="text-center">
                  <div className={`text-2xl font-bold ${macro.color}`}>
                    {Math.round(macro.value)}
                  </div>
                  <div className="text-xs text-gray-400">
                    de {macro.goal}{macro.unit}
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${
                        macro.color.includes('blue') ? 'from-blue-500 to-blue-600' :
                        macro.color.includes('emerald') ? 'from-emerald-500 to-emerald-600' :
                        macro.color.includes('yellow') ? 'from-yellow-500 to-yellow-600' :
                        'from-purple-500 to-purple-600'
                      }`}
                      style={{ width: `${Math.min((macro.value / macro.goal) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {Math.round((macro.value / macro.goal) * 100)}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Analysis */}
          <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 p-6 rounded-xl border border-emerald-500/50 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Análise por Foto</h3>
                <p className="text-sm text-gray-400">IA identifica alimentos automaticamente</p>
              </div>
            </div>
            
            <button
              onClick={simulatePhotoAnalysis}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <Camera className="w-5 h-5" />
              Fotografar Refeição
            </button>
            
            <p className="text-xs text-gray-400 text-center mt-2">
              Tire uma foto e a IA calculará calorias e macros automaticamente
            </p>
          </div>

          {/* Meals List */}
          <div className="space-y-4">
            {meals.map((meal) => (
              <div key={meal.id} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold">{meal.name}</h4>
                  <span className="text-sm text-gray-400">{meal.time}</span>
                </div>
                
                {meal.image && (
                  <div className="bg-emerald-500/20 p-2 rounded-lg mb-3 text-center text-sm text-emerald-400">
                    {meal.image}
                  </div>
                )}
                
                <div className="space-y-2">
                  {meal.foods.map((food, i) => (
                    <div key={i} className="flex justify-between items-center bg-gray-700/50 p-3 rounded-lg">
                      <div>
                        <div className="font-medium">{food.name}</div>
                        <div className="text-xs text-gray-400">
                          P: {food.protein}g • C: {food.carbs}g • G: {food.fat}g
                        </div>
                      </div>
                      <div className="text-blue-400 font-semibold">
                        {food.calories} kcal
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-700">
                  <div className="flex justify-between text-sm">
                    <span>Total da refeição:</span>
                    <span className="font-semibold text-blue-400">
                      {meal.foods.reduce((sum, food) => sum + food.calories, 0)} kcal
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* IA Nutrition Tips */}
          <div className="mt-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Dicas da IA</h3>
                <span className="text-sm text-emerald-400">● Baseado no seu progresso</span>
              </div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="text-gray-300 text-sm">
                "Você está 20g abaixo da meta de proteína. Sugestão: adicione um shake de whey protein 
                ou 100g de peito de frango no jantar para otimizar a recuperação muscular."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4">
          <div className="flex justify-around">
            {[
              { icon: <Home className="w-6 h-6" />, label: "Dashboard", view: "dashboard" },
              { icon: <Dumbbell className="w-6 h-6" />, label: "Treinos", view: "workout" },
              { icon: <Utensils className="w-6 h-6" />, label: "Calorias", view: "calories", active: true },
              { icon: <MessageCircle className="w-6 h-6" />, label: "IA Chat", view: "ai-chat" }
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => setCurrentView(item.view)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                  item.active ? 'text-emerald-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    );
  };

  // 4️⃣ AI Chat Component
  const AIChatPage = () => {
    const sendMessage = () => {
      if (newMessage.trim()) {
        const userMessage = { type: "user", message: newMessage };
        setChatMessages([...chatMessages, userMessage]);
        
        // Simulate AI response
        setTimeout(() => {
          const aiResponses = [
            "Com base nos seus treinos, sugiro aumentar 2.5kg no supino na próxima sessão. Você está progredindo bem!",
            "Analisando sua dieta, você precisa de mais 25g de proteína hoje. Que tal um shake pós-treino?",
            "Detectei que você treinou peito 3x esta semana. Recomendo focar em costas amanhã para equilibrar.",
            "Sua constância está excelente! 7 dias seguidos. Continue assim para maximizar os resultados.",
            "Baseado no seu histórico, você pode aumentar a intensidade do treino de pernas. Quer sugestões específicas?"
          ];
          
          const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
          setChatMessages(prev => [...prev, { type: "ai", message: randomResponse }]);
        }, 1000);
        
        setNewMessage("");
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white pb-20">
        {/* Header */}
        <header className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentView("dashboard")}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              ←
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">IA Personal Trainer</h1>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400">Online</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Chat Messages */}
        <div className="flex-1 p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          {chatMessages.map((msg, i) => (
            <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                msg.type === 'user' 
                  ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white' 
                  : 'bg-gray-800/50 border border-gray-700'
              }`}>
                {msg.type === 'ai' && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs text-gray-400">IA Personal Trainer</span>
                  </div>
                )}
                <p className="text-sm leading-relaxed">{msg.message}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="px-6 mb-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              "Como melhorar meu supino?",
              "Análise do meu progresso",
              "Sugestão de treino hoje",
              "Dicas de alimentação"
            ].map((suggestion, i) => (
              <button
                key={i}
                onClick={() => setNewMessage(suggestion)}
                className="flex-shrink-0 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm hover:bg-gray-700/50 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="px-6 pb-6">
          <div className="flex gap-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1 p-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none"
              placeholder="Pergunte sobre treinos, dieta, progressão..."
            />
            <button
              onClick={sendMessage}
              className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:scale-105 transition-transform"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4">
          <div className="flex justify-around">
            {[
              { icon: <Home className="w-6 h-6" />, label: "Dashboard", view: "dashboard" },
              { icon: <Dumbbell className="w-6 h-6" />, label: "Treinos", view: "workout" },
              { icon: <Utensils className="w-6 h-6" />, label: "Calorias", view: "calories" },
              { icon: <MessageCircle className="w-6 h-6" />, label: "IA Chat", view: "ai-chat", active: true }
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => setCurrentView(item.view)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                  item.active ? 'text-purple-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    );
  };

  // Render current view
  const renderCurrentView = () => {
    switch (currentView) {
      case "landing":
        return <LandingPage />;
      case "login":
        return <AuthPage isLogin={true} />;
      case "signup":
        return <AuthPage isLogin={false} />;
      case "onboarding":
        return <OnboardingPage />;
      case "dashboard":
        return <Dashboard />;
      case "workout":
        return <WorkoutPage />;
      case "calories":
        return <CaloriesPage />;
      case "ai-chat":
        return <AIChatPage />;
      default:
        return <LandingPage />;
    }
  };

  return renderCurrentView();
}