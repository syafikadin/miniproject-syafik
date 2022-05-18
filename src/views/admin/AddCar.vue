<template>
<v-container>
    <v-row>
        <v-col>
            <v-btn
            to="/admin/listCars"
            class="mb-4"
            >
                Kembali
            </v-btn>
            <h1 class="text-center">Tambah Data Mobil</h1>
            <v-form @submit.prevent="createMobil">
                <v-text-field
                    v-model="namaMobil"
                    label="Nama Mobil"
                    required
                ></v-text-field>
            
                <v-text-field
                    v-model="warna"
                    label="Warna"
                    required
                ></v-text-field>
            
                <v-text-field
                    v-model="hargaBeli"
                    label="Harga Beli"
                    required
                ></v-text-field>
            
                <v-text-field
                    v-model="hargaJual"
                    label="Harga Jual"
                    required
                ></v-text-field>
            
                <v-text-field
                    v-model="tahun"
                    label="Tahun"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="bahanBakar"
                    label="Bahan Bakar"
                    required
                ></v-text-field>

                <!-- <img :src="previewImage" v-if="previewImage">
                <v-file-input
                    label="Gambar Mobil"
                    filled
                    prepend-icon="mdi-camera"
                    v-on:change="upload"
                ></v-file-input> -->

                <!-- <div>
                    <img :src="previewImage" v-if="previewImage">
                    <v-input 
                    type="file" 
                    v-on:change="upload"
                    label="Masukkan Gambar"
                    prepend-icon="mdi-camera"
                    >

                    </v-input>
                    <v-input></v-input>
                </div> -->

                <div>
                    <img :src="previewImage" v-if="previewImage">
                    <label>Masukkan Gambar</label><br>
                    <input type="file" v-on:change="upload">
                </div>

                <v-btn type="submit">Tambahkan</v-btn>
            </v-form>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import gql from 'graphql-tag'
export default {
    data() {
        return {
            namaMobil: '',
            warna: '',
            hargaBeli: '',
            hargaJual: '',
            tahun: '',
            bahanBakar: '',
            gambar: '',
            previewImage: '',
        }
    },

    methods: {
        upload(event){
            const namaGambar = event.target.files[0].name
            this.gambar = namaGambar
            this.previewImage = URL.createObjectURL(event.target.files[0])
        },
        createMobil() {
            this.$apollo.mutate({
                mutation: gql`
                    mutation insertMobil($bahan_bakar: String, $gambar: String, $harga_beli: String, $harga_jual: String, $nama_mobil: String, $tahun: Int, $warna: String) {
                        insert_mobil(objects: {bahan_bakar: $bahan_bakar, gambar: $gambar, harga_beli: $harga_beli, harga_jual: $harga_jual, nama_mobil: $nama_mobil, tahun: $tahun, warna: $warna}) {
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
                    nama_mobil: this.namaMobil,
                    bahan_bakar: this.bahanBakar,
                    warna: this.warna,
                    harga_beli: this.hargaBeli,
                    harga_jual: this.hargaJual,
                    tahun: this.tahun,
                    gambar: this.gambar
                }
            })
        },

        
    },
}
</script>

<style>

</style>