<template>
    <v-container>

        <v-card class="mt-3" elevation="20" shaped outlined dark>
            <h1 class="d-flex justify-center" :class="colores.registro + '--text'">Registro</h1>
            <br>
            <v-card-text>
                <p :class="colores.registro + '--text'">Datos:</p>
                <v-form>
                    <v-text-field type="text" label="Nombre/s y Apellido/s"></v-text-field>
                    <v-text-field type="text" label="Nombre de usuario"></v-text-field>
                    <v-text-field type="email" label="Mail"></v-text-field>
                    <v-text-field type="password" label="Contraseña"></v-text-field>
                    <v-text-field type="password" label="Repetir contraseña"></v-text-field>
                    <v-btn :color="colores.registro" block outlined>Registrarse</v-btn><br>
                </v-form>

                <v-btn :color="colores.login" block to="login">¿Ya tenés una cuenta?</v-btn>
                
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(['colores'])
    },
}
</script>