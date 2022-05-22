export default class Validation {
  constructor() {
    this.checkEmty = (value) => {
      if (value === "") {
        alert("!!!!!!");
        return true;
      } else {
        return false;
      }
    };
  }
}
