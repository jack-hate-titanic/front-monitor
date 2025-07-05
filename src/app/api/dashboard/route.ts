// app/api/dashboard/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    
    // 正确使用 timestamp 字段的查询示例
    const [events, metrics] = await Promise.all([
      // 查询 PageEvent
      prisma.pageEvent.findMany({
        where: {
          timestamp: {  // 确保这里使用模型定义的字段名
            gte: sevenDaysAgo
          }
        },
        orderBy: {
          timestamp: 'desc'  // 排序
        },
        take: 100
      }),
      
      // 聚合指标
      prisma.metric.groupBy({
        by: ['name'],
        _avg: { value: true },
        where: {
          event: {
            timestamp: {  // 通过关系字段访问
              gte: sevenDaysAgo
            }
          }
        }
      })
    ])

    return NextResponse.json({
      events,
      metrics: metrics.map(m => ({
        name: m.name,
        average: m._avg.value
      }))
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}