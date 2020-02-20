<template>
  <div id="app">
    <HelloWorld msg="Hello Vue in CodeSandbox!" />
    <!--<svg class="sunrise" ersion="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.89 1190.55" style="enable-background:new 0 0 841.89 1190.55;" xml:space="preserve">
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
    </svg>-->
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
@import url("https://fonts.googleapis.com/css?family=Nunito:400,700");

* {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.sunrise {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 600px;
  height: 600px;
}
#app {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
}

h1,
h2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
html {
  background-color: black;
  width: 100%;
  overflow-x: hidden;
}
body {
  width: 60%;
  margin: auto;
}

button {
  width: 25em;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: rgba(00, 00, 00, 00);
}

button div{
  margin: auto;
  position: relative;
  border-radius: 2em;
  padding: 1.5em;
  width: 9em;
  background-color: rgb(255, 255, 255);
  font-size: 2em;
  overflow: hidden;
  transition: 0.4s ease-out;
}

button:hover div {
  width: 6em;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 0.2em;
}

button:focus div {
  width: 5em;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 5em;
}

button:active p {
  background-color: rgba(77, 84, 122, 0.459);
}

button p {
  position: absolute;
  left: 0;
  right: 0;
  top: 0em;
  padding-top: 0.9em;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(255, 255, 255, 0);
  transition: 0.4s ease-out;
}

button p:nth-of-type(1),
button p:nth-of-type(2) {
  clip-path: circle(0% at 0% 0%);
  width: 100%;
  height: 100%;
}

button:focus p:nth-of-type(1),
button:hover p:nth-of-type(2) {
  clip-path: circle(140% at 0% 0%);
  opacity: 1;
}

button p:nth-of-type(2) {
  background-color: pink;
  z-index: 3;
}

button p:nth-of-type(1) {
  background-color: rgb(0, 38, 255);
  color: white;
  z-index: 4;
}

@media only screen and (max-width: 1430px) {
  body {
    width: 90%;
  }
}
</style>
