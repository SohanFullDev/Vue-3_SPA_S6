<template>
  
  <!--   <div v-text="tags.length"></div>  -->
  <div v-if="!tags.length">You have no any tags. Enter it in the input.</div>

    <input type="text" />
</template>
<script>

export default {
    data: () =>({
        //tags:["vue", "react", "angular"]
        tags:[]
    })

}

</script>