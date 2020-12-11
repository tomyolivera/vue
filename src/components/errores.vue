<template>
    <div v-if="errores.length">
        <v-alert type="error" v-for="(error, id) of errores" :key="id">
            {{ error }}
        </v-alert>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        name: 'errores',
        computed: {
            ...mapState(['errores'])
        }
    }
</script>