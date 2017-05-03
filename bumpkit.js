
import Bumpkit from '../src'

const sampleDirectory = 'https://scottdesdev.github.io/audio-demo/'

const bumpkit = new Bumpkit({
  tempo: 96,
  loop: 64
})

const tracks = [
  {
    name: 'Drum',
    loops: [
      { name: 'Everything 01', url: 'beats/everything-beat-01.mp3', bpm: 96, loop: 32, active: true },
      { name: 'Everything 02', url: 'beats/everything-beat-02.mp3', bpm: 96, loop: 32, active: false },
      { name: 'Everything 03', url: 'beats/everything-beat-03.mp3', bpm: 96, loop: 32, active: false },
      { name: 'Everything 04', url: 'beats/everything-beat-04.mp3', bpm: 96, loop: 32, active: false },

      { name: 'Forever 01', url: 'beats/last-forever-beat-01.mp3', bpm: 96, loop: 16, active: false },
      { name: 'Forever 02', url: 'beats/last-forever-beat-02.mp3', bpm: 96, loop: 16, active: false },
    ]
  },
  {
    name: 'Bass',
    loops: [
      { name: 'Everything 01', url: 'bass/everything-bass-01.mp3', bpm: 96, loop: 64, active: true },
      { name: 'Everything 02', url: 'bass/everything-bass-02.mp3', bpm: 96, loop: 64, active: false },
      { name: 'Everything 03', url: 'bass/everything-bass-03.mp3', bpm: 96, loop: 64, active: false },
      { name: 'Everything 04', url: 'bass/everything-bass-04.mp3', bpm: 96, loop: 64, active: false },

      { name: 'Forever 01', url: 'bass/last-forever-bass-01.mp3', bpm: 96, loop: 32, active: false },
      { name: 'Forever 02', url: 'bass/last-forever-bass-02.mp3', bpm: 96, loop: 32, active: false },
      { name: 'Forever 03', url: 'bass/last-forever-bass-03.mp3', bpm: 96, loop: 32, active: false },
    ]
  },
  {
    name: 'Songs',
    loops: [
      { name: 'Everything 01', url: 'song/wood-for-trees.m4a', bpm: 96, loop: 32, active: true },
    ]
  },
  {
    name: 'Samples',
    loops: [
      { name: 'Everything 01', url: 'everything/everything-cutup-01.mp3', bpm: 96, loop: 32, active: true },
      { name: 'Everything 02', url: 'everything/everything-cutup-02.mp3', bpm: 96, loop: 32, active: false },
      { name: 'Everything 03', url: 'everything/everything-cutup-03.mp3', bpm: 96, loop: 32, active: false },
      { name: 'Everything 04', url: 'everything/everything-cutup-04.mp3', bpm: 96, loop: 32, active: false },

      { name: 'Forever 01',   url: 'forever/last-forever-vocal.mp3',      bpm: 96, loop: 16, active: false },
      { name: 'Forever 02',   url: 'forever/last-forever-vocal-02.mp3',   bpm: 96, loop: 32, active: false },
      { name: 'Forever 03',   url: 'forever/last-forever-vocal-03.mp3',   bpm: 96, loop: 16, active: false },
      { name: 'Forever Fill', url: 'forever/last-forever-vocal-fill.mp3', bpm: 96, loop: 32, active: false },
    ]
  },
].map((track) => {
  track.loops = track.loops.map((l) => {
    l.url = sampleDirectory + l.url
    return l
  })
  return track
}).map((track) => {
  track.loops = track.loops.map((l) => {
    const { bpm, loop, url } = l
    l.looper = new Bumpkit.Looper(bumpkit, l)
    return l
  })
  return track
})

bumpkit.setState({ tracks })

export default bumpkit
