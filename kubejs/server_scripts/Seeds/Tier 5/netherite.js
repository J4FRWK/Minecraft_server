// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Cloche
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:netherite_essence", "count": 3}],
  "input": {"item": "mysticalagriculture:netherite_seeds"},
  "soil": {"item": "mysticalagriculture:supremium_farmland"},
  "time": 80, "render": {"type": "generic", "block": "mysticalagriculture:netherite_crop"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:netherite_essence", "count": 5}],
  "input": {"item": "mysticalagriculture:netherite_seeds"},
  "soil": {"item": "mysticalagradditions:insanium_farmland"},
  "time": 50, "render": {"type": "generic", "block": "mysticalagriculture:netherite_crop"}})
})


