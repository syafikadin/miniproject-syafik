<template>
    <v-container>
        <Navbar />
        <v-row>
            <div class="mx-auto mt-5">
                <h1>Dashboard Syafik's Showroom</h1>
            </div>
        </v-row>
    </v-container>
</template>
<script>
import Navbar from '../../components/Navbar.vue'
import gql from 'graphql-tag'

export default {
    name: 'dashboardPage',
    components: {
        Navbar
    },
    data(){
        return {
            data: '',
        }
    },
    apollo: {

    mobil: {
      query(){
        return gql`
          query MyQuery {
            mobil {
              warna
              tahun
              status
              nama_mobil
              id_mobil
              harga_jual
              harga_beli
              gambar
              bahan_bakar
            }
          }
        `
      }
    }
  },
}
</script>