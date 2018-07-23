((exports) => {
  class Alg {
    constructor(name, callback) {
      this.name = name;
      this._do = callback;
      this.compared = 0;

      this.onCompared = () => {
        this.compared++;
      };
    }

    do(arInput) {
      const start = Date.now();
      return new Promise((resolve) => {
        const sorted = this._do(arInput);
        const spended = Date.now() - start;
        resolve({sorted, spended});
      });
    }
  }

  exports.Alg = Alg;
})(window);
