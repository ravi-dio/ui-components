<template>
  <p class="goa-hero-banner-content" role="note">
    {{ content }}
  </p>
</template>
<script lang="typescript">

export default {
  name: 'goa-hero-banner-content',
  props: {

    /**
     * Hero banner description
     */
    content: {
      type: String,
      required: false,
    },
  },
  data() {
    return { };
  },
};
</script>
<style lang="scss" scoped>
@import '../../../../core-css/src/lib/styles/hero-banner/content/hero-banner-content.scss';
</style>
