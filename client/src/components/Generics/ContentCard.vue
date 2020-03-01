<template>
    <v-layout :class="type">
        <v-flex xs12 sm6 offset-sm3>
            <avatar :color="this.avatar_color" :pic="pic" />
            <div class="content bordered">
                <span class="content-title">{{title}}</span>
                <span class="content-subtitle">{{subtitle}}</span>
                <span class="content-footnote">{{footnote}}</span>
                <hr>
                <span class="content-body">{{body}}</span>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    import Foil from '@/components/Generics/Images/FoilImage'
    import Avatar from '@/components/Generics/Images/Avatar'

    export default {
        name: 'ContentCard',
        components: {
            'foil': Foil,
            'avatar': Avatar
        },
        props: ['pic', 'title', 'subtitle', 'footnote', 'body', 'type'],
        data () {
            var color = 'red'
            switch (this.type) {
                case 'leadership':
                    color = 'blue'
                    break
                case 'security':
                    color = 'red'
                    break
                case 'bacon':
                    color = 'orange'
                    break
                case 'industry':
                    color = 'amber'
                    break
                default:
                    color = 'brown'
                    break
            }
            return {
                avatar_color: color
            }
        }
    }

</script>

<style>
    .industry .content-subtitle {
        color: rgba(255, 193, 7, 1);
    }

    .leadership .content-subtitle {
        color: rgba(0, 188, 212, 1);
    }

    .security .content-subtitle {
        color: rgba(244, 67, 54, 1);
    }

    .bacon .content-subtitle {
        color: rgba(255, 152, 0, 1);
    }

</style>
