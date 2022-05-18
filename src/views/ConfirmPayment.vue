<template>
  <v-container>
      <v-row>
          <v-col>
              <h1 class="mt-10">Lakukan Pembayaran ke Rekening Bank Berikut</h1>
              <h2>BCA : 12512343</h2>
              <h2>BRI : 294130122</h2>
              <h2 class="mt-10">Setelah melakukan pembayaran diharapkan untuk mengkonfirmasi pada admin</h2>
              <h2>Terima kasih</h2>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'
export default {
    data() {
        return {
            index: ''
        }
    },
    computed: {
        indexNumber() {
            return this.$route.params.id
        }
    },

    apollo: {
        transaksi: {
            query(){
                return gql`
                    query MyQuery{
                        transaksi{
                            alamat_pembeli
                            id_transaksi
                            nama_pembeli
                            status_pembayaran
                        }
                    }
                `
            }
        }
    },
}
</script>

<style>

</style>