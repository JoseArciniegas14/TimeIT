class Web {
  setWebState(item) {
    localStorage.setItem("webState", JSON.stringify(item));
  }
  getWebState() {
    return localStorage.getItem("webState");
  }

  delteWebAll() {
    localStorage.removeItem("webState");
  }
}

export { Web };
