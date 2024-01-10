<template>
  
  <!--   <div v-text="tags.length"></div>  -->
 <!--  <div v-if="!tags.length">You have no any tags. Enter it in the input.</div> -->
    <div v-for="(tag, index) in tags">{{ index + " : " + tag}}</div>

    <!-- <input type="text" v-bind:value="newTag"/> -->
   <!-- 
     <input 
    type="text" 
    :value="newTag" 
    v-on:keydown.enter="tags.push($event.target.value)"
    v-on:keydown.tab.prevent="tags.push($event.target.value)"
    
    />
    -->
    <input 
    type="text" 
    :value="newTag" 
    @keydown.enter="tags.push($event.target.value)"
    @keydown.tab.prevent="tags.push($event.target.value)"
    
    />
    <!-- <button v-on:click="tags.push(newTag)">OK</button> -->
</template>
<script>

export default {
    data: () =>({
        //tags:["vue", "react", "angular"]
        //tags:[]
        tags:["vue", "react", "angular"],
        newTag: "preact"
    })

}

</script>