import fs from 'fs'

const arrayDeDatos=[2, 10, "go", 4, "c#", 6, "nodejs", true, "java", 9, 1, "python", 12, "ruby", "php", false]
let condicion = 11

//aca arranca la funcion pedida
function organizarArray(array, condi){
  /*filtramos el array usando el metodo .filter() para seleccionar 
  unicamente los datos que tienen el mismo tipo que la condicion y los guardamos en un nuevo array*/
  //al mismo tiempo ordenamos con el metodo .sort() de forma ascendente
  const nuevoArray = array.filter((elemento) => typeof elemento === typeof condi).sort(compare)

  if(nuevoArray.length=== 0){
    console.log("No se encontraron elementos") //en caso de no tener tipos de dato igual al de la condicion
  }else{
    console.log(nuevoArray.length +" Elementos encontrados:") //se da aviso de la cantidad de elementos encontrados
    
    const values = nuevoArray.join(", ") //le agrega una , a todos los valores

    //se crea un archivo y se le pasan los datos correspondientes
    fs.writeFile("resultados.txt", values, (error)=>{
      if (error) throw new Error("Error escribiendo el archivo de texto!");
    })
    console.log("   - archivo de texto creado correctamente")
  }
  return nuevoArray
}

//funcion para lograr el orden ascendente
function compare(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b);
  }
}
//llamado de la funcion
organizarArray(arrayDeDatos, condicion)