<template>
  <v-container>
    <v-row align="center" class="mx-5">
      <h1>Personajes de Rick & Morty</h1>
    </v-row>
    <v-row>
      <v-col
        v-for="(persona, index) in $store.state.personajes"
        :key="persona.id"
        cols="12"
        sm="4"
      >
        <v-card class="pa-2" outlined tile>
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="250" :src="persona.image"></v-img>

          <v-card-title>{{ persona.name }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0"> </v-row>

            <div class="my-4 subtitle-1">
              <p>Genero: {{ persona.gender }}</p>

              <p>Planeta de Origen: {{ persona.location.name }}</p>
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Tonight's availability</v-card-title>

          <v-card-text> </v-card-text>

          <v-card-actions>
            <!-- <v-btn color="deep-purple lighten-2" text>
              Reserve
            </v-btn> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data: () => ({
    loading: {
      personajes: false
    },
    selection: 1
  }),
  mounted() {
    this.getPersonajes();
  },
  methods: {
    getPersonajes() {
      this.loading.personajes = true;
      this.axios
        .get("https://rickandmortyapi.com/api/character")
        .then(response => {
          this.$store.commit("establecerState", [
            "personajes",
            response.data.results
          ]);
        })
        .catch(err => {
          console.log(err);
        });
      this.loading.personajes = false;
    }
  }
};
</script>
