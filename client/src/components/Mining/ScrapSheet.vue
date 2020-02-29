<template>
    <v-layout>
        <div>
            <foil color="cyan" pic="https://vuejsexamples.com/favicon.png" />
            <foil color="red" pic="https://vuejsexamples.com/favicon.png" />
            <foil color="amber" pic="https://vuejsexamples.com/favicon.png" />
            <foil color="teal" pic="https://vuejsexamples.com/favicon.png" />
            <foil color="blue" pic="https://vuejsexamples.com/favicon.png" />
            <!-- <foil color="red" pic="@/assets/athena.png" /> -->
        </div>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                        <div> {{ card_text }} </div>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Foil from '@/components/Generics/Images/FoilImage.vue'
    export default {
        name: 'ScrapSheet',
        data () {
            return {
                card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
            }
        },
        components: {
            'foil': Foil
        }

    }
</script>

<style>
</style>
