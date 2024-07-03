// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'mob_grinding_utils:saw_upgrade_smite'}),
  event.remove({output: 'mob_grinding_utils:saw_upgrade_sharpness'}),
  event.remove({output: 'mob_grinding_utils:saw_upgrade_looting'}),
  event.remove({output: 'mob_grinding_utils:saw_upgrade_fire'}),
  event.remove({output: 'mob_grinding_utils:saw_upgrade_beheading'}),
  event.remove({output: 'mob_grinding_utils:saw_upgrade_arthropod'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('mob_grinding_utils:saw_upgrade_smite', 
  ['131','323','131'], {
    1: 'reliquary:zombie_heart',
    3: 'reliquary:rib_bone', 
    2: '#forge:storage_blocks/redstone'}),
  event.shaped('mob_grinding_utils:saw_upgrade_sharpness', 
  ['111','121','111'], {
    1: 'reliquary:catalyzing_gland', 
    2: '#forge:storage_blocks/redstone'}),
  event.shaped('mob_grinding_utils:saw_upgrade_looting', 
  ['111','121','111'], {
    1: 'reliquary:nebulous_heart', 
    2: '#forge:storage_blocks/redstone'}),
  event.shaped('mob_grinding_utils:saw_upgrade_fire', 
  ['111','121','111'], {
    1: 'reliquary:molten_core', 
    2: '#forge:storage_blocks/redstone'}),
  event.shaped('mob_grinding_utils:saw_upgrade_beheading', 
  ['111','121','111'], {
    1: 'reliquary:guardian_spike', 
    2: '#forge:storage_blocks/redstone'}),
  event.shaped('mob_grinding_utils:saw_upgrade_arthropod', 
  ['111','121','111'], {
    1: 'reliquary:chelicerae', 
    2: '#forge:storage_blocks/redstone'})
})