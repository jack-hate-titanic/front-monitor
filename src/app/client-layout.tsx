/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2025-05-18 15:11:47
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2025-05-18 15:12:01
 * @FilePath: /frontend-monitor/src/app/client-layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// app/client-layout.tsx
'use client';

import { useEffect } from 'react';
import { initMonitor } from '@/lib/monitor';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initMonitor({
      apiUrl: '/api/collect',
      sampleRate: 0.3
    });
  }, []);

  return <>{children}</>;
}