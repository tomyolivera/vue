<template>
    <div>
        <v-alert v-for="(producto, id) of productos" :key="producto.id" :color="checkStock(id) ? 'cyan' : 'purple' " dark>
            <div class="d-flex justify-space-between">
                <div class="d-flex justify-content-between">
                    <div @keyup.enter="editarNombre(id)" v-if="producto.nombreEditando">
                        <v-text-field v-model="nombreEditarProducto" label="Nombre"></v-text-field>
                    </div>
                    <div @click="producto.nombreEditando = true" v-if="!producto.nombreEditando">
                        <span>Nombre: {{producto.nombre}}</span>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <div @keyup.enter="editarPrecio(id)" v-if="producto.precioEditando">
                        <v-text-field type="number" v-model="precioEditarProducto" label="Precio"></v-text-field>
                    </div>
                    <div @click="producto.precioEditando = true" v-if="!producto.precioEditando">
                        <span>Precio: ${{producto.precio}}</span>
                    </div>
                </div>

                <div> 
                    <v-btn color="accent" @click="reiniciarProducto(id)" v-if="checkStock(id)">Reiniciar</v-btn>
                    <v-btn class="dark ma-3" @click="disminuir(id)" v-if="checkStock(id)">-</v-btn>
                    <span class="ma-2" v-if="producto.cantidad == 0">
                        No hay stock
                    </span>
                    <span class="ma-2" v-if="producto.cantidad > 0">
                        Stock: {{producto.cantidad}}
                    </span>
                    <v-btn @click="aumentar(id)" class="blue ma-3">+</v-btn>
                    <v-btn color="yellow" light @click="eliminar(id)">Eliminar</v-btn>
                </div>
            </div>
        </v-alert>
        
    </div>
</template>

<script>
    import { mapMutations, mapState } from "vuex";
    import axios from 'axios';

    export default {
        name: 'listaProductos',
        data(){
            return {
                nombreEditarProducto: '',
                precioEditarProducto: '',
            }
        },
        computed: {
            ...mapState(['productos'])
        },
        methods: {
            ...mapMutations(['guardarProductos']),
            aumentar(id){
                this.productos[id].cantidad++;
                this.guardarProductos();
            },
            disminuir(id){
                this.productos[id].cantidad--;
                this.guardarProductos();
            },
            checkStock(id){
                return this.productos[id].cantidad > 0;
            },
            reiniciarProducto(id){
                this.productos[id].cantidad = 0;
                this.guardarProductos();
            },
            validarCampos(){
                return this.nombreEditarProducto.length > 0 &&  this.nombreEditarProducto.length <= 25 || this.precioEditarProducto > 0 && this.precioEditarProducto < 100000;
            },
            editarNombre(id){
                this.productos[id].nombreEditando = false;
                if(!this.validarCampos()){return}
                this.productos[id].nombre = this.nombreEditarProducto;
                this.nombreEditarProducto = '';
                this.guardarProductos();
            },
            editarPrecio(id){
                this.productos[id].precioEditando = false;
                if(!this.validarCampos()){return}
                this.productos[id].precio = this.precioEditarProducto;
                this.precioEditarProducto = 1;
                this.guardarProductos();
            },
            eliminar(id){
                this.productos.splice(id, 1);
                this.guardarProductos();
            },
        },
    }
</script>