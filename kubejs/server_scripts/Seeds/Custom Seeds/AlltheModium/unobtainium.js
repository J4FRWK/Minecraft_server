// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Cloche
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:unobtainium_essence", "count": 5}],
  "input": {"item": "mysticalagriculture:unobtainium_seeds"},
  "soil": {"item": "mysticalagradditions:insanium_farmland"},
  "time": 50, "render": {"type": "generic", "block": "allthemodium:unobtainium_block"}})

  
//Insolator
event.custom({"type": "thermal:insolator",
  "ingredient": {"item": "mysticalagriculture:unobtainium_seeds"},
  "result": [{"item": "mysticalagriculture:unobtainium_essence", "chance": 1.0},
             {"item": "mysticalagriculture:unobtainium_seeds", "chance": 1.0}],
  "water_mod": 6.0})

//Botany Pots  
event.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists",
"values":["mysticalagriculture:unobtainium_seeds","mysticalagriculture:unobtainium_essence"]}],
"type":"botanypots:crop","seed":{"item":"mysticalagriculture:unobtainium_seeds"},"categories":["insanium"],
"growthTicks":2400,"display":{"type":"botanypots:aging","block":"mysticalagriculture:unobtainium_crop"},
"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:unobtainium_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:unobtainium_seeds"}},
{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})  
})


