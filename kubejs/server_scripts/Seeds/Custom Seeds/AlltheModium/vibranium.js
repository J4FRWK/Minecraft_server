// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Cloche
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:vibranium_essence", "count": 5}],
  "input": {"item": "mysticalagriculture:vibranium_seeds"},
  "soil": {"item": "mysticalagradditions:insanium_farmland"},
  "time": 50, "render": {"type": "generic", "block": "allthemodium:vibranium_block"}})

  
//Insolator
event.custom({"type": "thermal:insolator",
  "ingredient": {"item": "mysticalagriculture:vibranium_seeds"},
  "result": [{"item": "mysticalagriculture:vibranium_essence", "chance": 1.0},
             {"item": "mysticalagriculture:vibranium_seeds", "chance": 1.0}],
  "water_mod": 6.0})

//Botany Pots  
event.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists",
"values":["mysticalagriculture:vibranium_seeds","mysticalagriculture:vibranium_essence"]}],
"type":"botanypots:crop","seed":{"item":"mysticalagriculture:vibranium_seeds"},"categories":["insanium"],
"growthTicks":2400,"display":{"type":"botanypots:aging","block":"mysticalagriculture:vibranium_crop"},
"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:vibranium_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:vibranium_seeds"}},
{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})    
})


