interface Config {
  apiUrl: string
  sampleRate?: number
}

class FrontendMonitor {
  private config: Required<Config>
  private sessionId: string

  constructor(config: Config) {
    this.config = {
      sampleRate: 1,
      ...config
    }
    this.sessionId = this.generateSessionId()
    this.initPerformanceObserver()
    this.initErrorTracking()
    this.initClickTracking()
  }

  private generateSessionId(): string {
    return 'ses_' + Math.random().toString(36).substring(2, 15)
  }

  private initPerformanceObserver() {
    if (window.PerformanceObserver) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          this.sendMetric(entry.name, entry.duration)
        })
      })
      observer.observe({ entryTypes: ['paint', 'longtask', 'largest-contentful-paint'] })
    }
  }

  private initErrorTracking() {
    window.addEventListener('error', (event) => {
      debugger;
      this.sendError({
        message: event.message,
        stack: event.error?.stack,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      })
    })
  }

  private initClickTracking() {
    document.addEventListener('click', (event) => {
      if (Math.random() < this.config.sampleRate) {
        const target = event.target as HTMLElement
        this.sendClick({
          x: event.clientX,
          y: event.clientY,
          selector: this.getSelector(target)
        })
      }
    })
  }

  private getSelector(element: HTMLElement): string {
    // 简化版选择器生成逻辑
    const parts = []
    while (element.parentNode) {
      parts.unshift(element.tagName.toLowerCase())
      if (element.id) {
        parts.unshift(`#${element.id}`)
        break
      }
      element = element.parentNode as HTMLElement
    }
    return parts.join(' > ')
  }

  async sendMetric(name: string, value: number) {
    await this.sendToServer({
      type: 'performance',
      name,
      value
    })
  }

  async sendError(error: Omit<Error, 'id' | 'eventId'>) {
    await this.sendToServer({
      type: 'errors',
      ...error
    })
  }

  async sendClick(click: Omit<ClickEvent, 'id' | 'eventId'>) {
    await this.sendToServer({
      type: 'clicks',
      ...click
    })
  }

  private async sendToServer(data: any) {
    try {
      await fetch(this.config.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sessionId: this.sessionId,
          url: window.location.href,
          referrer: document.referrer,
          userAgent: navigator.userAgent,
          [data.type]: [{...data}]
        })
      })
    } catch (err) {
      console.warn('Monitor send failed:', err)
    }
  }
}

export const initMonitor = (config: Config) => {
  if (typeof window !== 'undefined') {
    return new FrontendMonitor(config)
  }
  return null
}