// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Cloche
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:cloggrum_essence", "count": 2}],
  "input": {"item": "mysticalagriculture:cloggrum_seeds"},
  "soil": {"item": "mysticalagriculture:tertium_farmland"},
  "time": 160, "render": {"type": "generic", "block": "undergarden:cloggrum_block"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:cloggrum_essence", "count": 2}],
  "input": {"item": "mysticalagriculture:cloggrum_seeds"},
  "soil": {"item": "mysticalagriculture:imperium_farmland"},
  "time": 120, "render": {"type": "generic", "block": "undergarden:cloggrum_block"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:cloggrum_essence", "count": 3}],
  "input": {"item": "mysticalagriculture:cloggrum_seeds"},
  "soil": {"item": "mysticalagriculture:supremium_farmland"},
  "time": 80, "render": {"type": "generic", "block": "undergarden:cloggrum_block"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:cloggrum_essence", "count": 5}],
  "input": {"item": "mysticalagriculture:cloggrum_seeds"},
  "soil": {"item": "mysticalagradditions:insanium_farmland"},
  "time": 50, "render": {"type": "generic", "block": "undergarden:cloggrum_block"}})

  
//Insolator
event.custom({"type": "thermal:insolator",
  "ingredient": {"item": "mysticalagriculture:cloggrum_seeds"},
  "result": [{"item": "mysticalagriculture:cloggrum_essence", "chance": 1.0},
             {"item": "mysticalagriculture:cloggrum_seeds", "chance": 1.0}],
  "water_mod": 3.0})

//Botany Pots
event.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists",
"values":["mysticalagriculture:cloggrum_seeds","mysticalagriculture:cloggrum_essence"]}],
"type":"botanypots:crop","seed":{"item":"mysticalagriculture:cloggrum_seeds"},"categories":["tertium"],
"growthTicks":2400,"display":{"type":"botanypots:aging","block":"mysticalagriculture:cloggrum_crop"},
"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:cloggrum_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:cloggrum_seeds"}},
{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})
})


