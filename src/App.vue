<script>
import TagsInput from './components/Tagsinput.vue';

export default {

   data: () =>({
    //jsFrameworks: ["react.js","vue.js","angular"]
    jsFrameworks: ["react.js","vue.js","angular"]

   }),
   /*
   mounted(){
    setTimeout(()=> {
       this.jsFrameworks.push("svelte.js")
    }, 3000)

   },*/
   methods: {
    handleChange(tags){
      this.jsFrameworks = [...tags];

    }

   }

};

</script>
<template>
  <h1>Hello! This is Sohan</h1>
  <div>{{ jsFrameworks }}</div>
  <!-- <tags-input :selected-tags="jsFrameworks" /> -->
  <tags-input :selected-tags="jsFrameworks" @change="handleChange"/>
 
</template>

<style>


h1 {
  color: blue;
}
</style>
