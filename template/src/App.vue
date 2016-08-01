<template>
  <div id="app">
    <a v-link="{ path: '/counter' }">Go to counter page</a>
    <a v-link="{ path: '/page-b' }">Go to page B</a>

    <router-view></router-view>
  </div>
</template>

<script>
import store from './store';

export default {
  store: store,
  replace: false,
};
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
