<template>
    <div class="container">
        <img class="foil-overlay color-overlay"
        :class = "color"
        src="@/assets/foil.png"
        v-bind:style="{ backgroundImage: 'url(' + pic + ')',
        height: size + 'px',
        width: size + 'px' }"/>
    </div>
</template>

<script>
    import CircleImage from '@/components/Generics/Images/CircleImage'

    export default {
        name: 'FoilImage',
        components: {
            'circle-image': CircleImage
        },
        props: ['pic', 'color', 'size']
    }

</script>

<style scoped>
    .container {
        display: block;
        position: auto;
    }

    .color-overlay,
    .foil-overlay {
        border-radius: 50%;
    }
    .color-overlay {
        background-blend-mode: overlay;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center; /* Center the image */
    }

</style>
