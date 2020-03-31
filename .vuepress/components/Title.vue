<template>
    <div>
        <h2>{{ mainTitle }}</h2>
        <h4>{{ description }}</h4>
        <span style="color : grey;">{{ minOfread }}</span>
    </div>
</template>
<script>
export default {
    name : 'Ttile',
    props : ['mainTitle','description','minOfread'],
}
</script>
