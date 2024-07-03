//Remove
ServerEvents.recipes(event => {
  event.remove({id: 'chicken_roost:roost/tier7/roostv7_tungstensteel'})
  event.remove({id: 'chicken_roost:basicbreeding/fromrefinediron/bb_tungstensteel'})
  event.remove({id: 'chicken_roost:basicbreeding/fromtungsten/bb_tungstensteel'})
  event.remove({id: 'chicken_roost:soulbreeding/tier7/sb_tungstensteel'})
  event.remove({output: 'chicken_roost:a_chicken_tungstensteel_spawn_egg'})
})