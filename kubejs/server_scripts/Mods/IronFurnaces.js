// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'ironfurnaces:iron_furnace'})
  event.remove({output: 'ironfurnaces:gold_furnace'})
  event.remove({output: 'ironfurnaces:diamond_furnace'})
  event.remove({output: 'ironfurnaces:emerald_furnace'})
  event.remove({output: 'ironfurnaces:obsidian_furnace'})
  event.remove({output: 'ironfurnaces:crystal_furnace'})
  event.remove({output: 'ironfurnaces:netherite_furnace'})
  event.remove({output: 'ironfurnaces:copper_furnace'})
  event.remove({output: 'ironfurnaces:silver_furnace'})
  event.remove({output: 'ironfurnaces:item_xmas'})
  event.remove({output: 'ironfurnaces:item_spooky'})
  event.remove({output: 'ironfurnaces:upgrade_iron'})
  event.remove({output: 'ironfurnaces:upgrade_gold'})
  event.remove({output: 'ironfurnaces:upgrade_diamond'})
  event.remove({output: 'ironfurnaces:upgrade_emerald'})
  event.remove({output: 'ironfurnaces:upgrade_obsidian'})
  event.remove({output: 'ironfurnaces:upgrade_crystal'})
  event.remove({output: 'ironfurnaces:upgrade_netherite'})
  event.remove({output: 'ironfurnaces:upgrade_copper'})
  event.remove({output: 'ironfurnaces:upgrade_silver'})
  event.remove({output: 'ironfurnaces:upgrade_obsidian2'})
  event.remove({output: 'ironfurnaces:upgrade_iron2'})
  event.remove({output: 'ironfurnaces:upgrade_gold2'})
  event.remove({output: 'ironfurnaces:upgrade_silver2'})
  event.remove({output: 'ironfurnaces:augment_speed'})
  event.remove({output: 'ironfurnaces:upgrade_allthemodium'})
  event.remove({output: 'ironfurnaces:upgrade_vibranium'})
  event.remove({output: 'ironfurnaces:upgrade_unobtainium'})
  event.remove({output: 'ironfurnaces:rainbow_core'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('ironfurnaces:copper_furnace', 
  ['111','121','111'], {
    1: '#forge:ingots/copper', 
    2: 'minecraft:furnace'}),
  event.shaped('ironfurnaces:iron_furnace', 
  ['111','121','111'], {
    1: '#forge:ingots/iron', 
    2: 'ironfurnaces:copper_furnace'}),
  event.shaped('ironfurnaces:silver_furnace', 
  ['111','121','111'], {
    1: '#forge:ingots/silver', 
    2: 'ironfurnaces:iron_furnace'}),
  event.shaped('ironfurnaces:gold_furnace', 
  ['111','121','111'], {
    1: '#forge:ingots/gold', 
    2: 'ironfurnaces:silver_furnace'}),
  event.shaped('ironfurnaces:diamond_furnace', 
  ['111','121','111'], {
    1: '#forge:gems/diamond', 
    2: 'ironfurnaces:gold_furnace'}),
  event.shaped('ironfurnaces:crystal_furnace', 
  ['111','121','111'], {
    1: '#forge:glass', 
    2: 'ironfurnaces:diamond_furnace'}),
  event.shaped('ironfurnaces:emerald_furnace', 
  ['111','121','111'], {
    1: '#forge:gems/emerald', 
    2: 'ironfurnaces:crystal_furnace'}),
  event.shaped('ironfurnaces:obsidian_furnace', 
  ['111','121','111'], {
    1: '#forge:obsidian', 
    2: 'ironfurnaces:emerald_furnace'}),
  event.shaped('ironfurnaces:netherite_furnace', 
  ['111','121','111'], {
    1: '#forge:ingots/netherite', 
    2: 'ironfurnaces:obsidian_furnace'}),
  event.shaped('ironfurnaces:augment_speed', 
  ['434','121','434'], {
    1: '#forge:storage_blocks/redstone', 
    2: '#forge:sugar', 
    3: '#forge:ingots/iron',
    4: 'cyclic:compressed_cobblestone'}),
  event.shaped('ironfurnaces:rainbow_core', 
  ['131','242','131'], {
    1: 'thermal_extra:dragonsteel_glass', 
    2: 'ironfurnaces:unobtainium_furnace',
    3: 'minecraft:tinted_glass',
    4: 'botania:elf_glass'})
})