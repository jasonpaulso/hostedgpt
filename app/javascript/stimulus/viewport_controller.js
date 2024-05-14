import { Controller } from '@hotwired/stimulus'

const UPDATE_INTERVAL_MS = 10

export default class extends Controller {
  connect() {
    this.updateHeight()
    this.startInterval()
  }

  disconnect() {
    clearInterval(this.interval)
  }

  updateHeight() {
    this.element.style.height = `${window.innerHeight}px`
  }

  startInterval() {
    this.interval = setInterval(() => this.updateHeight(), UPDATE_INTERVAL_MS)
  }
}
