let pkms = [100, 101, 102, 103, 104, 105]

function sortPokemons(arr) {
    arr.forEach(pkm => {
        return pkm
    })

}


async function bringPkms(callbackFun) {
    let pokemonNum = callbackFun
    let url = `https://pokeapi.co/api/v2/ability/${pokemonNum}`
    console.log(url)
        // let bring = await fetch(url)
        // let tojson = await bring.json()
        // console.log(tojson.name)
}

bringPkms(sortPokemons(pkms))