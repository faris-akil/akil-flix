<template>
    <v-container>
          <HotVideo />
          <Movie :title="'Marvel'" />
          <Movie :title="'Disney'" />
          <Movie :title="'Adventure'" />
          <Movie :title="'Legend'" />
    </v-container>
</template>

<script>
import HotVideo from "../components/HotVideo.vue"
import Movie from "../components/Movie.vue"

export default {
    components: {
        HotVideo,
        Movie
    }
}
</script>

<style>

</style>