<template>
  <section class="app">
    <div class="p-14">
      <router-link class="flex justify-center title" to="/"><b>Pokémon Finder</b></router-link>
    </div>
    <router-view/>
  </section>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  background-image: url(https://images.unsplash.com/photo-1638613067237-b1127ef06c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80);
  background-size: cover;
  background-repeat: no-repeat;
}

.app {
  min-height: 100vh;

}

.title {
  font-size: 50px;
  background: none;
}

.title b {
  background: #DFF8EB;
  border-radius: 30px;
  padding: .5rem;
  color: #BC2C1A;
  border: 5px solid #364156;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

</style>
