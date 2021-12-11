<template>
    <h2>Counter</h2>
    <p> {{ counter }} <sup>2</sup> = {{ counter * counter }} </p>
    
    <div>
        <button>+1</button> 
        <button>-1</button>
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