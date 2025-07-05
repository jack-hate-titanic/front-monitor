'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { 
  ssr: false,
  loading: () => <div className="text-center py-8">加载图表中...</div>
})

export default function Dashboard() {
  const [data, setData] = useState<{
    events: Array<{
      id: string
      sessionId: string
      url: string
      timestamp: string
    }>
    metrics: Array<{
      name: string
      average: number
    }>
  } | null>(null)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/dashboard')
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        
        const json = await res.json()
        setData(json)
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : '未知错误')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div className="text-center py-8">加载数据中...</div>
  if (error) return <div className="text-red-500 text-center py-8">错误: {error}</div>
  if (!data) return <div className="text-center py-8">无可用数据</div>

  // 处理事件数据 - 按小时统计访问量
  const hourlyEvents = data.events.reduce((acc, event) => {
    const hour = new Date(event.timestamp).getHours()
    acc[hour] = (acc[hour] || 0) + 1
    return acc
  }, {} as Record<number, number>)

  // 准备图表数据
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`)
  const eventCounts = hours.map((_, hour) => hourlyEvents[hour] || 0)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">监控仪表盘</h1>
      
      <div className="grid gap-6">
        {/* 访问量图表 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">每小时访问量</h2>
          <Chart
            options={{
              chart: { type: 'bar' },
              xaxis: { 
                categories: hours,
                labels: {
                  rotate: -45
                }
              },
              plotOptions: {
                bar: {
                  borderRadius: 4,
                  horizontal: false,
                }
              }
            }}
            series={[{
              name: '访问量',
              data: eventCounts
            }]}
            height={350}
          />
        </div>

        {/* 性能指标图表 */}
        {data.metrics.length > 0 && (
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">性能指标</h2>
            <Chart
              options={{
                chart: { type: 'radar' },
                xaxis: { 
                  categories: data.metrics.map(m => m.name) 
                }
              }}
              series={[{
                name: '性能分数',
                data: data.metrics.map(m => m.average)
              }]}
              height={350}
            />
          </div>
        )}
      </div>

      {/* 事件列表 */}
      <div className="mt-8 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">最近访问</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">时间</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">会话ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.events.slice(0, 10).map((event) => (
                <tr key={event.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(event.timestamp).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {event.sessionId.slice(0, 8)}...
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {event.url}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}