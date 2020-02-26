<template>
    <div id="app">
        <v-app>
            <!-- <v-navigation-drawer app></v-navigation-drawer> -->
            <!-- <v-toolbar app></v-toolbar> -->
            <nav-bar />
            <!-- <v-content> -->
            <!-- <v-container fluid> -->
            <router-view></router-view>
            <!-- </v-container> -->
            <!-- </v-content> -->
            <!-- <v-footer app></v-footer> -->
            <app-footer />
        </v-app>
    </div>
</template>

<script>
    import NavBar from '@/components/Navigation/NavBar'
    import AppFooter from '@/components/Footer/AppFooter'

    export default {
        name: 'app',
        components: {
            'nav-bar': NavBar,
            'app-footer': AppFooter
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .danger-alert {
        color: red;
    }

</style>
