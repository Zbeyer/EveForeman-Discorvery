<template>
    <nav>
        <v-card>
            <v-tabs background-color="accent-4" center-active dark slider-color="amber">
                <nav-link route="/" title="Landing Page" />
                <nav-link route="/scrapSheet" title="Scrap Sheet - WIP" />
            </v-tabs>
        </v-card>
    </nav>
</template>

<script>
    import NavLink from '@/components/Navigation/NavLink'
    export default {
        name: 'NavBar',
        components: {
            'nav-link': NavLink
        }
    }
</script>

<style scoped>
</style>
