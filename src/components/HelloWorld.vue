<template>
  <div class="root">
    <div class="menu" :class="{open: menu}">
      <div class="v" @click="menu = !menu"></div>
      <ul v-if="menu">
        <li>Home</li>
        <li>Order</li>
        <li>Profile</li>
      </ul>
    </div>

    <h1>Read my mind</h1>
    <h2>Sushi is nice</h2>
    <div class="shape" @click="list = !list"></div>
    <div v-if="list = true" class="container">
      <div class="entry" v-for="entry in array" v-bind:key="entry.id">
        <div class="image" :style="entry.css"></div>
        <div class="textContainer">
          <p>{{entry.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "root",
  data: function () {
    return {
      menu: false,
      list: true,
      array: [
        {id: 1, name: "yeah!", css: "background-image: url(https://images.unsplash.com/photo-1580865166916-1700e6b1d4ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80);"},
        {id: 2, name: "Cool", css: "background-image: url(https://images.unsplash.com/photo-1580845884035-fc4da59dde1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80);"},
        {id: 3, name: "Dudes need hugs", css: "background-image: url(https://images.unsplash.com/photo-1580842579829-3b3962069ffb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80);"},
        {id: 4, name: "yeah!", css: "background-image: url(https://images.unsplash.com/photo-1580865166916-1700e6b1d4ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80);"},
        {id: 5, name: "Cool", css: "background-image: url(https://images.unsplash.com/photo-1580845884035-fc4da59dde1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80);"},
        {id: 6, name: "Dudes need hugs", css: "background-image: url(https://images.unsplash.com/photo-1580842579829-3b3962069ffb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80);"},
        {id: 7, name: "yeah!", css: "background-image: url(https://images.unsplash.com/photo-1580865166916-1700e6b1d4ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80);"},
        {id: 8, name: "Cool", css: "background-image: url(https://images.unsplash.com/photo-1580845884035-fc4da59dde1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80);"},
        {id: 9, name: "Water Closet", css: "background-image: url(https://images.unsplash.com/photo-1565562004766-59a4dc451a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);"}
      ]
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v {
  float: right;
  background-color: white;
  height: 30px;
  width: 30px;
  margin: auto;
  margin-top: 30px;
  margin-right: 30px;
  transition: .4s ease-out;
}
.menu {
  position: absolute;
  z-index: 5;
  top: 0px;
  right: 0px;
  min-width: 70px;
  min-height: 50px;
  background-color: rgb(9,9,9);
  opacity: .5;
  cursor: pointer;
}
.open {
  position: fixed;
  height: 100vh;
  width: 400px;
  opacity: 1;
  background-color: white;
  top: -7px;
}

.open .v {
  background-color: black;
  width: 30px;
  height: 10px;
}

ul {
  background-color: white;
  color: black;
  padding-top: 100px;
  text-align: left;
}
li {
  display: block;
}
h2 {
  opacity: .4;
  top: 3em;
  position: absolute;
  text-align: right;
  font-size: 9em;
  color: white;
  right: -3em;
  cursor: pointer;
  transition: .8s ease-in-out;
  z-index: 1;
}
h2:hover {
  right: -2em;
}
h2:active {
  right: 0em;
}
h1 {
  top: 0em;
  position: absolute;
  text-align: left;
  font-size: 9em;
  color: white;
  left: -4.2em;
  cursor: pointer;
  transition: .8s ease-in-out;
}
h1:hover {
  left: -2.5em;
}
h1:active {
  left: 0em;
  //width: 5em;
}
.entry {
  opacity: .3;
  transition: .4s ease-out;
  cursor: pointer;
  color: white;
  overflow: hidden;
}
.entry:hover {
  opacity: 1;
  color: black;
}
.entry:active {
  opacity: 1;
  transform: scale(.8);
  border-radius: 4em;
}
.container {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  grid-row-gap: 7em;
  margin-top: 7em;
  border-radius: 1em;
  background-color: black;
  opacity: 1;
  overflow: hidden;
  z-index: 3;
}
.image {
  padding: 5em;
  color: white;
  background-size: cover;
  transition: .4s ease-out;
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
  margin-top: 30em;
  border-radius: 1em;
  cursor: pointer;
  transition: .4s ease-out;
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
  transition: .4s ease-out;
}
li:hover {
  background-color: black;
  color: white;
}
a {
  color: #42b983;
}
@media only screen and (max-width: 510px) {
  .open {
    width: 100vw;
  }
}
</style>
