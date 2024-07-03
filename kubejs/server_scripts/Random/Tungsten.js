//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'mysticalagriculture:tungsten_essence'})
  event.remove({output: 'mysticalagriculture:tungsten_seed'})
  event.remove({id: 'mysticalagriculture:seed/infusion/tungsten'})
  event.remove({id: 'chicken_roost:roost/tier6/roostv6_tungsten'})
  event.remove({id: 'chicken_roost:basicbreeding/fromrefinediron/bb_tungsten'})
  event.remove({id: 'chicken_roost:basicbreeding/fromtungsten/bb_tungsten'})
  event.remove({id: 'chicken_roost:soulbreeding/tier6/sb_tungsten'})
  event.remove({output: 'chicken_roost:a_chicken_tungsten_spawn_egg'})
})