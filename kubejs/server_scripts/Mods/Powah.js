ServerEvents.recipes(event => {

//Powah Book
event.remove({id: 'powah:crafting/manuel'})
event.shaped('powah:book', ['11'], {
  1: 'fluxnetworks:flux_dust',
  2: 'minecraft:book'})

//Dielectric Paste
event.remove({id: 'powah:crafting/dielectric_paste'})
event.remove({id: 'powah:crafting/dielectric_paste_2'})
event.shaped('8x powah:dielectric_paste', ['112','333'], {
  1: 'fluxnetworks:flux_dust',
  2: '#forge:storage_blocks/coal_coke',
  3: '#forge:ingots/hop_graphite'})

//Dielectric Rod
event.remove({id: 'powah:crafting/dielectric_rod'})
event.shaped('powah:dielectric_rod', ['121','121','121'], {
  1: 'powah:dielectric_paste',
  2: 'alltheores:iridium_rod'})

//Dielectric Rod Horizontal
event.remove({id: 'powah:crafting/dielectric_rod_h'})
event.shaped('powah:dielectric_rod_horizontal', ['111','222','111'], {
  1: 'powah:dielectric_paste',
  2: 'alltheores:iridium_rod'})

//Dielectric Casing
event.remove({id: 'powah:crafting/dielectric_casing'})
event.shaped('powah:dielectric_casing', ['121','343','121'], {
  1: 'fluxnetworks:flux_block',
  2: 'powah:dielectric_rod_horizontal', 
  3: 'powah:dielectric_rod',
  4: 'rftoolsbase:machine_frame'})

//Energizing
//Energized Steel
event.remove({id: 'powah:energizing/energized_steel'})
event.recipes.powah.energizing(["armorplus:en_iron", "armorplus:en_gold"], "powah:steel_energized", 500000)

//Blazing
event.remove({id: 'powah:energizing/blazing_crystal'})
event.remove({id: 'powah:energizing/blazing_crystal_2'})
event.recipes.powah.energizing(["alltheores:brass_block"], "powah:crystal_blazing", 1000000)

//Niotic
event.remove({id: 'powah:energizing/niotic_crystal'})
event.recipes.powah.energizing(["alltheores:platinum_block"], "powah:crystal_niotic", 2500000)

//Spirited
event.remove({id: 'powah:energizing/spirited_crystal'})
event.recipes.powah.energizing(["undergarden:forgotten_block"], "powah:crystal_spirited", 5000000)

//Nitro
event.remove({id: 'powah:energizing/nitro_crystal'})
event.recipes.powah.energizing(["ad_astra:calorite_block", "extendedcrafting:nether_star_block", "powah:blazing_crystal_block"], "powah:crystal_nitro", 10000000)

//Capacitor
//Basic
event.remove({id: 'powah:crafting/capacitor_basic'})
event.shaped('powah:capacitor_basic', [' 12','131','21 '], {
  1: 'allthemodium:unobtainium_ingot',
  2: 'powah:dielectric_paste', 
  3: 'thermal:rose_gold_block'})

//Large
event.remove({id: 'powah:crafting/capacitor_basic_large'})
event.shaped('powah:capacitor_basic_large', [' 12','131','21 '], {
  1: 'powah:uraninite_block',
  2: 'powah:dielectric_paste', 
  3: 'powah:capacitor_basic'})

//Hardened
event.remove({id: 'powah:crafting/capacitor_hardened'})
event.shaped('powah:capacitor_hardened', [' 12','131','21 '], {
  1: 'powah:steel_energized',
  2: 'powah:dielectric_paste', 
  3: 'powah:capacitor_basic_large'})

//Blazing
event.remove({id: 'powah:crafting/capacitor_blazing'})
event.shaped('powah:capacitor_blazing', [' 12','131','21 '], {
  1: 'powah:crystal_blazing',
  2: 'powah:dielectric_paste', 
  3: 'powah:capacitor_hardened'})

//Niotic
event.remove({id: 'powah:crafting/capacitor_niotic'})
event.shaped('powah:capacitor_niotic', [' 12','131','21 '], {
  1: 'powah:crystal_niotic',
  2: 'powah:dielectric_paste', 
  3: 'powah:capacitor_blazing'})

//Spirited
event.remove({id: 'powah:crafting/capacitor_spirited'})
event.shaped('powah:capacitor_spirited', [' 12','131','21 '], {
  1: 'powah:crystal_spirited',
  2: 'powah:dielectric_paste', 
  3: 'powah:capacitor_niotic'})

//Nitro
event.remove({id: 'powah:crafting/capacitor_nitro'})
event.shaped('powah:capacitor_nitro', [' 12','131','21 '], {
  1: 'powah:crystal_nitro',
  2: 'powah:dielectric_paste', 
  3: 'powah:capacitor_spirited'})

//Energizing Rod
//Orb
event.remove({id: 'powah:crafting/energizing_orb'})
event.shaped('powah:energizing_orb', ['111','121','333'], {
  1: 'thermal_extra:dragonsteel_glass',
  2: 'powah:dielectric_casing', 
  3: 'alltheores:iridium_ingot'})

//Starter
event.remove({id: 'powah:crafting/energizing_rod_starter'})
event.shaped('powah:energizing_rod_starter', ['111','232','454'], {
  1: 'allthemodium:unobtainium_ingot',
  2: 'powah:capacitor_basic',
  3: 'powah:capacitor_basic_tiny',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:dielectric_casing'})

//Basic
event.remove({id: 'powah:crafting/energizing_rod_basic'})
event.shaped('powah:energizing_rod_basic', ['111','232','454'], {
  1: 'powah:uraninite_block',
  2: 'powah:capacitor_basic_large',
  3: 'powah:capacitor_basic_tiny',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:energizing_rod_starter'})

//Hardened
event.remove({id: 'powah:crafting/energizing_rod_hardened'})
event.shaped('powah:energizing_rod_hardened', ['111','232','454'], {
  1: 'powah:steel_energized',
  2: 'powah:capacitor_hardened',
  3: 'powah:capacitor_basic_tiny',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:energizing_rod_basic'})

//Blazing
event.remove({id: 'powah:crafting/energizing_rod_blazing'})
event.shaped('powah:energizing_rod_blazing', ['111','232','454'], {
  1: 'powah:crystal_blazing',
  2: 'powah:capacitor_blazing',
  3: 'powah:capacitor_basic_tiny',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:energizing_rod_hardened'})

//Niotic
event.remove({id: 'powah:crafting/energizing_rod_niotic'})
event.shaped('powah:energizing_rod_niotic', ['111','232','454'], {
  1: 'powah:crystal_niotic',
  2: 'powah:capacitor_niotic',
  3: 'powah:capacitor_basic_tiny',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:energizing_rod_blazing'})

//Spirited
event.remove({id: 'powah:crafting/energizing_rod_spirited'})
event.shaped('powah:energizing_rod_spirited', ['111','232','454'], {
  1: 'powah:crystal_spirited',
  2: 'powah:capacitor_spirited',
  3: 'powah:capacitor_basic_tiny',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:energizing_rod_niotic'})

//Nitro
event.remove({id: 'powah:crafting/energizing_rod_nitro'})
event.shaped('powah:energizing_rod_nitro', ['111','232','454'], {
  1: 'powah:crystal_nitro',
  2: 'powah:capacitor_nitro',
  3: 'powah:capacitor_basic_tiny',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:energizing_rod_spirited'})

//Furnator
//Starter
event.remove({id: 'powah:crafting/furnator_starter'})
event.shaped('powah:furnator_starter', ['111','232','454'], {
  1: 'allthemodium:unobtainium_ingot',
  2: 'powah:capacitor_basic',
  3: 'powah:dielectric_casing',
  4: 'alltheores:iridium_ingot', 
  5: 'ironfurnaces:netherite_furnace'})

//Basic
event.remove({id: 'powah:crafting/furnator_basic'})
event.shaped('powah:furnator_basic', ['111','232','454'], {
  1: 'powah:uraninite_block',
  2: 'powah:capacitor_basic_large',
  3: 'powah:dielectric_casing',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:furnator_starter'})

//Hardened
event.remove({id: 'powah:crafting/furnator_hardened'})
event.shaped('powah:furnator_hardened', ['111','232','454'], {
  1: 'powah:steel_energized',
  2: 'powah:capacitor_hardened',
  3: 'powah:dielectric_casing',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:furnator_basic'})

//Blazing
event.remove({id: 'powah:crafting/furnator_blazing'})
event.shaped('powah:furnator_blazing', ['111','232','454'], {
  1: 'powah:crystal_blazing',
  2: 'powah:capacitor_blazing',
  3: 'powah:dielectric_casing',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:furnator_hardened'})

//Niotic
event.remove({id: 'powah:crafting/furnator_niotic'})
event.shaped('powah:furnator_niotic', ['111','232','454'], {
  1: 'powah:crystal_niotic',
  2: 'powah:capacitor_niotic',
  3: 'powah:dielectric_casing',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:furnator_blazing'})

//Spirited
event.remove({id: 'powah:crafting/furnator_spirited'})
event.shaped('powah:furnator_spirited', ['111','232','454'], {
  1: 'powah:crystal_spirited',
  2: 'powah:capacitor_spirited',
  3: 'powah:dielectric_casing',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:furnator_niotic'})

//Nitro
event.remove({id: 'powah:crafting/furnator_nitro'})
event.shaped('powah:furnator_nitro', ['111','232','454'], {
  1: 'powah:crystal_nitro',
  2: 'powah:capacitor_nitro',
  3: 'powah:dielectric_casing',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:furnator_spirited'})

//Energy Cable
//Starter
event.remove({id: 'powah:crafting/cable_starter'})
event.remove({id: 'powah:crafting/cable_starter_2'})
event.shaped('4x powah:energy_cable_starter', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'mekanism:ultimate_universal_cable',
  3: 'powah:capacitor_basic'})

//Basic
event.remove({id: 'powah:crafting/cable_basic'})
event.remove({id: 'powah:crafting/cable_basic_2'})
event.shaped('4x powah:energy_cable_basic', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:capacitor_basic_large',
  3: 'powah:energy_cable_starter'})

//Hardened
event.remove({id: 'powah:crafting/cable_hardened'})
event.remove({id: 'powah:crafting/cable_hardened_2'})
event.shaped('4x powah:energy_cable_hardened', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:energy_cable_basic',
  3: 'powah:capacitor_hardened'})

//Blazing
event.remove({id: 'powah:crafting/cable_blazing'})
event.remove({id: 'powah:crafting/cable_blazing_2'})
event.shaped('4x powah:energy_cable_blazing', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:energy_cable_hardened',
  3: 'powah:capacitor_blazing'})

//Niotic
event.remove({id: 'powah:crafting/cable_niotic'})
event.remove({id: 'powah:crafting/cable_niotic_2'})
event.shaped('4x powah:energy_cable_niotic', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:energy_cable_blazing',
  3: 'powah:capacitor_niotic'})

//Spirited
event.remove({id: 'powah:crafting/cable_spirited'})
event.remove({id: 'powah:crafting/cable_spirited_2'})
event.shaped('4x powah:energy_cable_spirited', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:energy_cable_niotic',
  3: 'powah:capacitor_spirited'})

//Nitro
event.remove({id: 'powah:crafting/cable_nitro'})
event.remove({id: 'powah:crafting/cable_nitro_2'})
event.shaped('4x powah:energy_cable_nitro', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:energy_cable_spirited',
  3: 'powah:capacitor_nitro'})

//Battery
//Starter
event.remove({id: 'powah:crafting/battery_starter'})
event.shaped('powah:battery_starter', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:capacitor_basic',
  3: 'thermal:flux_capacitor'})

//Basic
event.remove({id: 'powah:crafting/battery_basic'})
event.shaped('powah:battery_basic', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:capacitor_basic_large',
  3: 'powah:battery_starter'})

//Hardened
event.remove({id: 'powah:crafting/battery_hardened'})
event.shaped('powah:battery_hardened', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:capacitor_hardened',
  3: 'powah:battery_basic'})

//Blazing
event.remove({id: 'powah:crafting/battery_blazing'})
event.shaped('powah:battery_blazing', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:capacitor_blazing',
  3: 'powah:battery_hardened'})

//Niotic
event.remove({id: 'powah:crafting/battery_niotic'})
event.shaped('powah:battery_niotic', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:capacitor_niotic',
  3: 'powah:battery_blazing'})

//Spirited
event.remove({id: 'powah:crafting/battery_spirited'})
event.shaped('powah:battery_spirited', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:capacitor_spirited',
  3: 'powah:battery_niotic'})

//Nitro
event.remove({id: 'powah:crafting/battery_nitro'})
event.shaped('powah:battery_nitro', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:capacitor_nitro',
  3: 'powah:battery_spirited'})

//Energy Cell
//Starter
event.remove({id: 'powah:crafting/energy_cell_starter'})
event.shaped('powah:energy_cell_starter', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:capacitor_basic',
  3: 'mekanism:ultimate_energy_cube'})

//Basic
event.remove({id: 'powah:crafting/energy_cell_basic'})
event.remove({id: 'powah:crafting/energy_cell_basic_2'})
event.shaped('powah:energy_cell_basic', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:capacitor_basic_large',
  3: 'powah:energy_cell_starter'})

//Hardened
event.remove({id: 'powah:crafting/energy_cell_hardened'})
event.shaped('powah:energy_cell_hardened', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:capacitor_hardened',
  3: 'powah:energy_cell_basic'})

//Blazing
event.remove({id: 'powah:crafting/energy_cell_blazing'})
event.shaped('powah:energy_cell_blazing', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:capacitor_blazing',
  3: 'powah:energy_cell_hardened'})

//Niotic
event.remove({id: 'powah:crafting/energy_cell_niotic'})
event.shaped('powah:energy_cell_niotic', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:capacitor_niotic',
  3: 'powah:energy_cell_blazing'})

//Spirited
event.remove({id: 'powah:crafting/energy_cell_spirited'})
event.shaped('powah:energy_cell_spirited', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:capacitor_spirited',
  3: 'powah:energy_cell_niotic'})

//Nitro
event.remove({id: 'powah:crafting/energy_cell_nitro'})
event.shaped('powah:energy_cell_nitro', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:capacitor_nitro',
  3: 'powah:energy_cell_spirited'})

//Ender Gate
//Starter
event.remove({id: 'powah:crafting/ender_gate_starter'})
event.shaped('4x powah:ender_gate_starter', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:energy_cable_starter',
  3: 'powah:ender_core'})

//Basic
event.remove({id: 'powah:crafting/ender_gate_basic'})
event.shaped('4x powah:ender_gate_basic', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:energy_cable_basic',
  3: 'powah:ender_core'})

//Hardened
event.remove({id: 'powah:crafting/ender_gate_hardened'})
event.shaped('4x powah:ender_gate_hardened', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:energy_cable_hardened',
  3: 'powah:ender_core'})

//Blazing
event.remove({id: 'powah:crafting/ender_gate_blazing'})
event.shaped('4x powah:ender_gate_blazing', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:energy_cable_blazing',
  3: 'powah:ender_core'})

//Niotic
event.remove({id: 'powah:crafting/ender_gate_niotic'})
event.shaped('4x powah:ender_gate_niotic', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:energy_cable_niotic',
  3: 'powah:ender_core'})

//Spirited
event.remove({id: 'powah:crafting/ender_gate_spirited'})
event.shaped('4x powah:ender_gate_spirited', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:energy_cable_spirited',
  3: 'powah:ender_core'})

//Nitro
event.remove({id: 'powah:crafting/ender_gate_nitro'})
event.shaped('4x powah:ender_gate_nitro', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:energy_cable_nitro',
  3: 'powah:ender_core'})

//Ender Cell
//Starter
event.remove({id: 'powah:crafting/ender_cell_starter'})
event.shaped('4x powah:ender_cell_starter', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:ender_gate_starter',
  3: 'powah:ender_core'})

//Basic
event.remove({id: 'powah:crafting/ender_cell_basic'})
event.shaped('4x powah:ender_cell_basic', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:ender_gate_basic',
  3: 'powah:ender_core'})

//Hardened
event.remove({id: 'powah:crafting/ender_cell_hardened'})
event.shaped('4x powah:ender_cell_hardened', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:ender_gate_hardened',
  3: 'powah:ender_core'})

//Blazing
event.remove({id: 'powah:crafting/ender_cell_blazing'})
event.shaped('4x powah:ender_cell_blazing', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:ender_gate_blazing',
  3: 'powah:ender_core'})

//Niotic
event.remove({id: 'powah:crafting/ender_cell_niotic'})
event.shaped('4x powah:ender_cell_niotic', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:ender_gate_niotic',
  3: 'powah:ender_core'})

//Spirited
event.remove({id: 'powah:crafting/ender_cell_spirited'})
event.shaped('4x powah:ender_cell_spirited', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:ender_gate_spirited',
  3: 'powah:ender_core'})

//Nitro
event.remove({id: 'powah:crafting/ender_cell_nitro'})
event.shaped('4x powah:ender_cell_nitro', ['121','232','121'], {
  1: 'alltheores:iridium_ingot',
  2: 'powah:ender_gate_nitro',
  3: 'powah:ender_core'})

//Magmator
//Starter
event.remove({id: 'powah:crafting/magmator_starter'})
event.shaped('powah:magmator_starter', ['111','232','454'], {
  1: 'allthemodium:unobtainium_ingot',
  2: 'powah:capacitor_basic',
  3: 'powah:dielectric_casing',
  4: 'alltheores:iridium_ingot', 
  5: 'cyclic:magma_bucket'})

//Basic
event.remove({id: 'powah:crafting/magmator_basic'})
event.shaped('powah:magmator_basic', ['111','232','454'], {
  1: 'powah:uraninite_block',
  2: 'powah:capacitor_basic_large',
  3: 'powah:dielectric_casing',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:magmator_starter'})

//Hardened
event.remove({id: 'powah:crafting/magmator_hardened'})
event.shaped('powah:magmator_hardened', ['111','232','454'], {
  1: 'powah:steel_energized',
  2: 'powah:capacitor_hardened',
  3: 'powah:dielectric_casing',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:magmator_basic'})

//Blazing
event.remove({id: 'powah:crafting/magmator_blazing'})
event.shaped('powah:magmator_blazing', ['111','232','454'], {
  1: 'powah:crystal_blazing',
  2: 'powah:capacitor_blazing',
  3: 'powah:dielectric_casing',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:magmator_hardened'})

//Niotic
event.remove({id: 'powah:crafting/magmator_niotic'})
event.shaped('powah:magmator_niotic', ['111','232','454'], {
  1: 'powah:crystal_niotic',
  2: 'powah:capacitor_niotic',
  3: 'powah:dielectric_casing',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:magmator_blazing'})

//Spirited
event.remove({id: 'powah:crafting/magmator_spirited'})
event.shaped('powah:magmator_spirited', ['111','232','454'], {
  1: 'powah:crystal_spirited',
  2: 'powah:capacitor_spirited',
  3: 'powah:dielectric_casing',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:magmator_niotic'})

//Nitro
event.remove({id: 'powah:crafting/magmator_nitro'})
event.shaped('powah:magmator_nitro', ['111','232','454'], {
  1: 'powah:crystal_nitro',
  2: 'powah:capacitor_nitro',
  3: 'powah:dielectric_casing',
  4: 'alltheores:iridium_ingot', 
  5: 'powah:magmator_spirited'})

//Thermo Generator
//Starter
event.remove({id: 'powah:crafting/thermo_generator_starter'})
event.shaped('powah:thermo_generator_starter', ['111','232','454'], {
  1: 'allthemodium:unobtainium_ingot',
  2: 'powah:capacitor_basic',
  3: 'powah:dielectric_casing',
  4: 'powah:thermoelectric_plate', 
  5: 'thermal:dynamo_magmatic'})

//Basic
event.remove({id: 'powah:crafting/thermo_generator_basic'})
event.shaped('powah:thermo_generator_basic', ['111','232','454'], {
  1: 'powah:uraninite_block',
  2: 'powah:capacitor_basic_large',
  3: 'powah:dielectric_casing',
  4: 'powah:thermoelectric_plate', 
  5: 'powah:thermo_generator_starter'})

//Hardened
event.remove({id: 'powah:crafting/thermo_generator_hardened'})
event.shaped('powah:thermo_generator_hardened', ['111','232','454'], {
  1: 'powah:steel_energized',
  2: 'powah:capacitor_hardened',
  3: 'powah:dielectric_casing',
  4: 'powah:thermoelectric_plate', 
  5: 'powah:thermo_generator_basic'})

//Blazing
event.remove({id: 'powah:crafting/thermo_generator_blazing'})
event.shaped('powah:thermo_generator_blazing', ['111','232','454'], {
  1: 'powah:crystal_blazing',
  2: 'powah:capacitor_blazing',
  3: 'powah:dielectric_casing',
  4: 'powah:thermoelectric_plate', 
  5: 'powah:thermo_generator_hardened'})

//Niotic
event.remove({id: 'powah:crafting/thermo_generator_niotic'})
event.shaped('powah:thermo_generator_niotic', ['111','232','454'], {
  1: 'powah:crystal_niotic',
  2: 'powah:capacitor_niotic',
  3: 'powah:dielectric_casing',
  4: 'powah:thermoelectric_plate', 
  5: 'powah:thermo_generator_blazing'})

//Spirited
event.remove({id: 'powah:crafting/thermo_generator_spirited'})
event.shaped('powah:thermo_generator_spirited', ['111','232','454'], {
  1: 'powah:crystal_spirited',
  2: 'powah:capacitor_spirited',
  3: 'powah:dielectric_casing',
  4: 'powah:thermoelectric_plate', 
  5: 'powah:thermo_generator_niotic'})

//Nitro
event.remove({id: 'powah:crafting/thermo_generator_nitro'})
event.shaped('powah:thermo_generator_nitro', ['111','232','454'], {
  1: 'powah:crystal_nitro',
  2: 'powah:capacitor_nitro',
  3: 'powah:dielectric_casing',
  4: 'powah:thermoelectric_plate', 
  5: 'powah:thermo_generator_spirited'})

//Solar Panel
//Starter
event.remove({id: 'powah:crafting/solar_panel_starter'})
event.shaped('powah:solar_panel_starter', ['111','232','454'], {
  1: 'allthemodium:unobtainium_ingot',
  2: 'powah:capacitor_basic',
  3: 'powah:dielectric_casing',
  4: 'powah:photoelectric_pane', 
  5: '#forge:ingots/zinc'})

//Basic
event.remove({id: 'powah:crafting/solar_panel_basic'})
event.shaped('powah:solar_panel_basic', ['111','232','454'], {
  1: 'powah:uraninite_block',
  2: 'powah:capacitor_basic_large',
  3: 'powah:dielectric_casing',
  4: 'powah:photoelectric_pane', 
  5: 'powah:solar_panel_starter'})

//Hardened
event.remove({id: 'powah:crafting/solar_panel_hardened'})
event.shaped('powah:solar_panel_hardened', ['111','232','454'], {
  1: 'powah:steel_energized',
  2: 'powah:capacitor_hardened',
  3: 'powah:dielectric_casing',
  4: 'powah:photoelectric_pane', 
  5: 'powah:solar_panel_basic'})

//Blazing
event.remove({id: 'powah:crafting/solar_panel_blazing'})
event.shaped('powah:solar_panel_blazing', ['111','232','454'], {
  1: 'powah:crystal_blazing',
  2: 'powah:capacitor_blazing',
  3: 'powah:dielectric_casing',
  4: 'powah:photoelectric_pane', 
  5: 'powah:solar_panel_hardened'})

//Niotic
event.remove({id: 'powah:crafting/solar_panel_niotic'})
event.shaped('powah:solar_panel_niotic', ['111','232','454'], {
  1: 'powah:crystal_niotic',
  2: 'powah:capacitor_niotic',
  3: 'powah:dielectric_casing',
  4: 'powah:photoelectric_pane', 
  5: 'powah:solar_panel_blazing'})

//Spirited
event.remove({id: 'powah:crafting/solar_panel_spirited'})
event.shaped('powah:solar_panel_spirited', ['111','232','454'], {
  1: 'powah:crystal_spirited',
  2: 'powah:capacitor_spirited',
  3: 'powah:dielectric_casing',
  4: 'powah:photoelectric_pane', 
  5: 'powah:solar_panel_niotic'})

//Nitro
event.remove({id: 'powah:crafting/solar_panel_nitro'})
event.shaped('powah:solar_panel_nitro', ['111','232','454'], {
  1: 'powah:crystal_nitro',
  2: 'powah:capacitor_nitro',
  3: 'powah:dielectric_casing',
  4: 'powah:photoelectric_pane', 
  5: 'powah:solar_panel_spirited'})

//Reactor
//Starter
event.remove({id: 'powah:crafting/reactor_starter'})
event.shaped('powah:reactor_starter', ['111','232','454'], {
  1: 'allthemodium:unobtainium_ingot',
  2: 'powah:capacitor_basic',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: '#forge:ingots/iron'})

//Basic
event.remove({id: 'powah:crafting/reactor_basic'})
event.shaped('powah:reactor_basic', ['111','232','454'], {
  1: 'powah:uraninite_block',
  2: 'powah:capacitor_basic_large',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:reactor_starter'})

//Hardened
event.remove({id: 'powah:crafting/reactor_hardened'})
event.shaped('powah:reactor_hardened', ['111','232','454'], {
  1: 'powah:steel_energized',
  2: 'powah:capacitor_hardened',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:reactor_basic'})

//Blazing
event.remove({id: 'powah:crafting/reactor_blazing'})
event.shaped('powah:reactor_blazing', ['111','232','454'], {
  1: 'powah:crystal_blazing',
  2: 'powah:capacitor_blazing',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:reactor_hardened'})

//Niotic
event.remove({id: 'powah:crafting/reactor_niotic'})
event.shaped('powah:reactor_niotic', ['111','232','454'], {
  1: 'powah:crystal_niotic',
  2: 'powah:capacitor_niotic',
  3: 'powah:dielectric_casing',
  4:'#forge:ingots/zinc', 
  5: 'powah:reactor_blazing'})

//Spirited
event.remove({id: 'powah:crafting/reactor_spirited'})
event.shaped('powah:reactor_spirited', ['111','232','454'], {
  1: 'powah:crystal_spirited',
  2: 'powah:capacitor_spirited',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:reactor_niotic'})

//Nitro
event.remove({id: 'powah:crafting/reactor_nitro'})
event.shaped('powah:reactor_nitro', ['111','232','454'], {
  1: 'powah:crystal_nitro',
  2: 'powah:capacitor_nitro',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:reactor_spirited'})

//Player Transmitter
//Starter
event.remove({id: 'powah:crafting/player_tranmitter_starter'})
event.shaped('powah:player_transmitter_starter', ['111','232','454'], {
  1: 'allthemodium:unobtainium_ingot',
  2: 'powah:capacitor_basic',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:player_aerial_pearl'})

//Basic
event.remove({id: 'powah:crafting/player_tranmitter_basic'})
event.shaped('powah:player_transmitter_basic', ['111','232','454'], {
  1: 'powah:uraninite_block',
  2: 'powah:capacitor_basic_large',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:player_transmitter_starter'})

//Hardened
event.remove({id: 'powah:crafting/player_tranmitter_hardened'})
event.shaped('powah:player_transmitter_hardened', ['111','232','454'], {
  1: 'powah:steel_energized',
  2: 'powah:capacitor_hardened',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:player_transmitter_basic'})

//Blazing
event.remove({id: 'powah:crafting/player_tranmitter_blazing'})
event.shaped('powah:player_transmitter_blazing', ['111','232','454'], {
  1: 'powah:crystal_blazing',
  2: 'powah:capacitor_blazing',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:player_transmitter_hardened'})

//Niotic
event.remove({id: 'powah:crafting/player_tranmitter_niotic'})
event.shaped('powah:player_transmitter_niotic', ['111','232','454'], {
  1: 'powah:crystal_niotic',
  2: 'powah:capacitor_niotic',
  3: 'powah:dielectric_casing',
  4:'#forge:ingots/zinc', 
  5: 'powah:player_transmitter_blazing'})

//Spirited
event.remove({id: 'powah:crafting/player_tranmitter_spirited'})
event.shaped('powah:player_transmitter_spirited', ['111','232','454'], {
  1: 'powah:crystal_spirited',
  2: 'powah:capacitor_spirited',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:player_transmitter_niotic'})

//Nitro
event.remove({id: 'powah:crafting/player_tranmitter_nitro'})
event.shaped('powah:player_transmitter_nitro', ['111','232','454'], {
  1: 'powah:crystal_nitro',
  2: 'powah:capacitor_nitro',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:player_transmitter_spirited'})

//Energy Hopper
//Starter
event.remove({id: 'powah:crafting/energy_hopper_starter'})
event.shaped('powah:energy_hopper_starter', ['111','232','454'], {
  1: 'allthemodium:unobtainium_ingot',
  2: 'powah:capacitor_basic',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'mob_grinding_utils:absorption_hopper'})

//Basic
event.remove({id: 'powah:crafting/energy_hopper_basic'})
event.shaped('powah:energy_hopper_basic', ['111','232','454'], {
  1: 'powah:uraninite_block',
  2: 'powah:capacitor_basic_large',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:energy_hopper_starter'})

//Hardened
event.remove({id: 'powah:crafting/energy_hopper_hardened'})
event.shaped('powah:energy_hopper_hardened', ['111','232','454'], {
  1: 'powah:steel_energized',
  2: 'powah:capacitor_hardened',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:energy_hopper_basic'})

//Blazing
event.remove({id: 'powah:crafting/energy_hopper_blazing'})
event.shaped('powah:energy_hopper_blazing', ['111','232','454'], {
  1: 'powah:crystal_blazing',
  2: 'powah:capacitor_blazing',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:energy_hopper_hardened'})

//Niotic
event.remove({id: 'powah:crafting/energy_hopper_niotic'})
event.shaped('powah:energy_hopper_niotic', ['111','232','454'], {
  1: 'powah:crystal_niotic',
  2: 'powah:capacitor_niotic',
  3: 'powah:dielectric_casing',
  4:'#forge:ingots/zinc', 
  5: 'powah:energy_hopper_blazing'})

//Spirited
event.remove({id: 'powah:crafting/energy_hopper_spirited'})
event.shaped('powah:energy_hopper_spirited', ['111','232','454'], {
  1: 'powah:crystal_spirited',
  2: 'powah:capacitor_spirited',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:energy_hopper_niotic'})

//Nitro
event.remove({id: 'powah:crafting/energy_hopper_nitro'})
event.shaped('powah:energy_hopper_nitro', ['111','232','454'], {
  1: 'powah:crystal_nitro',
  2: 'powah:capacitor_nitro',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:energy_hopper_spirited'})

//Energy Discharger
//Starter
event.remove({id: 'powah:crafting/energy_discharger_starter'})
event.shaped('powah:energy_discharger_starter', ['111','232','454'], {
  1: 'allthemodium:unobtainium_ingot',
  2: 'powah:capacitor_basic',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'trashcans:energy_trash_can'})

//Basic
event.remove({id: 'powah:crafting/energy_discharger_basic'})
event.shaped('powah:energy_discharger_basic', ['111','232','454'], {
  1: 'powah:uraninite_block',
  2: 'powah:capacitor_basic_large',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:energy_discharger_starter'})

//Hardened
event.remove({id: 'powah:crafting/energy_discharger_hardened'})
event.shaped('powah:energy_discharger_hardened', ['111','232','454'], {
  1: 'powah:steel_energized',
  2: 'powah:capacitor_hardened',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:energy_discharger_basic'})

//Blazing
event.remove({id: 'powah:crafting/energy_discharger_blazing'})
event.shaped('powah:energy_discharger_blazing', ['111','232','454'], {
  1: 'powah:crystal_blazing',
  2: 'powah:capacitor_blazing',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:energy_discharger_hardened'})

//Niotic
event.remove({id: 'powah:crafting/energy_discharger_niotic'})
event.shaped('powah:energy_discharger_niotic', ['111','232','454'], {
  1: 'powah:crystal_niotic',
  2: 'powah:capacitor_niotic',
  3: 'powah:dielectric_casing',
  4:'#forge:ingots/zinc', 
  5: 'powah:energy_discharger_blazing'})

//Spirited
event.remove({id: 'powah:crafting/energy_discharger_spirited'})
event.shaped('powah:energy_discharger_spirited', ['111','232','454'], {
  1: 'powah:crystal_spirited',
  2: 'powah:capacitor_spirited',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:energy_discharger_niotic'})

//Nitro
event.remove({id: 'powah:crafting/energy_discharger_nitro'})
event.shaped('powah:energy_discharger_nitro', ['111','232','454'], {
  1: 'powah:crystal_nitro',
  2: 'powah:capacitor_nitro',
  3: 'powah:dielectric_casing',
  4: '#forge:ingots/zinc', 
  5: 'powah:energy_discharger_spirited'})

})