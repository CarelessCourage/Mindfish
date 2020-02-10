<template>
  <div class="root">
    <div class="menu" :class="{open: menu}">
      <div class="v" @click="menu = !menu"></div>
      <transition name="slide" mode="out-in">
        <ul v-if="menu">
          <li>Home</li>
          <li>Order</li>
          <li>Profile</li>
        </ul>
      </transition>
    </div>

    <h2 id="one">Read my mind</h2>
    <h2 id="two">Sushi is nice</h2>
    <div class="shape" @click="list = !list"></div>
    <h1 id="name">mindfish</h1>

    <div class="categories">
      <div @click="category.position = 'transform: translate(0%);'">
        <div class="icon"></div>
        <p>Side</p>
      </div>
      <div @click="category.position = 'transform: translate(101%);'">
        <div class="icon"></div>
        <p>Sushi</p>
      </div>
      <div @click="category.position = 'transform: translate(203%);'">
        <div class="icon"></div>
        <p>Drinks</p>
      </div>
      <div id="selector">
        <div id="triangle" :style="category.position"></div>
      </div>
    </div>

    <div class="circle"></div>

    <div v-if="list = true" class="container">
      <div class="entry" v-for="entry in array" v-bind:key="entry.id">
        <div class="info_card">
          <div class="category_icon"></div>
          <h3>Name of very nice dish</h3>
          <p>Sushi is nice. Very nice cool. Should taste well. Does taste well. Buy again soon... bitch</p>
          <p>245kr</p>
        </div>
        <div class="image" :style="entry.css"></div>
        <div class="textContainer">
          <p>{{entry.name}}</p>
        </div>
      </div>
    </div>

    <button type="button">
      <p>enter</p>
      <p>click</p>
      <p>bestil</p>
    </button>

    <p class="quote">uiuiguiguyguktg ui tguit7t787 78 o87 t87 t8 f86t 78t78t87t87</p>
  </div>
</template>

<script>
export default {
  name: "root",
  data: function() {
    return {
      menu: false,
      list: true,
      category: {
        name: "Sushi",
        position: "margin: auto;"
      },
      array: [
        {
          id: 1,
          name: "yeah!",
          css:
            "background-image: url(https://images.unsplash.com/photo-1580865166916-1700e6b1d4ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80);"
        },
        {
          id: 2,
          name: "Cool",
          css:
            "background-image: url(https://images.unsplash.com/photo-1580845884035-fc4da59dde1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80);"
        },
        {
          id: 3,
          name: "Dudes need hugs",
          css:
            "background-image: url(https://images.unsplash.com/photo-1580842579829-3b3962069ffb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80);"
        },
        {
          id: 4,
          name: "yeah!",
          css:
            "background-image: url(https://images.unsplash.com/photo-1580865166916-1700e6b1d4ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80);"
        },
        {
          id: 5,
          name: "Cool",
          css:
            "background-image: url(https://images.unsplash.com/photo-1580845884035-fc4da59dde1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80);"
        },
        {
          id: 6,
          name: "Dudes need hugs",
          css:
            "background-image: url(https://images.unsplash.com/photo-1580842579829-3b3962069ffb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80);"
        },
        {
          id: 7,
          name: "yeah!",
          css:
            "background-image: url(https://images.unsplash.com/photo-1580865166916-1700e6b1d4ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80);"
        },
        {
          id: 8,
          name: "Cool",
          css:
            "background-image: url(https://images.unsplash.com/photo-1580845884035-fc4da59dde1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80);"
        },
        {
          id: 9,
          name: "Water Closet",
          css:
            "background-image: url(https://images.unsplash.com/photo-1565562004766-59a4dc451a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quote {
  color: white;
  margin-bottom: 13em;
  margin-top: 13em;
}

.circle {
  margin-top: 30px;
  height: 3em;
  width: 3em;
  background-color: white;
  position: sticky;
  top: 2px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 7;
}
#name {
  position: sticky;
  top: 55px;
  z-index: 7;
  font-size: 0.5em;
  color: white;
  letter-spacing: 4px;
  cursor: pointer;
  transition: 0.4s ease-out;
}
#name:hover {
  letter-spacing: 1px;
  transform: scale(2);
}
button {
  margin: 2em;
}
.v {
  float: right;
  background-color: white;
  height: 30px;
  width: 30px;
  margin: auto;
  margin-top: 30px;
  margin-right: 30px;
  transition: 0.4s ease-out;
  opacity: 0.5;
}
.menu {
  position: fixed;
  z-index: 10;
  top: 0px;
  right: 0px;
  width: 20px;
  height: 100vh;
  background-color: rgba(139, 34, 34, 0.822);
  cursor: pointer;
  transition: 0.4s ease-out;
}
.open {
  position: fixed;
  height: 100vh;
  width: 400px;
  opacity: 1;
  background-color: rgb(255, 255, 255);
  top: -7px;
}

.open .v {
  background-color: black;
  width: 30px;
  height: 10px;
}

.v:hover {
  opacity: 1;
}
.v:focus {
  width: 60px;
}

ul {
  color: black;
  padding-top: 100px;
  text-align: left;
}
li {
  display: block;
}
#two {
  margin: 0em;
  opacity: 0.4;
  top: 40vh;
  position: absolute;
  text-align: right;
  font-size: 9em;
  color: white;
  right: -3em;
  cursor: pointer;
  transition: 0.8s ease-in-out;
  z-index: 1;
}
#two:hover {
  right: -2em;
}
#two:active {
  right: 0em;
}
#one {
  top: 10vh;
  margin: 0em;
  position: absolute;
  text-align: left;
  font-size: 9em;
  color: white;
  left: -4.2em;
  cursor: pointer;
  transition: 0.8s ease-in-out;
}
#one:hover {
  left: -2.5em;
}
#one:active {
  left: 0em;
  /*width: 5em;*/
}
.entry {
  position: relative;
  transition: 0.4s ease-out;
  cursor: pointer;
  overflow: hidden;
}
.entry:hover {
  opacity: 1;
  color: black;
}
.entry:active {
  opacity: 1;
  transform: scale(0.8);
  border-radius: 4em;
}

.entry:hover .info_card {
  clip-path: circle(200% at 50% 50%);
}

.info_card {
  clip-path: circle(0% at 0% 0%);
  color: black;
  position: absolute;
  top: 0em;
  left: 0em;
  background-color: white;
  text-align: left;
  height: 100%;
  padding: 2em;
  padding-top: 1em;
  transition: 0.4s ease-out;
}

.container {
  opacity: 0.4;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  grid-row-gap: 5vh;
  margin-top: 3em;
  border-radius: 1em;
  background-color: black;
  overflow: hidden;
  z-index: 3;
  transition: 0.4s ease-in-out;
}

.container:hover {
  opacity: 1;
}

.image {
  padding: 5em;
  color: white;
  background-size: cover;
  transition: 0.4s ease-out;
  cursor: pointer;
}
.textContainer {
  background-color: white;
  overflow: hidden;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
}
p {
  margin: 0em;
}
.shape {
  width: 5em;
  height: 5em;
  background-color: red;
  margin: auto;
  margin-top: 40vh;
  border-radius: 1em;
  cursor: pointer;
  transition: 0.4s ease-out;
  position: relative;
  z-index: 2;
}

.shape:hover {
  border-radius: 50%;
  background-color: blue;
  transform: scale(2);
}
.shape:active {
  width: 10em;
  border-radius: 2em;
  background-color: pink;
  transform: scale(2);
}

.categories {
  color: rgb(61, 9, 9);
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3em;
  border-radius: 2em;
  width: 100%;
  background-color: white;
  z-index: 8;
  overflow: hidden;
}

.categories > div {
  overflow: hidden;
  cursor: pointer;
  padding: 2em;
  position: relative;
  z-index: 3;
  letter-spacing: 3px;
  transition: 0.4s ease-out;
}

.categories > div:hover {
  letter-spacing: 0px;
  transform: scale(1.2);
}

.categories div:hover .icon {
  border-radius: 50%;
  background-color: rgb(255, 117, 117);
}

#selector {
  margin-top: -4em;
  grid-column: span 3;
  z-index: 2;
}

.categories .icon {
  height: 2em;
  width: 2em;
  background-color: rgba(0, 0, 0, 0.301);
  margin-bottom: 1em;
  margin: auto;
  transition: 0.4s ease-in-out;
}

.categories > #selector,
.categories > #selector:hover {
  position: relative;
  padding: 0em;
}

#triangle {
  background-color: rgb(0, 0, 0);
  height: 4em;
  width: 33%;
  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transition: 0.8s ease-in-out;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  margin: 0px;
}
li {
  display: block;
  padding: 1.5em;
  margin-top: 0px;
  width: 100%;
  height: 20px;
  transition: 0.4s ease-out;
}
li:hover {
  background-color: black;
  color: white;
}
a {
  color: #42b983;
}

.slide-enter-active {
  animation: slide-in 0.5s;
  animation-fill-mode: both;
}

.slide-leave-active {
  animation: opacity 0.5s;
}

.categories .active {
  opacity: 1;
}

@keyframes slide-in {
  0% {
    transform: translate(15em);
    opacity: 0;
    height: 0em;
  }
  100% {
    transform: translate(0);
    opacity: 1;
    height: 5em;
  }
}

@media only screen and (max-width: 510px) {
  .open {
    width: 100vw;
  }
  h1,
  h2 {
    font-size: 4em;
    display: none;
  }
}
</style>
