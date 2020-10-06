<template>
  <div class="contact">
    <h1>This is an contact page</h1>
    {{ $route.params.foo }} <!-- 라우터 변수를 그대로 사용 -->
    {{ $route.params.bar }}
    <hr>
    {{ foo }} {{ bar }} <!-- props: [ ... ] 변수로 지정해서 사용 -->
    <hr>
    {{ myFoo }} {{ myBar }} <!-- 클래스 변수에 담아서 사용 -->
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
