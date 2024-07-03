//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'mysticalagriculture:chrome_essence'})
  event.remove({output: 'mysticalagriculture:chrome_seed'})
  event.remove({id: 'mysticalagriculture:seed/infusion/chrome'})
  event.remove({id: 'chicken_roost:roost/tier5/roostv5_chrome'})
  event.remove({id: 'chicken_roost:basicbreeding/fromaluminium/bb_chrome'})
  event.remove({id: 'chicken_roost:soulbreeding/tier5/sb_chrome'})
  event.remove({output: 'chicken_roost:a_chicken_chrome_spawn_egg'})
})