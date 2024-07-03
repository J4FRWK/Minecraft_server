// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
	//event.remove({ mod: 'botanypots' })
	//event.remove({ mod: 'botanypotstiers' })

//Botany Pot
  event.shaped('botanypots:terracotta_botany_pot', ['1 1','121',' 1 '], {
    1: 'minecraft:terracotta', 2: 'minecraft:flower_pot'})
//Botany Pot Hopper
  event.shaped('botanypots:terracotta_hopper_botany_pot', ['131','121',' 1 '], {
  1: 'minecraft:terracotta', 2: 'minecraft:flower_pot', 3: 'minecraft:hopper'})
  event.shapeless('botanypots:terracotta_hopper_botany_pot', ['botanypots:terracotta_botany_pot', 'minecraft:hopper'])  
//Elite
  event.shaped('botanypotstiers:elite_terracotta_botany_pot', [' 1 ','232'], {
    1: 'minecraft:ender_pearl', 2: 'minecraft:iron_block', 3: 'botanypots:terracotta_botany_pot'})
//Elite Hopper
  event.shaped('botanypotstiers:elite_terracotta_hopper_botany_pot', [' 1 ',' 3 ', '242'], {
    1: 'minecraft:ender_pearl', 2: 'minecraft:iron_block', 3: 'botanypots:terracotta_botany_pot', 4: 'minecraft:hopper'})
  event.shaped('botanypotstiers:elite_terracotta_hopper_botany_pot', [' 1 ','232'], {
    1: 'minecraft:ender_pearl', 2: 'minecraft:iron_block', 3: 'botanypots:terracotta_hopper_botany_pot'})
  event.shapeless('botanypotstiers:elite_terracotta_hopper_botany_pot', ['botanypotstiers:elite_terracotta_botany_pot', 'minecraft:hopper'])  
//Ultra
  event.shaped('botanypotstiers:ultra_terracotta_botany_pot', [' 1 ','232'], {
    1: 'minecraft:nether_star', 2: 'minecraft:diamond_block', 3: 'botanypotstiers:elite_terracotta_botany_pot'})
//Ultra Hopper
  event.shaped('botanypotstiers:ultra_terracotta_hopper_botany_pot', [' 1 ',' 3 ', '242'], {
    1: 'minecraft:nether_star', 2: 'minecraft:diamond_block', 3: 'botanypotstiers:elite_terracotta_botany_pot', 4: 'minecraft:hopper'})
  event.shaped('botanypotstiers:ultra_terracotta_hopper_botany_pot', [' 1 ','232'], {
    1: 'minecraft:nether_star', 2: 'minecraft:diamond_block', 3: 'botanypotstiers:elite_terracotta_hopper_botany_pot'})
  event.shapeless('botanypotstiers:ultra_terracotta_hopper_botany_pot', ['botanypotstiers:ultra_terracotta_botany_pot', 'minecraft:hopper'])  
//Creative
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": [" 1 ","232"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}},
      "result": {"item": "botanypotstiers:creative_terracotta_botany_pot"}})
//Creative Hopper
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": [" 1 "," 3 ","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"}},
      "result": {"item": "botanypotstiers:creative_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": [" 1 ","232"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_hopper_botany_pot"}},
      "result": {"item": "botanypotstiers:creative_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shapeless_ender_crafter", "ingredients": 
  [{"item": "botanypotstiers:creative_terracotta_botany_pot"}, {"item": "minecraft:hopper"}], "result": {"item": "botanypotstiers:creative_terracotta_hopper_botany_pot"}})

//Botany Pots All Removed
//Normal
  event.remove({ id:'botanypots:botanypots/crafting/terracotta_botany_pot'})
  event.remove({ id:'botanypots:botanypots/crafting/terracotta_hopper_botany_pot'})
  event.remove({ id:'botanypots:botanypots/crafting/terracotta_compact_hopper_botany_pot'})
//Elite
  event.remove({ id:'botanypotstiers:crafting/elite_terracotta_botany_pot_2'})
  event.remove({ id:'botanypotstiers:crafting/elite_terracotta_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/elite_terracotta_hopper_botany_pot_2'})
  event.remove({ id:'botanypotstiers:crafting/elite_terracotta_compact_hopper_botany_pot_2'})
  event.remove({ id:'botanypotstiers:crafting/elite_terracotta_compact_hopper_botany_pot_3'})
//Elite
  event.remove({ id:'botanypotstiers:crafting/ultra_terracotta_botany_pot_2'})
  event.remove({ id:'botanypotstiers:crafting/ultra_terracotta_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/ultra_terracotta_hopper_botany_pot_2'})
  event.remove({ id:'botanypotstiers:crafting/ultra_terracotta_compact_hopper_botany_pot_2'})
  event.remove({ id:'botanypotstiers:crafting/ultra_terracotta_compact_hopper_botany_pot_3'})
//Creative
  event.remove({ id:'botanypotstiers:crafting/creative_terracotta_botany_pot_2'})
  event.remove({ id:'botanypotstiers:crafting/creative_terracotta_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_terracotta_hopper_botany_pot_2'})
  event.remove({ id:'botanypotstiers:crafting/creative_terracotta_compact_hopper_botany_pot_2'})
  event.remove({ id:'botanypotstiers:crafting/creative_terracotta_compact_hopper_botany_pot_3'})
  //Glazed Terracotta
  event.remove({ id:'botanypotstiers:crafting/creative_white_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_white_glazed_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_orange_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_orange_glazed_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_magenta_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_magenta_glazed_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_light_blue_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_light_blue_glazed_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_yellow_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_yellow_glazed_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_lime_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_lime_glazed_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_pink_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_pink_glazed_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_gray_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_gray_glazed_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_light_gray_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_light_gray_glazed_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_cyan_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_cyan_glazed_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_purple_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_purple_glazed_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_blue_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_blue_glazed_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_brown_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_brown_glazed_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_green_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_green_glazed_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_red_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_red_glazed_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_black_glazed_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_black_glazed_terracotta_compact_hopper_botany_pot'})
  //Terrcotta
  event.remove({ id:'botanypotstiers:crafting/creative_white_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_white_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_orange_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_orange_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_magenta_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_magenta_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_light_blue_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_light_blue_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_yellow_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_yellow_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_lime_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_lime_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_pink_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_pink_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_gray_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_gray_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_light_gray_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_light_gray_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_cyan_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_cyan_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_purple_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_purple_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_blue_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_blue_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_brown_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_brown_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_green_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_green_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_red_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_red_terracotta_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_black_terracotta_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_black_terracotta_compact_hopper_botany_pot'})
  //Concrete
  event.remove({ id:'botanypotstiers:crafting/creative_white_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_white_concrete_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_orange_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_orange_concrete_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_magenta_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_magenta_concrete_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_light_blue_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_light_blue_concrete_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_yellow_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_yellow_concrete_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_lime_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_lime_concrete_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_pink_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_pink_concrete_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_gray_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_gray_concrete_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_light_gray_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_light_gray_concrete_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_cyan_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_cyan_concrete_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_purple_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_purple_concrete_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_blue_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_blue_concrete_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_brown_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_brown_concrete_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_green_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_green_concrete_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_red_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_red_concrete_compact_hopper_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_black_concrete_botany_pot'})
  event.remove({ id:'botanypotstiers:crafting/creative_black_concrete_compact_hopper_botany_pot'})


  //Creative
  //Glazed Terracotta
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:white_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_white_glazed_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:orange_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_orange_glazed_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:magenta_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_magenta_glazed_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:light_blue_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_light_blue_glazed_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:yellow_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_yellow_glazed_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:lime_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_lime_glazed_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:pink_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_pink_glazed_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:gray_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_gray_glazed_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:light_gray_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_light_gray_glazed_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:cyan_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_cyan_glazed_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:purple_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_purple_glazed_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:blue_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_blue_glazed_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:brown_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_brown_glazed_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:green_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_green_glazed_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:red_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_red_glazed_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:black_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_black_glazed_terracotta_botany_pot"}})
  //Terracotta
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:white_terracotta"}},
      "result": {"item": "botanypotstiers:creative_white_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:orange_terracotta"}},
      "result": {"item": "botanypotstiers:creative_orange_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:magenta_terracotta"}},
      "result": {"item": "botanypotstiers:creative_magenta_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:light_blue_terracotta"}},
      "result": {"item": "botanypotstiers:creative_light_blue_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:yellow_terracotta"}},
      "result": {"item": "botanypotstiers:creative_yellow_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:lime_terracotta"}},
      "result": {"item": "botanypotstiers:creative_lime_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:pink_terracotta"}},
      "result": {"item": "botanypotstiers:creative_pink_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:gray_terracotta"}},
      "result": {"item": "botanypotstiers:creative_gray_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:light_gray_terracotta"}},
      "result": {"item": "botanypotstiers:creative_light_gray_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:cyan_terracotta"}},
      "result": {"item": "botanypotstiers:creative_cyan_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:purple_terracotta"}},
      "result": {"item": "botanypotstiers:creative_purple_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:blue_terracotta"}},
      "result": {"item": "botanypotstiers:creative_blue_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:brown_terracotta"}},
      "result": {"item": "botanypotstiers:creative_brown_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:green_terracotta"}},
      "result": {"item": "botanypotstiers:creative_green_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:red_terracotta"}},
      "result": {"item": "botanypotstiers:creative_red_terracotta_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:black_terracotta"}},
      "result": {"item": "botanypotstiers:creative_black_terracotta_botany_pot"}})
  //Concrete
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:white_concrete"}},
      "result": {"item": "botanypotstiers:creative_white_concrete_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:orange_concrete"}},
      "result": {"item": "botanypotstiers:creative_orange_concrete_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:magenta_concrete"}},
      "result": {"item": "botanypotstiers:creative_magenta_concrete_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:light_blue_concrete"}},
      "result": {"item": "botanypotstiers:creative_light_blue_concrete_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:yellow_concrete"}},
      "result": {"item": "botanypotstiers:creative_yellow_concrete_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:lime_concrete"}},
      "result": {"item": "botanypotstiers:creative_lime_concrete_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:pink_concrete"}},
      "result": {"item": "botanypotstiers:creative_pink_concrete_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:gray_concrete"}},
      "result": {"item": "botanypotstiers:creative_gray_concrete_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:light_gray_concrete"}},
      "result": {"item": "botanypotstiers:creative_light_gray_concrete_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:cyan_concrete"}},
      "result": {"item": "botanypotstiers:creative_cyan_concrete_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:purple_concrete"}},
      "result": {"item": "botanypotstiers:creative_purple_concrete_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:blue_concrete"}},
      "result": {"item": "botanypotstiers:creative_blue_concrete_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:brown_concrete"}},
      "result": {"item": "botanypotstiers:creative_brown_concrete_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:green_concrete"}},
      "result": {"item": "botanypotstiers:creative_green_concrete_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:red_concrete"}},
      "result": {"item": "botanypotstiers:creative_red_concrete_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["414","434","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, 
    "4": {"item": "minecraft:black_concrete"}},
      "result": {"item": "botanypotstiers:creative_black_concrete_botany_pot"}})
  //Hopper
  //Glazed Terracotta
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:white_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_white_glazed_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:orange_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_orange_glazed_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:magenta_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_magenta_glazed_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:light_blue_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_light_blue_glazed_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:yellow_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_yellow_glazed_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:lime_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_lime_glazed_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:pink_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_pink_glazed_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:gray_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_gray_glazed_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:light_gray_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_light_gray_glazed_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:cyan_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_cyan_glazed_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:purple_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_purple_glazed_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:blue_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_blue_glazed_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:brown_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_brown_glazed_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:green_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_green_glazed_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:red_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_red_glazed_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:black_glazed_terracotta"}},
      "result": {"item": "botanypotstiers:creative_black_glazed_terracotta_hopper_botany_pot"}})
  //Terracotta
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:white_terracotta"}},
      "result": {"item": "botanypotstiers:creative_white_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:orange_terracotta"}},
      "result": {"item": "botanypotstiers:creative_orange_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:magenta_terracotta"}},
      "result": {"item": "botanypotstiers:creative_magenta_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:light_blue_terracotta"}},
      "result": {"item": "botanypotstiers:creative_light_blue_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:yellow_terracotta"}},
      "result": {"item": "botanypotstiers:creative_yellow_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:lime_terracotta"}},
      "result": {"item": "botanypotstiers:creative_lime_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:pink_terracotta"}},
      "result": {"item": "botanypotstiers:creative_pink_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:gray_terracotta"}},
      "result": {"item": "botanypotstiers:creative_gray_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:light_gray_terracotta"}},
      "result": {"item": "botanypotstiers:creative_light_gray_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:cyan_terracotta"}},
      "result": {"item": "botanypotstiers:creative_cyan_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:purple_terracotta"}},
      "result": {"item": "botanypotstiers:creative_purple_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:blue_terracotta"}},
      "result": {"item": "botanypotstiers:creative_blue_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:brown_terracotta"}},
      "result": {"item": "botanypotstiers:creative_brown_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:green_terracotta"}},
      "result": {"item": "botanypotstiers:creative_green_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:red_terracotta"}},
      "result": {"item": "botanypotstiers:creative_red_terracotta_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:black_terracotta"}},
      "result": {"item": "botanypotstiers:creative_black_terracotta_hopper_botany_pot"}})
  //Concrete
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:white_concrete"}},
      "result": {"item": "botanypotstiers:creative_white_concrete_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:orange_concrete"}},
      "result": {"item": "botanypotstiers:creative_orange_concrete_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:magenta_concrete"}},
      "result": {"item": "botanypotstiers:creative_magenta_concrete_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:light_blue_concrete"}},
      "result": {"item": "botanypotstiers:creative_light_blue_concrete_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:yellow_concrete"}},
      "result": {"item": "botanypotstiers:creative_yellow_concrete_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:lime_concrete"}},
      "result": {"item": "botanypotstiers:creative_lime_concrete_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:pink_concrete"}},
      "result": {"item": "botanypotstiers:creative_pink_concrete_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:gray_concrete"}},
      "result": {"item": "botanypotstiers:creative_gray_concrete_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:light_gray_concrete"}},
      "result": {"item": "botanypotstiers:creative_light_gray_concrete_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:cyan_concrete"}},
      "result": {"item": "botanypotstiers:creative_cyan_concrete_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:purple_concrete"}},
      "result": {"item": "botanypotstiers:creative_purple_concrete_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:blue_concrete"}},
      "result": {"item": "botanypotstiers:creative_blue_concrete_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:brown_concrete"}},
      "result": {"item": "botanypotstiers:creative_brown_concrete_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:green_concrete"}},
      "result": {"item": "botanypotstiers:creative_green_concrete_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:red_concrete"}},
      "result": {"item": "botanypotstiers:creative_red_concrete_hopper_botany_pot"}})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["515","535","242"], "key": {
    "1": {"item": "minecraft:enchanted_golden_apple"}, "2": {"item": "minecraft:netherite_block"}, "3": {"item": "botanypotstiers:ultra_terracotta_botany_pot"}, "4": {"item": "minecraft:hopper"},
    "5": {"item": "minecraft:black_concrete"}},
      "result": {"item": "botanypotstiers:creative_black_concrete_hopper_botany_pot"}})

})


