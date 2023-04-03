<template>
    <div class="poke_card_container">
        <div v-if="pokemon" 
        class="poke_card w-4/12 m-auto mt-4 flex justify-center flex-col items-center">
            <h3 class="poke_name text-2xl uppercase"><b class="poke_name">{{pokemon.name}}</b></h3>
            <div class="poke_img_container flex justify-center">
                <img class="poke_img" :src="pokemon.sprites.front_shiny" alt="poke_img">
                <img class="poke_img" :src="pokemon.sprites.back_shiny" alt="poke_img">
            </div>
            <div class="attributes_container">
                <div class="bg-none types_container">
                    <ol class="poke_list">
                        <p class="bg-none font-bold">Types: </p>
                <div class="types" v-for="(type, idx) in pokemon.types" :key="idx">
                    <li class="poke_li">{{ type.type.name }}</li>
                </div>
                    </ol>
                </div>
                
                <div class="bg-none">
                    <ol class="poke_list">
                        <p class="bg-none font-bold">Abilities: </p>
                        <div class="abilities" v-for="(ability, idx) in pokemon.abilities" :key="idx">
                            <li class="poke_li">{{ ability.ability.name }}</li>
                        </div>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { reactive, toRefs } from 'vue';

export default {
    setup() {
        const route = useRoute()

        const state = reactive({
            pokemon: null
        })

        fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.slug}/`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            state.pokemon = data;
        })

        return {...toRefs(state)}
    }
}
</script>

<style>

.poke_card_container {
    background: none;
}

.poke_card  {
    color: #011638;
    background: #DFF8EB;
    padding: 1rem;
    border-radius: 10px;
    max-width: 50%;
    max-height: 80%;
    width: fit-content;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.poke_list{
    margin: .5rem;
    text-align: center;
    background: none;
}

.poke_li {
    list-style-type: circle;
}

.poke_name {
    background: none;
    margin-bottom: 1rem;
    margin-top: .5rem;
}

.poke_img {
    min-width: 10rem;
    margin-left: .5rem;
    margin-right: .5rem;
    border-radius: 5px;
}

.poke_img_container {
    background: none;
    margin-bottom: 1rem;
}

.attributes_container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: none;
}

.attributes_container p {
    padding-right: .5rem;
    padding-left: .5rem;
    font-size: 1.5rem;
}

.types_container {
    margin-left: 1rem;
}

.types {
    background: none;
    align-self: center;
    justify-self: center;
    text-align: center;
    margin-left: 1rem;
}

.types li, p {
    background: none;
    font-weight: bold;
}

.abilities {
    background: none;
    align-self: center;
    justify-self: end;
}



.abilities li {
    background: none;
    font-weight: bold;
}

</style>