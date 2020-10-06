<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact/bear/squrrel">Contact</router-link><!-- ? 는 생략 가능한 전달 값 -->
  </div>
  <router-view />
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
  /**
   * to watch the change from $route when ever the page changes.
   */
  watch: {
    $route(to, from) {
      console.log(to.path, "<=", from.path);
    }
  }
})
export default class App extends Vue {
  title = "Vue Router";
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
