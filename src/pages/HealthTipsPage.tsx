import React, { useState, useEffect } from 'react'
import { toast } from 'sonner'

interface Tip {
  id: number
  title: string
  content: string
  category: string
}

export default function HealthTipsPage() {
  const [tips, setTips] = useState<Tip[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchTips()
  }, [])

  const fetchTips = async () => {
    try {
      const response = await fetch('/api/tips')
      if (!response.ok) throw new Error('Failed to fetch health tips')
      const data = await response.json()
      setTips(data)
    } catch (error) {
      toast.error('Failed to load health tips')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="text-center py-8">
        Loading health tips...
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Daily Health Tips</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white p-6 rounded-lg shadow"
          >
            <span className="inline-block px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded mb-2">
              {tip.category}
            </span>
            <h2 className="text-xl font-semibold mb-2">{tip.title}</h2>
            <p className="text-gray-600">{tip.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}