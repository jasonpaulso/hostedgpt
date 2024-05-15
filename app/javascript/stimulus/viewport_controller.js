import { Controller } from '@hotwired/stimulus'

const UPDATE_INTERVAL_MS = 10

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
    const { element: body, navTarget } = this
    if (navTarget) {
      body.style.height = `${window.innerHeight}px`
    }
  }

  startInterval() {
    this.interval = setInterval(() => this.updateHeight(), UPDATE_INTERVAL_MS)
  }
}
