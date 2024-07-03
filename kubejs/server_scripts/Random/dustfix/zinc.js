//Remove
ServerEvents.recipes(event => {
  event.shaped('6x alltheores:zinc_ingot', ['111','1 1','111'], {1: 'mysticalagriculture:zinc_essence'})
  event.remove({id: 'exnihilosequentia:ens_raw_zinc'})
  event.remove({id: 'exmachinis:compacting/raw_zinc'})
  event.custom({"type": "exmachinis:compacting","input": {"count": 4, "ingredient": {"item": "exnihilosequentia:zinc_pieces"}}, "output": {"item": "alltheores:raw_zinc"}})
})