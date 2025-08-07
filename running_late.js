/*
 * @title running late
 * @by mbrajk
 *
 * @description experimenting with strudel.cc. Not musically 
 *              inclined but I know if things sound good
 */
var drums = sound("[bd - - <bd rim:2>] [<rim [hh rim:2]>]")
  .gain("[0.70 [<.50 0.60>]]")
  .bank("RolandTR707 [<RolandTR707 RolandTR909>]")
  .fast(2)
  .gain(1.2)
  //.distort(0.7)
  .delay(slider(0.077, 0, 1))
  .sustain(slider(0.198, -2, 2))

var melody = cat(
    stack("g3","b3","e4"),
    stack("a3","c3","e4"),
    stack("b3","d3","fs4"),
    stack("b3","c3","d4")
   ).note()
  .chop("<[8 16]!3 8>")
  .room(0.2)
  .delay(.2)
  .sustain(0.5)
  .gain(0.85)
  .lpf(sine.range("500", "1000").slow(4))

var saw = note("g e a [b d a e]")
  .slow(4)
  .seg("16 8 4 8")
  .sometimesBy(.75, x => x.jux(rev))
  .clip(cosine.range(0.25, 0.75).fast(2))
  .s("supersaw")
  .sometimes(x =>x.superimpose((y) => y.detune("<0.5>").gain(0.6)))
  .room(1.3)
  .sustain(0.2)
  .gain(0.6)
  .delay(slider(1.278, 0 ,2))
  .lpf(sine.range(400,1200).slow(4)).lpq(3)
  .pan(sine.range(0.3, 0.7).slow(2))

arrange(
  [8, saw],
  [8, stack(saw, drums)],
  [32, stack(melody, saw, drums)],
  [8, stack(melody, saw)]
)
