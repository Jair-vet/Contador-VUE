<template>
    <h2>Counter</h2>
    <p> {{ counter }} <sup>2</sup> = {{ counter * counter }} </p>
    
    <div>
        <button v-on:click="getPlusValue()">+1</button> 
        <button v-on:click="getMinusValue()">-1</button>
    </div>

</template>

<script>
    export default{
        data(){
            return{
                counter: 5
            }
        },
        methods: {
            getSquareValue(){
                return this.counter * this.counter
            },
            getPlusValue(){
                return this.counter = this.counter + 1
            },
            getMinusValue(){
                return this.counter = this.counter - 1
            }
        },
        computed: { // Propiedad computada hace que nomas se repita una sola vez el proceso
                        // Se maneja en Cache
            squareCounter(){
                return this.counter * this.counter
            }
        }
    }

</script>

<style>

    button{
        background-color: #64BB87;
        border-radius: 5px;
        border: 1px white;
        border-color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 10px 20px;
        transition: 0.3s ease-in-out;
    }
    button:hover{
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }


</style>