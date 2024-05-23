import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['assistant', 'conversationsHeader']

  connect() {
    this.setNavStickyProperties()
    console.log('connect')
  }
  disconnect() {
    console.log('disconnect')
  }

  assistantTargetConnected() {
    this.setNavStickyProperties()
  }
  conversationsHeaderTargetConnected() {
    console.log('conversationsHeaderTargetConnected')
  }

  setNavStickyProperties() {
    let assistantElement = this.assistantTarget
    let conversationHeaders = this.conversationsHeaderTargets
    console.log(
      this.conversationsHeaderTargets,
      // this.assistantTarget,
      assistantElement.getBoundingClientRect().height
    )
    conversationHeaders.forEach((header) => {
      header.style.top = `${assistantElement.getBoundingClientRect().height}px`
    })
  }
}
