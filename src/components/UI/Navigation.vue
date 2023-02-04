<template>
    <nav class="navbar navigation">
        <div class="container-fluid px-5">
            <Logo :style="{color: 'var(--test-task-color-1)'}" />
            <strong id="profile-name">
                Əli.M
            </strong>
        </div>
    </nav>
</template>

<script>
    import Logo from '@/components/UI/Logo.vue'
    export default {
        components: {Logo}
    }
</script>