import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Building2, ArrowLeft, Home, Users, FileText, BarChart3, Settings, AlertTriangle,
  ChevronRight, TrendingUp, Award, Target, Activity, BookOpen, CheckCircle2
} from 'lucide-react';

export function InstitutionPanel() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedClass, setSelectedClass] = useState('Class 10-A');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'students', label: 'Student Management', icon: Users },
    { id: 'heatmap', label: 'Batch Heatmap', icon: Activity },
    { id: 'tests', label: 'Custom Tests', icon: FileText },
    { id: 'analytics', label: 'Performance Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const classes = [
    { name: 'Class 10-A', students: 45, avgScore: 78, atRisk: 5 },
    { name: 'Class 10-B', students: 42, avgScore: 72, atRisk: 8 },
    { name: 'Class 11-Science', students: 38, avgScore: 81, atRisk: 3 },
  ];

  const students = [
    { id: 1, name: 'Alice Johnson', rank: 1, score: 92, trend: 'up', risk: 'low', weakTopics: ['Organic Chemistry'] },
    { id: 2, name: 'Bob Smith', rank: 2, score: 88, trend: 'stable', risk: 'low', weakTopics: ['Thermodynamics', 'Kinematics'] },
    { id: 3, name: 'Carol White', rank: 3, score: 85, trend: 'up', risk: 'low', weakTopics: ['Cell Biology'] },
    { id: 4, name: 'David Brown', rank: 15, score: 65, trend: 'down', risk: 'medium', weakTopics: ['All Physics Topics', 'Calculus'] },
    { id: 5, name: 'Eve Davis', rank: 18, score: 58, trend: 'down', risk: 'high', weakTopics: ['Mathematics', 'Physics', 'Chemistry'] },
  ];

  const subjectHeatmap = [
    { subject: 'Mathematics', avgScore: 75, weak: 12, moderate: 18, strong: 15 },
    { subject: 'Physics', avgScore: 68, weak: 18, moderate: 15, strong: 12 },
    { subject: 'Chemistry', avgScore: 72, weak: 14, moderate: 20, strong: 11 },
    { subject: 'Biology', avgScore: 81, weak: 8, moderate: 12, strong: 25 },
  ];

  const weakTopicClusters = [
    { topic: 'Thermodynamics', count: 18, percentage: 40, severity: 'high' },
    { topic: 'Organic Chemistry', count: 14, percentage: 31, severity: 'medium' },
    { topic: 'Calculus', count: 12, percentage: 27, severity: 'medium' },
    { topic: 'Cell Division', count: 8, percentage: 18, severity: 'low' },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Institution Dashboard</h2>
        <p className="text-slate-600">Overview of all classes and student performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <Users className="w-8 h-8 mb-2 opacity-80" />
          <div className="text-sm opacity-90 mb-1">Total Students</div>
          <div className="text-3xl font-bold">125</div>
          <div className="text-sm mt-1 opacity-80">Across 3 classes</div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-xl shadow-lg">
          <Target className="w-8 h-8 mb-2 opacity-80" />
          <div className="text-sm opacity-90 mb-1">Average Score</div>
          <div className="text-3xl font-bold">77%</div>
          <div className="text-sm mt-1 opacity-80">+3% this month</div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
          <AlertTriangle className="w-8 h-8 mb-2 opacity-80" />
          <div className="text-sm opacity-90 mb-1">At-Risk Students</div>
          <div className="text-3xl font-bold">16</div>
          <div className="text-sm mt-1 opacity-80">Needs intervention</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <Activity className="w-8 h-8 mb-2 opacity-80" />
          <div className="text-sm opacity-90 mb-1">Tests This Week</div>
          <div className="text-3xl font-bold">8</div>
          <div className="text-sm mt-1 opacity-80">Completed</div>
        </div>
      </div>

      {/* Class Overview */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Class Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {classes.map((cls, idx) => (
            <div key={idx} className="p-4 border-2 border-slate-200 rounded-lg hover:border-blue-500 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-slate-900">{cls.name}</h4>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  cls.atRisk > 5 ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {cls.atRisk} at risk
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Students</span>
                  <span className="font-medium text-slate-900">{cls.students}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Avg Score</span>
                  <span className="font-medium text-emerald-600">{cls.avgScore}%</span>
                </div>
              </div>
              <button className="w-full mt-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => setActiveSection('heatmap')}
          className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all text-left"
        >
          <Activity className="w-8 h-8 mb-3" />
          <div className="font-bold text-lg">View Batch Heatmap</div>
          <div className="text-sm text-blue-100">Identify weak topic clusters</div>
        </button>

        <button
          onClick={() => setActiveSection('tests')}
          className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all text-left"
        >
          <FileText className="w-8 h-8 mb-3" />
          <div className="font-bold text-lg">Create Custom Test</div>
          <div className="text-sm text-purple-100">Design targeted assessments</div>
        </button>

        <button
          onClick={() => setActiveSection('students')}
          className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all text-left"
        >
          <Users className="w-8 h-8 mb-3" />
          <div className="font-bold text-lg">Monitor Students</div>
          <div className="text-sm text-emerald-100">Track individual progress</div>
        </button>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Student Management</h2>
          <p className="text-slate-600">Monitor and track individual student performance</p>
        </div>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="px-4 py-2 border border-slate-300 rounded-lg font-medium"
        >
          {classes.map((cls) => (
            <option key={cls.name} value={cls.name}>{cls.name}</option>
          ))}
        </select>
      </div>

      {/* Student Rankings */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-orange-500" />
          Student Rankings - {selectedClass}
        </h3>
        <div className="space-y-3">
          {students.map((student) => (
            <div key={student.id} className={`p-4 rounded-lg border-2 ${
              student.risk === 'high' ? 'border-red-300 bg-red-50' :
              student.risk === 'medium' ? 'border-orange-300 bg-orange-50' :
              'border-slate-200 bg-white'
            }`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                    student.rank <= 3 ? 'bg-gradient-to-br from-orange-400 to-orange-500 text-white' :
                    'bg-slate-200 text-slate-700'
                  }`}>
                    #{student.rank}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{student.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-slate-600">Score: </span>
                      <span className={`font-bold ${
                        student.score >= 80 ? 'text-emerald-600' :
                        student.score >= 60 ? 'text-orange-600' :
                        'text-red-600'
                      }`}>{student.score}%</span>
                      <span className={`text-xs ${
                        student.trend === 'up' ? 'text-emerald-600' :
                        student.trend === 'down' ? 'text-red-600' :
                        'text-slate-600'
                      }`}>
                        {student.trend === 'up' ? '↑ Improving' :
                         student.trend === 'down' ? '↓ Declining' :
                         '→ Stable'}
                      </span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  student.risk === 'high' ? 'bg-red-200 text-red-800' :
                  student.risk === 'medium' ? 'bg-orange-200 text-orange-800' :
                  'bg-emerald-200 text-emerald-800'
                }`}>
                  {student.risk.toUpperCase()} RISK
                </span>
              </div>

              <div className="mb-3">
                <div className="text-xs font-medium text-slate-700 mb-1">Weak Topics:</div>
                <div className="flex flex-wrap gap-1">
                  {student.weakTopics.map((topic, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-xs">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium">
                  View Details
                </button>
                {student.risk !== 'low' && (
                  <button className="flex-1 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm font-medium">
                    Plan Intervention
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHeatmap = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Batch Heatmap Analysis</h2>
        <p className="text-slate-600">Identify weak topic clusters across the batch</p>
      </div>

      {/* Subject Performance */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-blue-500" />
          Subject-wise Performance - {selectedClass}
        </h3>
        <div className="space-y-4">
          {subjectHeatmap.map((subject) => (
            <div key={subject.subject}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-slate-900">{subject.subject}</span>
                <span className={`font-bold ${
                  subject.avgScore >= 75 ? 'text-emerald-600' :
                  subject.avgScore >= 60 ? 'text-orange-600' :
                  'text-red-600'
                }`}>
                  {subject.avgScore}% average
                </span>
              </div>
              <div className="flex gap-1 h-8 rounded-lg overflow-hidden">
                <div
                  className="bg-red-500 flex items-center justify-center text-white text-xs font-medium"
                  style={{ width: `${(subject.weak / 45) * 100}%` }}
                >
                  {subject.weak > 0 && `${subject.weak}`}
                </div>
                <div
                  className="bg-orange-400 flex items-center justify-center text-white text-xs font-medium"
                  style={{ width: `${(subject.moderate / 45) * 100}%` }}
                >
                  {subject.moderate > 0 && `${subject.moderate}`}
                </div>
                <div
                  className="bg-emerald-500 flex items-center justify-center text-white text-xs font-medium"
                  style={{ width: `${(subject.strong / 45) * 100}%` }}
                >
                  {subject.strong > 0 && `${subject.strong}`}
                </div>
              </div>
              <div className="flex justify-between text-xs text-slate-600 mt-1">
                <span>Weak: {subject.weak}</span>
                <span>Moderate: {subject.moderate}</span>
                <span>Strong: {subject.strong}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weak Topic Clusters */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-orange-500" />
          Critical Weak Topic Clusters
        </h3>
        <div className="space-y-4">
          {weakTopicClusters.map((cluster, idx) => (
            <div key={idx} className={`p-4 rounded-lg border-2 ${
              cluster.severity === 'high' ? 'border-red-300 bg-red-50' :
              cluster.severity === 'medium' ? 'border-orange-300 bg-orange-50' :
              'border-yellow-300 bg-yellow-50'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-bold text-slate-900">{cluster.topic}</h4>
                  <p className="text-sm text-slate-600">{cluster.count} students struggling ({cluster.percentage}% of class)</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  cluster.severity === 'high' ? 'bg-red-200 text-red-800' :
                  cluster.severity === 'medium' ? 'bg-orange-200 text-orange-800' :
                  'bg-yellow-200 text-yellow-800'
                }`}>
                  {cluster.severity.toUpperCase()}
                </span>
              </div>
              <button className="w-full mt-3 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 text-sm font-medium">
                Plan Class Intervention →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendation */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="w-6 h-6" />
          <h3 className="font-bold text-lg">Academic Planning Recommendation</h3>
        </div>
        <p className="text-white/90 mb-4">
          Based on the heatmap analysis, we recommend conducting a focused revision session on 
          Thermodynamics and Organic Chemistry, as 40% and 31% of students respectively are struggling 
          with these topics.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-medium">
          Generate Detailed Report
        </button>
      </div>
    </div>
  );

  const renderTests = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Custom Test Creation</h2>
          <p className="text-slate-600">Design targeted assessments for your students</p>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium">
          + Create New Test
        </button>
      </div>

      {/* Test Builder */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Test Builder</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Test Name</label>
            <input
              type="text"
              placeholder="e.g., Physics Chapter 5 Test"
              className="w-full p-3 border border-slate-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Duration (minutes)</label>
            <input
              type="number"
              defaultValue={60}
              className="w-full p-3 border border-slate-300 rounded-lg"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">Select Topics</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {['Thermodynamics', 'Kinematics', 'Optics', 'Electromagnetism', 'Organic Chemistry', 'Inorganic Chemistry', 'Cell Biology', 'Genetics'].map((topic) => (
              <label key={topic} className="flex items-center gap-2 p-3 border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-slate-700">{topic}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">Difficulty Distribution</label>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-slate-600 mb-1">Easy</label>
              <input type="number" defaultValue={30} className="w-full p-2 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-xs text-slate-600 mb-1">Medium</label>
              <input type="number" defaultValue={50} className="w-full p-2 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-xs text-slate-600 mb-1">Hard</label>
              <input type="number" defaultValue={20} className="w-full p-2 border border-slate-300 rounded-lg text-sm" />
            </div>
          </div>
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 font-medium">
          Generate Test
        </button>
      </div>

      {/* Recent Tests */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Custom Tests</h3>
        <div className="space-y-3">
          {[
            { name: 'Physics Mid-Term', date: '2026-02-25', students: 45, avgScore: 72 },
            { name: 'Chemistry Quiz', date: '2026-02-22', students: 42, avgScore: 68 },
            { name: 'Biology Assessment', date: '2026-02-20', students: 45, avgScore: 78 },
          ].map((test, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-slate-900">{test.name}</h4>
                <span className="text-sm text-slate-600">{test.date}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-slate-600">{test.students} students</span>
                <span className="text-slate-400">•</span>
                <span className="font-medium text-slate-900">Avg: {test.avgScore}%</span>
              </div>
              <button className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                View Results →
              </button>
            </div>
          ))}
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
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Institution Panel</div>
              <div className="text-xs text-slate-600">B2B Layer</div>
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
                    ? 'bg-orange-500 text-white'
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
        {activeSection === 'students' && renderStudents()}
        {activeSection === 'heatmap' && renderHeatmap()}
        {activeSection === 'tests' && renderTests()}
        {activeSection === 'analytics' && (
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Performance Analytics</h2>
            <p className="text-slate-600">Detailed performance comparisons and trends.</p>
          </div>
        )}
        {activeSection === 'settings' && (
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Institution Settings</h2>
            <p className="text-slate-600">Configure institution preferences and settings.</p>
          </div>
        )}
      </div>
    </div>
  );
}
