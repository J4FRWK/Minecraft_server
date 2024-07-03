// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Cloche
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:ice_shard_essence", "count": 1}],
  "input": {"item": "mysticalagriculture:ice_shard_seeds"},
  "soil": {"item": "mysticalagriculture:prudentium_farmland"},
  "time": 200, "render": {"type": "generic", "block": "ad_astra:moon_ice_shard_ore"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:ice_shard_essence", "count": 2}],
  "input": {"item": "mysticalagriculture:ice_shard_seeds"},
  "soil": {"item": "mysticalagriculture:tertium_farmland"},
  "time": 160, "render": {"type": "generic", "block": "ad_astra:moon_ice_shard_ore"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:ice_shard_essence", "count": 2}],
  "input": {"item": "mysticalagriculture:ice_shard_seeds"},
  "soil": {"item": "mysticalagriculture:imperium_farmland"},
  "time": 120, "render": {"type": "generic", "block": "ad_astra:moon_ice_shard_ore"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:ice_shard_essence", "count": 3}],
  "input": {"item": "mysticalagriculture:ice_shard_seeds"},
  "soil": {"item": "mysticalagriculture:supremium_farmland"},
  "time": 80, "render": {"type": "generic", "block": "ad_astra:moon_ice_shard_ore"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:ice_shard_essence", "count": 5}],
  "input": {"item": "mysticalagriculture:ice_shard_seeds"},
  "soil": {"item": "mysticalagradditions:insanium_farmland"},
  "time": 50, "render": {"type": "generic", "block": "ad_astra:moon_ice_shard_ore"}})

  
//Insolator
event.custom({"type": "thermal:insolator",
  "ingredient": {"item": "mysticalagriculture:ice_shard_seeds"},
  "result": [{"item": "mysticalagriculture:ice_shard_essence", "chance": 1.0},
             {"item": "mysticalagriculture:ice_shard_seeds", "chance": 1.0}],
  "water_mod": 2.0})

//Botany Pots
event.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists",
"values":["mysticalagriculture:ice_shard_seeds","mysticalagriculture:ice_shard_essence"]}],
"type":"botanypots:crop","seed":{"item":"mysticalagriculture:ice_shard_seeds"},"categories":["prudentium"],
"growthTicks":2400,"display":{"type":"botanypots:aging","block":"mysticalagriculture:ice_shard_crop"},
"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:ice_shard_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:ice_shard_seeds"}},
{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})
})


