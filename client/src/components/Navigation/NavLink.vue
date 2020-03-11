<template>
        <v-tab :to="route">
            <!-- <router-link  class="nav-link">
                <span> -->
                    {{title}}
                <!-- </span>
            </router-link> -->
        </v-tab>
</template>

<script>
    export default {
        name: 'NavLink',
        props: ['route', 'title']
    }

</script>

<style scoped>
</style>
