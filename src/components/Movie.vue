<template>
  <span>
    <v-row class="my-2">
      <v-col offset="1" cols="10">
        <h3 class="display-2">Movies that contain "{{ title }}"</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-slide-group v-model="model" show-arrows="">
        <v-slide-item v-for="movie in movies" :key="movie.name">
          <v-card
            class="mx-1 d-flex align-center"
            max-width="250"
            min-height="200"
            outlined
            @click="showDetail(movie.imdbID)"
          >
            <v-img contain width="200" :src="movie.Poster"></v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-row>
  </span>
</template>

<script>
import getMovie from "../services/api.js";

export default {
  props: ["title"],
  data() {
    return {
      movies: [],
      model: null,
    };
  },
  methods: {
      showDetail(id){
          console.log(id)
          this.$router.push({ name: "Detail", params: {id}})
      }
  },
  async mounted() {
    let test = await getMovie(`s=${this.title}`).get();
    console.log(test.data);
    this.movies = test.data.Search;
  },
};
</script>

<style></style>
