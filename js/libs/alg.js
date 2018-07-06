((exports) => {
  class Alg {
    constructor(name, callback) {
      this.name = name;
      this._do = callback;
      this.compared = 0;
    }

    do(arInput) {
      const start = Date.now();
      return new Promise((resolve) => {
        const sorted = this._do(arInput);
        const spended = Date.now() - start;
        resolve({sorted, spended});
      });
    }

    onCompared() {
      this.compared++;
    }
  }

  exports.Alg = Alg;
})(window);
