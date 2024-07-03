ServerEvents.recipes(event => {

  event.shapeless('9x alltheores:brass_ingot', ['alltheores:brass_block'])

  event.recipes.powah.energizing(["allthemodium:unobtainium_dust", "allthemodium:allthemodium_dust"], "allthemodium:unobtainium_allthemodium_alloy_dust", 1000000)
  event.recipes.powah.energizing(["allthemodium:unobtainium_dust", "allthemodium:vibranium_dust"], "allthemodium:unobtainium_vibranium_alloy_dust", 1000000)
  event.recipes.powah.energizing(["allthemodium:vibranium_dust", "allthemodium:allthemodium_dust"], "allthemodium:vibranium_allthemodium_alloy_dust", 1000000)

//Smelting
    event.smelting('allthemodium:unobtainium_allthemodium_alloy_ingot', 'allthemodium:unobtainium_allthemodium_alloy_dust')
    event.smelting('allthemodium:unobtainium_vibranium_alloy_ingot', 'allthemodium:unobtainium_vibranium_alloy_dust')
    event.smelting('allthemodium:vibranium_allthemodium_alloy_ingot', 'allthemodium:vibranium_allthemodium_alloy_dust' )   
//Molten AllTheModium
  //AlltheModium Ore
  event.custom({"type": "thermal:crucible", "ingredient": {"item": "allthemodium:allthemodium_ore"},
  "result": [{"fluid": "allthemodium:molten_allthemodium", "amount": 1000}], "energy": 200000})
  //AlltheModium Deepslate Ore
  event.custom({"type": "thermal:crucible", "ingredient": {"item": "allthemodium:allthemodium_slate_ore"},
  "result": [{"fluid": "allthemodium:molten_allthemodium", "amount": 1000}], "energy": 200000})
  //AlltheModium Nugget
  event.custom({"type": "thermal:crucible", "ingredient": {"item": "allthemodium:allthemodium_nugget"},
  "result": [{"fluid": "allthemodium:molten_allthemodium", "amount": 10}], "energy": 2000})
  //AlltheModium Ingot
  event.custom({"type": "thermal:crucible", "ingredient": {"item": "allthemodium:allthemodium_ingot"},
  "result": [{"fluid": "allthemodium:molten_allthemodium", "amount": 100}], "energy": 20000})
//Molten Vibranium
  //Vibranium Ore
  event.custom({"type": "thermal:crucible", "ingredient": {"item": "allthemodium:vibranium_ore"},
  "result": [{"fluid": "allthemodium:molten_vibranium", "amount": 1000}], "energy": 200000})
  //Other Vibranium Ore
  event.custom({"type": "thermal:crucible", "ingredient": {"item": "allthemodium:other_vibranium_ore"},
  "result": [{"fluid": "allthemodium:molten_vibranium", "amount": 1000}], "energy": 200000})
  //Vibranium Nugget
  event.custom({"type": "thermal:crucible", "ingredient": {"item": "allthemodium:vibranium_nugget"},
  "result": [{"fluid": "allthemodium:molten_vibranium", "amount": 10}], "energy": 2000})
  //Vibranium Ingot
  event.custom({"type": "thermal:crucible", "ingredient": {"item": "allthemodium:vibranium_ingot"},
  "result": [{"fluid": "allthemodium:molten_vibranium", "amount": 100}], "energy": 20000})
//Molten Unobtainium
  //Unobtainium Ore
  event.custom({"type": "thermal:crucible", "ingredient": {"item": "allthemodium:unobtainium_ore"},
  "result": [{"fluid": "allthemodium:molten_unobtainium", "amount": 1000}], "energy": 200000})
  //Unobtainium Nugget
  event.custom({"type": "thermal:crucible", "ingredient": {"item": "allthemodium:unobtainium_nugget"},
  "result": [{"fluid": "allthemodium:molten_unobtainium", "amount": 10}], "energy": 2000})
  //Unobtainium Ingot
  event.custom({"type": "thermal:crucible", "ingredient": {"item": "allthemodium:unobtainium_ingot"},
  "result": [{"fluid": "allthemodium:molten_unobtainium", "amount": 100}], "energy": 20000})

//Soul Lava    
  event.custom({"type": "thermal:brewer", "ingredients": [
  {"item": "allthemodium:ancient_soulberries"},
  {"fluid": "allthemodium:molten_unobtainium", "amount": 2000}],
  "result": [{"fluid": "allthemodium:soul_lava", "amount": 250}], "energy": 1000})



      
})