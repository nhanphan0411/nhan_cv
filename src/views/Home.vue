<template>
  <div class="home">
    <v-card class="mx-auto mt-5" max-width="400">
      <v-img class="white--text align-end" height="200px" :src="img_src">
        <v-card-title>{{name}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">Skills</v-card-subtitle>

      <v-card-text class="text--primary">
        <div v-for="(skill, index) in skills" :key="index">{{ skill }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange" @click="decrease()" text>Decrease</v-btn>
        <v-btn color="orange" @click="add()" text>Increment {{beaches}}</v-btn>
        <v-btn color="orange" to="/about" text>About</v-btn>
      </v-card-actions>
    </v-card>

    <v-carousel
      class="mx-auto mt-10"
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
const firebase = require("../firebaseConfig.js");

export default {
  name: "Home",
  data() {
    return {
      beaches: 5,
      name: "PHAM PHAN NHAN",
      skills: ["sleep", "ok"],
      img_src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ]
    };
  },

  methods: {
    add() {
      this.beaches = this.beaches + 1;
    },
    decrease() {
      this.beaches -= 1;
    }
  },
  mounted() {
    firebase.firestore.collection("personal_information").onSnapshot(
      snapshot => {
        snapshot.forEach(result => {
          this.name = result.data().name;
          this.skills = result.data().skills;
          this.img_src = result.data().img_src;
        });
      },
      error => {
        console.log(error);
      }
    );
  }
};
</script>

