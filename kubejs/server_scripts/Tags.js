// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.tags('item', event => {
  event.add('forge:rubber', 'thermal:rubber')
  event.add('forge:rubber', 'industrialforegoing:dryrubber')

  event.add('forge:xp', 'cyclic:xpjuice_bucket')
  event.add('forge:xp', 'experienceobelisk:cognitium_bucket')
  event.add('forge:xp', 'experienceobelisk:raw_experience_bucket')
  event.add('forge:xp', 'mob_grinding_utils:fluid_xp_bucket')

  event.add('forge:mazestone', 'twilightforest:mazestone')
  event.add('forge:mazestone', 'twilightforest:mazestone_brick')
  event.add('forge:mazestone', 'twilightforest:cracked_mazestone')
  event.add('forge:mazestone', 'twilightforest:mossy_mazestone')
  event.add('forge:mazestone', 'twilightforest:decorative_mazestone')
  event.add('forge:mazestone', 'twilightforest:cut_mazestone')
  event.add('forge:mazestone', 'twilightforest:mazestone_border')
  event.add('forge:mazestone', 'twilightforest:mazestone_mosaic')

  event.add('forge:gears/flux', 'redstone_arsenal:flux_gear')
  event.add('forge:gears/neutron', 'avaritia:neutron_gear')

  event.add('forge:storage_blocks/raw_silver', 'material_elements:raw_silver_block')

  event.add('forge:wither_bones', 'armorplus:wither_bone')
})