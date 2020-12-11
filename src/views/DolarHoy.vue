<template>
    <v-container>
        <h1 class="text-center" :class="colores.dolar+'--text'">Dolar Hoy (Argentina)</h1>
        <dolar></dolar>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'
    import dolar from '../components/dolar.vue'

    export default {
        name: 'DolarHoy',
        components: { dolar },
        computed: {
            ...mapState(['colores'])
        },
    }
</script>