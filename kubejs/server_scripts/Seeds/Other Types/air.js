// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Cloche
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:air_essence", "count": 1}],
  "input": {"item": "mysticalagriculture:air_seeds"},
  "soil": {"item": "mysticalagriculture:inferium_farmland"},
  "time": 300, "render": {"type": "generic", "block": "mysticalagriculture:air_crop"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:air_essence", "count": 2}],
  "input": {"item": "mysticalagriculture:air_seeds"},
  "soil": {"item": "mysticalagriculture:prudentium_farmland"},
  "time": 200, "render": {"type": "generic", "block": "mysticalagriculture:air_crop"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:air_essence", "count": 4}],
  "input": {"item": "mysticalagriculture:air_seeds"},
  "soil": {"item": "mysticalagriculture:tertium_farmland"},
  "time": 160, "render": {"type": "generic", "block": "mysticalagriculture:air_crop"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:air_essence", "count": 6}],
  "input": {"item": "mysticalagriculture:air_seeds"},
  "soil": {"item": "mysticalagriculture:imperium_farmland"},
  "time": 120, "render": {"type": "generic", "block": "mysticalagriculture:air_crop"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:air_essence", "count": 8}],
  "input": {"item": "mysticalagriculture:air_seeds"},
  "soil": {"item": "mysticalagriculture:supremium_farmland"},
  "time": 80, "render": {"type": "generic", "block": "mysticalagriculture:air_crop"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:air_essence", "count": 10}],
  "input": {"item": "mysticalagriculture:air_seeds"},
  "soil": {"item": "mysticalagradditions:insanium_farmland"},
  "time": 50, "render": {"type": "generic", "block": "mysticalagriculture:air_crop"}})

  
//Insolator
event.custom({"type": "thermal:insolator",
  "ingredient": {"item": "mysticalagriculture:air_seeds"},
  "result": [{"item": "mysticalagriculture:air_essence", "chance": 1.0},
             {"item": "mysticalagriculture:air_seeds", "chance": 1.0}],
  "water_mod": 1.0})
})


