// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Cloche
  event.custom({"type": "immersiveengineering:cloche",
  "results": [{"item": "blue_skies:brewberry"}],
  "input": {"item": "blue_skies:brewberry_bush"},
  "soil": {"item": "minecraft:dirt"},
  "time": 80, "render": {"type": "generic", "block": "blue_skies:brewberry_bush"}})

  
//Insolator
event.custom({"type": "thermal:insolator",
  "ingredient": {"item": "blue_skies:brewberry_bush"},
  "result": [{"item": "blue_skies:brewberry", "chance": 1.0},
             {"item": "blue_skies:brewberry_bush", "chance": 1.0}],
  "flux_infused_gem_mod": 1.0})

//Botany Pots
event.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists",
"values":["blue_skies:brewberry_bush","blue_skies:brewberry"]}],
"type":"botanypots:crop","seed":{"item":"blue_skies:brewberry_bush"},"categories":["dirt"],
"growthTicks":2400,"display":{"type":"botanypots:aging","block":"blue_skies:brewberry_bush"},
"drops":[{"chance":1.00,"output":{"item":"blue_skies:brewberry"}},{"chance":0.01,"output":{"item":"blue_skies:brewberry_bush"},"minRolls":1,"maxRolls":1}]})
})


