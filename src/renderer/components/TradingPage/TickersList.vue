<template>
  <ul class="tickers-list">
    <ticker-tab :key="ticker.id" v-for="ticker in tickers" ticker="ticker.id">
    </ticker-tab>
  </ul>
</template>

<script>
  import TickerTab from "./TickersList/TickerTab"

  export default {
    name: 'symbols-list',
    components: {tickerTab: TickerTab},
    data(tickers) {
      tickers: tickers
    }
  }
</script>
