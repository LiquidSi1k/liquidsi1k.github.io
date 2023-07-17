import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["click"];

  connect() {
    console.log("navbar JS connected");

    this.element.addEventListener("mousedown", this.handleMouseDown.bind(this));
  }

  handleMouseDown(event) {
    event.preventDefault();

    console.log("drag function pending");
  }

  popup() {
    this.clickTarget.classList.toggle("open");
  }
}
