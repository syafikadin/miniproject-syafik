<template>
  <v-container>
    <Navbar />
    <v-row>
      <h1 class="mx-auto mt-5">Riwayat Transaksi</h1>
    </v-row>

    <v-row>
      <v-col>
        <v-simple-table class="mt-6">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  ID Riwayat Transaksi
                </th>
                <th class="text-center">
                  Nama Pembeli
                </th>
                <th class="text-center">
                  Alamat Pembeli
                </th>
                <th class="text-center">
                  ID Mobil yang dibeli
                </th>
                <th class="text-center">
                  Nama Mobil yang dibeli
                </th>
                <th class="text-center">
                  Laba
                </th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody class="text-center">
              <tr v-if="$apollo.loading">Loading ...</tr>
              <tr
                v-for="item in transaksi" :key="item.id_transaksi">
                <td>{{ item.id_transaksi }}</td>
                <td>{{ item.nama_pembeli }}</td>
                <td>{{ item.alamat_pembeli }}</td>
                <td>{{ item.status_pembayaran ? 'Sudah Dibayar' : 'Belum Dibayar' }}</td>
                <td>{{ item.id_mobil }}</td>
                <td>{{ mobil[item.id_mobil].nama_mobil }}</td>
                <td>

                  <v-btn
                  color="green"
                  small
                  @click="confirmTransaction()"
                  >
                    Terima
                  </v-btn>

                  <v-btn
                  small
                  @click="deleteTransaction(item.id_transaksi)"
                  color="red"
                  >
                    Tolak
                  </v-btn>
                  
                </td>
              </tr>
            </tbody>

          </template>
        </v-simple-table>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Navbar from '../../components/Navbar.vue'
import gql from 'graphql-tag'

export default {
  components: {
    Navbar
  },
  data() {
    return {

    }
  },

  apollo: {

    transaksi: {
      query(){
        return gql`
            query MyQuery {
                riwayat_transaksi {
                    alamat_pembeli
                    id_mobil
                    id_riwayat_transaksi
                    laba
                    nama_mobil
                    nama_pembeli
                }
            }
        `
      }
    },

    mobil: {
      query(){
        return gql`
          query MyQuery {
            mobil {
              nama_mobil
              id_mobil
            }
          }
        `
      }
    }
  },

  methods: {
    confirmTransaction(){
      confirm('Apakah Anda Akan Menerima Transaksi ini?')
    },

    deleteTransaction(inputIdTransaction){
      confirm('Apakah Anda Akan Menolak Transaksi Ini?')
      this.$apollo.mutate({
          mutation: gql`
              mutation MyMutation($_eq: Int) {
                delete_transaksi(where: {id_transaksi: {_eq: $_eq}}) {
                  returning {
                    alamat_pembeli
                    id_mobil
                    id_transaksi
                    nama_pembeli
                    status_pembayaran
                  }
                }
              }
          `,
          variables: {
              _eq: inputIdTransaction
          }
      })
    }

  }

}
</script>

<style>
  img{
    width: 150px;
    justify-content: center;
  }
</style>