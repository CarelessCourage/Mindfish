<template>
  <div id="app">
    <HelloWorld msg="Hello Vue in CodeSandbox!" />
    <svg class="sunrise" ersion="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.89 1190.55" style="enable-background:new 0 0 841.89 1190.55;" xml:space="preserve">
      <radialGradient id="SVGID_1_" cx="421.9598" cy="553.2001" r="482.1316" gradientUnits="userSpaceOnUse">
        <stop  offset="0" style="stop-color:#CF7700"/>
        <stop  offset="0.1465" style="stop-color:#D65E3F;stop-opacity:0.8143"/>
        <stop  offset="0.3208" style="stop-color:#DE4282;stop-opacity:0.5936"/>
        <stop  offset="0.4786" style="stop-color:#E42DB8;stop-opacity:0.3936"/>
        <stop  offset="0.6142" style="stop-color:#E81DDF;stop-opacity:0.2219"/>
        <stop  offset="0.7223" style="stop-color:#EB14F6;stop-opacity:0.0849"/>
        <stop  offset="0.7894" style="stop-color:#EC10FF;stop-opacity:0"/>
      </radialGradient>
      <circle style="fill:url(#SVGID_1_);" cx="414.5" cy="559.05" r="343.5"/>
    </svg>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
.sunrise {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 600px;
  height: 600px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  background-color: black;
  width: 100vw;
  overflow-x: hidden;
}
body {
  width: 70%;
  margin: auto;
}
@media only screen and (max-width: 850px) {
  body {
    width: 90%;
  }
}
</style>
