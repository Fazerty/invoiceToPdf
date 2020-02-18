<template>
  <div id="app" class="flex flex-col md:flex-row bg-background-primary" :class="theme">
    <div id="nav" class="flex flex-col bg-background-primary">
      <!-- <ThemeSwitcher></ThemeSwitcher> -->
      <router-link to="/" class="mt-10 mb-5">Home</router-link>
      <router-link to="/invoices" class="mb-5">Invoice</router-link>
      <router-link to="/backgroundReport">BackgroundReport</router-link>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-20"
        @click="pdfWithCSS"
        v-if="viewIsPrintable"
      >Print</button>
    </div>
    <router-view ref="view" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import ThemeSwitcher from './components/ThemeSwitcher.vue'

@Component<App>({components: {ThemeSwitcher}})
export default class App extends Vue {

  @Getter('theme')
  private theme!: string;

  /*
   * Is the selected component printable?
   * Used to display to print button.
   */
  private viewIsPrintable = false;

  private created() {
    // Checks if the selected component is printable
    this.viewIsPrintable = this.$route.name === 'Invoices' || this.$route.name === 'BackgroundReport'
  }

  @Watch('$route')
  routeUpdate() {
    // react to route changes...
    this.viewIsPrintable = this.$route.name === 'Invoices' || this.$route.name === 'BackgroundReport'
  }

  /*
   * Trigger a pdf print to the selected component
   *
   */
  private pdfWithCSS() {
    this.$store.commit('printOn');
  }
}

</script>

<style src="./assets/styles/main.css" />
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
