<template>
  <div class="poke_container w-full flex justify-center">
    <input type="text" placeholder="Type Pokemon Here..." class="mt-10 p-2" v-model="text" />
  </div>
  <div class="poke_container mt-10 p-4 flex flex-wrap justify-center">
    <div 
    class="ml-4 text-2x" 
    v-for="(pokemon, idx) in filteredPokemon" 
    :key="idx">
      <router-link :to="`/pokemon/${urlIdLookUp[pokemon.name]}`">
      <h1> {{ pokemon.name }} </h1> 
      </router-link>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed } from '@vue/reactivity';
import {reactive, toRefs} from 'vue';

export default {
  name: 'HomeView',
  setup() {

    const state = reactive({
      pokemons: [],
      urlIdLookUp: {},
      text: "",
      filteredPokemon: computed(()=> updatePokemon())
    })

    function updatePokemon() {
      if(!state.text) {
        return []
      } 

      return state.pokemons.filter((pokemon) => 
        pokemon.name.includes(state.text)
      )
    }

    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      state.pokemons = data.results;
      state.urlIdLookUp = data.results.reduce((acc, cur, idx) => 
        acc = {...acc, [cur.name]:idx+1}
      ,{})

    })

    return {...toRefs(state)}
  }
}
</script>

<style>

input {
  color: #BC2C1A;
  border-radius: 5px;
  background: #DFF8EB;
  border: 3px solid #364156;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

input[type=text]:focus {
  width: 60%; 
  border: 3px solid #364156;
  outline: none;
}

input::placeholder {
    font-weight: bold;
    opacity: 0.75;
    color: #BC2C1A;
}

.poke_container {
  background: none;
}

.poke_container h1 {
  color: #BC2C1A;
  background: white;
  font-weight: bold;
  padding: .3rem;
  border-radius: 5px;
  border: 3px solid #BC2C1A;
}

</style>