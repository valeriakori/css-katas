<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  color: black;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  color: black;
  font-weight: 700;
}

a:hover,
a.router-link-exact-active {
  text-decoration: underline;
}
</style>
