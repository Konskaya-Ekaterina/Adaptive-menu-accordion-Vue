<template>
  <header-main :menu="menu"/>
  <div class="container page-container">
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderMain from "@/components/HeaderMain";

export default {
  name: 'App',
  components: {
    HeaderMain,
  },
  data() {
    return {
      menu: [
        {
          id: 0,
          title: "Section 1",
          link: "section-1",
          items: [
            {
              id: 0,
              parentId: 0,
              title: "Item 1-1",
              link: "item-1-1",
            },
            {
              id: 1,
              parentId: 0,
              title: "Item 1-2",
              link: "item-1-2",
            },
            {
              id: 2,
              parentId: 0,
              title: "Item 1-3",
              link: "item-1-3",
            },
          ]
        },
        {
          id: 1,
          title: "Section 2",
          link: "section-2",
          items: [
            {
              id: 0,
              parentId: 1,
              title: "Item 2-1",
              link: "item-2-1",
            },
            {
              id: 1,
              parentId: 1,
              title: "Item 2-2",
              link: "item-2-2",
            },
            {
              id: 2,
              parentId: 1,
              title: "Item 2-3",
              link: "item-2-3",
            },
            {
              id: 3,
              parentId: 1,
              title: "Item 2-4",
              link: "item-2-4",
            },
            {
              id: 4,
              parentId: 1,
              title: "Item 2-5",
              link: "item-2-5",
            },
            {
              id: 5,
              parentId: 1,
              title: "Item 2-6",
              link: "item-2-6",
            }
          ]
        },
        {
          id: 2,
          title: "Section 3",
          link: "section-3",
          items: [
            {
              id: 0,
              parentId: 2,
              title: "Item 3-1",
              link: "item-3-1",
            },
            {
              id: 1,
              parentId: 2,
              title: "Item 3-2",
              link: "item-3-2",
            },
            {
              id: 2,
              parentId: 2,
              title: "Item 3-3",
              link: "item-3-3",
            },
            {
              id: 3,
              parentId: 2,
              title: "Item 3-4",
              link: "item-3-4",
            }
          ]

        },
        {
          id: 3,
          title: "Section 4",
          link: "section-4",
          items: [
            {
              id: 0,
              parentId: 3,
              title: "Item 4-1",
              link: "item-4-1",
            },
            {
              id: 1,
              parentId: 3,
              title: "Item 4-2",
              link: "item-4-2",
            },
            {
              id: 2,
              parentId: 3,
              title: "Item 4-3",
              link: "item-4-3",
            }
          ]
        }
      ]
    }
  },
}
</script>

<style lang="scss">
@import './assets/styles/index.scss';

#app {
  min-height: 100vh;
  color: $secondary-color;
  font-family: Helvetica, Arial, sans-serif;
}

.container {
  max-width: $main-container;
  width: 100%;
  margin: 0 auto;
}

.page-container {
  padding: 40px + $header-height 0 30px;
  text-align: center;

  @media (max-width: $mobile-breakpoint) {
    padding: 40px + $header-height-mobile 0 30px;
  }
}

</style>