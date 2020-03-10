<template>
    <div>
    <content-card pic="https://vuejsexamples.com/favicon.png"
    type="security"
    title="Under Construction"
    subtitle="Eve Foreman W.I.P."
    footnote="Propper Landing Pending..."
    body="Eve Foreman intends to be an application to aide corporate mining operations and provide a suite of tools. The project is still in its early stages so please be patient as we get all our ducks in a row..."/>

    <content-card pic="https://vuejsexamples.com/favicon.png"
    type="gallente"
    title="Legal Acknowledgement"
    subtitle="Attribution and Acknowledgements"
    footnote="Covering our collective butts"
    body="This project and any any forks may be subject to <a href='https://developers.eveonline.com/resource/license-agreement'>CCP Developer License</a>. Use of static content and SSO login are intended (but not yet implemented)."/>

    <content-card pic="https://vuejsexamples.com/favicon.png"
    type="leadership"
    title="Want To Help?"
    subtitle="This is an open source project"
    footnote="A league of developers"
    body="Want to contribute? This is an open source project—-head on over to <a href='https://github.com/Zbeyer/EveForeman'>Github</a>!"/>

    </div>

</template>

<script>
import ContentCard from '@/components/Generics/ContentCard'

export default {
  name: 'Root',
  components: {
    'content-card': ContentCard
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
