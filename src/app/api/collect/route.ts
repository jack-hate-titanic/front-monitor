/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2025-05-18 14:22:50
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2025-05-18 16:11:26
 * @FilePath: /frontend-monitor/src/app/api/collect/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */ 
import { PrismaClient } from '@/generated/prisma'


import { NextResponse } from 'next/server'
const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB
export async function POST(req: Request) {
  const data = await req.json()
  
  try {
    const event = await prisma.pageEvent.create({
      data: {
        sessionId: data.sessionId,
        url: data.url,
        referrer: data.referrer,
        userAgent: data.userAgent,
        ip: data.ip,
        performance: {
          create: data.performance?.map((m: any) => ({
            name: m.name,
            value: m.value
          }))
        },
        errors: {
          create: data.errors?.map((e: any) => ({
            message: e.message,
            stack: e.stack,
            filename: e.filename,
            lineno: e.lineno,
            colno: e.colno
          }))
        },
        clicks: {
          create: data.clicks?.map((c: any) => ({
            x: c.x,
            y: c.y,
            selector: c.selector
          }))
        }
      },
      include: {
        performance: true,
        errors: true,
        clicks: true
      }
    })

    return NextResponse.json({ success: true, id: event.id })
  } catch (error) {
    console.error('Collection error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}