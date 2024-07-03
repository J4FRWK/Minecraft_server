// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'exnihilosequentia:flint_mesh'}),
  event.remove({output: 'exnihilosequentia:iron_mesh'}),
  event.remove({output: 'exnihilosequentia:diamond_mesh'}),
  event.remove({output: 'exnihilosequentia:emerald_mesh'}),
  event.remove({output: 'exnihilosequentia:netherite_mesh'}),
  event.remove({output: 'thermal:nickel_ore'}),
  event.remove({output: 'thermal:lead_ore'}),
  event.remove({output: 'thermal:silver_ore'}),
  event.remove({output: 'thermal:tin_ore'})
})

//Add
ServerEvents.recipes(event => {

//Mesh
  event.shaped('exnihilosequentia:flint_mesh', ['111','121','111'], {1: 'minecraft:flint', 2: 'exnihilosequentia:string_mesh'})
  event.shaped('exnihilosequentia:iron_mesh', ['111','121','111'], {1: '#forge:ingots/iron', 2: 'exnihilosequentia:flint_mesh'})
  event.shaped('exnihilosequentia:diamond_mesh', ['111','121','111'], {1: '#forge:gems/diamond', 2: 'exnihilosequentia:iron_mesh'})
  event.shaped('exnihilosequentia:emerald_mesh', ['111','121','111'], {1: '#forge:gems/emerald', 2: 'exnihilosequentia:diamond_mesh'})
  event.shaped('exnihilosequentia:netherite_mesh', ['111','121','111'], {1: '#forge:ingots/netherite', 2: 'exnihilosequentia:emerald_mesh'})

//Pieces
  event.shapeless('thermal:raw_lead', ['4x exnihilosequentia:lead_pieces']),
  event.shapeless('thermal:raw_nickel', ['4x exnihilosequentia:nickel_pieces']),
  event.shapeless('thermal:raw_silver', ['4x exnihilosequentia:silver_pieces']),
  event.shapeless('thermal:raw_tin', ['4x exnihilosequentia:tin_pieces']),
  event.shapeless('alltheores:raw_zinc', ['4x exnihilosequentia:zinc_pieces']),
  event.shapeless('alltheores:raw_platinum', ['4x exnihilosequentia:platinum_pieces']),
  
//Fluid Item Transformation  
  event.custom({"type": "exnihilosequentia:fluid_item", "fluid": {"fluid": "minecraft:water"}, "input": {"item": "minecraft:glowstone"}, "result": {"item": "minecraft:honey_block"}})



//Hammer
//Gravel
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:gravel_1", "chance": 1.0, "count": 1}], "input": {"item": "compressium:cobblestone_1"}})
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:gravel_2", "chance": 1.0, "count": 1}], "input": {"item": "compressium:cobblestone_2"}})
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:gravel_3", "chance": 1.0, "count": 1}], "input": {"item": "compressium:cobblestone_3"}})
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:gravel_4", "chance": 1.0, "count": 1}], "input": {"item": "compressium:cobblestone_4"}})
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:gravel_5", "chance": 1.0, "count": 1}], "input": {"item": "compressium:cobblestone_5"}})
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:gravel_6", "chance": 1.0, "count": 1}], "input": {"item": "compressium:cobblestone_6"}})
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:gravel_7", "chance": 1.0, "count": 1}], "input": {"item": "compressium:cobblestone_7"}})
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:gravel_8", "chance": 1.0, "count": 1}], "input": {"item": "compressium:cobblestone_8"}})

  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:cobblestone_1"}},"output":{"item":"compressium:gravel_1"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:cobblestone_2"}},"output":{"item":"compressium:gravel_2"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:cobblestone_3"}},"output":{"item":"compressium:gravel_3"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:cobblestone_4"}},"output":{"item":"compressium:gravel_4"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:cobblestone_5"}},"output":{"item":"compressium:gravel_5"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:cobblestone_6"}},"output":{"item":"compressium:gravel_6"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:cobblestone_7"}},"output":{"item":"compressium:gravel_7"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:cobblestone_8"}},"output":{"item":"compressium:gravel_8"}})

  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:cobblestone_1"},"result":[{"item":"compressium:gravel_1"}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:cobblestone_2"},"result":[{"item":"compressium:gravel_2"}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:cobblestone_3"},"result":[{"item":"compressium:gravel_3"}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:cobblestone_4"},"result":[{"item":"compressium:gravel_4"}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:cobblestone_5"},"result":[{"item":"compressium:gravel_5"}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:cobblestone_6"},"result":[{"item":"compressium:gravel_6"}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:cobblestone_7"},"result":[{"item":"compressium:gravel_7"}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:cobblestone_8"},"result":[{"item":"compressium:gravel_8"}]})
//Sand
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:sand_1", "chance": 1.0, "count": 1}], "input": {"item": "compressium:gravel_1"}})
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:sand_2", "chance": 1.0, "count": 1}], "input": {"item": "compressium:gravel_2"}})
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:sand_3", "chance": 1.0, "count": 1}], "input": {"item": "compressium:gravel_3"}})
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:sand_4", "chance": 1.0, "count": 1}], "input": {"item": "compressium:gravel_4"}})
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:sand_5", "chance": 1.0, "count": 1}], "input": {"item": "compressium:gravel_5"}})
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:sand_6", "chance": 1.0, "count": 1}], "input": {"item": "compressium:gravel_6"}})
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:sand_7", "chance": 1.0, "count": 1}], "input": {"item": "compressium:gravel_7"}})
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "compressium:sand_8", "chance": 1.0, "count": 1}], "input": {"item": "compressium:gravel_8"}})

  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:gravel_1"}},"output":{"item":"compressium:sand_1"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:gravel_2"}},"output":{"item":"compressium:sand_2"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:gravel_3"}},"output":{"item":"compressium:sand_3"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:gravel_4"}},"output":{"item":"compressium:sand_4"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:gravel_5"}},"output":{"item":"compressium:sand_5"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:gravel_6"}},"output":{"item":"compressium:sand_6"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:gravel_7"}},"output":{"item":"compressium:sand_7"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:gravel_8"}},"output":{"item":"compressium:sand_8"}})

  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:gravel_1"},"result":[{"item":"compressium:sand_1"}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:gravel_2"},"result":[{"item":"compressium:sand_2"}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:gravel_3"},"result":[{"item":"compressium:sand_3"}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:gravel_4"},"result":[{"item":"compressium:sand_4"}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:gravel_5"},"result":[{"item":"compressium:sand_5"}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:gravel_6"},"result":[{"item":"compressium:sand_6"}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:gravel_7"},"result":[{"item":"compressium:sand_7"}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:gravel_8"},"result":[{"item":"compressium:sand_8"}]})

//Dust
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "exnihilosequentia:dust", "chance": 1.0, "count": 9}], "input": {"item": "compressium:sand_1"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:sand_1"}},"output":{"item":"exnihilosequentia:dust", "count": 9}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:sand_2"}},"output":{"item":"exnihilosequentia:dust", "count": 81}})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:sand_1"},"result":[{"item":"exnihilosequentia:dust","count":9}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:sand_2"},"result":[{"item":"exnihilosequentia:dust","count":81}]})
//End Stone
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "exnihilosequentia:crushed_end_stone", "chance": 1.0, "count": 9}], "input": {"item": "compressium:endstone_1"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:endstone_1"}},"output":{"item":"exnihilosequentia:crushed_end_stone", "count": 9}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:endstone_2"}},"output":{"item":"exnihilosequentia:crushed_end_stone", "count": 81}})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:endstone_1"},"result":[{"item":"exnihilosequentia:crushed_end_stone","count":9}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:endstone_2"},"result":[{"item":"exnihilosequentia:crushed_end_stone","count":81}]})
//Netherrack
  event.custom({"type": "exnihilosequentia:hammer", "results": [{"item": "exnihilosequentia:crushed_netherrack", "chance": 1.0, "count": 9}], "input": {"item": "compressium:netherrack_1"}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:netherrack_1"}},"output":{"item":"exnihilosequentia:crushed_netherrack", "count": 9}})
  event.custom({"type": "mekanism:crushing","input":{"ingredient":{"item":"compressium:netherrack_2"}},"output":{"item":"exnihilosequentia:crushed_netherrack", "count": 81}})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:netherrack_1"},"result":[{"item":"exnihilosequentia:crushed_netherrack","count":9}]})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"compressium:netherrack_2"},"result":[{"item":"exnihilosequentia:crushed_netherrack","count":81}]})

//Heat
    event.custom({"type": "exnihilosequentia:heat", "block": "immersiveengineering:storage_uranium", "amount": 10})
    event.custom({"type": "exnihilosequentia:heat", "block": "immersiveengineering:furnace_heater", "amount": 15})
    event.custom({"type": "exnihilosequentia:heat", "block": "mekanism:superheating_element", "amount": 25})
    event.custom({"type": "exnihilosequentia:heat", "block": "allthemodium:allthemodium_block", "amount": 50})
    event.custom({"type": "exnihilosequentia:heat", "block": "allthemodium:vibranium_block", "amount": 75})
    event.custom({"type": "exnihilosequentia:heat", "block": "allthemodium:unobtainium_block", "amount": 100})

})