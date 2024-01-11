<script>
import TagsInput from './components/Tagsinput.vue';

export default {

   data: () =>({
    jsFrameworks: ["react.js","vue.js","angular"]

   }),
   mounted(){
    setTimeout(()=> {
       this.jsFrameworks.push("svelte.js")
    }, 3000)

   }

}

</script>
<template>
  <h1>Hello! This is Sohan</h1>
 
  <tags-input :selected-tags="jsFrameworks" />
 
</template>

<style>


h1 {
  color: blue;
}
</style>
