<template>
    <div class="container">
        <foil class = "avatar" :color = "color" :pic = "pic" size="128"/>
    </div>
</template>

<script>
    import Foil from '@/components/Generics/Images/FoilImage'

    export default {
        name: 'Avatar',
        data () {
            return {
                card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
            }
        },
        components: {
            'foil': Foil
        },
        props: ['pic', 'color']
    }

</script>

<style scoped>
    .avatar {
        display: inline-block;
        text-align: right;
        position: relative;
        right: -64px;
        /* top: -64px; */
        top: -8px;
        float: right;
        vertical-align: middle;
        height: 128px;
        width: 128px;
    }
</style>
