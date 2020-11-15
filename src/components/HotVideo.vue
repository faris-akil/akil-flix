<template>
  <v-row class="">
    <v-col cols="12" class="text-start pa-0 mt-n16">
      <video-background
        ref="videobackground"
        :src="require('../assets/videoplayback.mp4')"
        overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
        class="video-container"
        :sources="videoSetting"
      >
        <v-row justify="center"  class="content-inside-video">
          <v-col cols="4">
          <h1 class="heading-5 ml-2">Tokyo Drifto!!</h1>

          </v-col>
          <v-col cols="4" class="text-center" align-self="center">
          <v-btn icon @click="videoAction">
            <v-icon v-if="videoPlay">mdi-play</v-icon>
            <v-icon v-else>mdi-pause</v-icon>
          </v-btn>
          </v-col>
          <v-col cols="4" class="text-end" align-self="end">
            <v-btn text class="mr-2">Watch</v-btn>
            <v-btn text class="mr-2">Info</v-btn>
          </v-col>

        </v-row>
      </video-background>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      videoPlay: false,
      videoSetting: [],
    };
  },
  methods: {
    videoAction() {
      this.videoPlay
        ? this.$refs.videobackground.player.play()
        : this.$refs.videobackground.player.pause();
      this.videoPlay = !this.videoPlay;
    },
  },
};
</script>

<style>
.content-inside-video {
  height: 60vh;
}

.video-container {
  /* margin: 0;
  padding: 0; */
  box-sizing: border-box;
  height: 60vh;
}

.action-button {
  height: 50vh;
}
</style>
