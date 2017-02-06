const ctx = new AudioContext()
const osc = ctx.createOscillator()
osc.type = "sine"
osc.connect(ctx.destination)
osc.start(ctx.currentTime)
