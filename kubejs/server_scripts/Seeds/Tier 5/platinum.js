// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Cloche
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:platinum_essence", "count": 3}],
  "input": {"item": "mysticalagriculture:platinum_seeds"},
  "soil": {"item": "mysticalagriculture:supremium_farmland"},
  "time": 80, "render": {"type": "generic", "block": "mysticalagriculture:platinum_crop"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:platinum_essence", "count": 5}],
  "input": {"item": "mysticalagriculture:platinum_seeds"},
  "soil": {"item": "mysticalagradditions:insanium_farmland"},
  "time": 50, "render": {"type": "generic", "block": "mysticalagriculture:platinum_crop"}})

  //Platinum
  event.shaped('#forge:ingots/platinum', ['111','111','111'], {1: 'mysticalagriculture:platinum_essence'})
})


