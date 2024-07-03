// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'irongenerators:dirt_generator'}),
  event.remove({output: 'irongenerators:stone_generator'}),
  event.remove({output: 'irongenerators:netherrack_generator'}),
  event.remove({output: 'irongenerators:skystone_generator'}),
  event.remove({output: 'irongenerators:certus_quartz_generator'}),
  event.remove({output: 'irongenerators:iron_generator'}),
  event.remove({output: 'irongenerators:lead_generator'}),
  event.remove({output: 'irongenerators:copper_generator'}),
  event.remove({output: 'irongenerators:bronze_generator'}),
  event.remove({output: 'irongenerators:tin_generator'}),
  event.remove({output: 'irongenerators:gold_generator'}),
  event.remove({output: 'irongenerators:osmium_generator'}),
  event.remove({output: 'irongenerators:quartz_enriched_iron_generator'}),
  event.remove({output: 'irongenerators:invar_generator'}),
  event.remove({output: 'irongenerators:diamond_generator'}),
  event.remove({output: 'irongenerators:obsidian_generator'}),
  event.remove({output: 'irongenerators:steel_generator'}),
  event.remove({output: 'irongenerators:uranium_generator'}),
  event.remove({output: 'irongenerators:refined_obsidian_generator'}),
  event.remove({output: 'irongenerators:signalum_generator'}),
  event.remove({output: 'irongenerators:netherite_generator'}),
  event.remove({output: 'irongenerators:platin_generator'}),
  event.remove({output: 'irongenerators:enderium_generator'}),
  event.remove({output: 'irongenerators:allthemodium_generator'}),
  event.remove({output: 'irongenerators:vibranium_generator'}),
  event.remove({output: 'irongenerators:unobtainium_generator'}),
  event.remove({output: 'irongenerators:infinity_generator'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('irongenerators:dirt_generator', ['111','121','111'], {1: '#forge:dirt', 2: 'minecraft:blast_furnace'})
  event.shaped('irongenerators:stone_generator', ['111','121','111'], {1: '#forge:stone', 2: 'irongenerators:dirt_generator'})
  event.shaped('irongenerators:netherrack_generator', ['111','121','111'], {1: '#forge:netherrack', 2: 'irongenerators:stone_generator'})
  event.shaped('irongenerators:skystone_generator', ['111','121','111'], {1: 'ae2:sky_stone_block', 2: 'irongenerators:netherrack_generator'})
  event.shaped('irongenerators:certus_quartz_generator', ['111','121','111'], {1: '#forge:gems/certus_quartz', 2: 'irongenerators:skystone_generator'})
  event.shaped('irongenerators:copper_generator', ['111','121','111'], {1: '#forge:ingots/copper', 2: 'irongenerators:certus_quartz_generator'})
  event.shaped('irongenerators:tin_generator', ['111','121','111'], {1: '#forge:ingots/tin', 2: 'irongenerators:copper_generator'})
  event.shaped('irongenerators:iron_generator', ['111','121','111'], {1: '#forge:ingots/iron', 2: 'irongenerators:tin_generator'})
  event.shaped('irongenerators:gold_generator', ['111','121','111'], {1: '#forge:ingots/gold', 2: 'irongenerators:iron_generator'})
  event.shaped('irongenerators:lead_generator', ['111','121','111'], {1: '#forge:ingots/lead', 2: 'irongenerators:gold_generator'})
  event.shaped('irongenerators:bronze_generator', ['111','121','111'], {1: '#forge:ingots/bronze', 2: 'irongenerators:lead_generator'})
  event.shaped('irongenerators:osmium_generator', ['111','121','111'], {1: '#forge:ingots/osmium', 2: 'irongenerators:bronze_generator'})
  event.shaped('irongenerators:quartz_enriched_iron_generator', ['111','121','111'], {1: 'refinedstorage:quartz_enriched_iron', 2: 'irongenerators:osmium_generator'})
  event.shaped('irongenerators:invar_generator', ['111','121','111'], {1: '#forge:ingots/invar', 2: 'irongenerators:quartz_enriched_iron_generator'})
  event.shaped('irongenerators:steel_generator', ['111','121','111'], {1: '#forge:ingots/steel', 2: 'irongenerators:invar_generator'})
  event.shaped('irongenerators:diamond_generator', ['111','121','111'], {1: '#forge:gems/diamond', 2: 'irongenerators:steel_generator'})
  event.shaped('irongenerators:obsidian_generator', ['111','121','111'], {1: '#forge:obsidian', 2: 'irongenerators:diamond_generator'})
  event.shaped('irongenerators:uranium_generator', ['111','121','111'], {1: '#forge:ingots/uranium', 2: 'irongenerators:obsidian_generator'})
  event.shaped('irongenerators:refined_obsidian_generator', ['111','121','111'], {1: '#forge:ingots/refined_obsidian', 2: 'irongenerators:uranium_generator'})
  event.shaped('irongenerators:signalum_generator', ['111','121','111'], {1: '#forge:ingots/signalum', 2: 'irongenerators:refined_obsidian_generator'})
  event.shaped('irongenerators:netherite_generator', ['111','121','111'], {1: '#forge:ingots/netherite', 2: 'irongenerators:signalum_generator'})
  event.shaped('irongenerators:platin_generator', ['111','121','111'], {1: '#forge:ingots/platinum', 2: 'irongenerators:netherite_generator'})
  event.shaped('irongenerators:enderium_generator', ['111','121','111'], {1: '#forge:ingots/enderium', 2: 'irongenerators:platin_generator'})
  event.shaped('irongenerators:allthemodium_generator', ['111','121','111'], {1: '#forge:ingots/allthemodium', 2: 'irongenerators:enderium_generator'})
  event.shaped('irongenerators:vibranium_generator', ['111','121','111'], {1: '#forge:ingots/vibranium', 2: 'irongenerators:allthemodium_generator'})
  event.shaped('irongenerators:unobtainium_generator', ['111','121','111'], {1: '#forge:ingots/unobtainium', 2: 'irongenerators:vibranium_generator'})
  event.shaped('irongenerators:infinity_generator', ['111','212','111'], {1: 'extendedcrafting:nether_star_block', 2: 'irongenerators:unobtainium_generator'})
})