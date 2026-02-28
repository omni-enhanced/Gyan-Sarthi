import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Crown, ArrowLeft, Home, Building2, DollarSign, Activity, Server, Settings,
  ChevronRight, Plus, TrendingUp, Users, Database, Zap, Globe, BarChart3
} from 'lucide-react';

export function SuperAdminPanel() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Global Dashboard', icon: Home },
    { id: 'institutions', label: 'Institutions', icon: Building2 },
    { id: 'subscriptions', label: 'Subscriptions', icon: DollarSign },
    { id: 'api', label: 'API Monitoring', icon: Activity },
    { id: 'server', label: 'Server Health', icon: Server },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const institutions = [
    { 
      id: 1, 
      name: 'Springfield High School', 
      type: 'School',
      students: 1250,
      plan: 'Enterprise',
      status: 'active',
      revenue: '$5,240',
      growth: '+15%'
    },
    { 
      id: 2, 
      name: 'Tech Academy Coaching', 
      type: 'Coaching Center',
      students: 850,
      plan: 'Professional',
      status: 'active',
      revenue: '$3,890',
      growth: '+23%'
    },
    { 
      id: 3, 
      name: 'City College', 
      type: 'College',
      students: 3200,
      plan: 'Enterprise',
      status: 'active',
      revenue: '$12,450',
      growth: '+8%'
    },
  ];

  const subscriptionPlans = [
    { name: 'Basic', price: '$29/mo', features: ['Up to 100 students', 'Basic analytics', 'Email support'], count: 45 },
    { name: 'Professional', price: '$99/mo', features: ['Up to 500 students', 'Advanced analytics', 'Priority support'], count: 28 },
    { name: 'Enterprise', price: '$299/mo', features: ['Unlimited students', 'Custom features', '24/7 support'], count: 12 },
  ];

  const apiStats = [
    { endpoint: '/api/questions', requests: '1.2M', avgResponse: '45ms', errorRate: '0.2%', status: 'healthy' },
    { endpoint: '/api/ai-gateway', requests: '856K', avgResponse: '230ms', errorRate: '1.5%', status: 'warning' },
    { endpoint: '/api/analytics', requests: '432K', avgResponse: '120ms', errorRate: '0.1%', status: 'healthy' },
  ];

  const serverMetrics = [
    { metric: 'CPU Usage', value: '45%', status: 'good', trend: 'stable' },
    { metric: 'Memory Usage', value: '68%', status: 'good', trend: 'up' },
    { metric: 'Disk Usage', value: '52%', status: 'good', trend: 'stable' },
    { metric: 'Active Connections', value: '2,345', status: 'good', trend: 'up' },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 45200 },
    { month: 'Feb', revenue: 52100 },
    { month: 'Mar', revenue: 58900 },
    { month: 'Apr', revenue: 63400 },
    { month: 'May', revenue: 71200 },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Super Admin Dashboard</h2>
        <p className="text-slate-600">Business & Scaling Control Center</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <Building2 className="w-8 h-8 mb-2 opacity-80" />
          <div className="text-sm opacity-90 mb-1">Total Institutions</div>
          <div className="text-3xl font-bold">85</div>
          <div className="text-sm mt-1 opacity-80">+7 this month</div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <Users className="w-8 h-8 mb-2 opacity-80" />
          <div className="text-sm opacity-90 mb-1">Total Students</div>
          <div className="text-3xl font-bold">12.5K</div>
          <div className="text-sm mt-1 opacity-80">+1.2K this month</div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-xl shadow-lg">
          <DollarSign className="w-8 h-8 mb-2 opacity-80" />
          <div className="text-sm opacity-90 mb-1">Monthly Revenue</div>
          <div className="text-3xl font-bold">$71.2K</div>
          <div className="text-sm mt-1 opacity-80">+12.3% growth</div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
          <Zap className="w-8 h-8 mb-2 opacity-80" />
          <div className="text-sm opacity-90 mb-1">API Requests</div>
          <div className="text-3xl font-bold">2.5M</div>
          <div className="text-sm mt-1 opacity-80">Today</div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-emerald-500" />
          Revenue Growth
        </h3>
        <div className="flex items-end gap-4 h-64">
          {revenueData.map((data, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg transition-all hover:from-emerald-600 hover:to-emerald-500"
                   style={{ height: `${(data.revenue / 80000) * 100}%` }}>
              </div>
              <div className="mt-2 text-sm font-medium text-slate-700">{data.month}</div>
              <div className="text-xs text-slate-500">${(data.revenue / 1000).toFixed(1)}K</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-3">Top Performing Institution</h4>
          <div className="text-lg font-medium text-blue-600">City College</div>
          <div className="text-sm text-slate-600">3,200 students • $12.45K/mo</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-3">System Uptime</h4>
          <div className="text-lg font-medium text-emerald-600">99.98%</div>
          <div className="text-sm text-slate-600">Last 30 days</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-3">Active API Keys</h4>
          <div className="text-lg font-medium text-purple-600">247</div>
          <div className="text-sm text-slate-600">Across all institutions</div>
        </div>
      </div>
    </div>
  );

  const renderInstitutions = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Institution Management</h2>
          <p className="text-slate-600">Manage and onboard institutions</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
          <Plus className="w-4 h-4" />
          Add Institution
        </button>
      </div>

      {/* Institution List */}
      <div className="space-y-4">
        {institutions.map((inst) => (
          <div key={inst.id} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{inst.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-slate-600">{inst.type}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                    <span className="text-sm font-medium text-slate-900">{inst.students} students</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  inst.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                }`}>
                  {inst.status}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div>
                <div className="text-sm text-slate-600">Plan</div>
                <div className="font-bold text-slate-900">{inst.plan}</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">Monthly Revenue</div>
                <div className="font-bold text-emerald-600">{inst.revenue}</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">Growth</div>
                <div className="font-bold text-blue-600">{inst.growth}</div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 text-sm font-medium">
                View Details
              </button>
              <button className="flex-1 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 text-sm font-medium">
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSubscriptions = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Subscription Management</h2>
        <p className="text-slate-600">Manage pricing tiers and subscriptions</p>
      </div>

      {/* Subscription Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {subscriptionPlans.map((plan, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md border-2 border-slate-200 hover:border-purple-500 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-xl text-slate-900">{plan.name}</h3>
              <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                {plan.count} active
              </div>
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-4">{plan.price}</div>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 font-medium text-sm">
              Edit Plan
            </button>
          </div>
        ))}
      </div>

      {/* Subscription Analytics */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Subscription Distribution</h3>
        <div className="space-y-4">
          {subscriptionPlans.map((plan, idx) => {
            const total = subscriptionPlans.reduce((sum, p) => sum + p.count, 0);
            const percentage = (plan.count / total) * 100;
            return (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-700">{plan.name}</span>
                  <span className="text-slate-600">{plan.count} ({percentage.toFixed(1)}%)</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="h-3 bg-purple-500 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderAPI = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">API Monitoring</h2>
        <p className="text-slate-600">Track API usage and performance</p>
      </div>

      {/* API Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <Globe className="w-8 h-8 text-blue-500 mb-2" />
          <div className="text-sm text-slate-600 mb-1">Total Requests</div>
          <div className="text-2xl font-bold text-slate-900">2.5M</div>
          <div className="text-xs text-emerald-600 mt-1">+8.5% today</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <Activity className="w-8 h-8 text-emerald-500 mb-2" />
          <div className="text-sm text-slate-600 mb-1">Avg Response</div>
          <div className="text-2xl font-bold text-slate-900">85ms</div>
          <div className="text-xs text-emerald-600 mt-1">Excellent</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <Zap className="w-8 h-8 text-orange-500 mb-2" />
          <div className="text-sm text-slate-600 mb-1">Success Rate</div>
          <div className="text-2xl font-bold text-slate-900">99.4%</div>
          <div className="text-xs text-emerald-600 mt-1">Above target</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <Database className="w-8 h-8 text-purple-500 mb-2" />
          <div className="text-sm text-slate-600 mb-1">Data Transfer</div>
          <div className="text-2xl font-bold text-slate-900">156 GB</div>
          <div className="text-xs text-slate-600 mt-1">Today</div>
        </div>
      </div>

      {/* API Endpoints */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Endpoint Performance</h3>
        <div className="space-y-3">
          {apiStats.map((api, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <code className="text-sm font-mono text-slate-900">{api.endpoint}</code>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  api.status === 'healthy' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {api.status}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-slate-600">Requests</div>
                  <div className="font-bold text-slate-900">{api.requests}</div>
                </div>
                <div>
                  <div className="text-slate-600">Avg Response</div>
                  <div className="font-bold text-slate-900">{api.avgResponse}</div>
                </div>
                <div>
                  <div className="text-slate-600">Error Rate</div>
                  <div className="font-bold text-slate-900">{api.errorRate}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderServer = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Server Health Monitoring</h2>
        <p className="text-slate-600">Real-time server performance metrics</p>
      </div>

      {/* Server Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {serverMetrics.map((metric, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-slate-900">{metric.metric}</h4>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                metric.status === 'good' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
              }`}>
                {metric.status}
              </span>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">{metric.value}</div>
            <div className="flex items-center gap-2">
              <div className={`text-sm ${
                metric.trend === 'up' ? 'text-orange-600' : 
                metric.trend === 'down' ? 'text-emerald-600' : 
                'text-slate-600'
              }`}>
                {metric.trend === 'up' ? '↑ Increasing' : 
                 metric.trend === 'down' ? '↓ Decreasing' : 
                 '→ Stable'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* System Status */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <Server className="w-8 h-8" />
          <div>
            <h3 className="font-bold text-lg">All Systems Operational</h3>
            <p className="text-emerald-100 text-sm">Last checked: 2 minutes ago</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white/10 p-3 rounded-lg">
            <div className="text-emerald-100 text-sm">Uptime</div>
            <div className="font-bold text-lg">99.98%</div>
          </div>
          <div className="bg-white/10 p-3 rounded-lg">
            <div className="text-emerald-100 text-sm">Response Time</div>
            <div className="font-bold text-lg">45ms</div>
          </div>
          <div className="bg-white/10 p-3 rounded-lg">
            <div className="text-emerald-100 text-sm">Incidents</div>
            <div className="font-bold text-lg">0</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 p-4">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 p-2 hover:bg-slate-100 rounded-lg w-full"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Home</span>
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Super Admin</div>
              <div className="text-xs text-slate-600">Business Control</div>
            </div>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-purple-500 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
                {activeSection === item.id && <ChevronRight className="w-4 h-4 ml-auto" />}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {activeSection === 'dashboard' && renderDashboard()}
        {activeSection === 'institutions' && renderInstitutions()}
        {activeSection === 'subscriptions' && renderSubscriptions()}
        {activeSection === 'api' && renderAPI()}
        {activeSection === 'server' && renderServer()}
        {activeSection === 'settings' && (
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Super Admin Settings</h2>
            <p className="text-slate-600">Configure global platform settings and preferences.</p>
          </div>
        )}
      </div>
    </div>
  );
}
