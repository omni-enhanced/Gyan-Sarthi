import { useNavigate } from 'react-router';
import { GraduationCap, Shield, Crown, Building2, Target, Brain, BarChart, Lock, LogIn, UserPlus } from 'lucide-react';

export function LandingPage() {
  const navigate = useNavigate();

  const panels = [
    {
      id: 'student',
      title: 'Student Panel',
      subtitle: 'Core Intelligence Panel',
      description: 'Learning + Performance Engine that tracks, evaluates, and improves student performance',
      icon: GraduationCap,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      features: ['Smart Onboarding', 'Personalized Study', 'Practice & Exam Mode', 'AI Learning Layer', 'Analytics'],
      route: '/student'
    },
    {
      id: 'admin',
      title: 'Admin Panel',
      subtitle: 'Governance & Control',
      description: 'Protects fair scoring, AI integrity, question quality, and data consistency',
      icon: Shield,
      color: 'bg-emerald-500',
      hoverColor: 'hover:bg-emerald-600',
      features: ['Question Bank Mgmt', 'AI Governance', 'User Monitoring', 'Platform Analytics'],
      route: '/admin'
    },
    {
      id: 'super-admin',
      title: 'Super Admin Panel',
      subtitle: 'Business & Scaling Layer',
      description: 'SaaS scaling, multi-institution management, revenue tracking, and API control',
      icon: Crown,
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      features: ['Institution Onboarding', 'Subscription Management', 'API Monitoring', 'Revenue Dashboard'],
      route: '/super-admin'
    },
    {
      id: 'institution',
      title: 'Institution / Teacher Panel',
      subtitle: 'B2B Layer',
      description: 'Helps schools & coaching centers track class performance and plan interventions',
      icon: Building2,
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
      features: ['Batch Heatmap', 'Student Rankings', 'Custom Test Creation', 'Early-Risk Detection'],
      route: '/institution'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Gyan Sarthi</h1>
                <p className="text-sm text-slate-600">Intelligent Learning Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/login')}
                className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all font-medium"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
              <button
                onClick={() => navigate('/register')}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all font-medium shadow-md"
              >
                <UserPlus className="w-4 h-4" />
                <span>Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Multi-Panel Learning Ecosystem</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Choose Your Access Panel
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive learning platform with intelligent tracking, AI-powered assistance, 
            and advanced analytics for students, educators, and administrators.
          </p>
        </div>

        {/* Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {panels.map((panel) => {
            const Icon = panel.icon;
            return (
              <div
                key={panel.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => navigate(panel.route)}
              >
                <div className={`${panel.color} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 opacity-10">
                    <Icon className="w-40 h-40 transform translate-x-10 -translate-y-10" />
                  </div>
                  <div className="relative z-10">
                    <Icon className="w-12 h-12 text-white mb-3" />
                    <h3 className="text-2xl font-bold text-white mb-1">{panel.title}</h3>
                    <p className="text-white/90 text-sm">{panel.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-700 mb-4">{panel.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {panel.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    className={`w-full ${panel.color} ${panel.hoverColor} text-white py-3 rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105`}
                  >
                    Access Panel →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* System Architecture */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <BarChart className="w-6 h-6 text-blue-500" />
            Master System Architecture
          </h3>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="px-6 py-3 bg-purple-100 text-purple-700 rounded-lg font-medium">
              Super Admin
            </div>
            <div className="w-0.5 h-8 bg-slate-300"></div>
            <div className="px-6 py-3 bg-emerald-100 text-emerald-700 rounded-lg font-medium">
              Admin
            </div>
            <div className="w-0.5 h-8 bg-slate-300"></div>
            <div className="px-8 py-4 bg-slate-100 text-slate-700 rounded-lg font-medium text-lg flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Core Secure Database
            </div>
            <div className="w-0.5 h-8 bg-slate-300"></div>
            <div className="flex gap-8">
              <div className="px-6 py-3 bg-blue-100 text-blue-700 rounded-lg font-medium">
                Student Panel
              </div>
              <div className="px-6 py-3 bg-orange-100 text-orange-700 rounded-lg font-medium">
                Institution Panel
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">AI-Powered Learning</h4>
            <p className="text-sm text-slate-600">
              Optional AI assistance in practice mode with controlled gateway and external API support
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Secure Exam Mode</h4>
            <p className="text-sm text-slate-600">
              AI-free zone with real-time timer and stress-performance tracking for authentic assessment
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Behavioral Analytics</h4>
            <p className="text-sm text-slate-600">
              Advanced tracking of attempt speed, accuracy trends, and learning patterns for insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}