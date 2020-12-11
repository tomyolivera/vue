<template>
  <v-container>
    <h1 class="text-center" :class="colores.calendario+'--text'">Mi calendario</h1>
    <v-layout :wrap="true">
        <v-flex xs12>
            <v-card>
                <v-date-picker 
                 v-model="fecha"
                 full-width
                 dark
                 :min="min"
                 :max="max"
                >
                </v-date-picker>
            </v-card><br>
            <v-card color="error" dark>
                <v-card-text class="display-1 text-xs-center">
                    {{fecha}}
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        data(){
            return{
                fecha: '',
                min: '2018',
                max: '2022',
            }
        },
        computed: {
            ...mapState(['colores'])
        }
    }
</script>