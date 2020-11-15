<template>
  <v-container>
    <v-row justify="center">
    <v-progress-circular
      :size="150"
      :width="7"
      color="red"
      indeterminate
    ></v-progress-circular>
    </v-row>
  </v-container>

  <!-- <div>
    <v-container
      v-for="align in alignments"
      :key="align"
      class="grey lighten-5 mb-6"
    >
      <v-row :align="align" no-gutters style="height: 150px;">
        <v-col v-for="n in 3" :key="n">
          <v-card class="pa-2" outlined tile>
            One of three columns {{ align }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div> -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      show: true,
      alignments: ["start", "center", "end"],
    };
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
        this.$router.push("/Main");
      }, 4000);
    },
  },
  mounted() {
    if(this.show) this.showToggle()
  },
};
</script>
