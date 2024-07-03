// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Cloche
    event.custom({"type": "immersiveengineering:cloche",
      "results": [{"item": "mysticalagriculture:dimensional_shard_essence", "count": 3}],
      "input": {"item": "mysticalagriculture:dimensional_shard_seeds"},
      "soil": {"item": "mysticalagriculture:supremium_farmland"},
      "time": 80, "render": {"type": "generic", "block": "rftoolsbase:dimensionalshard_overworld"}})
    event.custom({"type": "immersiveengineering:cloche",
      "results": [{"item": "mysticalagriculture:dimensional_shard_essence", "count": 5}],
      "input": {"item": "mysticalagriculture:dimensional_shard_seeds"},
      "soil": {"item": "mysticalagradditions:insanium_farmland"},
      "time": 50, "render": {"type": "generic", "block": "rftoolsbase:dimensionalshard_overworld"}})

      
  //Insolator
    event.custom({"type": "thermal:insolator",
      "ingredient": {"item": "mysticalagriculture:dimensional_shard_seeds"},
      "result": [{"item": "mysticalagriculture:dimensional_shard_essence", "chance": 1.0},
                 {"item": "mysticalagriculture:dimensional_shard_seeds", "chance": 1.0}],
      "water_mod": 5.0})

//Botany Pots
event.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists",
"values":["mysticalagriculture:dimensional_shard_seeds","mysticalagriculture:dimensional_shard_essence"]}],
"type":"botanypots:crop","seed":{"item":"mysticalagriculture:dimensional_shard_seeds"},"categories":["supremium"],
"growthTicks":2400,"display":{"type":"botanypots:aging","block":"mysticalagriculture:dimensional_shard_crop"},
"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:dimensional_shard_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:dimensional_shard_seeds"}},
{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})
})


