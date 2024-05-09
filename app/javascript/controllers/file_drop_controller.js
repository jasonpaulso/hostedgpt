import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['overlay', 'body', 'draggable'];
  static classes = ['dragging'];

  connect() {
    this.draggableTarget.addEventListener('drop', this.boundDropped.bind(this));
    this.draggableTarget.addEventListener('dragover', this.handleDragOver.bind(this));
    this.draggableTarget.addEventListener('dragleave', this.handleDragLeave.bind(this));
    this.draggableTarget.addEventListener('drop', this.handleDrop.bind(this));
    this.draggableTarget.addEventListener('dragend', this.handleDragEnd.bind(this));
  }

  handleDragOver(event) {
    event.preventDefault();
    this.overlayTarget.classList.add('dragging');
  }

  handleDragLeave(event) {
    event.preventDefault();
    this.overlayTarget.classList.remove('dragging');
  }

  handleDrop(event) {
    event.preventDefault();
    this.overlayTarget.classList.remove('dragging');
  }

  handleDragEnd(event) {
    event.preventDefault();
    this.overlayTarget.classList.remove('dragging');
  }

  disconnect() {
    this.draggableTarget.removeEventListener('drop', this.boundDropped);
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
