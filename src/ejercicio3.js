function clonarArreglo(array){
    return [...array]
}

function clonarObjeto(obj){

    return obj 
}

let numeros = [1,2,3]
function sumar(nums){
  return  nums.reduce((acc, currentValue) => acc+currentValue)
}

function saludar(nombre){
return `hola ${nombre}`
}
console.log(sumar(numeros));

console.log(saludar("desconocido"));





// NO MODIFICAR
//export { clonarArreglo, clonarObjeto, sumar, saludar };