// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Cloche
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:elven_essence", "count": 2}],
  "input": {"item": "mysticalagriculture:elven_seeds"},
  "soil": {"item": "mysticalagriculture:imperium_farmland"},
  "time": 120, "render": {"type": "generic", "block": "botania:elven_block"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:elven_essence", "count": 3}],
  "input": {"item": "mysticalagriculture:elven_seeds"},
  "soil": {"item": "mysticalagriculture:supremium_farmland"},
  "time": 80, "render": {"type": "generic", "block": "botania:elven_block"}})
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "mysticalagriculture:elven_essence", "count": 5}],
  "input": {"item": "mysticalagriculture:elven_seeds"},
  "soil": {"item": "mysticalagradditions:insanium_farmland"},
  "time": 50, "render": {"type": "generic", "block": "botania:elven_block"}})

  
//Insolator
event.custom({"type": "thermal:insolator",
  "ingredient": {"item": "mysticalagriculture:elven_seeds"},
  "result": [{"item": "mysticalagriculture:elven_essence", "chance": 1.0},
             {"item": "mysticalagriculture:elven_seeds", "chance": 1.0}],
  "water_mod": 4.0})

//Botany Pots
event.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists",
"values":["mysticalagriculture:elven_seeds","mysticalagriculture:elven_essence"]}],
"type":"botanypots:crop","seed":{"item":"mysticalagriculture:elven_seeds"},"categories":["imperium"],
"growthTicks":2400,"display":{"type":"botanypots:aging","block":"mysticalagriculture:elven_crop"},
"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:elven_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:elven_seeds"}},
{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})

//Crafting
event.custom({"type": "mysticalagriculture:infusion",
"input": {"item": "mysticalagriculture:prosperity_seed_base"}, "ingredients":[
{"item": "botanicadds:elven_lapis_block"},
{"item": "mysticalagriculture:imperium_essence"},
{"item": "botania:pixie_dust"},
{"item": "mysticalagriculture:imperium_essence"},
{"item": "botanicadds:elven_lapis_block"},
{"item": "mysticalagriculture:imperium_essence"},
{"item": "botania:pixie_dust"},
{"item": "mysticalagriculture:imperium_essence"}],
  "result": {"item": "mysticalagriculture:elven_seeds"}})

  event.shaped('botania:pixie_dust', ['111','121','111'], {1: 'mysticalagriculture:elven_essence', 2: 'mysticalagriculture:enderman_essence'})
  event.shaped('botanicadds:elven_lapis', ['111','121','111'], {1: 'mysticalagriculture:elven_essence', 2: 'mysticalagriculture:lapis_lazuli_essence'})
  event.shaped('botania:quartz_elven', ['111','121','111'], {1: 'mysticalagriculture:elven_essence', 2: 'mysticalagriculture:nether_quartz_essence'})
})


