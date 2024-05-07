import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  previewUpdate(imageUrl) {
    this.element.querySelector('img').src = imageUrl;
  }
  previewRemove() {
    this.element.querySelector('img').src = '';
  }
}
