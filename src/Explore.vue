<template lang="html">
  <div class="app">
    <div class="">
      <button @click="play" v-if="!isPlay">play</button>
      <button @click="stop" v-else="isPlay">stop</button>
    </div>

    <div class="">
      Oscillator Frequency:  {{ oscFreq }}
      <input v-model="oscFreq" type="range" min="0" max="1500">
    </div>

    <div class="">
      Oscillator Type:
      <select v-model="oscType">
        <option>sawtooth</option>
        <option>sine</option>
        <option>triangle</option>
        <option>square</option>
      </select>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      ctx: new AudioContext(),
      osc: null,
      isPlay: false,
      oscFreq: 30,
      oscType: "sine",
    }
  },
  computed: {
  },
  watch: {
    oscFreq() {
      if(this.isPlay){
        this.stop()
      }
      this.play()
    },
    oscType() {
      if(this.isPlay){
        this.stop()
      }
      this.play()
    }
  },
  methods: {
    play() {
      this.osc = this.ctx.createOscillator()

      this.osc.connect(this.ctx.destination)
      this.osc.frequency.value = this.oscFreq
      this.osc.type = this.oscType

      this.osc.start(this.ctx.currentTime)
      this.isPlay = true
    },
    stop() {
      this.osc.stop()
      this.isPlay = false
    }
  }
}
</script>

<style lang="css">
  .app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
