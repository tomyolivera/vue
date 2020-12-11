<template>
  <div class="d-flex justify-center">
    <div v-for="(dolar, id) of dolares" :key="id">
        <v-card class="ma-2" :class="dolar.casa.nombre == 'Dolar Blue' ? 'blue darken-4' : 'green darken-3' " width="300" height="300" v-if="id < 2">
            <v-card-title class="text-h3 white--text">{{ dolar.casa.nombre }}</v-card-title>
            <v-card-text>
                <span class="text-h5 yellow--text">Precio compra: ${{ dolar.casa.compra.split(',')[0] }}</span><br>
                <span class="text-h5 orange--text">Precio venta: ${{ dolar.casa.venta.split(',')[0] }} </span>
            </v-card-text>
        </v-card>
    </div>
  </div>
</template>

<script>
    import { mapMutations, mapState } from 'vuex';
    import axios from "axios";

    export default {
        name: 'Dolar',
        data(){
            return {
                dolares: [],
            }
        },
        methods: {
            getDolar(){
                try {     
                    axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
                    .then(res => {
                        this.dolares = res.data;
                    })
                } catch (error) {
                    this.mostrarLoading({mensaje: 'No se pudieron cargar los datos: ' + error, color: 'error'});

                    setTimeout(() => {
                        this.ocultarLoading();
                    }, 3000);
                }
            }
        },
        created(){
            this.getDolar();
        }
    }
</script>