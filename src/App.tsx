import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Toaster } from 'sonner'
import HomePage from './pages/HomePage'
import ChatAssistantPage from './pages/ChatAssistantPage'
import AppointmentsPage from './pages/AppointmentsPage'
import SymptomCheckerPage from './pages/SymptomCheckerPage'
import MedicineInfoPage from './pages/MedicineInfoPage'
import HealthTipsPage from './pages/HealthTipsPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex items-center px-2 py-2 text-gray-900 hover:text-gray-600">
                  ZMedic
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link to="/chat" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600">
                    Chat Assistant
                  </Link>
                  <Link to="/appointments" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600">
                    Appointments
                  </Link>
                  <Link to="/symptoms" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600">
                    Symptom Checker
                  </Link>
                  <Link to="/medicines" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600">
                    Medicine Info
                  </Link>
                  <Link to="/tips" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600">
                    Health Tips
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatAssistantPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/symptoms" element={<SymptomCheckerPage />} />
            <Route path="/medicines" element={<MedicineInfoPage />} />
            <Route path="/tips" element={<HealthTipsPage />} />
          </Routes>
        </main>
      </div>
      <Toaster position="top-right" />
    </Router>
  )
}

export default App