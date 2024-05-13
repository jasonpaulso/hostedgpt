import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static values = { theme: String }

  connect() {
    console.log('Dark mode controller connected', this.themeValue)
    this.setThemeColor()
  }

  themeValueChanged() {
    this.setThemeColor()
  }

  setThemeColor() {
    var themeColors = {
      dark: 'rgb(33, 33, 33)',
      light: '#fff',
      system:
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'rgb(33, 33, 33)'
          : '#fff',
    }

    var themeColor = themeColors[this.themeValue] || ''

    document.querySelector('meta[name="theme-color"]').setAttribute('content', themeColor)
  }
}
