<template>
  <v-container>
      <v-col>
          <v-row>
              <h1>Ubah Counter</h1>
                {{ indexNumber }}
              <v-btn @click="changeNumber(5)">
                  Ganti
              </v-btn>
          </v-row>
      </v-col>
  </v-container>
</template>

<script>
export default {
    name: 'tesPage',
    computed: {
        indexNumber() {
            return this.$store.state.indexNumber
        }
    },
    methods: {
        changeNumber(payload) {
            this.$store.dispatch('changeIndexNumber', payload)
        }
    }
}
</script>

<style>

</style>