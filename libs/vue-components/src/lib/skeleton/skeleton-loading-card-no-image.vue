<template>
  <goa-card
    data-skeleton
    title="Lorem ipsum dolor sit amet elit"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  >
    Lorem ipsum dolor sit amet
  </goa-card>
</template>

<script lang="typescript">

import GoACard from '../card/card.vue';

export default {
  name: 'skeleton-loading-no-image',
  components: {
    'goa-card': GoACard,
  },
  props: {
  }
}
</script>

<style lang="scss" scoped>
@import './skeleton-element.scss';
</style>
