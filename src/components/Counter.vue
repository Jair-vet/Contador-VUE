<template>
    <h2>{{ cutomTitle }}</h2>
    <p> {{ counter }} <sup>2</sup> = {{ counter * counter }} </p>
    
    <div>
        <button @click="increase">+1</button> 
        <button @click="decrease">-1</button>
    </div>

</template>

<script>
    export default{

        props: {
            title: String,
            start: {
                type: Number,
                default: 100,
                // required: true,
                validator( value ){
                    return value >= 0
                }
            }
        },

        data(){
            return{
                counter: this.start
            }
        },
        methods: {
            getSquareValue(){
                return this.counter * this.counter
            },
            increase(){
                this.counter++
            },
            decrease(){
                this.counter--
            }
        },
        computed: { // Propiedad computada hace que nomas se repita una sola vez el proceso
                        // Se maneja en Cache
            squareCounter(){
                return this.counter * this.counter // Siempre regresa Algo
            },
            cutomTitle(){
                return this.title || 'Counter'
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