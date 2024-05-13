import { Controller } from '@hotwired/stimulus'

const UPDATE_INTERVAL_MS = 50

export default class extends Controller {
  static targets = ['header', 'mainSection', 'nav']

  connect() {
    this.updateHeight()
    this.startInterval()
  }

  disconnect() {
    clearInterval(this.interval)
  }

  updateHeight() {
    const { element: body, headerTarget, mainSectionTarget, navTarget } = this

    if (headerTarget) {
      headerTarget.style.top = `${window.visualViewport.offsetTop}px`
    }

    const headerElementHeight = headerTarget?.offsetHeight || 0

    if (mainSectionTarget && navTarget) {
      const newTop = `${headerElementHeight}px`
      mainSectionTarget.style.top = newTop
      navTarget.style.top = newTop
      body.style.height = `${window.innerHeight - headerElementHeight}px`
    }
  }

  startInterval() {
    this.interval = setInterval(() => this.updateHeight(), UPDATE_INTERVAL_MS)
  }
}
