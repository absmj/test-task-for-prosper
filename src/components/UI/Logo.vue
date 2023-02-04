<template>
    <div class="d-flex align-items-center">
        <div class="d-inline-block align-text-top logo-small"></div>
        <span :style="style">MyLearning</span>
    </div>
</template>

<script>
    export default {
        props: {
            style: Object
        }
    }
</script>