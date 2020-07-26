import { getTemplate } from "./template";

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.selectedId = null;
    this.#render();
    this.#setup();
  }

  #render() {
    const { placeholder, data } = this.options;
    this.$el.classList.add("select");
    this.$el.innerHTML = getTemplate(data, placeholder);
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener("click", this.clickHandler);
    this.$arrow = this.$el.querySelector('[data-type="arrow"]');
    this.$value = this.$el.querySelector('[data-type="value"]');
  }

  clickHandler(event) {
    const { type } = event.target.dataset;
    if (type === "input") {
      this.toggle();
    } else if (type === "item") {
      const id = event.target.dataset.value;
      this.select(id);
    }
  }

  select(id) {
    this.selectedId = id;
    this.$value.textContent = this.current.value;
    this.$el.querySelectorAll('[data-type="item"]').forEach((el) => {
      el.classList.remove("selected");
    });
    this.$el.querySelector(`[data-value="${id}"]`).classList.add("selected");
    this.close();
  }

  get current() {
    return this.options.data.find((item) => item.id === this.selectedId);
  }

  get isOpen() {
    return this.$el.classList.contains("open");
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.$el.classList.add("open");
    this.$arrow.classList.remove("fa-chevron-down");
    this.$arrow.classList.add("fa-chevron-up");
  }

  close() {
    this.$el.classList.remove("open");
    this.$arrow.classList.add("fa-chevron-down");
    this.$arrow.classList.remove("fa-chevron-up");
  }

  destroy() {
    this.$el.removeEventListener("click", this.clickHandler);
    this.$el.innerHTML = "";
  }
}
