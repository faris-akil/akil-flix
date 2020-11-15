<template>
      <v-app-bar
      app
      color="grey darken-3"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-btn text to="/Main">Movies</v-btn>
      <v-btn text>TV Shows</v-btn>
      <v-btn text>New & Popular</v-btn>
      <v-btn text>My List</v-btn>

      <v-spacer></v-spacer>
        <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-gift-outline</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-bell</v-icon></v-btn>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Log Out</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "NavBar"

}
</script>

<style>

</style>