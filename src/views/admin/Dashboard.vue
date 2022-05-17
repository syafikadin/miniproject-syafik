<template>
    <v-container>
        <Navbar />
        <v-row>
            <div class="mx-auto">
                <h1>Dashboard Syafik's Showroom</h1>
            </div>
        </v-row>
        <v-row>
            <v-col>
                <v-card
                    class="mx-auto"
                    max-width="344"
                >

                    <v-card-title>
                    Banyak Mobil Tersedia
                    </v-card-title>

                    <v-card-subtitle>
                        <!-- {{ mobil }} -->
                    </v-card-subtitle>

                    <v-card-actions>
                    <v-btn
                        color="orange lighten-2"
                        text
                    >
                        Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="show = !show"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                        </v-card-text>
                    </div>
                    </v-expand-transition>
                </v-card>
                
            </v-col>

            <v-col>
                <v-card
                    class="mx-auto"
                    max-width="344"
                >

                    <v-card-title>
                    Banyak Mobil Terjual
                    </v-card-title>

                    <v-card-subtitle>
                    1,000 miles of wonder
                    </v-card-subtitle>

                    <v-card-actions>
                    <v-btn
                        color="orange lighten-2"
                        text
                    >
                        Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="show = !show"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                        </v-card-text>
                    </div>
                    </v-expand-transition>
                </v-card>
                
            </v-col>

            <v-col>
                <v-card
                    class="mx-auto"
                    max-width="344"
                >

                    <v-card-title>
                    Riwayat Transaksi
                    </v-card-title>

                    <v-card-subtitle>
                    1,000 miles of wonder
                    </v-card-subtitle>

                    <v-card-actions>
                    <v-btn
                        color="orange lighten-2"
                        text
                    >
                        Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="show = !show"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                        </v-card-text>
                    </div>
                    </v-expand-transition>
                </v-card>
                
            </v-col>
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