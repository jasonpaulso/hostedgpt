import { Controller } from '@hotwired/stimulus'

const UPDATE_INTERVAL_MS = 10

export default class extends Controller {
  static targets = ['header', 'headerDiv', 'mainSection', 'nav']

  connect() {
    this.updateHeight()
    this.startInterval()
  }

  disconnect() {
    clearInterval(this.interval)
  }

  updateHeight() {
    // const { element: body, headerTarget, navTarget } = this
    // console.log('updateHeight', window.innerHeight)
    // const headerElementHeight = headerTarget?.offsetHeight || 0
    // if (navTarget) {
    //   const newTop = `${headerElementHeight}px`
    //   navTarget.style.top = newTop
    //   body.style.height = `${window.innerHeight}px`
    //   // body.style.minHeight = 'auto'
    // }
  }

  startInterval() {
    // this.interval = setInterval(() => this.updateHeight(), UPDATE_INTERVAL_MS)
  }
}
