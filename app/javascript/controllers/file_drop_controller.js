import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['overlay'];
  static outlets = ['image-upload'];

  connect() {
    this.element.addEventListener('drop', this.boundDropped);
    this.element.addEventListener('dragover', (event) => {
      event.preventDefault();
      this.overlayTarget.style.display = 'initial';
    });
    this.element.addEventListener('dragleave', (event) => {
      event.preventDefault();
      this.overlayTarget.style.display = 'none';
    });
    this.element.addEventListener('drop', (event) => {
      event.preventDefault();
      this.overlayTarget.style.display = 'none';
    });
    this.element.addEventListener('dragend', (event) => {
      event.preventDefault();
      this.overlayTarget.style.display = 'none';
    });
  }

  disconnect() {
    this.element.removeEventListener('drop', this.boundDropped);
  }

  boundDropped = (event) => {
    event.preventDefault();
    this.dropped(event);
  };
  dropped(event) {
    event.preventDefault(); // w/o this chrome opens a new browser tab w/ the image
    let files = event.dataTransfer.files;
    console.log('dropped', this.element);
    this.imageUploadOutlet.dropped(files);
  }
}
