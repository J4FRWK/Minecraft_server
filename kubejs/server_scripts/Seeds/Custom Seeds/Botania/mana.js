// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Cloche
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:mana_essence", "count": 2}],
  "input": {"item": "mysticalagriculture:mana_seeds"},
  "soil": {"item": "mysticalagriculture:tertium_farmland"},
  "time": 120, "render": {"type": "generic", "block": "botania:mana_block"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:mana_essence", "count": 2}],
  "input": {"item": "mysticalagriculture:mana_seeds"},
  "soil": {"item": "mysticalagriculture:imperium_farmland"},
  "time": 120, "render": {"type": "generic", "block": "botania:mana_block"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:mana_essence", "count": 3}],
  "input": {"item": "mysticalagriculture:mana_seeds"},
  "soil": {"item": "mysticalagriculture:supremium_farmland"},
  "time": 80, "render": {"type": "generic", "block": "botania:mana_block"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:mana_essence", "count": 5}],
  "input": {"item": "mysticalagriculture:mana_seeds"},
  "soil": {"item": "mysticalagradditions:insanium_farmland"},
  "time": 50, "render": {"type": "generic", "block": "botania:mana_block"}})

  
//Insolator
event.custom({"type": "thermal:insolator",
  "ingredient": {"item": "mysticalagriculture:mana_seeds"},
  "result": [{"item": "mysticalagriculture:mana_essence", "chance": 1.0},
             {"item": "mysticalagriculture:mana_seeds", "chance": 1.0}],
  "water_mod": 4.0})

//Botany Pots
event.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists",
"values":["mysticalagriculture:mana_seeds","mysticalagriculture:mana_essence"]}],
"type":"botanypots:crop","seed":{"item":"mysticalagriculture:mana_seeds"},"categories":["tertium"],
"growthTicks":2400,"display":{"type":"botanypots:aging","block":"mysticalagriculture:mana_crop"},
"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:mana_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:mana_seeds"}},
{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})

//Crafting
event.custom({"type": "mysticalagriculture:infusion",
"input": {"item": "mysticalagriculture:prosperity_seed_base"}, "ingredients":[
{"item": "botanicadds:mana_lapis_block"},
{"item": "mysticalagriculture:tertium_essence"},
{"item": "botania:mana_diamond_block"},
{"item": "mysticalagriculture:tertium_essence"},
{"item": "botanicadds:mana_lapis_block"},
{"item": "mysticalagriculture:tertium_essence"},
{"item": "botania:mana_diamond_block"},
{"item": "mysticalagriculture:tertium_essence"}],
  "result": {"item": "mysticalagriculture:mana_seeds"}})

  event.shaped('botania:mana_pearl', ['111','121','111'], {1: 'mysticalagriculture:mana_essence', 2: 'mysticalagriculture:enderman_essence'})
  event.shaped('botanicadds:mana_lapis', ['111','121','111'], {1: 'mysticalagriculture:mana_essence', 2: 'mysticalagriculture:lapis_lazuli_essence'})
  event.shaped('botania:quartz_mana', ['111','121','111'], {1: 'mysticalagriculture:mana_essence', 2: 'mysticalagriculture:nether_quartz_essence'})
  event.shaped('botania:mana_diamond', ['111','121','111'], {1: 'mysticalagriculture:mana_essence', 2: 'mysticalagriculture:diamond_essence'})
  event.shaped('botania:mana_powder', ['111','121','111'], {1: 'mysticalagriculture:mana_essence', 2: 'mysticalagriculture:glowstone_essence'})


})


