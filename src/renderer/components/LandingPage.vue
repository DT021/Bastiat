<template>
  <div id="wrapper">
    <main class="center">
      <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
      <div class="center">
        <div class="doc">
          <div class="title">Getting Started</div>
          <p>
            Bastiat comes packed with a trading journal and full fledged interface that
            interacts with popular exchanges such as Bitmex. It allows you to track your
            trades and set configurations for scalping as well as provide robust
            documentation for your trades.
          </p>
          <button class="alt" @click="navigate('journal')">Journal</button>
          <button class="alt" @click="navigate('trading-page')">Trading Page</button>
        </div>
        <div class="doc">
          <div class="title alt">Settings</div>
          <button class="alt" @click="navigate('settings')">Settings</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import router from '../router/index.js'

  export default {
    name: 'landing-page',
    methods: {
      navigate(page) {
        router.push({ name: page })
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-left: 25%;
  }

  main > div { flex-basis: 50%; }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
