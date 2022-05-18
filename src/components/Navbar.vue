<template>
  <v-app-bar
      app
    >
      <div class="d-flex align-center ml-5">
        Syafik Showroom
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
        to="/admin/"
      >
        <span class="mr-2">Dashboard</span>
      </v-btn>

      <v-btn
        text
        to="/admin/listCars"
      >
        <span class="mr-2">Daftar Mobil</span>
      </v-btn>

      <v-btn
        text
        to="/admin/inTransaction"
      >
        <span class="mr-2">Transaksi Masuk</span>
      </v-btn>

      <v-btn
        text
        to="/admin/transactionHistory"
      >
        <span class="mr-2">Riwayat Transaksi</span>
      </v-btn>



    </v-app-bar>
</template>

<script>
export default {
    name: 'navbarPage'
}
</script>

<style>

</style>