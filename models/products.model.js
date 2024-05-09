fetch("https://rickandmortyapi.com/api/character")
    .then(response =>response.json())
    .then(data =>console.log(data))
    .catch(error=>console.log(error))


    const getCharacter = () =>{
        return data
    }

    const getCharacterById = (id)=>{
        const ch = data.find((element)=>element.id == id)
        return ch || "Personaje inexistente"
    }

    export default{
        getCharacter,
        getCharacterById
    }