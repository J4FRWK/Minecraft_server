// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
//Compressed Cobblestone
  event.remove({id: 'cyclic:compressed_cobblestone'})
  event.remove({id: 'cyclic:compressed_cobblestone_u'})
  event.shaped('cyclic:compressed_cobblestone', ['11','11'], {1: 'minecraft:cobblestone'})
  event.shapeless('4x minecraft:cobblestone', ['cyclic:compressed_cobblestone'])
//Battery
//Clay
event.remove({id: 'cyclic:battery_clay'})
event.shaped('cyclic:battery_clay', ['121','232', '121'], {
  1: '#forge:ingots/copper', 2: 'cyclic:compressed_cobblestone', 3: '#forge:gems/emerald'})
//Normal
event.remove({id: 'cyclic:battery'})
event.shaped('cyclic:battery', ['121','232', '121'], {
  1: '#forge:plates/gold', 2: 'compressium:cobblestone_2', 3: 'cyclic:battery_clay'})
//Block Breaker
event.remove({id: 'cyclic:breaker'})
event.shaped('cyclic:breaker', ['121','346', '555'], {1: 'minecraft:iron_ingot', 2: 'minecraft:copper_ingot', 3: 'minecraft:iron_pickaxe', 4: 'minecraft:dispenser', 
                                                      5: 'minecraft:cobblestone', 6: 'minecraft:iron_shovel'})

//General Remove
//Emerald Armor/Tools
event.remove({id: 'cyclic:emerald_boots'})
event.remove({id: 'cyclic:emerald_helmet'})
event.remove({id: 'cyclic:emerald_chestplate'})
event.remove({id: 'cyclic:emerald_leggings'})
event.remove({id: 'cyclic:emerald_pickaxe'})
event.remove({id: 'cyclic:emerald_axe'})
event.remove({id: 'cyclic:emerald_shovel'})
event.remove({id: 'cyclic:emerald_sword'})
event.remove({id: 'cyclic:emerald_hoe'})
//Copper Tools
event.remove({id: 'cyclic:copper_pickaxe'})
event.remove({id: 'cyclic:copper_axe'})
event.remove({id: 'cyclic:copper_shovel'})
event.remove({id: 'cyclic:copper_sword'})
event.remove({id: 'cyclic:copper_hoe'})
//Apple
event.remove({id: 'cyclic:apple_sprout_emerald'})
event.remove({id: 'cyclic:apple_lapis'})
//Carrot
event.remove({id: 'cyclic:emerald_carrot_jump'})
event.remove({id: 'cyclic:lapis_carrot_variant'})


event.remove({id: 'cyclic:uncrafter'})

})











ServerEvents.recipes(event => {
  event.remove({output: 'cyclic:amethyst_pickaxe'}),
  event.remove({output: 'cyclic:amethyst_axe'}),
  event.remove({output: 'cyclic:amethyst_shovel'}),
  event.remove({output: 'cyclic:amethyst_sword'}),
  event.remove({output: 'cyclic:amethyst_hoe'}),
  event.remove({output: 'cyclic:sandstone_pickaxe'}),
  event.remove({output: 'cyclic:sandstone_axe'}),
  event.remove({output: 'cyclic:sandstone_shovel'}),
  event.remove({output: 'cyclic:sandstone_sword'}),
  event.remove({output: 'cyclic:sandstone_hoe'}),
  event.remove({output: 'cyclic:netherbrick_pickaxe'}),
  event.remove({output: 'cyclic:netherbrick_axe'}),
  event.remove({output: 'cyclic:netherbrick_shovel'}),
  event.remove({output: 'cyclic:netherbrick_sword'}),
  event.remove({output: 'cyclic:netherbrick_hoe'}),
  event.remove({output: 'cyclic:magic_net'}),
  event.remove({output: 'cyclic:hopper_fluid'}),
  event.remove({output: 'cyclic:hopper'}),
  event.remove({output: 'cyclic:hopper_gold'}),
  event.remove({output: 'cyclic:item_pipe'}),
  event.remove({output: 'cyclic:fluid_pipe'}),
  event.remove({output: 'cyclic:energy_pipe'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('cyclic:magic_net', 
  ['111','121','111'], {
    1: '#forge:ender_pearls', 
    2: 'mob_catcher:netherite_mob_catcher'}),
  event.shaped('cyclic:hopper_fluid', 
  ['1 1','121',' 1 '], {
    1: '#forge:ingots/iron', 
    2: 'flopper:flopper'}),
  event.shaped('8x cyclic:item_pipe', 
  ['121'], {
    1: '#forge:ingots/iron', 
    2: '#forge:ingots/gold'}),
  event.shaped('8x cyclic:fluid_pipe', 
  ['121'], {
    1: '#forge:ingots/iron', 
    2: '#forge:ingots/copper'}),
  event.shaped('8x cyclic:energy_pipe', 
  ['121'], {
    1: '#forge:ingots/iron', 
    2: '#forge:dusts/redstone'})
})