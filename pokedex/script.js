const poke_container = document.getElementById('poke-container')
const pokemon_count = 300
const colors = {
fire : '#FDDFDF',
grass: '#DEFDE0',
water: '#DEF3FD',
electric: '#FCF7DE',
rock: '#d5d5d4',
fighting: '#E6E0D4',
bug: '#f8d5a3',
psychic:'#eaeda1',
flying: '#f5f5f5',
dragon: '#97b3e6',
fairy: '#fceaff',
poison: '#98d7a5',
normal: '#f5f5f5',
ground: '#f4e7da',
ghost:  '#f2f2f2',
dark: '#f2f2f2',
shadow: '#f2f2f2',
steel: '#f3f3f3',
ice: '#f2f2f2'

}



const main_types = Object.keys(colors)


const fetchPokemons = async () => {
  for(let i = 1; i < pokemon_count; i++){
    await getPokemon (i)
  }
}

const getPokemon = async(id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch (url)
  const data = await res.json()
  createPokemonCard(data)
} 

const createPokemonCard = (pokemon) => {
  const pokemonElement = document.createElement('div')
  pokemonElement.classList.add('pokemon')

  const poke_types = pokemon.types.map(type => type.type.name)

 

  const type = main_types.find(type => poke_types.indexOf (type) > -1)

  const color = colors[type]

  pokemonElement.style.backgroundColor = color

  const pokemonInnerHTML = ` 
  <div class="img-container">
       <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" />
       
  </div>
<div class="info">
  <span class="number">#${pokemon.id}</span>
  <h3 class="name">${pokemon.name}</h3>
  <small class="type">Type: <span>${type}</span></small>
</div>`

pokemonElement.innerHTML = pokemonInnerHTML

poke_container.appendChild(pokemonElement)
}
fetchPokemons()