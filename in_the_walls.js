/*
 * @title in the walls
 * @by mbrajk
 *
 * @description working from basics
 */
$: note("<[48 67 63 [62, 58]]!2>, <[55 - - 50]!2 [53 - - 50]!2 [44 - - 50]!2 [43 - - 50]!2>")
  .sound("piano gm_electric_guitar_muted").room(0.8)
  .lpf(sine.range(400, 2000).slow(4))
  .pan(sine.slow(2))

$: sound("[bd - - <bd rim:2>] [<rim hh>]")
  .gain("[0.70 [<.50 0.60>]]")
  .bank("RolandTR707 [<RolandTR707 RolandTR909>]")
  .delay(".5")

$: note("<[36 36 43 36] [34 34 41 34] [32 32 39 32] [31 31 38 31]>")
  .chop(4)
  //.jux(rev)
  .sound("sawtooth")
  //.lpf(slider(438.4, "100", "1000"))
  .lpf(sine.range("200", "1000").slow(8))
  .gain(cosine.range("0.5", "1").slow(2))
  //.pan(sine.slow(4))
  .room(0.9) 
  .delay(0.3)
  .sustain(2) 
  .slow(2)
