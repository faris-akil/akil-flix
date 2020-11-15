<template>
  <v-container fluid>
    <v-row >
      <v-col :cols="12">
        <youtube
          :height="getHeight"
          :width="getWidth"
          :video-id="trailerID"
          :resize="true"
        />
      </v-col>

    </v-row>
    <v-row>
      <v-col offset="1" cols="10">


        <!-- <video-embed css="embed-responsive-16by9" :src="`https://www.youtube.com/watch?v=${trailerID}`"></video-embed> -->
        <v-list disabled class="text-center  ">
          <v-list-item-group color="primary">
            <v-list-item v-for="(value, name) in movieInfo" :key="value">
              <v-list-item-content>
                <v-list-item-title class="wrap-text subtitle-2">
                  {{ name.toUpperCase() }} : {{ value }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
  <!-- <v-row justify="center">
      <v-col align-self="center" cols="12" sm="8" xl="4" offset-xl="4" class="red">
             <video-embed :src="`https://www.youtube.com/watch?v=${trailerID}`"></video-embed>
             
          <v-list dense disabled class="text-center">
            <v-list-item-group color="primary">
              <v-list-item v-for="(value, name) in movieInfo" :key="value">
                <v-list-item-content>
                  <v-list-item-title class="wrap-text">
                    {{ name.toUpperCase() }} : {{ value }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
      </v-col>
    </v-row> -->
</template>

<script>
import getMovies from "../services/api";
import { Trailer } from "../services/trailer";

export default {
  name: "Detail",
  components: {},
  computed: {
    getWidth() {
      console.log(this.$vuetify.breakpoint.width);
      return this.$vuetify.breakpoint.width - 100;
    },
    getHeight() {
      return this.$vuetify.breakpoint.height - 100;
    },
  },
  data() {
    return {
      movie: {},
      movieInfo: {},
      showLoading: false,
      trailerID: "",
      ayam: window.innerWidth,
    };
  },
  async mounted() {
    let movie = await getMovies(`i=${this.$route.params.id}`).get();
    this.movie = movie.data;
    this.movieInfo = {
      title: this.movie.Title,
      year: this.movie.Year,
      rated: this.movie.Rated,
      runtime: this.movie.Runtime,
      genre: this.movie.Genre,
      director: this.movie.Director,
      actors: this.movie.Actors,
      language: this.movie.Language,
      plot: this.movie.Plot,
    };
    console.log(this.movie);
    let responseTrailer = await Trailer(`${this.movie.Title}`).get();
    this.trailerID = responseTrailer.data.items[0].id.videoId;
    console.log(responseTrailer.data);
  },
};
</script>

<style>
.wrap-text {
  white-space: normal;
}
</style>
