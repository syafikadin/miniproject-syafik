<template>
<v-container>
    <v-row>
        <h1 class="mx-auto">Selamat Datang di Syafik's Showroom</h1>
    </v-row>
    <v-row>
        <v-col v-for="(item, index) in mobil" :key="item.id_mobil">

            <v-card
            class="mx-auto"
            max-width="500"
            height="420"
            >
            <template slot="progress">
                <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
                ></v-progress-linear>
            </template>

            <v-img
                class="mx-auto"
                max-width="200"
                :src="item.gambar"
            ></v-img>

            <v-card-title>{{ item.nama_mobil }}</v-card-title>

            <v-card-text>
                <div class="mb-4 text-subtitle-1">
                    Rp {{ item.harga_jual }}
                </div>

                <div class="text-subtitle-1">
                    Tahun : {{ item.tahun }}
                </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <!-- <v-card-title>Availability</v-card-title> -->

            <v-card-text>
                <v-chip label>{{ item.status ? 'Terjual' : 'Tersedia' }}</v-chip>
            </v-card-text>

            <v-card-actions>
                <v-btn
                v-if="item.status === false"
                block
                :to="'/detailMobil/' + index"
                >
                    View Detail for Reserve
                </v-btn>
            </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: 'indexPage',    
    data() {
        return {

        }
    },
    computed: {
        indexNumber() {
            return this.$store.state.indexNumber
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

<style>

</style>