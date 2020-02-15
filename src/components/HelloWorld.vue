<template>
  <div class="root">
    <div class="menu" :class="{open: menu}">
      <div class="redPoint" @click="menu = !menu">
        <div class="counter">22</div>
      </div>

      <transition name="slide" mode="out-in">
        <div class="grid" v-if="menu">
          <transition-group tag="div" name="list" mode="out-in" class="container">
            <div class="entry" v-for="entry in itemsInCart" v-bind:key="entry.id">
              <div class="counter" v-if="entry.orders > 0">
                <input type="number" v-model="entry.orders" :max="99" />
              </div>
              <div class="info">
                <div class="info_icon" @click="entry.orders --">
                  <p>del</p>
                </div>
                <div class="into_text" @click="entry.orders ++">
                  <h3>Name of very nice dish</h3>
                  <p>Sushi is nice. Very nice cool. Should taste well. Does taste well. Buy again soon... bitch</p>
                  <p>245kr</p>
                </div>
              </div>
              <div class="image" :style="entry.css"></div>
              <div class="textContainer">
                <p>{{entry.name}}</p>
              </div>
            </div>
          </transition-group>
        </div>
      </transition>
    </div>

    <h2 id="one" v-if="false">Read my mind</h2>
    <h2 id="two" v-if="false">Sushi is nice</h2>

    <div class="shape" @click="list = !list">
      <svg
        version="1.1"
        id="smileSVG"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 47.5 11.4"
        style="enable-background:new 0 0 47.5 11.4;"
        xml:space="preserve"
      >
        <title>Asset 7</title>
        <path
          class="st3"
          d="M4.6,6.2V2.3C4.7,1,3.7-0.1,2.4-0.1S0.1,0.7,0,2c0,0.1,0,0.2,0,0.3v3.9c-0.1,1.3,0.9,2.4,2.1,2.4 s2.4-0.9,2.4-2.1C4.6,6.4,4.6,6.3,4.6,6.2z"
        />
        <path
          class="st3"
          d="M47.5,6.2V2.3c0.2-1.3-0.7-2.4-1.9-2.6c-1.3-0.2-2.4,0.7-2.6,1.9c0,0.2,0,0.5,0,0.7v3.9 c-0.1,1.3,0.9,2.4,2.1,2.4c1.3,0.1,2.4-0.9,2.4-2.1C47.6,6.4,47.6,6.3,47.5,6.2L47.5,6.2z"
        />
        <path
          class="st3"
          d="M23.8,11.3c3.1,0,6.1-1.3,8.2-3.7c0.7-1,0.5-2.5-0.5-3.2c-0.9-0.6-2.1-0.6-2.9,0.2c-1.2,1.4-3,2.1-4.8,2.1 c-1.8,0-3.6-0.8-4.8-2.1c-0.9-0.9-2.4-0.8-3.3,0.1c-0.8,0.8-0.8,2-0.2,2.9C17.6,10,20.6,11.4,23.8,11.3z"
        />
      </svg>
    </div>
    <h1 id="name">mindfish</h1>

    <div class="categories main">
      <div @click="category.position = 'transform: translate(0%);'; category.name='Sides'">
        <svg
          version="1.1"
          id="sidesSVG"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 50.7 45.5"
          style="enable-background:new 0 0 50.7 45.5;"
          xml:space="preserve"
        >
          <title>Asset 2</title>
          <path
            class="st4"
            d="M15.8,0h0.3C16.4,0.1,16.7,0.1,17,0c0.2,0,0.4,0.1,0.6,0h0.2c0,0.1,0.1,0,0.1,0.1c1.3,0.1,2.5,0.3,3.7,0.7
          c3.9,1.1,7.7,2.9,11,5.3c1.9,1.3,3.5,3.2,4.4,5.3c0.9,2.1,1,4.5,0.1,6.6c-0.6,1.5-1.6,2.8-2.7,4c-1.4,1.5-2.9,2.8-4.4,4.1
          c-1.5,1.3-3.1,2.5-4.8,3.5c-2,1.1-4.2,1.9-6.4,2.2c-1.7,0.3-3.5,0.2-5.2-0.2c-3.1-0.7-5.5-3-6.4-6c-0.7-2.5-1-5-0.7-7.6
          c0.1-1.3,0.2-2.7,0.3-4c0.1-1.7,0.3-3.4,0.7-5c0.4-2.1,1.2-4,2.5-5.7c1.1-1.5,2.7-2.5,4.5-2.9C14.9,0.2,15.4,0.1,15.8,0z M33.9,20
          c0.6-0.7,1.1-1.4,1.5-2.2c0.7-1.3,0.9-2.8,0.6-4.2c-0.6-2.4-2-4.6-4.1-6c-2.9-2.1-6-3.7-9.4-4.8c-1.8-0.6-3.6-0.9-5.5-1
          c-1.6-0.1-3.1,0.4-4.4,1.3c-1.2,0.9-2.1,2.2-2.6,3.6c-0.8,2-1.2,4.1-1.4,6.2c-0.2,1.9-0.4,3.8-0.5,5.7c-0.1,1.7,0,3.4,0.3,5
          c0.2,1.3,0.6,2.4,1.3,3.5c1.5,2,3.8,3.2,6.3,3.2c2,0.1,3.9-0.2,5.8-0.9c0.4-0.1,0.7-0.5,0.8-0.9c0.1-0.3,0.1-0.7,0-1
          c-0.2-0.9-0.6-1.8-1.1-2.5c-1-1.5-2.2-2.8-3.3-4.2c-0.6-0.6-1-1.3-1.4-2.1c-0.3-0.5-0.2-1,0.2-1.4c0.2-0.2,0.3-0.3,0.5-0.4
          c0.4-0.2,0.7-0.5,1.1-0.7c2.2-1.6,4.4-3.1,6.7-4.6c0.4-0.3,0.8-0.5,1.3-0.7c0.5-0.2,1.1-0.1,1.4,0.3c0.7,0.6,1.3,1.2,1.8,1.9
          c1.2,1.3,2.2,2.8,3,4.3C33.4,18,33.7,19,33.9,20z"
          />
          <path class="st1" d="M18,0c-0.2,0.1-0.4,0.1-0.6,0.1c-0.3,0.1-0.6,0.1-0.9,0L18,0z" />
          <path
            class="st2"
            d="M34.3,20c-0.2-1-0.5-2-1-2.8c-0.8-1.5-1.8-3-3-4.3c-0.6-0.7-1.2-1.3-1.8-1.9c-0.4-0.4-0.9-0.5-1.4-0.3
          c-0.5,0.2-0.9,0.4-1.3,0.7c-2.3,1.4-4.5,3-6.7,4.6c-0.4,0.3-0.7,0.5-1.1,0.7c-0.2,0.1-0.4,0.3-0.5,0.4c-0.4,0.3-0.5,0.9-0.2,1.4
          c0.4,0.7,0.9,1.4,1.4,2.1c1.1,1.4,2.3,2.7,3.3,4.2c0.5,0.8,0.9,1.6,1.1,2.5c0.1,0.3,0.1,0.7,0,1c-0.1,0.4-0.4,0.8-0.8,0.9
          c-1.8,0.7-3.8,1-5.8,0.9c-2.5,0-4.8-1.2-6.3-3.2c-0.7-1-1.2-2.2-1.4-3.5c-0.3-1.6-0.4-3.3-0.3-5c0.1-1.9,0.3-3.8,0.5-5.7
          c0.1-2.1,0.6-4.2,1.4-6.2C10.9,5.2,11.8,4,13,3c1.2-0.9,2.8-1.4,4.3-1.3c1.9,0.1,3.7,0.4,5.5,1c3.4,1.1,6.5,2.7,9.4,4.8
          c2.1,1.4,3.5,3.6,4.1,6c0.3,1.4,0.1,2.9-0.6,4.2C35.4,18.6,34.9,19.3,34.3,20z"
          />
          <path
            class="st3"
            d="M16.8,12.5l-0.3-0.6c-0.1-0.2-0.4-0.3-0.6-0.2c-0.2,0.1-0.3,0.3-0.2,0.5c0,0,0,0,0,0l0.3,0.6
          c0.1,0.2,0.4,0.3,0.6,0.2C16.8,12.9,16.9,12.7,16.8,12.5L16.8,12.5z"
          />
          <path
            class="st3"
            d="M23.5,8.9l-0.3-0.6C23,8.1,22.8,8,22.6,8.1c-0.2,0.1-0.2,0.3-0.2,0.5l0.3,0.6c0.1,0.2,0.4,0.3,0.5,0.2
          C23.5,9.3,23.6,9.1,23.5,8.9z"
          />
          <path
            class="st3"
            d="M20.2,11.7c0.5-0.3,0.9-0.7,1-1.3c0.1-0.2-0.1-0.4-0.3-0.5c0,0,0,0,0,0c-0.2,0-0.4,0.1-0.5,0.3l0,0
          c-0.2,0.6-0.8,1-1.4,0.8c0,0-0.1,0-0.1,0c-0.2-0.1-0.4,0-0.5,0.2c0,0,0,0,0,0c-0.1,0.2,0,0.4,0.2,0.5c0,0,0,0,0,0
          C19.1,12,19.7,12,20.2,11.7z"
          />
          <path
            class="st4"
            d="M9.4,13.6h0.3c0.3,0.1,0.6,0.1,0.9,0.1c0.2,0,0.4,0.1,0.6-0.1h0.2c0,0.1,0.1,0.1,0.1,0.1
          c1.3,0.1,2.5,0.3,3.7,0.7c3.9,1.1,7.7,2.9,11,5.3c2,1.3,3.5,3.2,4.4,5.4c0.9,2.1,1,4.5,0.1,6.6c-0.6,1.5-1.6,2.8-2.7,4
          c-1.4,1.5-2.9,2.8-4.4,4.1c-1.5,1.3-3.1,2.5-4.8,3.5c-2,1.1-4.2,1.9-6.4,2.2c-1.7,0.3-3.5,0.2-5.2-0.2c-3.1-0.7-5.5-3-6.4-6
          c-0.7-2.5-1-5-0.7-7.6c0.1-1.3,0.2-2.7,0.3-4c0.1-1.7,0.3-3.4,0.7-5c0.4-2,1.3-4,2.5-5.6c1.1-1.5,2.7-2.5,4.4-2.9
          C8.5,13.8,9,13.7,9.4,13.6z M27.5,33.6c0.6-0.7,1.1-1.4,1.5-2.2c0.7-1.3,0.9-2.8,0.6-4.2c-0.6-2.4-2-4.6-4.1-6
          c-2.9-2.1-6-3.7-9.4-4.8c-1.8-0.6-3.6-0.9-5.5-1c-1.5-0.1-3.1,0.4-4.3,1.3c-1.2,1-2.1,2.2-2.7,3.6c-0.8,2-1.2,4.1-1.4,6.2
          c-0.2,1.9-0.4,3.8-0.5,5.7c-0.1,1.7,0,3.4,0.3,5c0.2,1.2,0.7,2.4,1.4,3.5c1.5,2,3.8,3.2,6.3,3.2c2,0.1,3.9-0.2,5.8-0.9
          c0.4-0.1,0.7-0.5,0.8-0.9c0.1-0.3,0.1-0.7,0-1c-0.2-0.9-0.6-1.8-1.1-2.5c-1-1.5-2.2-2.8-3.3-4.2c-0.6-0.6-1-1.3-1.4-2.1
          c-0.3-0.4-0.2-1,0.2-1.4c0.2-0.2,0.3-0.3,0.5-0.4c0.4-0.2,0.7-0.5,1.1-0.7c2.2-1.6,4.4-3.2,6.8-4.6c0.4-0.3,0.8-0.5,1.3-0.7
          c0.5-0.2,1.1-0.1,1.4,0.3c0.6,0.6,1.3,1.2,1.8,1.9c1.2,1.3,2.2,2.8,3,4.3C27,31.6,27.4,32.6,27.5,33.6z"
          />
          <path class="st1" d="M11.6,13.6c-0.2,0.1-0.4,0.1-0.6,0.1c-0.3,0-0.6,0-0.9-0.1H11.6z" />
          <path
            class="st2"
            d="M27.9,33.6c-0.2-1-0.5-2-1-2.8c-0.8-1.5-1.8-3-3-4.3c-0.6-0.7-1.2-1.3-1.8-1.9c-0.4-0.4-0.9-0.5-1.4-0.3
          c-0.5,0.2-0.9,0.4-1.3,0.7c-2.3,1.5-4.5,3-6.7,4.6c-0.4,0.3-0.7,0.5-1.1,0.7c-0.2,0.1-0.4,0.3-0.5,0.4c-0.4,0.3-0.5,0.9-0.2,1.3
          c0.4,0.8,0.9,1.5,1.4,2.1c1.1,1.4,2.3,2.7,3.3,4.2c0.5,0.8,0.9,1.6,1.1,2.6c0.1,0.3,0.1,0.7,0,1c-0.1,0.4-0.4,0.8-0.8,0.9
          c-1.8,0.7-3.8,1-5.8,0.9c-2.5,0-4.8-1.2-6.3-3.2c-0.7-1-1.2-2.2-1.4-3.5c-0.3-1.6-0.4-3.3-0.3-5c0.1-1.9,0.3-3.8,0.5-5.7
          c0.1-2.1,0.6-4.2,1.4-6.2c0.6-1.4,1.5-2.7,2.7-3.6c1.2-0.9,2.8-1.4,4.3-1.3c1.9,0.1,3.7,0.4,5.5,1c3.4,1.1,6.5,2.7,9.4,4.8
          c2.1,1.4,3.5,3.6,4.1,6c0.3,1.4,0.1,2.9-0.6,4.2C29,32.2,28.5,32.9,27.9,33.6z"
          />
          <path
            class="st3"
            d="M10.3,26.1L10,25.5c-0.1-0.2-0.4-0.3-0.6-0.2c-0.2,0.1-0.3,0.3-0.2,0.5c0,0,0,0,0,0l0.3,0.6
          c0.1,0.2,0.4,0.3,0.6,0.2C10.4,26.5,10.4,26.3,10.3,26.1C10.3,26.1,10.3,26.1,10.3,26.1z"
          />
          <path
            class="st3"
            d="M17.1,22.5l-0.3-0.6c-0.1-0.2-0.4-0.3-0.6-0.1C16,21.8,16,22.1,16,22.3l0.3,0.6c0.1,0.2,0.4,0.3,0.5,0.2
          C17.1,22.9,17.2,22.7,17.1,22.5z"
          />
          <path
            class="st3"
            d="M13.8,25.3c0.5-0.3,0.9-0.7,1-1.3c0.1-0.2-0.1-0.4-0.3-0.5c0,0,0,0,0,0c-0.2,0-0.4,0.1-0.5,0.3
          c-0.2,0.6-0.8,1-1.4,0.8c0,0-0.1,0-0.1,0c-0.2-0.1-0.4,0-0.5,0.2c0,0,0,0,0,0c-0.1,0.2,0,0.4,0.2,0.5c0,0,0,0,0,0
          C12.7,25.6,13.3,25.6,13.8,25.3z"
          />
          <path
            class="st4"
            d="M28.7,7.2H29c0.3,0.1,0.6,0.1,0.9,0c0.2,0,0.4,0.1,0.6,0h0.2c0,0.1,0.1,0,0.1,0c1.3,0.1,2.5,0.3,3.7,0.7
          c3.9,1.1,7.7,2.9,11,5.3c1.9,1.3,3.5,3.2,4.4,5.4c0.9,2.1,1,4.5,0.1,6.6c-0.6,1.5-1.6,2.8-2.7,4c-1.3,1.5-2.8,2.8-4.3,4.1
          c-1.5,1.3-3.1,2.5-4.8,3.5c-2,1.1-4.2,1.9-6.4,2.2c-1.7,0.3-3.5,0.2-5.2-0.2c-3-0.7-5.5-3-6.4-6c-0.7-2.5-1-5-0.7-7.6
          c0.1-1.3,0.2-2.7,0.3-4c0.1-1.7,0.3-3.4,0.7-5c0.4-2,1.3-4,2.5-5.6c1.1-1.5,2.7-2.5,4.4-2.9C27.8,7.3,28.2,7.3,28.7,7.2z M46.8,27.2c0.6-0.7,1.1-1.4,1.5-2.2c0.7-1.3,0.9-2.8,0.6-4.2c-0.6-2.4-2-4.6-4.1-6c-2.9-2.1-6-3.7-9.4-4.8
          c-1.8-0.6-3.6-0.9-5.5-1c-1.5-0.1-3.1,0.4-4.3,1.3c-1.2,1-2.1,2.2-2.7,3.6c-0.8,2-1.2,4.1-1.4,6.2c-0.2,1.9-0.4,3.8-0.5,5.7
          c-0.1,1.7,0,3.4,0.3,5c0.2,1.2,0.7,2.4,1.4,3.5c1.5,2,3.8,3.2,6.3,3.2c2,0.1,3.9-0.2,5.8-0.9c0.4-0.1,0.7-0.5,0.8-0.9
          c0.1-0.3,0.1-0.7,0-1c-0.2-0.9-0.6-1.8-1.2-2.5c-1-1.5-2.2-2.8-3.3-4.2c-0.6-0.6-1-1.3-1.4-2.1c-0.3-0.5-0.2-1,0.2-1.4
          c0.2-0.2,0.3-0.3,0.5-0.4c0.4-0.2,0.7-0.5,1.1-0.7c2.2-1.6,4.4-3.1,6.7-4.6c0.4-0.3,0.8-0.5,1.3-0.7c0.5-0.3,1.1-0.1,1.4,0.3
          c0.6,0.6,1.3,1.2,1.8,1.9c1.2,1.3,2.2,2.8,3,4.3C46.3,25.2,46.6,26.1,46.8,27.2z"
          />
          <path class="st1" d="M30.9,7.2c-0.2,0.1-0.4,0.1-0.6,0c-0.3,0.1-0.6,0.1-0.9,0H30.9z" />
          <path
            class="st2"
            d="M47.2,27.2c-0.2-1-0.5-2-1-2.8c-0.8-1.6-1.9-3-3-4.3c-0.6-0.7-1.2-1.3-1.8-1.9c-0.4-0.4-0.9-0.5-1.4-0.3
          c-0.4,0.2-0.9,0.4-1.3,0.7c-2.3,1.5-4.5,3-6.7,4.6c-0.4,0.2-0.7,0.5-1.1,0.7c-0.2,0.1-0.4,0.3-0.5,0.4c-0.4,0.3-0.5,0.9-0.2,1.4
          c0.4,0.8,0.9,1.5,1.4,2.1c1.1,1.4,2.3,2.7,3.3,4.2c0.6,0.8,0.9,1.6,1.2,2.5c0.1,0.3,0.1,0.7,0,1c-0.1,0.4-0.4,0.8-0.8,0.9
          c-1.8,0.7-3.8,1-5.8,0.9c-2.5,0-4.8-1.2-6.3-3.2c-0.7-1-1.2-2.2-1.4-3.5c-0.3-1.6-0.4-3.3-0.3-5c0.1-1.9,0.3-3.8,0.5-5.7
          c0.1-2.1,0.6-4.2,1.4-6.2c0.6-1.4,1.5-2.7,2.7-3.6c1.2-0.9,2.8-1.4,4.3-1.3c1.9,0.1,3.7,0.4,5.5,1c3.4,1.1,6.5,2.7,9.4,4.8
          c2.1,1.4,3.5,3.6,4.1,6c0.3,1.4,0.1,2.9-0.6,4.2C48.3,25.7,47.8,26.5,47.2,27.2z"
          />
          <path
            class="st3"
            d="M29.6,19.6L29.3,19c-0.1-0.2-0.4-0.3-0.5-0.2c-0.2,0.1-0.3,0.4-0.2,0.6l0.3,0.6c0.1,0.2,0.4,0.3,0.5,0.2
          C29.7,20.1,29.7,19.8,29.6,19.6z"
          />
          <path
            class="st3"
            d="M36.4,16L36,15.4c-0.1-0.2-0.4-0.3-0.5-0.2c-0.2,0.1-0.3,0.4-0.2,0.6l0.3,0.6c0.1,0.2,0.4,0.2,0.6,0.1
          C36.4,16.4,36.4,16.2,36.4,16z"
          />
          <path
            class="st3"
            d="M33.1,18.8c0.5-0.3,0.9-0.7,1-1.3c0-0.2-0.1-0.4-0.3-0.5l0,0c-0.2-0.1-0.4,0.1-0.5,0.3c0,0,0,0,0,0
          c-0.1,0.3-0.3,0.6-0.6,0.7c-0.3,0.2-0.6,0.2-0.9,0.1c-0.2-0.1-0.4,0-0.5,0.2c-0.1,0.2,0,0.4,0.2,0.5c0,0,0,0,0,0
          C32,19.1,32.6,19.1,33.1,18.8z"
          />
        </svg>
        <div class="icon"></div>
        <p>sides</p>
      </div>

      <div @click="category.position = 'transform: translate(100%);'; category.name='Sushi'">
        <svg
          version="1.1"
          id="sushiSVG"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 59.9 35.5"
          style="enable-background:new 0 0 59.9 35.5;"
          xml:space="preserve"
        >
          <title>Asset 3</title>
          <path
            class="st5"
            d="M2,21.5C2,11,13.6,8.5,24.9,8.5S47.8,11,47.8,21.5S36.2,34.6,24.9,34.6S2,32.1,2,21.5z"
          />
          <path
            class="st6"
            d="M24.9,8.5C14.6,8.5,4,10.5,2.2,18.9c0.8,0.1,1.5,0.2,2.3,0.2c0.8,0,1.8,0,2.9-0.1c1.6-0.1,3.4-0.4,5.2-0.6
          c1.2-0.1,2.4-0.3,3.6-0.4c2.9-0.4,5.7-0.5,8.6-0.6c2.9,0,5.8,0.2,8.6,0.6c1.2,0.1,2.4,0.3,3.6,0.4c1.9,0.2,3.7,0.5,5.2,0.6l0,0
          c0.2,0,0.4,0.2,0.5,0.4c0,0.1,0,0.2,0.1,0.2c0.7,2.4,2.2,4.5,4.2,5.9c0.4-1.3,0.7-2.6,0.7-4C47.8,11,36.2,8.5,24.9,8.5z"
          />
          <path
            class="st7"
            d="M58.9,14.3c-1-1.9-2.7-3.3-4.8-3.8c-2.3-0.7-4.8-0.1-6.6,1.4c-1.5,1.9-1.9,4.4-1.2,6.7c0.6,2.1,2,3.8,4,4.7
          c0.4,0.2,0.9,0,1.1-0.3c1.1-1.8,1.4-4.1,0.7-6.1c-0.1-0.2-0.1-0.4-0.2-0.6l0.7,0.2c2.1,0.6,4.3,0.2,6-1
          C59,15.1,59.1,14.7,58.9,14.3z"
          />
          <path
            class="st7"
            d="M7.2,4.1c-4.7,2.5-6.3,6.1-6.3,9.7c0,1.8,2.5,2,6.3,1.6L10,7.7L7.2,4.1z"
          />
          <path
            class="st8"
            d="M42.7,4.1L42.7,4.1l-3.3,3.5l3.3,7.8c3.8,0.3,6.3,0.1,6.3-1.6C49,10.2,47.3,6.6,42.7,4.1z"
          />
          <path
            class="st7"
            d="M42.7,4.1L42.7,4.1c-3.2-1.6-6.6-2.5-10.1-2.8l0,0l-3,5.3l4.3,7.8c3.2,0.4,6.3,0.8,8.7,1
          C44.1,11.8,44.1,7.8,42.7,4.1z"
          />
          <path
            class="st8"
            d="M32.6,1.3L32.6,1.3c-2.5-0.3-5.1-0.4-7.7-0.4l-4.7,7.6l4.7,5.4c3,0,6,0.2,9,0.6C36.9,7.8,32.6,1.3,32.6,1.3z"
          />
          <path
            class="st7"
            d="M17.2,1.3L17.2,1.3L10,7.7l5.9,6.8c3-0.4,6-0.6,9-0.6v-13C22.4,0.9,19.8,1,17.2,1.3z"
          />
          <path
            class="st8"
            d="M17.2,1.3c0,0-4.2,6.5-1.3,13.1c-3.2,0.4-6.3,0.8-8.7,1c-1.4-3.6-1.4-7.7,0-11.3l0,0
          C10.3,2.6,13.7,1.6,17.2,1.3z"
          />
          <path
            class="st9"
            d="M17.6,23v-1.5c0.1-0.5-0.3-0.9-0.8-1c-0.5-0.1-0.9,0.3-1,0.8c0,0.1,0,0.1,0,0.2V23c-0.1,0.5,0.3,0.9,0.8,1
          c0.5,0.1,0.9-0.3,1-0.8C17.6,23.1,17.6,23.1,17.6,23z"
          />
          <path
            class="st9"
            d="M34,23v-1.5c0.1-0.5-0.3-0.9-0.8-1c-0.5-0.1-0.9,0.3-1,0.8c0,0.1,0,0.1,0,0.2V23c-0.1,0.5,0.3,0.9,0.8,1
          c0.5,0.1,0.9-0.3,1-0.8C34,23.1,34,23.1,34,23z"
          />
          <path
            class="st9"
            d="M24.9,25c1.2,0,2.4-0.5,3.1-1.4c0.3-0.4,0.3-0.9-0.1-1.2c0,0,0,0,0,0c-0.4-0.3-0.9-0.3-1.2,0.1
          c-0.9,1-2.5,1.1-3.5,0.1c0,0-0.1-0.1-0.1-0.1c-0.4-0.3-0.9-0.3-1.2,0c-0.3,0.3-0.3,0.8-0.1,1.1C22.6,24.5,23.7,25,24.9,25z"
          />
          <path
            class="st9"
            d="M2.2,16.2c-0.8,1.7-1.2,3.5-1.1,5.3c-0.1,3.8,1.7,7.4,4.8,9.6c0.3,0.3,0.9,0.3,1.2,0s0.3-0.9,0-1.2
          C7,29.8,7,29.7,6.9,29.7c-2.6-1.9-4.2-4.9-4.1-8.2c0-1.8,0.4-3.5,1.3-5.1c0.7,0,1.5,0,2.4-0.1c3.2-0.2,6.3-0.7,9.5-1.1
          c3-0.4,5.9-0.6,8.9-0.6c3,0,6,0.2,8.9,0.6c2.9,0.3,5.8,0.8,8.8,1c0.8,0.1,1.7,0.1,2.5,0.1c0,0.3,0,0.6,0.1,0.9l0,0
          c0.2,1.6,0.9,3.1,1.8,4.4l0,0c-0.1,4.4-2.3,7.5-6.7,9.5c-3.7,1.7-8.8,2.5-15.3,2.5c-6.3,0-11.4-0.8-15-2.4c-0.5-0.2-1,0-1.2,0.5
          c-0.2,0.5,0,1,0.5,1.2c3.9,1.7,9.1,2.5,15.7,2.5c6.8,0,12.2-0.9,16-2.6c4.5-2,7.1-5.2,7.7-9.5c0.4,0.3,0.9,0.5,1.3,0.7
          c0.8,0.3,1.7,0,2.2-0.7c1.1-1.8,1.5-3.9,1-6c2.1,0.4,4.3-0.1,6-1.3c0.7-0.5,0.9-1.4,0.6-2.2c-1.1-2.2-3.1-3.7-5.4-4.3
          c-1.7-0.5-3.5-0.4-5.1,0.2C48,7,45.8,4.7,43,3.4l0,0c-3.2-1.6-6.8-2.6-10.3-2.9C30.1,0.1,27.5,0,24.9,0c-2.6,0-5.2,0.1-7.8,0.4
          C13.5,0.8,10,1.8,6.8,3.4l0,0C1.2,6.4,0,10.7,0,13.8c0,0.6,0.2,1.3,0.7,1.7C1.2,15.9,1.7,16.1,2.2,16.2z M25.8,1.8
          c2.1,0,4.2,0.1,6.3,0.4c1.7,2.9,2.3,6.3,1.8,9.6c-0.1,0.6-0.3,1.1-0.5,1.7l0,0c-2.2-0.2-4.4-0.4-6.7-0.5h-0.9L25.8,1.8L25.8,1.8z M42,4.8c0.5,1.4,0.8,3,0.8,4.5l0,0c0.1,1.8-0.2,3.5-0.7,5.2l0,0h-0.5c-1.9-0.2-3.8-0.4-5.7-0.7l-0.7-0.1l0,0
          c1.1-3.7,0.8-7.8-1-11.3C36.9,2.8,39.5,3.6,42,4.8z M53.9,11.4c1.8,0.4,3.4,1.6,4.3,3.3c0,0,0,0,0,0.1c-1.6,1-3.5,1.3-5.3,0.8
          c-0.2,0-0.4-0.1-0.6-0.2c-0.5-0.2-1,0.1-1.1,0.6c-0.1,0.2-0.1,0.4,0,0.6c0.1,0.2,0.2,0.4,0.2,0.6c0.6,1.8,0.4,3.7-0.6,5.4
          c0,0,0,0-0.1,0c-3.1-1.2-4.5-5.4-3.4-8.4l0,0C48.2,11.4,51.3,10.7,53.9,11.4L53.9,11.4z M47.6,10.7c-0.3,0.2-0.6,0.5-0.8,0.7
          c-0.8,0.9-1.3,2.1-1.6,3.3c0,0-0.9,0-1.3-0.1l0,0l0,0c0.8-2.7,0.9-5.7,0.3-8.5l0,0C45.8,7.3,46.9,8.9,47.6,10.7L47.6,10.7z M24,13
          h-0.2c-2,0-4,0.2-6,0.4l-1.3,0.1l0,0c-1-3.1-0.9-6.4,0.4-9.4c0.3-0.7,0.6-1.3,0.9-1.9c2.1-0.3,4.2-0.4,6.2-0.4V13z M15.6,2.4
          C14.6,4.7,14,7.1,14,9.6c0,1.4,0.2,2.8,0.7,4.1c0,0,0,0,0,0.1c-1.9,0.2-3.9,0.5-5.8,0.7l-1.1,0.1l0,0c-0.8-2.5-1-5.1-0.5-7.7
          c0.1-0.7,0.3-1.3,0.6-2C10.3,3.6,12.9,2.8,15.6,2.4L15.6,2.4z M5.6,6.2L5.6,6.2C5,9,5.2,11.9,6,14.6l0,0c-2.2,0.1-3.6,0-4.1-0.4
          c-0.1-0.1-0.2-0.2-0.1-0.4C1.7,10.8,3.2,7.9,5.6,6.2L5.6,6.2z"
          />
        </svg>

        <div class="icon"></div>
        <p>sushi</p>
      </div>

      <div @click="category.position = 'transform: translate(200%);'; category.name='Drinks'">
        <svg
          version="1.1"
          id="drinksSVG"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 164 208.3"
          style="enable-background:new 0 0 164 208.3;"
          xml:space="preserve"
        >
          <title>Asset 6</title>
          <path
            class="st10"
            d="M151.2,69.2l-35,75.4c-2.3-1.9-4.7-3.6-7.2-5.2c-4.7-2.9-9.7-5.2-15-6.8c-1.4-0.4-2.8-0.9-4.3-1.1 c-1.4-0.3-2.9-0.6-4.4-0.8c-3-0.4-6.1-0.6-9.1-0.5c-1.5,0-3,0.2-4.6,0.3c-1.5,0.1-3,0.3-4.5,0.6c-1.5,0.3-3.1,0.6-4.6,1l-2.2,0.6 l-1.9,0.6c-2.4,0.8-4.7,1.6-7.1,2.4l-3.3,1.2l-3.3,0.8l-3.3,0.9c-1.1,0.2-2.2,0.4-3.3,0.6s-2.2,0.4-3.3,0.6l-3.3,0.4l-3.3,0.4 c-1.1,0.1-2.1,0.1-3.2,0.2s-2.1,0.1-3.2,0.1s-2.1-0.1-3.2,0l-3.1-0.1c-0.3,0-0.5,0-0.8,0l34.8-75l3.2,1c1.2,0.3,2.3,0.6,3.6,0.9 s2.4,0.6,3.7,0.8L64,69c1.3,0.1,2.6,0.3,3.9,0.4s2.6,0.1,4,0.1s2.7,0.1,4.1,0.1s2.7-0.3,4.1-0.4s2.8-0.2,4.1-0.4l4.1-0.8l4.1-0.9 c1.3-0.3,2.7-0.7,4-1.1l7.4-2.5l1.8-0.6l1.4-0.4c1-0.3,2-0.5,3-0.7c1.1-0.2,2.1-0.4,3.1-0.6c1-0.2,2.1-0.3,3.1-0.4 c1-0.1,2.1-0.2,3.1-0.2c1-0.1,2-0.1,3,0c1.1,0,2.2,0,3.1,0.2L127,61l1.5,0.2c6,0.9,11.8,2.7,17.3,5.3l1.3,0.6 c1.3,0.6,2.6,1.2,3.8,1.9C151,69.1,151.1,69.2,151.2,69.2z"
          />
          <path
            class="st11"
            d="M159.8,35.4c-0.9-0.5-9-4.9-36.6-17.7C96.1,5.1,88.9,2.4,87.9,2c-2.3-0.9-4.9,0.1-6,2.4 c-0.4,0.9-0.5,1.8-0.3,2.7L79.8,11c-5.5,3.8-16.7,11.8-18.5,15.7L2,154.2v0.4v0.3c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.1,0,0.3 s0,0.1,0,0.3c0,0.1,0,0.2,0,0.3l0.1,0.3l0.1,0.3l0.1,0.3c0,0,0.2,0.2,0.2,0.2s0.1,0.1,0.1,0.2c0.3,0.3,1.8,2,4.6,4.8 c-0.4,0.3-0.8,0.7-1,1.2L4,167.8c-0.6,1.2-0.3,2.7,0.8,3.6c12,9.8,25.2,18.1,39.2,24.7c12.7,5.9,27.2,10.5,41.4,10.5 c1.2,0,2.2-0.7,2.7-1.7l1.6-3.5c0.2-0.5,0.3-1,0.3-1.5c1.7,0.1,3.4,0.3,5.1,0.4c1.7,0.1,3.1-1.2,3.2-2.9L157,71.2 c1.8-3.9,0.7-17.6,0.1-24.3l1.2-2.7c2.6-0.4,4.3-2.8,3.9-5.3C162,37.4,161.1,36.1,159.8,35.4L159.8,35.4z M116.2,144.7 c-2.3-1.9-4.7-3.6-7.2-5.2c-4.7-2.9-9.7-5.2-15-6.8c-1.4-0.4-2.8-0.9-4.3-1.1c-1.4-0.3-2.9-0.6-4.4-0.8c-3-0.4-6.1-0.6-9.1-0.5
          c-1.5,0-3,0.2-4.6,0.3c-1.5,0.1-3,0.3-4.5,0.6c-1.5,0.3-3.1,0.6-4.6,1l-2.2,0.6l-1.9,0.6c-2.4,0.8-4.7,1.6-7.1,2.4l-3.3,1.2 l-3.3,0.8l-3.3,0.9c-1.1,0.2-2.2,0.4-3.3,0.6s-2.2,0.4-3.3,0.6l-3.3,0.4l-3.3,0.4c-1.1,0.1-2.1,0.1-3.2,0.2s-2.1,0.1-3.2,0.1 s-2.1-0.1-3.2,0l-3.1-0.1c-0.3,0-0.5,0-0.8,0l34.8-75l3.2,1c1.2,0.3,2.3,0.6,3.6,0.9s2.4,0.6,3.7,0.8L64,69 c1.3,0.1,2.6,0.3,3.9,0.4s2.6,0.1,4,0.1s2.7,0.1,4.1,0.1s2.7-0.3,4.1-0.4s2.8-0.2,4.1-0.4l4.1-0.8l4.1-0.9c1.3-0.3,2.7-0.7,4-1.1 l7.4-2.5l1.8-0.6l1.4 0.4c1-0.3,2-0.5,3-0.7c1.1-0.2,2.1-0.4,3.1-0.6c1-0.2,2.1-0.3,3.1-0.4c1-0.1,2.1-0.2,3.1-0.2 c1-0.1,2-0.1,3,0c1.1,0,2.2,0,3.1,0.2L127,61l1.5,0.2c6,0.9,11.8,2.7,17.3,5.3l1.3,0.6c1.3,0.6,2.6,1.2,3.8,1.9 c0.1,0.1,0.2,0.2,0.3,0.2L116.2,144.7z"
          />
          <path
            class="st12"
            d="M68.1,89.9l-1.8,3.8c-0.5,1.3-2,1.9-3.3,1.4c-1.3-0.5-1.9-2-1.4-3.3c0-0.1,0.1-0.2,0.1-0.2l1.8-3.8 c0.6-1.2,2.1-1.7,3.4-1.1C68.1,87.3,68.6,88.7,68.1,89.9z"
          />
          <path
            class="st12"
            d="M110.4,109.6l-1.8,3.8c-0.5,1.3-2,1.9-3.3,1.3c-1.3-0.5-1.9-2-1.3-3.3c0-0.1,0-0.1,0.1-0.1l1.8-3.8 c0.5-1.3,2-1.9,3.3-1.4c1.3,0.5,1.9,2,1.4,3.3C110.5,109.4,110.5,109.5,110.4,109.6z"
          />
          <path
            class="st12"
            d="M92.7,107.8c-6.1,2.6-13.2-0.2-15.8-6.4c-0.2-0.4-0.3-0.8-0.4-1.2c-0.5-1.3,0.2-2.7,1.5-3.2 c1.3-0.5,2.7,0.2,3.2,1.5c0,0.1,0.1,0.2,0.1,0.3c1.2,3.7,5.2,5.8,8.9,4.6c0.2-0.1,0.4-0.1,0.5-0.2c1.3-0.5,2.7,0.1,3.3,1.3 C94.4,105.8,93.9,107.2,92.7,107.8L92.7,107.8z"
          />
        </svg>
        <div class="icon"></div>
        <p>drinks</p>
      </div>

      <div id="selector">
        <div
          id="triangle"
          v-bind:class="{ active: category.name == 'Sushi' }"
          :style="category.position"
        ></div>
      </div>
    </div>

    <transition name="down" mode="out-in">
      <div class="categories sub" v-if="category.name == `Sushi`">
        <div @click="subcategory.position = 'transform: translate(0%);'; subcategory.name='Nigiri'">
          <div class="icon"></div>
          <p>Nigiri</p>
        </div>

        <div @click="subcategory.position = 'transform: translate(100%);'; subcategory.name='Ura'">
          <div class="icon"></div>
          <p>Ura maki</p>
        </div>

        <div
          @click="subcategory.position = 'transform: translate(200%);'; subcategory.name='Gunkan'"
        >
          <div class="icon"></div>
          <p>Gunkan maki</p>
        </div>

        <div
          @click="subcategory.position = 'transform: translate(300%);'; subcategory.name='Sashimi'"
        >
          <div class="icon"></div>
          <p>Sashimi</p>
        </div>

        <div id="selector">
          <div id="triangle" :style="subcategory.position"></div>
        </div>
      </div>
    </transition>

    <svg
      class="circle"
      version="1.1"
      id="chinaSVG"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 75.7 52"
      style="enable-background:new 0 0 75.7 52;"
      xml:space="preserve"
    >
      <title>Asset 1</title>
      <path
        class="st10"
        d="M8.1,13.3c6.1-0.4,12.2,0.3,18.2-0.7c2.3-0.4,2.7,0.7,3.4,2.1c0.5,1,0.2,1.6-1,1.6c-1.7,0.1-3.4,0.2-5.1,0.3
      c-0.9,0-1.2,0.3-1.3,1.2c-0.2,3.6,0,7.1,0.5,10.6c0.1,0.9-0.1,1.2-1,1.2c-1.1,0-2.4,0.5-2.9-1.1c-0.2-0.8-0.3-1.7-0.3-2.6
      c0.2-2.8-0.4-5.5-0.6-8.3c-0.1-1.7-1.6-0.5-2.4-0.7s-1,0.2-1,1c0.3,3.3,0.4,6.6,0.7,9.9c0.1,0.7,0,0.9-0.8,1
      c-2.3,0.4-3.5-0.5-3.7-2.8c-0.2-2.5-0.4-5.1-0.6-7.6c-0.1-0.9-0.4-1.1-1.4-1c-2.8,0.4-4.1-0.9-3.9-3.8c0-0.5,0.2-0.6,0.6-0.6
      C6.5,13.4,7.3,13.3,8.1,13.3z"
      />
      <path
        class="st10"
        d="M8.2,35c0.7,0,0.9,0.4,1.1,0.7c3.2,3.9,7.9,6.4,13,6.8c3.5,0.4,4.6-1,4-4.4c-0.1-0.5,0-0.9,0.2-1.3
      c0.5-0.4,0.7,0.4,1.1,0.5c1.1 ,0.4,1.9,1.2,2.3,2.3c1.5,3.3,0.1,6.2-3.4,7.2c-1.6,0.4-3.2,0.4-4.8-0.1c-5-1.2-9.5-3.2-12.4-7.7
      C8.6,37.8,8.2,36.4,8.2,35z"
      />
      <path
        class="st10"
        d="M49.7,4C55,3.5,60.2,2.2,65.1,0c1.2,2.9,0.5,3.9-1.9,4.8c-2.7,0.9-5.5,1.4-8.4,1.3C52.9,6.1,51.5,5.1,49.7,4z"
      />
      <path
        class="st10"
        d="M65.2,11.8c-0.6-0.1-1.2-0.3-1.7-0.3c-0.5,0-0.9-0.4-0.9-0.9c-0.2-0.7,0.2-0.9,0.6-1.1c2.5-1.5,4-4.1,6.1-6.1
      c0.8-0.8,1.6-0.7,2-0.1c0.5,0.8,1.4,1.8,0.6,2.9c-1.3,1.9-2.9,3.6-4.7,5C66.5,11.7,65.8,11.9,65.2,11.8z"
      />
      <path
        class="st10"
        d="M32,28.6c-2.7-2-5.3-3.9-7.9-5.7c-0.5-0.3-0.4-0.5-0.2-1c0.4-0.7,0.9-1.2,1.5-1.7c1-0.8,1.9-0.9,2.9,0.2
      c0.8,0.9,1.7,1.8,2.7,2.6c1.4,1.1,2,2.2,1.2,3.9C32,27.5,32,28.1,32,28.6z"
      />
      <path class="st10" d="M36.8,40.4L28.2,34c1.7-0.8,2.9-3,5-1.6C36.9,34.7,37.9,37.2,36.8,40.4z" />
      <path
        class="st10"
        d="M3.4,19.8c3.2,1.2,4.1,2.7,3.8,5.8c0,0.4,0,0.7,0,1.1C7.1,29,6.8,29.2,4.5,29s-2.3-0.3-1.9-2.6
      S3.7,22.2,3.4,19.8z"
      />
      <path
        class="st10"
        d="M2.5,35c0.8,0.6,1.8,1,2.8,1.2c1.5,0.2,1.6,1.1,1.4,2.3c-0.5,3.8-2.4,5.1-6.8,4.2C2,40.5,2.5,37.9,2.5,35z"
      />
      <path
        class="st10"
        d="M21.2,37.4cz-2.4-1-4.9-1.3-7.1-2.3c-0.2-0.1-0.4-0.1-0.4-0.5c0.1-1.4,1.2-2.1,2.1-2.9
      c0.7-0.6,1.4-0.4,2.1,0.1c0.9,0.6,1.9,1,2.7,1.6c0.8,0.8,1.3,2,1.2,3.1C21.7,37,21.6,37.4,21.2,37.4z"
      />
      <path
        class="st10"
        d="M14.4,5.3c0.6,0,1,0,1.3,0.5c0.6,1,1.3,2,2,2.9c0.5,0.5,0.5,1.3,0,1.9c-1.5,1.9-1.6,2-3.2,0.2
      c-0.9-1-1.9-2-2.8-2.9C11,7.3,11,6.8,11.9,6.5S13.4,5.2,14.4,5.3z"
      />
      <path
        class="st10"
        d="M57.2,7.8c1.4,0.2,2.3,1.5,2.1,2.9c0,0.1,0,0.1,0,0.2c-0.2,1.2-1.5,1.6-2.7,1.6c-0.8,0-2.7-2-2.6-2.8
      C54,8.6,55.5,7.8,57.2,7.8z"
      />
      <path
        class="st10"
        d="M48.4,8.1c1.6,0,2.5,0.9,2.4,2.9c-0.1,1.7-1.7,1.4-2.8,1.6c-0.6,0.1-2.8-2.4-2.6-3.2
      C45.8,7.5,47.6,8.9,48.4,8.1z"
      />
      <path
        class="st10"
        d="M65.6,22c0.9,0.1,1.7,0.2,2.5,0.5c1.6,0.7,3.2,0.1,4.7-0.3c1.9-0.8,3.1-2.8,2.8-4.8c-0.6-2.4-2.5-4.2-4.9-4.6
      c-1.3-0.1-2.6,0.1-3.7,0.6c-2.9,1.1-6,0.8-8.9,1.3h-8.2c-0.8-0.1-1.7-0.2-2.5-0.2c-1.4,0-2.9,0.3-3.6-1.6
      c-0.1-0.3-0.9-1.2-1.6-0.9s-0.3,1.1-0.5,1.6c-0.9,2.6-1.3,5.5-3.5,7.6c1.4,0.5,2.8,0.5,4.2,0.1c0.5-0.1,1-0.4,1.3-0.8
      c1.9-2.4,2.2-2.5,5.2-2.5h0.4c3.6,0,3.7,0.2,3.4,3.8c0,0.4-0.1,0.8-0.2,1.2c-0.1,1-0.4,1.4-1.6,1.4c-1.4-0.1-2.8-0.3-4.2-0.4
      c-0.7,0-1.4-1-1.9-0.3c-0.7,1.1,0.1,2.1,0.7,3.1c0.4,0.8,1.3,1.3,2.2,1.2c1,0,1.9,0,2.8-0.1c0.8,0,1,0.2,0.6,0.9
      c-0.2,0.4-0.3,0.9-0.5,1.4c-2.3,7.2-5.9,13.4-12.3,17.7c-1,0.7-2.1,1.4-3.5,2.2c2.1,0.3,4.2-0.2,6-1.3c3.4-1.7,6.4-4.2,8.7-7.2
      c0.3-0.4,0.6-0.9,1.2-0.4c1.7,1.3,3.4,2.6,5.3,4c-3.1,1.9-5.7,4.3-9.4,4.6c1.5,2.1,4.3,2.9,6.6,1.9c2.1-0.9,4-2,5.8-3.3
      c1.1-1,2.7-1.2,4-0.6c3.3,1.2,6.9,1.6,10.4,1.1c0-2.5-1.7-3.3-3.9-3.6c-1.3-0.2-2.5-0.5-3.8-0.8c-1.3-0.3-2-0.6-0.9-2.2
      c2.2-3.1,3-6.4,0.2-9.7c-0.5-0.8-1.6-1.3-2.5-1c-2.2,0.3-4.5,0.4-6.7,0.1c-0.4,0-0.9,0-1.1-0.4c-0.5-0.9,1.2-3.7,2.2-3.7
      c1.4-0.1,2.6-0.4,3.3-1.8c0.3-0.6,0-0.9-0.5-1c-3.1-0.5-3.3-0.5-3.2-3.6c0-1.1-0.4-2.1-0.4-3.1l5.3-0.1c3.4,0.2,6.7-0.3,9.9-1.5
      l0.3-0.1c0,0.1,0,0.3,0,0.4C70.5,19,68.2,21,65.6,22z M63.4,36.1c-0.6,1.8-1.6,3.6-2.9,5c-0.4,0.5-0.8,0.4-1.2,0.1
      c-2.1-1.4-4.1-3-5.9-4.8c-0.8-0.8,0.1-1.2,0.1-1.7C56.6,37.1,60.1,35.5,63.4,36.1z"
      />
    </svg>

    <transition-group tag="div" name="list" mode="out-in" class="container">
      <div class="entry" v-for="entry in filteredItems" v-bind:key="entry.id">
        <div
          class="counter"
          v-if="entry.orders > 0"
          @click="entry.orders = entryOrder(entry.orders, -1); cartCalc(entry.orders);"
        >
          <!--<input type="number" v-model="entry.orders" :max="99" />-->
          {{entry.orders}}
        </div>
        <div class="info">
          <div
            class="info_icon"
            @click="entry.orders = entryOrder(entry.orders, -1); cartCalc(entry.orders);"
          >
            <p>del</p>
          </div>
          <div
            class="into_text"
            @click="entry.orders = entryOrder(entry.orders, 1); cartCalc(entry.orders);"
          >
            <h3>Name of very nice dish</h3>
            <p>Sushi is nice. Very nice cool. Should taste well. Does taste well. Buy again soon... bitch</p>
            <p>245kr</p>
          </div>
        </div>
        <div class="image" :style="entry.css"></div>
        <div class="textContainer">
          <p>{{entry.name}}</p>
        </div>
      </div>
    </transition-group>

    <button type="button" @click="menu = !menu">
      <p>enter</p>
      <p>click</p>
      <p>bestill</p>
    </button>

    <p class="quote">uiuiguiguyguktg ui tguit7t787 78 o87 t87 t8 f86t 78t78t87t87</p>
  </div>
</template>

<script>
export default {
  name: "root",
  computed: {
    filteredItems: function() {
      return this.items.filter(item => {
        if (this.subcategory.name.length > 0) {
          if (item.subtype === this.subcategory.name) {
            return true;
          } else {
            return false;
          }
        } else {
          if (item.type === this.category.name) {
            return true;
          } else {
            return false;
          }
        }
      });
    },
    itemsInCart: function() {
      return this.items.filter(item => {
        if (item.orders > 0) {
          return true;
        } else {
          return false;
        }
      });
    }
  },
  data: function() {
    return {
      menu: false,
      list: true,
      cart: {
        orders: 0,
        value: 0
      },
      category: {
        name: "Sushi",
        position: "margin: auto;"
      },
      subcategory: {
        name: "",
        position: ""
      },
      items: [
        {
          id: 1,
          type: "Sushi",
          subtype: "Nigiri",
          name: "yeah!",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/200/300)"
        },
        {
          id: 2,
          type: "Sushi",
          subtype: "Nigiri",
          name: "Cool",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/300/600)"
        },
        {
          id: 3,
          type: "Sushi",
          subtype: "Nigiri",
          name: "Dudes need hugs",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/200/700)"
        },
        {
          id: 4,
          type: "Sushi",
          subtype: "Nigiri",
          name: "yeah!",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/700/300)"
        },
        {
          id: 5,
          type: "Sushi",
          subtype: "Nigiri",
          name: "Cool",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/00/300)"
        },
        {
          id: 6,
          type: "Sushi",
          subtype: "Nigiri",
          name: "Dudes need hugs",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/900/300)"
        },
        {
          id: 7,
          type: "Sushi",
          subtype: "Nigiri",
          name: "yeah!",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/500/300)"
        },
        {
          id: 8,
          type: "Sushi",
          subtype: "Nigiri",
          name: "Cool",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/600/400)"
        },
        {
          id: 9,
          type: "Sushi",
          subtype: "Nigiri",
          name: "Water Closet",
          orders: 0,
          value: 150,
          css:
            "background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176832f2-61bc-49c7-8ec8-08626160ae8b/dbxhck0-8bf9d21a-d262-4f62-9ea4-a55b9f83f825.png/v1/fill/w_1024,h_768,q_80,strp/sam_cam_by_samuelmb_dbxhck0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvMTc2ODMyZjItNjFiYy00OWM3LThlYzgtMDg2MjYxNjBhZThiXC9kYnhoY2swLThiZjlkMjFhLWQyNjItNGY2Mi05ZWE0LWE1NWI5ZjgzZjgyNS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1HZBXYxOsB4pWtczCUBWq767R6FIu6mtOop_ZLQTt9c"
        },
        {
          id: 10,
          type: "Drinks",
          subtype: "Nigiri",
          name: "Cool",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/600/400)"
        },
        {
          id: 11,
          type: "Drinks",
          subtype: "Nigiri",
          name: "Cool",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/600/400)"
        },
        {
          id: 12,
          type: "Drinks",
          subtype: "Nigiri",
          name: "Cool",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/600/400)"
        },
        {
          id: 13,
          type: "Drinks",
          subtype: "Nigiri",
          name: "Cool",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/600/400)"
        },
        {
          id: 14,
          type: "Drinks",
          subtype: "Nigiri",
          name: "Cool",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/600/400)"
        },
        {
          id: 15,
          type: "Drinks",
          subtype: "Nigiri",
          name: "Cool",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/600/400)"
        },
        {
          id: 16,
          type: "Sides",
          subtype: "Nigiri",
          name: "Cool",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/600/400)"
        },
        {
          id: 17,
          type: "Sides",
          subtype: "Nigiri",
          name: "Cool",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/600/400)"
        },
        {
          id: 18,
          type: "Sides",
          subtype: "Nigiri",
          name: "Cool",
          orders: 0,
          value: 150,
          css: "background-image: url(https://picsum.photos/600/400)"
        }
      ]
    };
  },
  methods: {
    entryOrder(orders, addedValue) {
      if (0 > orders) {
        return 0;
      }
      let newValue = 0;
      newValue = orders + addedValue;
      return newValue;
    },
    cartCalc(thisEntry) {
      var orders = 0;
      var value = 0;
      this.items.forEach(function(entry) {
        let addedValue = entry.orders * entry.value;
        orders = orders + entry.orders;
        value = value + addedValue;
      });

      if (orders <= 0) {
        this.cart.orders = 0;
        this.cart.value = 0;
      } else if (thisEntry <= 0) {
        return;
      } else {
        this.cart.orders = orders;
        this.cart.value = value;
      }
    },
    greaterThanZero(number) {
      if (number > 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.st0 {
  fill: #f9f9fa;
}
.st1 {
  fill: #504d4c;
}
.st2 {
  fill: #fefefe;
}
.st3 {
  fill: #010101;
}
.st4 {
  fill: #313030;
}

.st5 {
  fill: #edebec;
}
.st6 {
  fill: #d5d3d3;
}
.st7 {
  fill: #f68d4f;
}
.st8 {
  fill: #e76e24;
}
.st9 {
  fill: #010101;
}

.st10 {
  fill: #a9bae0;
}
.st11 {
  fill: #3951a3;
  stroke: #000000;
  stroke-width: 3.4;
  stroke-miterlimit: 10;
}
.st12 {
  fill: #010101;
}

#smileSVG {
  width: 50%;
}

.quote {
  color: white;
  margin-bottom: 13em;
  margin-top: 13em;
}

.circle {
  margin-top: 30px;
  width: 3em;
  position: sticky;
  top: 1em;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 7;
  opacity: 0.5;
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
.redPoint {
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

.menu .grid {
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  height: 100%;
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
  width: 400px;
  opacity: 1;
  background-color: rgb(255, 255, 255);
  top: -7px;
}

.open .redPoint {
  background-color: black;
  width: 30px;
  height: 10px;
}

.redPoint:hover {
  opacity: 1;
}
.redPoint:focus {
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
  display: grid;
  grid-template-rows: 1fr 3em;
  height: 13em;
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
  transform: scale(0.95);
  border-radius: 1em;
}

.entry:hover .info {
  clip-path: circle(200% at 0% 50%);
}

.info {
  display: grid;
  grid-template-columns: 1fr 2fr;
  clip-path: circle(0% at 0% 50%);
  color: black;
  position: absolute;
  top: 0em;
  left: 0em;
  background-color: white;
  text-align: left;
  height: 100%;
  padding-right: 2em;
  padding-top: 0em;
  padding-bottom: 1em;
  transition: 0.8s ease-in-out;
}

.info p {
  margin-top: 1em;
}

.info_icon {
  background: rgba(0, 0, 0, 0.205);
  grid-row: span 4;
  margin-right: 2em;
}

.entry .counter {
  position: absolute;
  top: 0.5rem;
  right: 0.5em;
}

.counter {
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  background-color: red;
  border: #ffffff4f solid;
  color: white;
  z-index: 40;
  overflow: hidden;
}

.counter input {
  margin-top: 0.3em;
  margin-left: -0.1em;
}

input:focus {
  outline: #42b98300;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
  width: 2em;
  background-color: #42b98300;
  border: rgba(255, 255, 255, 0);
  color: white;
  text-align: center;
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
  color: white;
  background-color: aquamarine;
  background-size: cover;
  transition: 0.4s ease-out;
  cursor: pointer;
}
.textContainer {
  background-color: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
p {
  margin: 0em;
}
.shape {
  display: flex;
  align-items: center;
  justify-content: center;

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
  border-radius: 2em;
  width: 100%;
  background-color: white;
  z-index: 8;
  overflow: hidden;
  font-weight: bold;
}

.main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3em;
}

.sub {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: pink;
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
  margin-top: -3.9em;
  grid-column: span 3;
  z-index: 2;
}

.sub #selector {
  grid-column: span 4;
}

.categories .icon {
  height: 2em;
  width: 2em;
  background-color: rgba(0, 0, 0, 0.301);
  margin-bottom: 1em;
  margin: auto;
  transition: 0.4s ease-in-out;
}

.categories svg {
  width: 2.8em;
  margin-bottom: -2.5em;
}

.categories > #selector,
.categories > #selector:hover {
  position: relative;
  padding: 0em;
}

#triangle {
  background-color: rgb(0, 0, 0);
  height: 4em;
  width: calc(100% / 3);
  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transition: 0.8s ease-in-out;
}

.sub #triangle {
  width: calc(100% / 4);
}

.main #triangle.active {
  background-color: pink;
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

.down-leave-active {
  animation: slide-up 0.5s;
  animation-direction: reverse;
}

.down-enter-active {
  animation: slide-up 0.5s;
}

.slide-leave-active {
  animation: opacity 0.5s;
}

.categories .active {
  opacity: 1;
}

.list-enter-active {
  animation: slide-in2 0.5s;
  animation-fill-mode: both;
}

.list-leave-active {
  animation: opacity 0.5s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
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

@keyframes slide-in2 {
  0% {
    transform: translateY(15em);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes opacity {
  0% {
    transform: translateY(0em);
    height: none;
    padding: none;
  }
  100% {
    transform: translateY(10em);
    height: 0em;
    padding: 0;
  }
}

@keyframes slide-up {
  0% {
    height: 0em;
  }
  100% {
    height: 7.5em;
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
