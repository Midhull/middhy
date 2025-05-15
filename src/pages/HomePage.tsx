import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to ZMedic</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your AI-powered healthcare assistant, providing personalized medical information and support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/chat"
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Chat Assistant</h2>
          <p className="text-gray-600">Get instant answers to your health-related questions</p>
        </Link>

        <Link
          to="/appointments"
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Book Appointments</h2>
          <p className="text-gray-600">Schedule consultations with healthcare professionals</p>
        </Link>

        <Link
          to="/symptoms"
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Symptom Checker</h2>
          <p className="text-gray-600">Check your symptoms and get preliminary insights</p>
        </Link>

        <Link
          to="/medicines"
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Medicine Information</h2>
          <p className="text-gray-600">Learn about medications, dosages, and side effects</p>
        </Link>

        <Link
          to="/tips"
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Health Tips</h2>
          <p className="text-gray-600">Daily health tips and wellness advice</p>
        </Link>
      </div>
    </div>
  )
}