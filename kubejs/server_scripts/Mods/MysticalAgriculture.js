// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Infusion Altar
  event.remove({id: 'mysticalagriculture:infusion_altar'})
  event.shaped('mysticalagriculture:infusion_altar', ['121','333',' 3 '], {
    1: '#forge:storage_blocks/rose_gold', 2: 'quarryplus:quarry', 3: '#forge:storage_blocks/redstone'})
  //Infusion Pedestal
  event.remove({id: 'mysticalagriculture:infusion_pedestal'})
  event.shaped('mysticalagriculture:infusion_pedestal', ['121','333',' 3 '], {
    1: '#forge:ingots/enderium', 2: '#forge:storage_blocks/rose_gold', 3: '#forge:storage_blocks/redstone'})
  //Awakening Altar
  event.remove({id: 'mysticalagriculture:awakening_altar'})
  event.shaped('mysticalagriculture:awakening_altar', ['121','333',' 3 '], {
    1: '#forge:storage_blocks/rose_gold', 2: 'mysticalagriculture:infusion_altar', 3: 'mysticalagriculture:supremium_block'})
  //Essence Vessel
  event.remove({id: 'mysticalagriculture:essence_vessel'})
  event.shaped('mysticalagriculture:essence_vessel', ['121','333',' 3 '], {
    1: 'mysticalagriculture:supremium_ingot_block', 2: 'mysticalagriculture:infusion_pedestal', 3: 'mysticalagriculture:supremium_block'})
  //Awakening Pedestal
  event.remove({id: 'mysticalagriculture:awakening_pedestal'})
  event.shaped('mysticalagriculture:awakening_pedestal', ['121','333',' 3 '], {
    1: '#forge:storage_blocks/rose_gold', 2: 'mysticalagriculture:infusion_pedestal', 3: 'mysticalagriculture:supremium_block'})
  //Awakened Supremium Essence
  event.remove({id: 'mysticalagriculture:awakened_supremium_block_awakening'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 16, "earth": 16, "water": 16, "fire": 16},
    "input": {"item": "mysticalagriculture:supremium_essence"},
    "ingredients": [
      {"item": "mysticalagriculture:cognizant_dust"},
      {"item": "mysticalagriculture:cognizant_dust"},
      {"item": "mysticalagriculture:cognizant_dust"},
      {"item": "mysticalagriculture:cognizant_dust"}],
    "result": {"item": "mysticalagriculture:awakened_supremium_essence"}})
  //Insanium Essence
  event.remove({id: 'mysticalagradditions:insanium_essence'})
  event.remove({id: 'mysticalagradditions:insanium_block_combine'})
  event.remove({id: 'mysticalagradditions:insanium_essence_uncraft'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "mysticalagriculture:awakened_supremium_essence"},
    "ingredients": [
      {"item": "mysticalagriculture:awakened_supremium_gemstone"},
      {"item": "mysticalagriculture:awakened_supremium_ingot"},
      {"item": "mysticalagriculture:awakened_supremium_gemstone"},
      {"item": "mysticalagriculture:awakened_supremium_ingot"}],
    "result": {"item": "mysticalagradditions:insanium_essence"}})
  //Creative Essence
  event.recipes.extendedcrafting.shaped_table ('mysticalagradditions:creative_essence',  [
    '111111111',
    '111121111',
    '111111111',
    '111111111',
    '111121111', 
    '111111111',
    '111111111',
    '111121111',
    '111111111'],  {
    1: 'extendedcrafting:the_ultimate_ingot', 2: 'extendedcrafting:ultimate_singularity'})
  //Gaia
  event.remove({id: 'mysticalagradditions:gaia_spirit_crux'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 32, "earth": 32, "water": 32, "fire": 32},
    "input": {"item": "minecraft:netherite_block"},
    "ingredients": [
      {"item": "botanicadds:gaiasteel_block"},
      {"item": "botanicadds:gaiasteel_block"},
      {"item": "botanicadds:gaiasteel_block"},
      {"item": "botanicadds:gaiasteel_block"}],
    "result": {"item": "mysticalagradditions:gaia_spirit_crux"}})
  event.remove({id: 'mysticalagriculture:seed/infusion/gaia_spirit'})
  event.custom({"type": "mysticalagriculture:infusion",
  "input": {"item": "mysticalagriculture:prosperity_seed_base"}, "ingredients":[
  {"item": "botanicadds:gaiasteel_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"},
  {"item": "botanicadds:gaiasteel_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"},
  {"item": "botanicadds:gaiasteel_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"},
  {"item": "botanicadds:gaiasteel_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"}],
    "result": {"item": "mysticalagriculture:gaia_spirit_seeds"}})
  //Nitro
  event.remove({id: 'mysticalagradditions:nitro_crystal_crux'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 32, "earth": 32, "water": 32, "fire": 32},
    "input": {"item": "minecraft:netherite_block"},
    "ingredients": [
      {"item": "powah:nitro_crystal_block"},
      {"item": "powah:nitro_crystal_block"},
      {"item": "powah:nitro_crystal_block"},
      {"item": "powah:nitro_crystal_block"}],
    "result": {"item": "mysticalagradditions:nitro_crystal_crux"}})
  event.remove({id: 'mysticalagriculture:seed/infusion/nitro_crystal'})
  event.custom({"type": "mysticalagriculture:infusion",
  "input": {"item": "mysticalagriculture:prosperity_seed_base"}, "ingredients":[
  {"item": "powah:nitro_crystal_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"},
  {"item": "powah:nitro_crystal_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"},
  {"item": "powah:nitro_crystal_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"},
  {"item": "powah:nitro_crystal_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"}],
    "result": {"item": "mysticalagriculture:nitro_crystal_seeds"}})
  //Dragon
  event.remove({id: 'mysticalagradditions:dragon_egg_crux'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 32, "earth": 32, "water": 32, "fire": 32},
    "input": {"item": "minecraft:netherite_block"},
    "ingredients": [
      {"item": "minecraft:dragon_egg"},
      {"item": "minecraft:dragon_egg"},
      {"item": "minecraft:dragon_egg"},
      {"item": "minecraft:dragon_egg"}],
    "result": {"item": "mysticalagradditions:dragon_egg_crux"}})
  event.remove({id: 'mysticalagriculture:seed/infusion/dragon_egg'})
    event.custom({"type": "mysticalagriculture:infusion",
    "input": {"item": "mysticalagriculture:prosperity_seed_base"}, "ingredients":[
    {"item": "minecraft:dragon_egg"},
    {"item": "mysticalagradditions:insanium_essence"},
    {"item": "minecraft:dragon_egg"},
    {"item": "mysticalagradditions:insanium_essence"},
    {"item": "minecraft:dragon_egg"},
    {"item": "mysticalagradditions:insanium_essence"},
    {"item": "minecraft:dragon_egg"},
    {"item": "mysticalagradditions:insanium_essence"}],
      "result": {"item": "mysticalagriculture:dragon_egg_seeds"}})
  //Wither
  event.remove({id: 'mysticalagradditions:nether_star_crux'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 32, "earth": 32, "water": 32, "fire": 32},
    "input": {"item": "minecraft:netherite_block"},
    "ingredients": [
      {"item": "extendedcrafting:nether_star_block"},
      {"item": "extendedcrafting:nether_star_block"},
      {"item": "extendedcrafting:nether_star_block"},
      {"item": "extendedcrafting:nether_star_block"}],
    "result": {"item": "mysticalagradditions:nether_star_crux"}})
  event.remove({id: 'mysticalagriculture:seed/infusion/nether_star'})
  event.custom({"type": "mysticalagriculture:infusion",
    "input": {"item": "mysticalagriculture:prosperity_seed_base"}, "ingredients":[
    {"item": "extendedcrafting:nether_star_block"},
    {"item": "mysticalagradditions:insanium_essence"},
    {"item": "extendedcrafting:nether_star_block"},
    {"item": "mysticalagradditions:insanium_essence"},
    {"item": "extendedcrafting:nether_star_block"},
    {"item": "mysticalagradditions:insanium_essence"},
    {"item": "extendedcrafting:nether_star_block"},
    {"item": "mysticalagradditions:insanium_essence"}],
      "result": {"item": "mysticalagriculture:nether_star_seeds"}})

  //Neutronium
  event.remove({id: 'mysticalagradditions:neutronium_crux'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 32, "earth": 32, "water": 32, "fire": 32},
    "input": {"item": "minecraft:netherite_block"},
    "ingredients": [
      {"item": "avaritia:neutron"},
      {"item": "avaritia:neutron"},
      {"item": "avaritia:neutron"},
      {"item": "avaritia:neutron"}],
    "result": {"item": "mysticalagradditions:neutronium_crux"}})
  event.remove({id: 'mysticalagriculture:seed/infusion/neutronium'})
  event.custom({"type": "mysticalagriculture:infusion",
  "input": {"item": "mysticalagriculture:prosperity_seed_base"}, "ingredients":[
  {"item": "avaritia:neutron"},
  {"item": "mysticalagradditions:insanium_essence"},
  {"item": "avaritia:neutron"},
  {"item": "mysticalagradditions:insanium_essence"},
  {"item": "avaritia:neutron"},
  {"item": "mysticalagradditions:insanium_essence"},
  {"item": "avaritia:neutron"},
  {"item": "mysticalagradditions:insanium_essence"}],
    "result": {"item": "mysticalagriculture:neutronium_seeds"}})

  

  //Adding Rose Gold
  event.custom({"type": "mysticalagriculture:infusion",
  "input": {"item": "mysticalagriculture:prosperity_seed_base"}, "ingredients":[
  {"item": "thermal:rose_gold_ingot"},
  {"item": "mysticalagriculture:imperium_essence"},
  {"item": "thermal:rose_gold_ingot"},
  {"item": "mysticalagriculture:imperium_essence"},
  {"item": "thermal:rose_gold_ingot"},
  {"item": "mysticalagriculture:imperium_essence"},
  {"item": "thermal:rose_gold_ingot"},
  {"item": "mysticalagriculture:imperium_essence"}],
    "result": {"item": "mysticalagriculture:rose_gold_seeds"}})
  event.shaped('3x thermal:rose_gold_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:rose_gold_essence'})
  event.custom({
    "type": "mysticalagriculture:reprocessor",
    "conditions": [
      {
        "type": "mysticalagriculture:crop_enabled",
        "crop": "mysticalagriculture:rose_gold"
      }
    ],
    "input": {
      "item": "mysticalagriculture:rose_gold_seeds"
    },
    "result": {
      "count": 2,
      "item": "mysticalagriculture:rose_gold_essence"
    }
  })
})