<template>
    <div class="my-3">
        <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="cyan" dark v-bind="attrs" v-on="on" >
                    Nuevo producto
                </v-btn>
            </template>
            <v-card>
                <errores></errores>
                <v-card-title>
                    <span class="headline">Nuevo producto</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-form @submit.prevent="agregarProducto">
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-text-field type="text" label="Nombre" v-model="nombreProducto" required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field type="number" label="Precio" v-model="precioProducto"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field type="number" label="Cantidad" v-model="cantidadProducto"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-container>
                    <v-btn color="blue darken-1" text @click="agregarProducto">
                        Guardar
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import { mapMutations, mapState, productos } from 'vuex'
    import errores from '../errores.vue';

    export default {
        components: { errores },
        name: 'agregarProducto',
        data: () => ({
            dialog: false,
            nombreProducto: '',
            precioProducto: 0,
            cantidadProducto: 0,
        }),
        computed: {
            ...mapState(['productos', 'errores', 'camposValidosProductos']),
        },
        methods: {
            ...mapMutations(['guardarProductos']),
            validarCampos(payload){
                const MIN = 0;
                const MAX_NOMBRE = 25;
                const MAX_PRECIO = 100000;

                this.errores.length = 0

                if(payload.nombre.length <= MIN || payload.nombre.length > MAX_NOMBRE){
                    this.errores.push('El campo nombre debe contener 1-' + MAX_NOMBRE + ' caracteres');
                }
                if(payload.precio <= MIN || payload.precio >= MAX_PRECIO){
                    this.errores.push('El rango del precio debe ser de 1-' + MAX_PRECIO);    
                }
                if(payload.cantidad < MIN){
                    this.errores.push('El rango de la cantidad no puede ser menor a ' + MIN);    
                }

                return payload.nombre.length > MIN && payload.nombre.length <= MAX_NOMBRE && payload.precio > MIN && payload.precio < MAX_PRECIO && payload.cantidad >= MIN;
            },
            agregarProducto(){
                let datos = {
                    nombre: this.nombreProducto,
                    precio: this.precioProducto,
                    cantidad: this.cantidadProducto
                }

                if(!this.validarCampos(datos)){
                    return;
                }

                this.errores.push('');
                this.errores.length = 0

                this.dialog = false;
                this.productos.push({nombre: this.nombreProducto, precio: this.precioProducto, cantidad: this.cantidadProducto, nombreEditando: false, precioEditando: false});
                this.nombreProducto = '';
                this.precioProducto = 0;
                this.cantidadProducto = 0;
                this.guardarProductos();
            },
        },
    }
</script>