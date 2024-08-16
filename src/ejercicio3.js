function clonarArreglo(array){
    return [...array]
}

function clonarObjeto(obj){

    return obj 
}

let numeros = [1,2,3]

function sumar(nums){
  return  nums.reduce((acc, item) => acc + item)
}

numeros.forEach((item,indice) =>{
    console.log(item);
    console.log(indice);
})

function saludar(nombre){
return `hola ${nombre}`
}
console.log(sumar(numeros));

console.log(saludar("desconocido"));

console.log(clonarArreglo(numeros));

console.log(clonarObjeto({uno:1}));









// NO MODIFICAR
//export { clonarArreglo, clonarObjeto, sumar, saludar };