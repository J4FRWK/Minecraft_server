//Remove
ServerEvents.recipes(event => {
  
  event.remove({id: 'exnihilosequentia:ens_raw_platinum'})
  event.remove({id: 'exmachinis:compacting/raw_platinum'})
  event.custom({"type": "exmachinis:compacting","input": {"count": 4, "ingredient": {"item": "exnihilosequentia:platinum_pieces"}}, "output": {"item": "alltheores:raw_platinum"}})
})