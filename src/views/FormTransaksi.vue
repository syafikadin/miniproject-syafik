<template>
<v-container>
    <v-row>
    <v-col>
        <h1 class="text-center mt-5">Form Pembelian Mobil</h1>
        <v-btn
        color="secondary"
        :to="'/detailMobil/' + indexNumber"
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
                        <td>Nama Pembeli</td>
                        <v-text-field v-model="namaPembeli" required></v-text-field>
                    </tr>
                    <tr>
                        <td>Alamat Pembeli</td>
                        <v-text-field v-model="alamatPembeli" required></v-text-field>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>

            <div v-if="!isConfirm">
                <v-btn
                class="mt-6"
                color="primary"
                @click="createTransaction()"
                >Konfirmasi Data
                </v-btn>
            </div>

            <div v-else>
                <h2>Data Terkonfirmasi</h2>
                <v-btn
                class="mt-6"
                color="green"
                to="/confirmPayment/2"
                >
                Lanjut Pembayaran
                </v-btn>
            </div>

    </v-col>
</v-row>
</v-container>
</template>

<script>
import gql from 'graphql-tag'
export default {
    data() {
        return {
            namaPembeli: '',
            alamatPembeli: '',
            statusPembayaran: false,
            isConfirm: false
        }
    },
    computed: {
        indexNumber() {
            return this.$route.params.id
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
        },
    },
    
    methods: {
        createTransaction() {
            confirm('Apakah Data yang Diinputkan Sudah Benar?')
            this.$apollo.mutate({
                mutation: gql`
                    mutation MyMutation($alamat_pembeli: String, $nama_pembeli: String, $id_mobil: Int) {
                        insert_transaksi(objects: {alamat_pembeli: $alamat_pembeli, nama_pembeli: $nama_pembeli, id_mobil: $id_mobil}) {
                            returning {
                            alamat_pembeli
                            id_transaksi
                            nama_pembeli
                            status_pembayaran
                            }
                        }
                    }
                `,
                variables: {
                    nama_pembeli: this.namaPembeli,
                    alamat_pembeli: this.alamatPembeli,
                    id_mobil: this.$route.params.id
                }
            })
            this.isConfirm = true
        },
    }
}
</script>

<style>

</style>