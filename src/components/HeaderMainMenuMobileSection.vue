<template>
  <div class="section-mobile" @click="setSectionOpenedId(section.id)">
    <div
        class="section-mobile__header"
        @click="sectionOpened = !sectionOpened"
    >
      <div
          class="section-mobile__header-title"
          @click.stop="hideSection"
      >
        <router-link :to="section.link">
          {{ section.title }}
        </router-link>
      </div>
      <div :style="sectionOpened ? 'transform: rotate(-180deg)' : ''" class="section-mobile__header-btn-toggle">
        <div class="section-mobile__header-btn-toggle-item"></div>
        <div class="section-mobile__header-btn-toggle-item"></div>
      </div>
    </div>
      <ul :style="sectionMobileStyle"
          class="section-mobile__list">
        <li
            v-for="(item, index) in section.items"
            :key="index"
            class="section-mobile__list-item"
            @click="hideSection"
        >
          <router-link :to="item.link">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderMainMenuMobileSection",
  props: {
    section: {
      type: Object,
      default: () => {
      }
    },
    sectionOpenedId: {
      type: [Number, null]
    },
    menuMobileDisplay: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sectionOpened: false,
      currentSectionOpenedId: null
    };
  },
  watch: {
    sectionOpenedId() {
      //Закрытие секции, если клик по другой секции
      if (this.sectionOpenedId !== this.section.id) {
        this.sectionOpened = false;
      }
      this.currentSectionOpenedId = this.sectionOpenedId;
    },
    menuMobileDisplay() {
      if (!this.menuMobileDisplay) {
        this.sectionOpened = false;
      }
    },
  },
  computed: {
    sectionMobileStyle() {
      return {
        'max-height': this.checkSectionOpened ? '100vh' : 0,
        opacity: this.checkSectionOpened ? 1 : 0
      }
    },
    checkSectionOpened() {
      return this.sectionOpened && (this.currentSectionOpenedId === this.section.id);
    },
  },
  methods: {
    hideSection() {
      this.sectionOpened = false;
      this.$emit("hideMenuMobile");
    },
    setSectionOpenedId(navId) {
      this.$emit("setSectionOpenedId", {navId});
    },
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.section-mobile {
  $show-menu-animation-time: 0.3s;

  &__header {
    max-width: $mobile-container;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 15px 10px;

    &-title {
      font-size: 1.2rem;
      font-weight: 700;

      > a {
        color: $secondary-color;
      }
    }

    &-btn-toggle {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all $show-menu-animation-time;

      &-item {
        width: 15px;
        height: 3px;
        position: relative;
        background-color: $secondary-color;
        border-radius: 10px;

        &:first-child {
          left: 3px;
          transform: rotate(-45deg);
        }

        &:last-child {
          right: 3px;
          transform: rotate(45deg);
        }
      }
    }
  }

  &__list {
    max-width: $mobile-container;
    margin: 0 auto;
    transition: all $show-menu-animation-time ease;

    &-item {
      width: fit-content;
      padding: 15px;

      &:last-child {
        margin-bottom: 10px;
      }

      > a {
        font-size: 1rem;
        color: $secondary-color;
      }
    }
  }
}


</style>