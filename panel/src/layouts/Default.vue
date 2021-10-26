<template>
    <div>
        
        <TheHeader />
        <Sidebar />

        <div class="px-3 py-10 md:px-10">
            <RouterView />
        </div>
    </div>
</template>

<script>
    import TheHeader from '@/components/Partials/TheHeader';
    import Sidebar from '@/components/Partials/Sidebar';

    export default {
        name: 'Default',

        components: {
            TheHeader, Sidebar
        },

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
