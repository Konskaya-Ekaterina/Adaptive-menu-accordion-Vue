<template>
  <div class="menu-mobile">
    <header-main-menu-mobile-section
        class="menu-mobile__section"
        v-for="(section, index) of menuMobile"
        :key="index"
        :section="section"
        :section-opened-id="sectionOpenedId"
        :menu-mobile-display="menuMobileDisplay"
        @hideMenuMobile="$emit('hideMenuMobile')"
        @setSectionOpenedId="sectionOpenedId = $event.navId"
    />
  </div>
</template>

<script>
import HeaderMainMenuMobileSection from "@/components/HeaderMainMenuMobileSection";

export default {
  name: "HeaderMainMenuMobile",
  components: {
    HeaderMainMenuMobileSection
  },
  props: {
    menuMobile: {
      type: Array,
      default: () => []
    },
    menuMobileDisplay: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sectionOpenedId: null,
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.menu-mobile {
  width: 100%;
  min-height: 100%;
  position: relative;
  background-color: #ffffff;
  box-shadow: inset $header-shadow;
  z-index: 180;

  &__section {
    min-width: $min-mobile-width;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #cccccc;
  }
}

</style>