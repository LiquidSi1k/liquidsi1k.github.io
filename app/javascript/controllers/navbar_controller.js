import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["click"];

  connect() {
    console.log("navbar JS connected");
  }

  popup() {
    this.clickTarget.classList.toggle("open");
  }
}
