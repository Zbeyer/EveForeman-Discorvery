<template>
    <div id="app">
        <v-app>
            <!-- <v-navigation-drawer app></v-navigation-drawer> -->
            <!-- <v-toolbar app></v-toolbar> -->
            <app-header />
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
    import AppHeader from '@/components/Header/AppHeader'
    import AppFooter from '@/components/Footer/AppFooter'
    import NavBar from '@/components/Navigation/NavBar'

    export default {
        name: 'app',
        components: {
            'app-header': AppHeader,
            'nav-bar': NavBar,
            'app-footer': AppFooter
        }
    }

</script>

<style>
    body {
        background-color: black;
        font-family: Helvetica, Arial, sans-serif;
    }
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        background-color: transparent;
    }

    .danger-alert {
        color: red;
    }

    .content {
        background-color: #161D27;
        padding: 1rem;
        text-align: left;
        padding: 2rem;
    }

    .content hr {
        border: 1px solid rgba(255,193,7,0.33);
        margin-right: 5rem;
        margin-bottom: 1rem;
    }

    .content-title, .content-subtitle, .content-footnote, .content-body, .content hr {
        position: relative;
        display: block;
        margin-left: 1rem;
    }
    .content-title {
        float: top;
        color: white;
        font-weight: 100;
        font-size: 2.5rem;
        line-height: 2.25rem;
    }

    .content-subtitle {
        font-weight: bold;
        font-size: 1.75rem;
        text-transform: uppercase;
        line-height: 1.45rem;
    }

    .content-footnote {
        color: white;
        font-size: 1.25rem;
        line-height: 1.25rem;
    }

    .content-body {
        font-size: 1.25rem;
        color: rgba(144,164,174 ,1);
    }

    .bordered {
        border-color: rgba(255,193,7,0.33);
        border-style: solid;
        border-width: 1px;
        border-radius: 8px;
    }

</style>
