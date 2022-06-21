<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="ononon">123123</button>
  </div>
</template>

<script>
import {getContext} from '../api/apiHelper.js'
       
export default {
    name: 'HeaDer',
    methods: {
        ononon: function(){
            getContext().then(alert)
        }

    }
}

</script>