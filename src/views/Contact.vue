<template>
  <div class="contact">
    <h1>This is an contact page</h1>
    {{ $route.params.foo }}
    {{ $route.params.bar }}
    <hr>
    {{ foo }} {{ bar }}
    <hr>
    {{ myFoo }} {{ myBar }}
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component"
@Options({
    props: ['foo', 'bar']
})
export default class Contact extends Vue {
    myFoo = '';
    myBar = '';
    created() {
        this.myFoo = this.$route.params.foo; // myFoo 밑에 빨간줄이 생기지만 된다.
        this.myBar = this.$route.params.bar; // myBar 밑에 빨간줄이 생기지만 된다.
    }
}
</script>
