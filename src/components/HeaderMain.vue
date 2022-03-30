<template>
  <header class="header">
    <div class="container">
      <div @click="hideMenuMobile">
        <router-link to="/">
          <img
              alt="Логотип сайта"
              class="header__logo"
              src="../assets/images/logo.png"
          />
        </router-link>
      </div>
      <nav class="header-navigation">
        <ul class="header-navigation__links">
          <header-main-menu v-for="(section, index) in menu" :key="index" :section="section"/>
        </ul>
      </nav>
      <div class="header-navigation-mobile">
        <div class="header-navigation-mobile__btn" @click="toggleMenuMobile">
          <div
              v-for="block in 3"
              :key="block"
              class="header-navigation-mobile__btn-item"
          ></div>
        </div>
        <nav
            class="header-navigation-mobile__menu"
            :style="menuMobileDisplay ? 'transform: translate(0)' : 'transform: translate(100%)'"
        >
          <header-main-menu-mobile
              :menu-mobile="menu"
              :menu-mobile-display="menuMobileDisplay"
              @hideMenuMobile="hideMenuMobile"
          />
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderMainMenu from "@/components/HeaderMainMenu";
import HeaderMainMenuMobile from "@/components/HeaderMainMenuMobile";

export default {
  name: "HeaderMain",
  components: {
    HeaderMainMenu,
    HeaderMainMenuMobile
  },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      menuDisplay: false,
      menuMobileDisplay: false,
    };
  },
  methods: {
    toggleMenuMobile() {
      const menuBtnItems = document.documentElement.querySelectorAll('.header-navigation-mobile__btn-item')
      if (this.menuMobileDisplay) {
        this.menuMobileDisplay = false

        // классы для добавления анимаций кнопке меню
        for (let btnItem of menuBtnItems) {
          btnItem.classList.remove('header-navigation-mobile__btn-item-open')
          btnItem.classList.add('header-navigation-mobile__btn-item-close')
          setTimeout(() => {
            btnItem.classList.remove('header-navigation-mobile__btn-item-close')
          }, 500)
        }
      } else {
        this.menuMobileDisplay = true

        for (let btnItem of menuBtnItems) {
          btnItem.classList.remove('header-navigation-mobile__btn-item-close')
          btnItem.classList.add('header-navigation-mobile__btn-item-open')
        }
      }
    },
    hideMenuMobile() {
      if (!this.menuMobileDisplay) return

      this.menuMobileDisplay = false

      const menuBtnItems = document.documentElement.querySelectorAll('.header-navigation-mobile__btn-item')
      for (let btnItem of menuBtnItems) {
        btnItem.classList.remove('header-navigation-mobile__btn-item-open')
        btnItem.classList.add('header-navigation-mobile__btn-item-close')
        setTimeout(() => {
          btnItem.classList.remove('header-navigation-mobile__btn-item-close')
        }, 500)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.header {
  width: 100vw;
  height: $header-height;
  position: fixed;
  background-color: #ffffff;
  box-shadow: $header-shadow;
  z-index: 100;

  @media (max-width: $mobile-breakpoint) {
    min-width: $min-mobile-width;
    height: $header-height-mobile;
  }

  .container {
    max-width: $main-container;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: $mobile-breakpoint) {
      max-width: $mobile-container;
      padding: 0 10px;
    }
  }

  &__logo {
    position: relative;
    top: 3px;
    height: 75px;
    padding-left: 15px;

    @media (max-width: $mobile-breakpoint) {
      height: 44px;
    }
  }

  &-navigation {
    min-width: 65%;
    height: $header-height;

    @media (max-width: $mobile-breakpoint) {
      display: none;
    }

    &__links {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: $secondary-color
    }

    &-mobile {
      display: none;

      @media (max-width: $mobile-breakpoint) {
        display: block;
      }

      //ширина кнопки меню
      $button-width: 30px;

      // ширина между элементами
      $bottom-position: 16px;
      $middle-position: $bottom-position / 2;

      $animation-time: 0.3s;

      &__btn {
        width: $button-width;
        height: $bottom-position + 4px;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-item {
          width: $button-width;
          height: 3px;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          background-color: $secondary-color;
          border-radius: 10px;

          &:nth-child(1) {
            top: 0;
          }

          &:nth-child(2) {
            top: $middle-position;
          }

          &:nth-child(3) {
            top: $bottom-position
          }

          &-close {
            &:nth-child(1) {
              top: 0;
              animation: btn-toggle-top-close $animation-time forwards;
            }

            &:nth-child(2) {
              top: $middle-position;
              animation: btn-toggle-middle-close $animation-time forwards;
            }

            &:nth-child(3) {
              top: $bottom-position;
              animation: btn-toggle-bottom-close $animation-time forwards;
            }
          }

          &-open {
            &:nth-child(1) {
              top: 0;
              animation: btn-toggle-top-open $animation-time forwards;
            }

            &:nth-child(2) {
              top: $middle-position;
              animation: btn-toggle-middle-open $animation-time forwards;
            }

            &:nth-child(3) {
              top: $bottom-position;
              animation: btn-toggle-bottom-open $animation-time forwards;
            }
          }
        }

        @keyframes btn-toggle-top-open {
          0% {
            top: 0
          }
          50% {
            top: $middle-position;
            transform: rotate(0);
          }
          100% {
            top: $middle-position;
            transform: rotate(45deg);
          }
        }

        @keyframes btn-toggle-middle-open {
          0% {
            opacity: 1
          }

          60%, 100% {
            opacity: 0
          }
        }

        @keyframes btn-toggle-bottom-open {
          0% {
            top: $bottom-position
          }
          50% {
            top: $middle-position;
            transform: rotate(0);
          }
          100% {
            top: $middle-position;
            transform: rotate(-45deg);
          }
        }

        @keyframes btn-toggle-top-close {
          0% {
            top: $middle-position;
            transform: rotate(45deg);
          }
          50% {
            top: $middle-position;
            transform: rotate(0);
          }
          100% {
            top: 0;
          }
        }

        @keyframes btn-toggle-middle-close {
          0% {
            opacity: 0
          }

          60%, 100% {
            opacity: 1
          }
        }

        @keyframes btn-toggle-bottom-close {
          0% {
            top: $middle-position;
            transform: rotate(-45deg);
          }
          50% {
            top: $middle-position;
            transform: rotate(0);
          }
          100% {
            top: $bottom-position;
          }
        }
      }

      &__menu {
        width: 100vw;
        height: calc(100vh - 60px);
        position: absolute;
        top: $header-height-mobile;
        right: 0;
        transition: all $animation-time;
      }
    }
  }
}


</style>