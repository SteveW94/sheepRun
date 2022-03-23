class Gap {
  constructor(context) {
    this.context = context;

    this.x = 0;
    this.y = 0;
    this.height = 130;
    this.width = 200;
  }

  init() {
    return Promise.resolve();
  }

  update(lastElement) {
    this.x -= 5;

    if (this.x + this.width < 0) {
      this.x = lastElement.x + this.width;
    }
  }

  render() {}
}
