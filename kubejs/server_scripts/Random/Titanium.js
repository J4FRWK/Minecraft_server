//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'mysticalagriculture:titanium_essence'})
  event.remove({output: 'mysticalagriculture:titanium_seed'})
  event.remove({id: 'mysticalagriculture:seed/infusion/titanium'})
  event.remove({id: 'chicken_roost:roost/tier9/roostv9_titanium'})
  event.remove({id: 'chicken_roost:basicbreeding/fromadamantium/bb_titanium'})
  event.remove({id: 'chicken_roost:soulbreeding/tier9/sb_titanium'})
  event.remove({output: 'chicken_roost:a_chicken_titanium_spawn_egg'})
})