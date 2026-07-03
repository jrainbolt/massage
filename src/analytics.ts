import { analyticsConfig } from './config'

declare global { interface Window { dataLayer: unknown[]; gtag?: (...args: unknown[]) => void } }

export function initAnalytics() {
  if (!analyticsConfig.measurementId) return
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.measurementId}`
  document.head.appendChild(script)
  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: unknown[]) => window.dataLayer.push(args)
  window.gtag('js', new Date())
  window.gtag('config', analyticsConfig.measurementId)
}

export function trackEvent(action: 'book_appointment' | 'contact' | 'pricing_click' | 'service_click', label?: string) {
  const setting = {
    book_appointment: analyticsConfig.enabledEvents.booking,
    contact: analyticsConfig.enabledEvents.contact,
    pricing_click: analyticsConfig.enabledEvents.pricing,
    service_click: analyticsConfig.enabledEvents.services,
  }[action]
  if (!setting) return
  window.gtag?.('event', action, { event_label: label })
}
