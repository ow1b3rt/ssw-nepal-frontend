'use client'
import { useGet, useApi } from "@/packages/admin"
import { Textarea } from "@/packages/admin"
import { useState, useEffect } from 'react'

export default function Layout() {
  const { post } = useApi()
  const { data } = useGet('/layouts/home')
  const [layout, setLayout] = useState(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (data) {
      setLayout(JSON.stringify(data.layout, null, 2))
    }
  }, [data])

  const handleSubmit = async () => {
    try {
      setSaving(true)
      const parsed = JSON.parse(layout)
      await post('/layouts/home', parsed)
    } catch (err) {
      alert('Invalid JSON — please check formatting before submitting.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className='flex flex-col gap-sm max-w-3xl mx-auto p-md'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>Home Layout</h3>
        <button
          onClick={handleSubmit}
          disabled={saving}
          className='px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:opacity-90 disabled:opacity-50 transition'
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
      <Textarea
        value={layout ?? ''}
        onChange={(e) => setLayout(e.target.value)}
        rows={30}
        className='font-mono text-sm'
      />
    </div>
  )
}
