<template>
  <v-container>
    <Navbar />
    <v-row>
      <h1 class="mx-auto mt-5">Daftar Mobil</h1>
    </v-row>

    <v-row>
      <v-col>
        <v-btn 
        class="mt-4"
        to="/tambahMobil"
        >
            Tambah Mobil
          <v-icon> mdi-plus-circle-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-simple-table class="mt-6" v-if="!isEditMode">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  ID
                </th>
                <th class="text-center">
                  Gambar
                </th>
                <th class="text-center">
                  Nama Mobil
                </th>
                <th class="text-center">
                  Warna
                </th>
                <th class="text-center">
                  Harga Beli
                </th>
                <th class="text-center">
                  Harga Jual
                </th>
                <th class="text-center">
                  Status
                </th>
                <th class="text-center">
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody class="text-center">
              <tr v-if="$apollo.loading">Loading ...</tr>
              <tr
                v-for="item in mobil" :key="item.id_mobil">
                <td>{{ item.id_mobil }}</td>
                <td><img :src="item.gambar" alt=""></td>
                <td>{{ item.nama_mobil }}</td>
                <td>{{ item.warna }}</td>
                <td>Rp. {{ item.harga_beli }}</td>
                <td>Rp. {{ item.harga_jual }}</td>
                <td>{{ item.status ? 'Terjual' : 'Tersedia' }}</td>
                <td>

                  <v-icon
                    v-if="!isEditMode"
                    medium
                    class="mr-2"
                    @click="setEditMode(item.id_mobil, item.gambar, item.nama_mobil, item.warna, item.harga_beli, item.harga_jual, item.tahun, item.bahan_bakar, item.status)"
                  >
                    mdi-pencil
                  </v-icon>

                  <v-icon
                    v-else
                    medium
                    class="mr-2"
                    @click="unsetEditMode(id_mobil)"
                  >
                    mdi-check
                  </v-icon>

                  <v-icon
                    medium
                    @click="deleteMobil(item.id_mobil)"
                  >
                    mdi-delete
                  </v-icon>
                </td>
              </tr>
            </tbody>

          </template>
        </v-simple-table>

        <v-simple-table class="mt-6" v-else>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  ID
                </th>
                <th class="text-center">
                  Gambar
                </th>
                <th class="text-center">
                  Nama Mobil
                </th>
                <th class="text-center">
                  Warna
                </th>
                <th class="text-center">
                  Harga Beli
                </th>
                <th class="text-center">
                  Harga Jual
                </th>
                <th class="text-center">
                  Tahun
                </th>
                <th class="text-center">
                  Bahan Bakar 
                </th>
                <th class="text-center">
                  Status
                </th>
                <th class="text-center">
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody class="text-center">
              <tr v-if="$apollo.loading">Loading ...</tr>
              <tr>
                <td>{{ idMobil }}</td>
                <td><img :src="editGambar" alt=""></td>
                <td><v-text-field v-model="editName" label="Nama Mobil"></v-text-field></td>
                <td><v-text-field v-model="editColor" label="Warna Mobil"></v-text-field></td>
                <td><v-text-field v-model="editPurchasePrice" label="Harga Beli"></v-text-field></td>
                <td><v-text-field v-model="editSellPrice" label="Harga Jual"></v-text-field></td>
                <td><v-text-field v-model="editYear" label="Tahun"></v-text-field></td>
                <td><v-text-field v-model="editFuel" label="Bahan Bakar"></v-text-field></td>
                <td>
                  <v-radio-group v-model="editStatus" row>
                    <v-radio label="Terjual" :value="true"></v-radio>
                    <v-radio label="Belum" :value="false"></v-radio>
                  </v-radio-group>
                </td>

                <td>
                  <v-icon
                    medium
                    class="mr-2"
                    @click="unsetEditMode()"
                  >
                    mdi-check
                  </v-icon>
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
      idMobil: '',
      editGambar: '',
      isEditMode: false,
      editName: '',
      editColor: '',
      editPurchasePrice: '',
      editSellPrice: '',
      editStatus: false,
      editYear: '',
      editFuel:'' ,
      indexNumber: ''
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

  methods: {
    setEditMode(id, gambar, name, color, purchasePrice, sellPrice, year, fuel, status){
      this.isEditMode = true
      this.editGambar = gambar
      this.idMobil = id
      this.editName = name
      this.editColor = color
      this.editPurchasePrice = purchasePrice
      this.editSellPrice = sellPrice
      this.editYear = year
      this.editFuel = fuel
      this.editStatus = status
    },

    unsetEditMode(){
      this.$apollo.mutate({
          mutation: gql`
            mutation MyMutation($bahan_bakar: String, $harga_beli: String, $harga_jual: String, $nama_mobil: String, $status: Boolean, $tahun: Int, $warna: String, $_eq: Int) {
              update_mobil(where: {id_mobil: {_eq: $_eq}}, _set: {bahan_bakar: $bahan_bakar, harga_beli: $harga_beli, harga_jual: $harga_jual, nama_mobil: $nama_mobil, status: $status, tahun: $tahun, warna: $warna}) {
                returning {
                  bahan_bakar
                  gambar
                  harga_beli
                  harga_jual
                  id_mobil
                  nama_mobil
                  status
                  tahun
                  warna
                }
              }
            }
          `,
          variables: {
              bahan_bakar: this.editFuel,
              harga_beli: this.editPurchasePrice,
              harga_jual: this.editSellPrice,
              nama_mobil: this.editName,
              status: this.editStatus,
              tahun: this.editYear,
              warna: this.editColor,
              _eq: this.idMobil
          }
      })
      this.isEditMode = false
    },

    deleteMobil(inputId){
      confirm('Apakah Anda Akan Menghapus Data Ini?')
      this.$apollo.mutate({
          mutation: gql`
              mutation MyMutation($id: Int) {
                  delete_mobil(where: {id_mobil: {_eq: $id}}) {
                      returning {
                      bahan_bakar
                      gambar
                      harga_beli
                      harga_jual
                      id_mobil
                      nama_mobil
                      status
                      tahun
                      warna
                      }
                  }
              }
          `,
          variables: {
              id: inputId
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