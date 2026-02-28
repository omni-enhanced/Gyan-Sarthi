import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Shield, ArrowLeft, Home, BookOpen, Brain, Users, BarChart3, Settings,
  ChevronRight, Plus, Edit, Trash2, AlertTriangle, CheckCircle2, Lock,
  FileText, Activity, Database, Filter, Search
} from 'lucide-react';

export function AdminPanel() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'questions', label: 'Question Bank', icon: BookOpen },
    { id: 'ai-governance', label: 'AI Governance', icon: Brain },
    { id: 'users', label: 'User Monitoring', icon: Users },
    { id: 'analytics', label: 'Platform Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const questions = [
    { 
      id: 1, 
      subject: 'Physics', 
      topic: 'Thermodynamics', 
      difficulty: 'Medium', 
      question: 'What is the first law of thermodynamics?',
      status: 'active',
      usage: 234
    },
    { 
      id: 2, 
      subject: 'Chemistry', 
      topic: 'Organic Chemistry', 
      difficulty: 'Hard', 
      question: 'Explain the mechanism of nucleophilic substitution.',
      status: 'active',
      usage: 189
    },
    { 
      id: 3, 
      subject: 'Biology', 
      topic: 'Cell Biology', 
      difficulty: 'Easy', 
      question: 'What are the main components of a cell?',
      status: 'review',
      usage: 456
    },
  ];

  const aiLogs = [
    { timestamp: '2026-02-28 10:23', user: 'student_1234', action: 'AI hint requested', topic: 'Thermodynamics', filtered: false },
    { timestamp: '2026-02-28 10:15', user: 'student_5678', action: 'AI response filtered', topic: 'Organic Chemistry', filtered: true },
    { timestamp: '2026-02-28 09:45', user: 'student_9012', action: 'AI hint requested', topic: 'Cell Biology', filtered: false },
  ];

  const userAlerts = [
    { user: 'student_1234', alert: 'Unusual activity pattern detected', severity: 'medium', time: '1h ago' },
    { user: 'student_5678', alert: 'Multiple failed exam attempts', severity: 'low', time: '3h ago' },
    { user: 'student_9012', alert: 'Suspicious answer pattern', severity: 'high', time: '5h ago' },
  ];

  const platformStats = [
    { label: 'Total Questions', value: '2,456', change: '+45 this week', trend: 'up' },
    { label: 'Active Users', value: '1,234', change: '+89 today', trend: 'up' },
    { label: 'AI Requests Today', value: '3,567', change: '+12% vs yesterday', trend: 'up' },
    { label: 'Filtered Responses', value: '23', change: '0.6% of total', trend: 'neutral' },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Admin Dashboard</h2>
        <p className="text-slate-600">Governance & Control Center</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {platformStats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <div className="text-sm text-slate-600 mb-1">{stat.label}</div>
            <div className="text-2xl font-bold text-slate-900 mb-2">{stat.value}</div>
            <div className={`text-xs ${stat.trend === 'up' ? 'text-emerald-600' : 'text-slate-600'}`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Alerts */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-orange-500" />
          Recent User Alerts
        </h3>
        <div className="space-y-3">
          {userAlerts.map((alert, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  alert.severity === 'high' ? 'bg-red-500' :
                  alert.severity === 'medium' ? 'bg-orange-500' :
                  'bg-yellow-500'
                }`}></div>
                <div>
                  <div className="font-medium text-slate-900">{alert.user}</div>
                  <div className="text-sm text-slate-600">{alert.alert}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-500">{alert.time}</span>
                <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                  Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => setActiveSection('questions')}
          className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all text-left"
        >
          <BookOpen className="w-8 h-8 mb-3" />
          <div className="font-bold text-lg">Manage Questions</div>
          <div className="text-sm text-blue-100">Add, edit, or review questions</div>
        </button>

        <button
          onClick={() => setActiveSection('ai-governance')}
          className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all text-left"
        >
          <Brain className="w-8 h-8 mb-3" />
          <div className="font-bold text-lg">AI Control</div>
          <div className="text-sm text-purple-100">Configure AI rules and filters</div>
        </button>

        <button
          onClick={() => setActiveSection('users')}
          className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all text-left"
        >
          <Users className="w-8 h-8 mb-3" />
          <div className="font-bold text-lg">Monitor Users</div>
          <div className="text-sm text-emerald-100">Track user activities and issues</div>
        </button>
      </div>
    </div>
  );

  const renderQuestions = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Question Bank Management</h2>
          <p className="text-slate-600">Add, edit, and manage questions</p>
        </div>
        <button
          onClick={() => setShowAddQuestion(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <Plus className="w-4 h-4" />
          Add Question
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
            <select className="w-full p-2 border border-slate-300 rounded-lg text-sm">
              <option>All Subjects</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
              <option>Mathematics</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Difficulty</label>
            <select className="w-full p-2 border border-slate-300 rounded-lg text-sm">
              <option>All Levels</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
            <select className="w-full p-2 border border-slate-300 rounded-lg text-sm">
              <option>All Status</option>
              <option>Active</option>
              <option>Review</option>
              <option>Inactive</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        {questions.map((q) => (
          <div key={q.id} className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                    {q.subject}
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                    {q.topic}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    q.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-700' :
                    q.difficulty === 'Medium' ? 'bg-orange-100 text-orange-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {q.difficulty}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    q.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {q.status}
                  </span>
                </div>
                <p className="font-medium text-slate-900">{q.question}</p>
                <p className="text-sm text-slate-600 mt-2">Used {q.usage} times</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAddQuestion && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Add New Question</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select className="w-full p-3 border border-slate-300 rounded-lg">
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>Mathematics</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Topic</label>
                <input
                  type="text"
                  placeholder="Enter topic"
                  className="w-full p-3 border border-slate-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Difficulty</label>
                <select className="w-full p-3 border border-slate-300 rounded-lg">
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Question</label>
                <textarea
                  rows={4}
                  placeholder="Enter question text"
                  className="w-full p-3 border border-slate-300 rounded-lg"
                ></textarea>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowAddQuestion(false)}
                  className="flex-1 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowAddQuestion(false)}
                  className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium"
                >
                  Save Question
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderAIGovernance = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">AI Governance</h2>
        <p className="text-slate-600">Control AI behavior and filtering rules</p>
      </div>

      {/* AI Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <Brain className="w-8 h-8 text-blue-500" />
            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">
              Active
            </span>
          </div>
          <div className="text-sm text-slate-600 mb-1">Practice Mode AI</div>
          <div className="text-2xl font-bold text-slate-900">Enabled</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <Lock className="w-8 h-8 text-red-500" />
            <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">
              Disabled
            </span>
          </div>
          <div className="text-sm text-slate-600 mb-1">Exam Mode AI</div>
          <div className="text-2xl font-bold text-slate-900">Blocked</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <Filter className="w-8 h-8 text-purple-500" />
            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
              Protected
            </span>
          </div>
          <div className="text-sm text-slate-600 mb-1">Response Filtering</div>
          <div className="text-2xl font-bold text-slate-900">Active</div>
        </div>
      </div>

      {/* Prompt Control */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Prompt Structure Control</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">System Prompt Template</label>
            <textarea
              rows={4}
              className="w-full p-3 border border-slate-300 rounded-lg font-mono text-sm"
              defaultValue="You are an educational AI assistant. Provide hints and guidance without giving direct answers. Focus on helping students understand concepts..."
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Max Response Length</label>
            <input
              type="number"
              defaultValue={500}
              className="w-full p-3 border border-slate-300 rounded-lg"
            />
          </div>
          <button className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-medium">
            Update Configuration
          </button>
        </div>
      </div>

      {/* AI Usage Logs */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-500" />
          Recent AI Usage Logs
        </h3>
        <div className="space-y-2">
          {aiLogs.map((log, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg text-sm">
              <div className="flex items-center gap-3">
                <span className="text-slate-500">{log.timestamp}</span>
                <span className="font-medium text-slate-900">{log.user}</span>
                <span className="text-slate-600">{log.action}</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                  {log.topic}
                </span>
              </div>
              {log.filtered && (
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">
                  Filtered
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">User Monitoring</h2>
        <p className="text-slate-600">Track user activities and detect issues</p>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
          <div className="text-sm text-slate-600 mb-1">High Priority Alerts</div>
          <div className="text-3xl font-bold text-red-600">3</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
          <div className="text-sm text-slate-600 mb-1">Medium Priority</div>
          <div className="text-3xl font-bold text-orange-600">7</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
          <div className="text-sm text-slate-600 mb-1">Low Priority</div>
          <div className="text-3xl font-bold text-yellow-600">12</div>
        </div>
      </div>

      {/* Alerts List */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Active Alerts</h3>
        <div className="space-y-3">
          {userAlerts.map((alert, idx) => (
            <div key={idx} className="p-4 border-l-4 rounded-lg bg-slate-50 ${
              alert.severity === 'high' ? 'border-red-500' :
              alert.severity === 'medium' ? 'border-orange-500' :
              'border-yellow-500'
            }">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-900">{alert.user}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      alert.severity === 'high' ? 'bg-red-100 text-red-700' :
                      alert.severity === 'medium' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-slate-700">{alert.alert}</p>
                  <p className="text-sm text-slate-500 mt-1">{alert.time}</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                    Investigate
                  </button>
                  <button className="px-3 py-1 bg-slate-200 text-slate-700 rounded text-sm hover:bg-slate-300">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription Management */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Subscription Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-emerald-50 rounded-lg">
            <div className="text-sm text-emerald-700 mb-1">Active Subscriptions</div>
            <div className="text-2xl font-bold text-emerald-900">1,145</div>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <div className="text-sm text-orange-700 mb-1">Expiring Soon</div>
            <div className="text-2xl font-bold text-orange-900">23</div>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <div className="text-sm text-red-700 mb-1">Expired</div>
            <div className="text-2xl font-bold text-red-900">8</div>
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
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Admin Panel</div>
              <div className="text-xs text-slate-600">Governance</div>
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
                    ? 'bg-emerald-500 text-white'
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
        {activeSection === 'questions' && renderQuestions()}
        {activeSection === 'ai-governance' && renderAIGovernance()}
        {activeSection === 'users' && renderUsers()}
        {activeSection === 'analytics' && (
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Platform Analytics</h2>
            <p className="text-slate-600">View system performance and usage statistics.</p>
          </div>
        )}
        {activeSection === 'settings' && (
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Admin Settings</h2>
            <p className="text-slate-600">Configure platform settings and preferences.</p>
          </div>
        )}
      </div>
    </div>
  );
}
