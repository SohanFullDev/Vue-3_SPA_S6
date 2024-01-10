<template>
    <!-- <div>{{ tags }}</div>
    <div>{{ tags.length}}</div> -->
    <div>{{ 2+2 }}</div>
    <div>{{ tags[0].toUpperCase()}}</div>

    <input type="text" />
</template>
<script>

export default {
    data: () =>({
        tags:["vue", "react", "angular"]
    })

}

</script>