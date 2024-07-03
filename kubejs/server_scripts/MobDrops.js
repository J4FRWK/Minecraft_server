// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Add
ServerEvents.recipes(event => {
  //Minecraft
  event.shaped('minecraft:pearlescent_froglight', ['111','121','111'], {1: 'minecraft:magenta_dye', 2: 'minecraft:glowstone'}),
  event.shaped('minecraft:verdant_froglight', ['111','121','111'], {1: 'minecraft:green_dye', 2: 'minecraft:glowstone'}),
  event.shaped('minecraft:ochre_froglight', ['111','121','111'], {1: 'minecraft:yellow_dye', 2: 'minecraft:glowstone'}),
  //Evil Craft
  event.shaped('evilcraft:ender_tear', ['111','121','111'], {1: 'mysticalagriculture:enderman_essence', 2: 'minecraft:ghast_tear'}),
  //Reliquary
  //Molten Core
  event.shaped('reliquary:molten_core', ['111','121','111'], {1: 'mysticalagriculture:blaze_essence', 2: 'minecraft:blaze_rod'}),
  event.shaped('reliquary:molten_core', ['111','121','111'], {1: 'mysticalagriculture:blaze_essence', 2: 'minecraft:magma_cream'}),
  //Catalyzing Gland
  event.shaped('reliquary:catalyzing_gland', ['111','121','111'], {1: 'mysticalagriculture:creeper_essence', 2: 'minecraft:gunpowder'}),
  event.shaped('reliquary:catalyzing_gland', ['111','121','111'], {1: 'mysticalagriculture:ghast_essence', 2: 'minecraft:ghast_tear'}),
  //Nebulous Heart
  event.shaped('reliquary:nebulous_heart', ['111','121','111'], {1: 'mysticalagriculture:enderman_essence', 2: 'minecraft:ender_pearl'}),
  //Rib Bone
  event.shaped('reliquary:rib_bone', ['111','121','111'], {1: 'mysticalagriculture:skeleton_essence', 2: 'minecraft:bone'}),
  //Slime Pearl
  event.shaped('reliquary:slime_pearl', ['111','121','111'], {1: 'mysticalagriculture:slime_essence', 2: 'minecraft:slime_ball'}),
  //Chelicerae
  event.shaped('reliquary:chelicerae', ['111','121','111'], {1: 'mysticalagriculture:spider_essence', 2: 'minecraft:spider_eye'}),
  //Withered Rib
  event.shaped('reliquary:withered_rib', ['111','121','111'], {1: 'mysticalagriculture:wither_skeleton_essence', 2: 'minecraft:wither_skeleton_skull'}),
  //Squid Beak
  event.shaped('reliquary:squid_beak', ['111','121','111'], {1: 'mysticalagriculture:squid_essence', 2: 'minecraft:ink_sac'}),
  //Zombie Heart
  event.shaped('reliquary:zombie_heart', ['111','121','111'], {1: 'mysticalagriculture:zombie_essence', 2: 'minecraft:rotten_flesh'}),
  //Guardian Spike
  event.shaped('reliquary:guardian_spike', ['111','121','111'], {1: 'mysticalagriculture:prismarine_essence', 2: 'minecraft:prismarine_shard'}),
  //Frozen Core
  event.shaped('reliquary:frozen_core', ['111','121','111'], {1: 'mysticalagriculture:ice_essence', 2: 'reliquary:molten_core'})
})