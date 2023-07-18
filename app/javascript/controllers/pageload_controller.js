import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="pageload"
export default class extends Controller {
  static targets = ["onLoad"];

  connect() {
    console.log("hello, you are connected");

    setTimeout(() => {
      this.onLoadTarget.classList.add("afterload");
    }, 1000);
  }
}
