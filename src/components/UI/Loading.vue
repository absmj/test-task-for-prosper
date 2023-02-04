<template>
    <div class="loading">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style scoped>
    .loading {
        min-width: 100vw;
        min-height: 100vh;
        overflow: hidden;
        position: fixed;
        display: flex;
        top: 0;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        background-color: var(--test-task-color-2);
        z-index: 100;
    }
</style>

<script>
    export default {
        name: 'Loading'
    }
</script>