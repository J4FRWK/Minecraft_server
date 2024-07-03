// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Cloche
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:shard_essence", "count": 1}],
  "input": {"item": "mysticalagriculture:shard_seeds"},
  "soil": {"item": "mysticalagriculture:inferium_farmland"},
  "time": 300, "render": {"type": "generic", "block": "mysticalagriculture:shard_crop"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:shard_essence", "count": 2}],
  "input": {"item": "mysticalagriculture:shard_seeds"},
  "soil": {"item": "mysticalagriculture:prudentium_farmland"},
  "time": 200, "render": {"type": "generic", "block": "mysticalagriculture:shard_crop"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:shard_essence", "count": 4}],
  "input": {"item": "mysticalagriculture:shard_seeds"},
  "soil": {"item": "mysticalagriculture:tertium_farmland"},
  "time": 160, "render": {"type": "generic", "block": "mysticalagriculture:shard_crop"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:shard_essence", "count": 6}],
  "input": {"item": "mysticalagriculture:shard_seeds"},
  "soil": {"item": "mysticalagriculture:imperium_farmland"},
  "time": 120, "render": {"type": "generic", "block": "mysticalagriculture:shard_crop"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:shard_essence", "count": 8}],
  "input": {"item": "mysticalagriculture:shard_seeds"},
  "soil": {"item": "mysticalagriculture:supremium_farmland"},
  "time": 80, "render": {"type": "generic", "block": "mysticalagriculture:shard_crop"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:shard_essence", "count": 10}],
  "input": {"item": "mysticalagriculture:shard_seeds"},
  "soil": {"item": "mysticalagradditions:insanium_farmland"},
  "time": 50, "render": {"type": "generic", "block": "mysticalagriculture:shard_crop"}})

  
//Insolator
event.custom({"type": "thermal:insolator",
  "ingredient": {"item": "mysticalagriculture:shard_seeds"},
  "result": [{"item": "mysticalagriculture:shard_essence", "chance": 1.0},
             {"item": "mysticalagriculture:shard_seeds", "chance": 1.0}],
  "shard_mod": 1.0})

//Botany Pots
event.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists",
"values":["mysticalagriculture:shard_seeds","mysticalagriculture:shard_essence"]}],
"type":"botanypots:crop","seed":{"item":"mysticalagriculture:shard_seeds"},"categories":["tertium"],
"growthTicks":2400,"display":{"type":"botanypots:aging","block":"mysticalagriculture:shard_crop"},
"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:shard_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:shard_seeds"}},
{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})
})


