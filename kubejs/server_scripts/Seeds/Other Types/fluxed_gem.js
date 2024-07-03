// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Cloche
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:flux_infused_gem_essence", "count": 3}],
  "input": {"item": "mysticalagriculture:flux_infused_gem_seeds"},
  "soil": {"item": "mysticalagriculture:supremium_farmland"},
  "time": 80, "render": {"type": "generic", "block": "mysticalagriculture:flux_infused_gem_crop"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:flux_infused_gem_essence", "count": 5}],
  "input": {"item": "mysticalagriculture:flux_infused_gem_seeds"},
  "soil": {"item": "mysticalagradditions:insanium_farmland"},
  "time": 50, "render": {"type": "generic", "block": "mysticalagriculture:flux_infused_gem_crop"}})

  
//Insolator
event.custom({"type": "thermal:insolator",
  "ingredient": {"item": "mysticalagriculture:flux_infused_gem_seeds"},
  "result": [{"item": "mysticalagriculture:flux_infused_gem_essence", "chance": 1.0},
             {"item": "mysticalagriculture:flux_infused_gem_seeds", "chance": 1.0}],
  "flux_infused_gem_mod": 1.0})

//Botany Pots
event.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists",
"values":["mysticalagriculture:flux_infused_gem_seeds","mysticalagriculture:flux_infused_gem_essence"]}],
"type":"botanypots:crop","seed":{"item":"mysticalagriculture:flux_infused_gem_seeds"},"categories":["inferium"],
"growthTicks":2400,"display":{"type":"botanypots:aging","block":"mysticalagriculture:flux_infused_gem_crop"},
"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:flux_infused_gem_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:flux_infused_gem_seeds"}},
{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})
})


