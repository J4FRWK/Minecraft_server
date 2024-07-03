ServerEvents.recipes(event => {

//Golden Grass
event.shaped('8x botania:golden_grass', ['111','121','111'], {1: '#forge:dirt', 2: '#forge:nuggets/gold'})

//Manasteel replace will Rune of Mana
  //Rune of Earth
  event.remove({id: 'botania:runic_altar/earth'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "botania:rune_mana"},
    {"item": "botania:mana_powder"},
    {"tag": "forge:mushrooms"},
    {"tag": "forge:stone"},
    {"tag": "forge:storage_blocks/coal"}],
    "mana": 5000, "output": {"item": "botania:rune_earth", "count": 2}})
  //Rune of Water
  event.remove({id: 'botania:runic_altar/water'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "botania:rune_mana"},
    {"item": "botania:mana_powder"},
    {"tag": "forge:fertilizer"},
    {"tag": "forge:fishing_rods"},
    {"item": "minecraft:sugar_cane"}],
    "mana": 5000, "output": {"item": "botania:rune_water", "count": 2}})
  //Rune of Fire
  event.remove({id: 'botania:runic_altar/fire'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "botania:rune_mana"},
    {"item": "botania:mana_powder"},
    {"tag": "forge:ingots/nether_brick"},
    {"tag": "forge:gunpowder"},
    {"tag": "forge:crops/nether_wart"}],
    "mana": 5000, "output": {"item": "botania:rune_fire", "count": 2}})
  //Rune of Air
  event.remove({id: 'botania:runic_altar/air'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "botania:rune_mana"},
    {"item": "botania:mana_powder"},
    {"tag": "forge:string"},
    {"tag": "forge:feathers"},
    {"tag": "minecraft:wool_carpets"}],
    "mana": 5000, "output": {"item": "botania:rune_air", "count": 2}})

//Mythic Bptany
//Feysythia Recipe Fix

  event.custom({"type": "botania:petal_apothecary", "ingredients": 
  [{"tag": "botania:petals/purple"}, {"tag": "botania:petals/yellow"},{"tag": "botania:petals/yellow"},{"item": "mythicbotany:dream_cherry"}],
    "output": {"item": "mythicbotany:feysythia"}, "reagent": {"tag": "botania:seed_apothecary_reagent"}})


})