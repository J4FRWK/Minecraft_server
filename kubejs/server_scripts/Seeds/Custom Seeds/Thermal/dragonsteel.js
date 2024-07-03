// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Cloche
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:dragonsteel_essence", "count": 3}],
  "input": {"item": "mysticalagriculture:dragonsteel_seeds"},
  "soil": {"item": "mysticalagriculture:supremium_farmland"},
  "time": 80, "render": {"type": "generic", "block": "thermal_extra:dragonsteel_block"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:dragonsteel_essence", "count": 5}],
  "input": {"item": "mysticalagriculture:dragonsteel_seeds"},
  "soil": {"item": "mysticalagradditions:insanium_farmland"},
  "time": 50, "render": {"type": "generic", "block": "thermal_extra:dragonsteel_block"}})

  
//Insolator
event.custom({"type": "thermal:insolator",
  "ingredient": {"item": "mysticalagriculture:dragonsteel_seeds"},
  "result": [{"item": "mysticalagriculture:dragonsteel_essence", "chance": 1.0},
             {"item": "mysticalagriculture:dragonsteel_seeds", "chance": 1.0}],
  "water_mod": 3.0})

//Botany Pots
event.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists",
"values":["mysticalagriculture:dragonsteel_seeds","mysticalagriculture:dragonsteel_essence"]}],
"type":"botanypots:crop","seed":{"item":"mysticalagriculture:dragonsteel_seeds"},"categories":["supremium"],
"growthTicks":2400,"display":{"type":"botanypots:aging","block":"mysticalagriculture:dragonsteel_crop"},
"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:dragonsteel_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:dragonsteel_seeds"}},
{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})
})


