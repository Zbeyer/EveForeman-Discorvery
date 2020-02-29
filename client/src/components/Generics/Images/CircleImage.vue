<template>
    <span>
      <img class="avatar" :src="pic">
    </span>
</template>

<script>
export default {
  name: 'CircleImage',
  props: {
    pic: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.avatar, .circle-image {
    border-radius: 50%;
}
</style>
