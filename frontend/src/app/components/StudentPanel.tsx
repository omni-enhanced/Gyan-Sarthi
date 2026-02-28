import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  Home, Target, BookOpen, FileText, Brain, BarChart3, Settings, 
  ChevronRight, TrendingUp, Award, Clock, Zap, Lock, Users, 
  CheckCircle2, AlertCircle, Activity, BookMarked, ArrowLeft
} from 'lucide-react';

export function StudentPanel() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [diagnosticComplete, setDiagnosticComplete] = useState(false);
  const [aiMode, setAiMode] = useState<'controlled' | 'personal' | 'external'>('controlled');
  const [examMode, setExamMode] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'onboarding', label: 'Smart Onboarding', icon: Target },
    { id: 'study', label: 'Study Engine', icon: BookOpen },
    { id: 'practice', label: 'Practice Mode', icon: FileText },
    { id: 'exam', label: 'Exam Mode', icon: Lock },
    { id: 'ai', label: 'AI Learning', icon: Brain },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const subjectHeatmap = [
    { subject: 'Mathematics', score: 85, weak: false },
    { subject: 'Physics', score: 62, weak: true },
    { subject: 'Chemistry', score: 78, weak: false },
    { subject: 'Biology', score: 55, weak: true },
    { subject: 'English', score: 90, weak: false },
  ];

  const practiceTopics = [
    { topic: 'Thermodynamics', difficulty: 'Medium', status: 'weak', progress: 45 },
    { topic: 'Organic Chemistry', difficulty: 'Hard', status: 'weak', progress: 30 },
    { topic: 'Cell Biology', difficulty: 'Medium', status: 'weak', progress: 20 },
    { topic: 'Calculus', difficulty: 'Easy', status: 'strong', progress: 85 },
  ];

  const weeklyPlan = [
    { day: 'Monday', focus: 'Thermodynamics Practice', duration: '45 min', status: 'completed' },
    { day: 'Tuesday', focus: 'Organic Chemistry Revision', duration: '60 min', status: 'completed' },
    { day: 'Wednesday', focus: 'Cell Biology Deep Dive', duration: '50 min', status: 'in-progress' },
    { day: 'Thursday', focus: 'Mock Test - Physics', duration: '90 min', status: 'pending' },
    { day: 'Friday', focus: 'Weak Topic Review', duration: '45 min', status: 'pending' },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Welcome back, Student!</h2>
          <p className="text-slate-600">Your personalized learning dashboard</p>
        </div>
        <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
          Readiness Score: <span className="font-bold text-xl ml-2">74%</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-8 h-8 text-blue-500" />
            <span className="text-sm text-slate-500">This Week</span>
          </div>
          <div className="text-2xl font-bold text-slate-900">12.5h</div>
          <div className="text-sm text-slate-600">Study Time</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-8 h-8 text-emerald-500" />
            <span className="text-sm text-slate-500">Accuracy</span>
          </div>
          <div className="text-2xl font-bold text-slate-900">78%</div>
          <div className="text-sm text-slate-600">Overall Score</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <Award className="w-8 h-8 text-orange-500" />
            <span className="text-sm text-slate-500">Completed</span>
          </div>
          <div className="text-2xl font-bold text-slate-900">34</div>
          <div className="text-sm text-slate-600">Practice Tests</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8 text-purple-500" />
            <span className="text-sm text-slate-500">Streak</span>
          </div>
          <div className="text-2xl font-bold text-slate-900">7 days</div>
          <div className="text-sm text-slate-600">Keep it up!</div>
        </div>
      </div>

      {/* Subject Heatmap */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-500" />
          Subject Performance Heatmap
        </h3>
        <div className="space-y-4">
          {subjectHeatmap.map((subject) => (
            <div key={subject.subject} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700">{subject.subject}</span>
                <span className={`font-bold ${subject.weak ? 'text-orange-600' : 'text-emerald-600'}`}>
                  {subject.score}%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all duration-500 ${
                    subject.weak ? 'bg-orange-500' : 'bg-emerald-500'
                  }`}
                  style={{ width: `${subject.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Plan */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <BookMarked className="w-5 h-5 text-blue-500" />
          This Week's Study Plan
        </h3>
        <div className="space-y-3">
          {weeklyPlan.map((plan) => (
            <div key={plan.day} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
              <div className="w-20 font-medium text-slate-700">{plan.day}</div>
              <div className="flex-1">
                <div className="font-medium text-slate-900">{plan.focus}</div>
                <div className="text-sm text-slate-600">{plan.duration}</div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                plan.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                plan.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                'bg-slate-200 text-slate-600'
              }`}>
                {plan.status === 'completed' ? 'Done' : 
                 plan.status === 'in-progress' ? 'In Progress' : 'Pending'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOnboarding = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Smart Onboarding</h2>
      
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="font-bold text-lg mb-4">Step 1: Select Your Role</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['School Student', 'College Student', 'Exam Aspirant'].map((role) => (
            <button
              key={role}
              className="p-6 border-2 border-slate-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              <Users className="w-8 h-8 text-blue-500 mb-2" />
              <div className="font-medium">{role}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="font-bold text-lg mb-4">Step 2: Adaptive Diagnostic Test</h3>
        <p className="text-slate-600 mb-4">
          Take a quick assessment to help us understand your current knowledge level.
        </p>
        <button 
          onClick={() => setDiagnosticComplete(true)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all"
        >
          {diagnosticComplete ? 'Retake Diagnostic Test' : 'Start Diagnostic Test'}
        </button>
      </div>

      {diagnosticComplete && (
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle2 className="w-6 h-6" />
            <h3 className="font-bold text-lg">Onboarding Complete!</h3>
          </div>
          <p>Your cognitive profile has been created and study plan is ready.</p>
        </div>
      )}
    </div>
  );

  const renderPracticeMode = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Practice Mode</h2>
        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg">
          <Brain className="w-4 h-4" />
          <span className="text-sm font-medium">AI Assistance Available</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {practiceTopics.map((topic) => (
          <div key={topic.topic} className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-slate-900">{topic.topic}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs px-2 py-1 rounded ${
                    topic.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-700' :
                    topic.difficulty === 'Medium' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {topic.difficulty}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    topic.status === 'weak' ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {topic.status === 'weak' ? 'Needs Focus' : 'Strong'}
                  </span>
                </div>
              </div>
              <Target className={`w-6 h-6 ${topic.status === 'weak' ? 'text-orange-500' : 'text-emerald-500'}`} />
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Progress</span>
                <span className="font-medium text-slate-900">{topic.progress}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="h-2 bg-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${topic.progress}%` }}
                ></div>
              </div>
            </div>

            <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-medium">
              Start Practice
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-3">
          <Zap className="w-6 h-6" />
          <h3 className="font-bold text-lg">Step-by-Step Hints Available</h3>
        </div>
        <p className="text-white/90 text-sm">
          Get intelligent hints and explanations powered by AI when you're stuck. 
          AI assistance is designed to help you learn, not just get answers.
        </p>
      </div>
    </div>
  );

  const renderExamMode = () => (
    <div className="space-y-6">
      <div className="bg-red-50 border-2 border-red-300 p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-3">
          <Lock className="w-8 h-8 text-red-600" />
          <div>
            <h2 className="text-2xl font-bold text-red-900">Exam Mode - AI-Free Zone 🔒</h2>
            <p className="text-red-700">AI completely disabled. Real exam simulation environment.</p>
          </div>
        </div>
      </div>

      {!examMode ? (
        <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Ready to Start Your Exam?</h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-700">Real-time countdown timer</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-700">No AI assistance available</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-700">Stress-performance tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-700">Instant readiness score generation</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {['Physics Mock Test', 'Chemistry Mock Test', 'Full Subject Test'].map((test) => (
              <div key={test} className="p-4 border-2 border-slate-200 rounded-lg">
                <FileText className="w-6 h-6 text-blue-500 mb-2" />
                <div className="font-medium text-slate-900 mb-1">{test}</div>
                <div className="text-sm text-slate-600">60 minutes • 50 questions</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setExamMode(true)}
            className="w-full py-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all font-bold text-lg"
          >
            Start Exam Mode
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-md border-2 border-red-500">
          <div className="text-center mb-6">
            <div className="text-6xl font-bold text-red-600 mb-2">45:32</div>
            <div className="text-slate-600">Time Remaining</div>
          </div>

          <div className="mb-6 p-6 bg-slate-50 rounded-lg">
            <div className="font-bold text-lg mb-2">Question 1 of 50</div>
            <p className="text-slate-700 mb-4">
              What is the first law of thermodynamics?
            </p>
            <div className="space-y-2">
              {['Energy cannot be created or destroyed', 'Entropy always increases', 'Heat flows from hot to cold', 'Energy equals mass times speed of light squared'].map((option, idx) => (
                <button key={idx} className="w-full p-3 text-left border-2 border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
                  {String.fromCharCode(65 + idx)}. {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium">
              Previous
            </button>
            <button className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium">
              Next Question
            </button>
            <button
              onClick={() => setExamMode(false)}
              className="flex-1 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium"
            >
              Submit Exam
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const renderAILearning = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">AI Learning Layer</h2>

      <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-2">
          <Brain className="w-6 h-6 text-blue-600" />
          <h3 className="font-bold text-lg text-blue-900">Choose Your AI Learning Method</h3>
        </div>
        <p className="text-blue-700 text-sm">
          ⚠️ AI only works in Practice Mode • AI never affects scoring logic • AI never affects readiness index
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => setAiMode('controlled')}
          className={`p-6 rounded-xl border-2 transition-all ${
            aiMode === 'controlled' 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-slate-200 bg-white hover:border-blue-300'
          }`}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3 mx-auto">
            <Brain className="w-6 h-6 text-blue-600" />
          </div>
          <h4 className="font-bold text-slate-900 mb-2">Gyan Sarthi AI</h4>
          <p className="text-sm text-slate-600">Use our controlled AI with filtered responses</p>
          {aiMode === 'controlled' && (
            <div className="mt-3 px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-medium inline-block">
              Selected
            </div>
          )}
        </button>

        <button
          onClick={() => setAiMode('personal')}
          className={`p-6 rounded-xl border-2 transition-all ${
            aiMode === 'personal' 
              ? 'border-purple-500 bg-purple-50' 
              : 'border-slate-200 bg-white hover:border-purple-300'
          }`}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3 mx-auto">
            <Settings className="w-6 h-6 text-purple-600" />
          </div>
          <h4 className="font-bold text-slate-900 mb-2">Personal API Key</h4>
          <p className="text-sm text-slate-600">Use your own Gemini or OpenAI API</p>
          {aiMode === 'personal' && (
            <div className="mt-3 px-3 py-1 bg-purple-500 text-white rounded-full text-xs font-medium inline-block">
              Selected
            </div>
          )}
        </button>

        <button
          onClick={() => setAiMode('external')}
          className={`p-6 rounded-xl border-2 transition-all ${
            aiMode === 'external' 
              ? 'border-emerald-500 bg-emerald-50' 
              : 'border-slate-200 bg-white hover:border-emerald-300'
          }`}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-3 mx-auto">
            <Zap className="w-6 h-6 text-emerald-600" />
          </div>
          <h4 className="font-bold text-slate-900 mb-2">External Learning</h4>
          <p className="text-sm text-slate-600">Use ChatGPT, Claude, Gemini, or Grok</p>
          {aiMode === 'external' && (
            <div className="mt-3 px-3 py-1 bg-emerald-500 text-white rounded-full text-xs font-medium inline-block">
              Selected
            </div>
          )}
        </button>
      </div>

      {aiMode === 'personal' && (
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-4">Configure Your API Key</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Select Provider</label>
              <select className="w-full p-3 border border-slate-300 rounded-lg">
                <option>Gemini</option>
                <option>OpenAI</option>
                <option>Anthropic Claude</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">API Key</label>
              <input
                type="password"
                placeholder="Enter your API key"
                className="w-full p-3 border border-slate-300 rounded-lg"
              />
            </div>
            <button className="w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-medium">
              Save Configuration
            </button>
          </div>
        </div>
      )}

      {aiMode === 'external' && (
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-4">External AI Tools</h4>
          <p className="text-slate-600 mb-4">
            You can use any external AI tool for learning. However, your usage won't be tracked within our system.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Gemini', 'Grok', 'Claude', 'ChatGPT'].map((tool) => (
              <div key={tool} className="p-4 bg-slate-50 rounded-lg text-center">
                <div className="font-medium text-slate-700">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Behavioral Analytics</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <Activity className="w-8 h-8 text-blue-500 mb-3" />
          <div className="text-sm text-slate-600 mb-1">Attempt Speed</div>
          <div className="text-2xl font-bold text-slate-900">2.3 min/Q</div>
          <div className="mt-2 text-xs text-emerald-600">↓ 15% faster</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <Target className="w-8 h-8 text-emerald-500 mb-3" />
          <div className="text-sm text-slate-600 mb-1">Accuracy Trend</div>
          <div className="text-2xl font-bold text-slate-900">78.5%</div>
          <div className="mt-2 text-xs text-emerald-600">↑ +5% this week</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <AlertCircle className="w-8 h-8 text-orange-500 mb-3" />
          <div className="text-sm text-slate-600 mb-1">Guessing Pattern</div>
          <div className="text-2xl font-bold text-slate-900">12%</div>
          <div className="mt-2 text-xs text-orange-600">Needs improvement</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="font-bold text-lg text-slate-900 mb-4">Performance Trends</h3>
        <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
          <div className="text-center text-slate-500">
            <BarChart3 className="w-16 h-16 mx-auto mb-2 opacity-50" />
            <p>Performance chart visualization</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-3">Overconfidence Analysis</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">High confidence correct</span>
              <span className="font-bold text-emerald-600">82%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">High confidence wrong</span>
              <span className="font-bold text-red-600">18%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-3">Revision Consistency</h4>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span className="text-slate-700">7 day streak</span>
          </div>
          <div className="text-sm text-slate-600">You're doing great! Keep up the consistency.</div>
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
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Student Panel</div>
              <div className="text-xs text-slate-600">Learning Engine</div>
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
                    ? 'bg-blue-500 text-white'
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
        {activeSection === 'onboarding' && renderOnboarding()}
        {activeSection === 'practice' && renderPracticeMode()}
        {activeSection === 'exam' && renderExamMode()}
        {activeSection === 'ai' && renderAILearning()}
        {activeSection === 'analytics' && renderAnalytics()}
        {activeSection === 'study' && (
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Personalized Study Engine</h2>
            <p className="text-slate-600">Your personalized learning path based on your performance data.</p>
          </div>
        )}
        {activeSection === 'settings' && (
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Settings</h2>
            <p className="text-slate-600">Configure your learning preferences and account settings.</p>
          </div>
        )}
      </div>
    </div>
  );
}
