import { Controller } from '@hotwired/stimulus'

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
    const body = this.element
    const headerElement = this.headerTarget
    const mainSection = this.mainSectionTarget
    const nav = this.navTarget

    if (headerElement) {
      headerElement.style.top = window.visualViewport.offsetTop.toString() + 'px'
    }

    const headerElementHeight = headerElement.offsetHeight

    if (mainSection) {
      mainSection.style.top = headerElementHeight + 'px'
      nav.style.top = headerElementHeight + 'px'
      body.style.height = window.innerHeight - headerElementHeight + 'px'
    }
  }

  startInterval() {
    this.interval = setInterval(() => this.updateHeight(), 50)
  }
}
