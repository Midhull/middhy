import React, { useState } from 'react'
import { toast } from 'sonner'

export default function MedicineInfoPage() {
  const [medicine, setMedicine] = useState('')
  const [info, setInfo] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!medicine.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/medicine-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ medicine }),
      })

      if (!response.ok) throw new Error('Failed to get medicine information')

      const data = await response.json()
      setInfo(data.response)
    } catch (error) {
      toast.error('Failed to get medicine information. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Medicine Information</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter medicine name
          </label>
          <input
            type="text"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="e.g., Aspirin"
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? 'Searching...' : 'Get Information'}
        </button>
      </form>

      {info && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Medicine Details</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="whitespace-pre-wrap">{info}</p>
          </div>
        </div>
      )}
    </div>
  )
}