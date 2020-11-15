<template>
  <v-app>
    <NavBar />
    <v-main class="mb-16">
        <v-main>
          <router-view></router-view>
        </v-main>
      <!-- <HelloWorld/> -->
    </v-main>
    <Footer class="mt-n15"/>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar"
import HelloWorld from './components/HelloWorld';
import Footer from "./components/Footer"


export default {
  name: 'App',

  components: {
    HelloWorld,
    NavBar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>
body {
  background: #141414;
  height: 100vh;
}
</style>