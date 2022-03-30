<template>
  <li class="navigation__section" @mouseleave="hideMenu">
    <router-link
        :to="'/' + section.link"
        class="navigation__section-link"
        @click="hideMenu"
        @mouseenter="showMenu"
    >
      {{ section.title }}
      <span :style="menuBorderStyle" class="navigation__section-link-border"></span>
    </router-link>
    <div
        :style=" menuDisplay ? 'display: block' : 'display: none'"
        class="menu"
        @mouseleave="hideMenu"
    >
      <ul>
        <li v-for="(item, index) in section.items" :key="index" class="menu__item"
            @click="hideMenu">
          <router-link :to="item.link" class="menu__item-link">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: "HeaderMainMenu",
  props: {
    section: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      menuDisplay: false,
    };
  },
  computed: {
    menuBorderStyle() {
      return {
        width: this.menuDisplay ? '100%' : '0%',
        left: this.menuDisplay ? '0%' : '50%'
      }
    }
  },
  methods: {
    showMenu() {
      this.menuDisplay = true;
    },
    hideMenu() {
      this.menuDisplay = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.navigation {
  &__section {
    height: 100%;
    position: relative;
    font-weight: bold;
    text-transform: uppercase;

    &-link {
      $link-transition-time: 0.2s;

      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 0 15px;
      color: $secondary-color;
      transition: all $link-transition-time;

      &:hover {
        color: $primary-color;
      }

      &-border {
        height: 4px;
        position: absolute;
        bottom: -2px;
        background-color: $primary-color;
        border-radius: 10px;
        transition: all $link-transition-time;
        z-index: 110;
      }
    }
  }
}

.menu {
  min-width: 200px;
  max-width: 400px;
  position: absolute;
  top: $header-height;
  left: 0;
  padding: 25px 20px;
  background-color: #ffffff;
  box-shadow: inset $header-shadow, $header-shadow;
  z-index: 100;

  &__item {
    width: fit-content;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    &-link {
      padding: 10px 0;
      color: #000000;
      font-size: 0.8rem;
      font-weight: 700;

      &:hover {
        color: $primary-color;
      }
    }
  }
}

</style>