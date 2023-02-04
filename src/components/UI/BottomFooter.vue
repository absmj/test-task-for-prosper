<template>
    <footer class="px-5 pt-4">
        <div class="px-3">
            <Logo :style="{color: 'var(--test-task-color-2)'}" />
            <div class="d-flex justify-content-between">
                <div>Bütün hüquqlar qorunur | © Prosper</div>
                <small>Created by  <a target="_blank" href="https://prosperium.co.uk/">Prosper</a></small>
            </div>
        </div>       
    </footer>
</template>

<script>
    import Logo from '@/components/UI/Logo.vue'
    export default {
        components: {Logo}
    }
</script>