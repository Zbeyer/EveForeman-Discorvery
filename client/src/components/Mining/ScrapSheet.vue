<template>
  <div>
    <content-card pic="https://vuejsexamples.com/favicon.png"
    type="leadership"
    title="Leadership"
    subtitle="Section for the foreman"
    footnote="I love managing ops!"
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nunc risus, maximus et pharetra ut, ornare ut sapien. Ut auctor ipsum nibh, vitae varius quam ornare vulputate. Etiam tincidunt augue vitae justo rutrum, nec rhoncus nisi porta. Suspendisse accumsan, magna id volutpat scelerisque, sapien lacus dapibus erat, in cursus mi ante quis justo. Donec lacinia ultrices sem vel vulputate. Curabitur fringilla ultricies diam, vitae iaculis nunc elementum id. Donec vel sollicitudin tellus, a dictum libero. Phasellus consequat, sem id imperdiet consequat, felis diam dignissim nibh, quis maximus neque massa quis dolor. Duis eu ligula eu quam convallis suscipit."/>

    <content-card pic="https://vuejsexamples.com/favicon.png"
    type="industry"
    title="Industry"
    subtitle="Section for mining ships"
    footnote="I love mining ores!"
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nunc risus, maximus et pharetra ut, ornare ut sapien. Ut auctor ipsum nibh, vitae varius quam ornare vulputate. Etiam tincidunt augue vitae justo rutrum, nec rhoncus nisi porta. Suspendisse accumsan, magna id volutpat scelerisque, sapien lacus dapibus erat, in cursus mi ante quis justo. Donec lacinia ultrices sem vel vulputate. Curabitur fringilla ultricies diam, vitae iaculis nunc elementum id. Donec vel sollicitudin tellus, a dictum libero. Phasellus consequat, sem id imperdiet consequat, felis diam dignissim nibh, quis maximus neque massa quis dolor. Duis eu ligula eu quam convallis suscipit."/>

    <content-card pic="https://vuejsexamples.com/favicon.png"
    type="security"
    title="Security"
    subtitle="Section for combat ships"
    footnote="I love pew pew"
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nunc risus, maximus et pharetra ut, ornare ut sapien. Ut auctor ipsum nibh, vitae varius quam ornare vulputate. Etiam tincidunt augue vitae justo rutrum, nec rhoncus nisi porta. Suspendisse accumsan, magna id volutpat scelerisque, sapien lacus dapibus erat, in cursus mi ante quis justo. Donec lacinia ultrices sem vel vulputate. Curabitur fringilla ultricies diam, vitae iaculis nunc elementum id. Donec vel sollicitudin tellus, a dictum libero. Phasellus consequat, sem id imperdiet consequat, felis diam dignissim nibh, quis maximus neque massa quis dolor. Duis eu ligula eu quam convallis suscipit."/>

    <content-card pic="https://vuejsexamples.com/favicon.png"
    type="bacon"
    title="Bacon"
    subtitle="Section for who knows what"
    footnote="I am uncertain of my existance!"
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nunc risus, maximus et pharetra ut, ornare ut sapien. Ut auctor ipsum nibh, vitae varius quam ornare vulputate. Etiam tincidunt augue vitae justo rutrum, nec rhoncus nisi porta. Suspendisse accumsan, magna id volutpat scelerisque, sapien lacus dapibus erat, in cursus mi ante quis justo. Donec lacinia ultrices sem vel vulputate. Curabitur fringilla ultricies diam, vitae iaculis nunc elementum id. Donec vel sollicitudin tellus, a dictum libero. Phasellus consequat, sem id imperdiet consequat, felis diam dignissim nibh, quis maximus neque massa quis dolor. Duis eu ligula eu quam convallis suscipit."/>

  </div>
</template>

<script>
import ContentCard from '@/components/Generics/ContentCard'
    export default {
        name: 'ScrapSheet',
        data () {
            return {
                card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
            }
        },
        components: {
            'content-card': ContentCard
        }

    }
</script>

<style>

</style>
