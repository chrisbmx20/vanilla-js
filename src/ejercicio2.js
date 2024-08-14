class Contador {

  constructor(){
    this.valor = 0;
  }

  incrementar(){
    this.valor ++
     return this.valor;
  }
}

let instancia = new Contador();

console.log(instancia.incrementar())

//export { instancia }