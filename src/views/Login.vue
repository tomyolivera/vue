<template>
    <v-container>

        <v-card class="mt-3" elevation="20" shaped outlined dark>
            <h1 class="d-flex justify-center" :class="colores.login + '--text'">Login</h1>
            <br>
            <v-card-text>
                <p :class="colores.login + '--text'">Datos:</p>
                <v-form>
                    <v-text-field type="text" label="Nombre de usuario"></v-text-field>
                    <v-text-field type="password" label="Contraseña"></v-text-field>
                    <v-btn :color="colores.login" block outlined>Login</v-btn><br>
                </v-form>
                
                <v-btn :class="colores.registro" block to="registro">¿Todavía no tenés una cuenta?</v-btn>
            </v-card-text>
        </v-card>
        
    </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(['colores']),
    }
}
</script>