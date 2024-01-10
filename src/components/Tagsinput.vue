<template>
  
    <div v-for="(tag, index) in tags">{{ index + " : " + tag}}</div>
    <hr>
    {{ newTag }}

    <input 
    type="text" 
    v-model.trim="newTag"
    @keydown.enter="addNewTag"
    @keydown.tab.prevent="addNewTag"
    
    />
    
</template>
<script>

export default {
    data: () =>({
        //tags:["vue", "react", "angular"]
        //tags:[]
        tags:["vue", "react", "angular"],
        newTag: "preact"
    }),
    methods: {

        addNewTag(){
            if(this.newTag){
                this.tags.push(this.newTag)
                this.newTag = ""

            }
            
        }
    }

}

</script>