// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Cloche
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:allthemodium_essence", "count": 5}],
  "input": {"item": "mysticalagriculture:allthemodium_seeds"},
  "soil": {"item": "mysticalagradditions:insanium_farmland"},
  "time": 50, "render": {"type": "generic", "block": "allthemodium:allthemodium_block"}})

  
//Insolator
event.custom({"type": "thermal:insolator",
  "ingredient": {"item": "mysticalagriculture:allthemodium_seeds"},
  "result": [{"item": "mysticalagriculture:allthemodium_essence", "chance": 1.0},
             {"item": "mysticalagriculture:allthemodium_seeds", "chance": 1.0}],
  "water_mod": 6.0})

//Botany Pots
event.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists",
"values":["mysticalagriculture:allthemodium_seeds","mysticalagriculture:allthemodium_essence"]}],
"type":"botanypots:crop","seed":{"item":"mysticalagriculture:allthemodium_seeds"},"categories":["insanium"],
"growthTicks":2400,"display":{"type":"botanypots:aging","block":"mysticalagriculture:allthemodium_crop"},
"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:allthemodium_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:allthemodium_seeds"}},
{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})
})


