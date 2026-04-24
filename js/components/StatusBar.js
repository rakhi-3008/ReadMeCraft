function pad(n, d = 5) {
  return String(Math.max(0, parseInt(n) || 0)).padStart(d, "0");
}

export class StatusBar {
  constructor(container) {
    this.container = container;
    this._render();
  }

  _render() {
    this.container.innerHTML = `
      
    `;
  }

  update({ visitors, generated }) {
    const v = this.container.querySelector("#cnt-visitors");
    const g = this.container.querySelector("#cnt-generated");
    if (v) v.textContent = pad(visitors);
    if (g) g.textContent = pad(generated);
  }
}