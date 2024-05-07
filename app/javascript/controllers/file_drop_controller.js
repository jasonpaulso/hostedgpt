import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['overlay'];
  static classes = ['dragging'];

  connect() {
    this.element.addEventListener('drop', this.boundDropped.bind(this));
    this.element.addEventListener('dragover', this.handleDragOver.bind(this));
    this.element.addEventListener('dragleave', this.handleDragLeave.bind(this));
    this.element.addEventListener('drop', this.handleDrop.bind(this));
    this.element.addEventListener('dragend', this.handleDragEnd.bind(this));
  }

  handleDragOver(event) {
    event.preventDefault();
    this.overlayTarget.classList.remove('hidden');
  }

  handleDragLeave(event) {
    event.preventDefault();
    this.overlayTarget.classList.add('hidden');
  }

  handleDrop(event) {
    event.preventDefault();
    this.overlayTarget.classList.add('hidden');
  }

  handleDragEnd(event) {
    event.preventDefault();
    this.overlayTarget.classList.add('hidden');
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
    this.dispatch('dropped', { detail: { files: files } });
  }
}
