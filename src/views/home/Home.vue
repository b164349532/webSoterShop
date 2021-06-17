<template>
<div class="nav">
  <div class="wrapper">
    <Banner />
    <HotFactory />
  </div>
  <Footer />
</div>
</template>

<script>
import Banner from './Banner'
import Footer from './Footer'
import HotFactory from './HotFactory'
export default {
  name: 'Home',
  components: { Banner, Footer, HotFactory }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.nav {
  font-size: 0.15rem;
}
.wrapper {
  position: relative;
  top: 0;
  left: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
  color: $content-fontcolor;
}
</style>
