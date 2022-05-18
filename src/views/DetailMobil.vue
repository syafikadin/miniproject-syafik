<template>
<v-container>
    <v-row>
        <v-col>
            <h1 class="text-center mt-4">Detail Mobil</h1>
            <v-btn
            color="secondary"
            to="/"
            class="mt-4"
            >
                Kembali
            </v-btn>
            <v-simple-table class="mt-5">
                <template v-slot:default>
                <tbody>
                    <tr v-if="$apollo.loading">Loading ...</tr>
                    <tr>
                        <td class="text-center" colspan="2"><img :src="mobil[indexNumber].gambar" alt="Mobil"></td>
                    </tr>
                    <tr>
                        <td>ID Mobil</td>
                        <td>{{ mobil[indexNumber].id_mobil }}</td>
                    </tr>
                    <tr>
                        <td>Nama Mobil</td>
                        <td>{{ mobil[indexNumber].nama_mobil }}</td>
                    </tr>
                    <tr>
                        <td>Warna</td>
                        <td>{{ mobil[indexNumber].warna }}</td>
                    </tr>
                    <tr>
                        <td>Harga Jual</td>
                        <td>Rp. {{ mobil[indexNumber].harga_jual }}</td>
                    </tr>
                    <tr>
                        <td>Tahun</td>
                        <td>{{ mobil[indexNumber].tahun }}</td>
                    </tr>
                    <tr>
                        <td>Bahan Bakar</td>
                        <td>{{ mobil[indexNumber].bahan_bakar }}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{{ mobil[indexNumber].status ? 'Terjual' : 'Tersedia' }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
            <v-btn class="mt-6"
            color="primary"
            :to="'/formTransaksi/' + indexNumber"
            >Beli Sekarang
            </v-btn>
        </v-col>
    </v-row>
</v-container>
</template>

<script>

import gql from 'graphql-tag'

export default {

    computed: {
        indexNumber() {
            return this.$route.params.id
        },
        indexNumber2() {
            return this.$store.state.indexNumber
        }
    },

    data() {
        return {

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

<style>

</style>