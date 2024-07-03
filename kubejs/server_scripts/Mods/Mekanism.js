// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')


ServerEvents.recipes(event => {
//General Remove
    //Lapis Tools
    event.remove({id: 'mekanismtools:lapis_lazuli/tools/pickaxe'})
    event.remove({id: 'mekanismtools:lapis_lazuli/tools/axe'})
    event.remove({id: 'mekanismtools:lapis_lazuli/tools/shovel'})
    event.remove({id: 'mekanismtools:lapis_lazuli/tools/hoe'})
    event.remove({id: 'mekanismtools:lapis_lazuli/tools/sword'})
    event.remove({id: 'mekanismtools:lapis_lazuli/tools/paxel'})
    event.remove({id: 'mekanismtools:lapis_lazuli/shield'})


  event.remove({output: 'mekanism:steel_casing'}),
  event.remove({output: 'mekanism:basic_mechanical_pipe'}),
  event.remove({output: 'mekanism:basic_universal_cable'}),
  event.remove({output: 'mekanism:basic_pressurized_tube'}),
  event.remove({output: 'mekanism:basic_logistical_transporter'}),
  event.remove({output: 'mekanism:electrolytic_separator'}),
  event.remove({output: 'mekanism:rotary_condensentrator'}),
  event.remove({output: 'mekanism:pressurized_reaction_chamber'}),
  event.remove({output: 'mekanism:boiler_casing'}),
  event.remove({output: 'mekanismgenerators:turbine_casing'}),
  event.remove({output: 'mekanism:structural_glass'}),
  event.remove({output: 'mekanismgenerators:turbine_vent'}),
  event.remove({output: 'mekanismgenerators:saturating_condenser'}),
  event.remove({output: 'mekanism:pressure_disperser'}),
  event.remove({output: 'mekanismgenerators:electromagnetic_coil'}),
  event.remove({output: 'mekanismgenerators:rotational_complex'}),
  event.remove({output: 'mekanismgenerators:turbine_rotor'}),
  event.remove({output: 'mekanismgenerators:turbine_blade'}),
  event.remove({output: 'mekanism:resistive_heater'}),
  event.remove({output: 'mekanism:superheating_element'}),
  event.remove({output: 'mekanismgenerators:fission_reactor_casing'}),
  event.remove({output: 'mekanismgenerators:fission_reactor_logic_adapter'}),
  event.remove({output: 'mekanismgenerators:reactor_glass'}),
  event.remove({output: 'mekanism:radioactive_waste_barrel'}),
  event.remove({output: 'mekanism:isotopic_centrifuge'}),
  event.remove({output: 'mekanism:metallurgic_infuser'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('mekanism:steel_casing', ['121','434','121'], {1: '#forge:ingots/enderium', 2: '#forge:storage_blocks/steel', 3: 'thermal:machine_frame', 4: 'redstone_arsenal:flux_ingot'}),
  event.shaped('4x mekanism:basic_mechanical_pipe', ['111','121','111'], { 1: 'pipez:fluid_pipe', 2: 'mekanism:alloy_infused'}),
  event.shaped('4x mekanism:basic_universal_cable', ['111','121','111'], { 1: 'pipez:energy_pipe', 2: 'mekanism:alloy_infused'}),
  event.shaped('4x mekanism:basic_pressurized_tube', ['111','121','111'], {1: 'pipez:gas_pipe', 2: 'mekanism:alloy_infused'}),
  event.shaped('4x mekanism:basic_logistical_transporter', ['111','121','111'], {1: 'pipez:item_pipe', 2: 'mekanism:alloy_infused'}),
  event.shaped('mekanism:electrolytic_separator', ['121','343','121'], {1: '#forge:ingots/refined_glowstone', 2: 'mekanism:alloy_reinforced', 3: '#forge:storage_blocks/redstone', 
                                                                        4: 'mekanism:electrolytic_core'}),
  event.shaped('mekanism:rotary_condensentrator', ['121','345','121'], {1: '#forge:ingots/refined_glowstone', 2: 'mekanism:advanced_control_circuit', 3: 'mekanism:advanced_fluid_tank', 
                                                                        4: 'mekanism:energy_tablet', 5: 'mekanism:advanced_chemical_tank'}),
  event.shaped('mekanism:pressurized_reaction_chamber', ['121','343','565'], {1: '#forge:ingots/refined_obsidian', 2: 'mekanism:alloy_reinforced', 3: 'mekanism:advanced_control_circuit', 
                                                                              4: 'mekanism:enrichment_chamber', 5: 'mekanism:advanced_chemical_tank', 6: 'mekanism:advanced_fluid_tank'}),
  event.shaped('4x mekanism:boiler_casing', ['111','121','111'], { 1: '#forge:ingots/refined_obsidian', 2: '#forge:ingots/enderium'}),
  event.shaped('4x mekanismgenerators:turbine_casing', ['111','121','111'], { 1: '#forge:ingots/refined_obsidian', 2: '#forge:ingots/lumium'}),
  event.shaped('4x mekanism:structural_glass', ['111','121','111'], { 1: '#forge:ingots/refined_obsidian', 2: '#thermal:glass/hardened'}),
  event.shaped('2x mekanismgenerators:turbine_vent', ['111','121','111'], { 1: 'mekanismgenerators:turbine_casing', 2: '#forge:ingots/netherite'}),
  event.shaped('mekanismgenerators:saturating_condenser', ['121','232','121'], { 1: '#forge:ingots/invar', 2: '#forge:ingots/electrum', 3: 'mekanism:basic_fluid_tank'}),
  event.shaped('mekanism:pressure_disperser', ['121','232','121'], { 1: '#forge:ingots/refined_obsidian', 2: '#thermal:glass/hardened', 3: 'mekanism:alloy_reinforced'}),
  event.shaped('mekanismgenerators:electromagnetic_coil', ['121','232','121'], { 1: '#forge:ingots/refined_obsidian', 2: '#forge:ingots/electrum', 3: 'mekanism:energy_tablet'}),
  event.shaped('mekanismgenerators:rotational_complex', ['121','323','121'], { 1: '#forge:ingots/refined_obsidian', 2: 'mekanism:alloy_reinforced', 3: 'mekanism:elite_control_circuit'}),
  event.shaped('mekanismgenerators:turbine_rotor', ['121','121','121'], { 1: '#forge:ingots/refined_obsidian', 2: 'mekanism:alloy_reinforced'}),
  event.shaped('mekanismgenerators:turbine_blade', [' 1 ','121',' 1 '], { 1: '#forge:ingots/refined_obsidian', 2: 'mekanism:alloy_reinforced'}),
  event.shaped('mekanism:resistive_heater', ['121','232','141'], { 1: '#forge:ingots/invar', 2: '#forge:storage_blocks/redstone', 3: 'mekanism:steel_casing', 4:'mekanism:energy_tablet'}),
  event.shaped('mekanism:superheating_element', ['121','232','121'], { 1: '#forge:ingots/signalum', 2: '#forge:storage_blocks/redstone', 3: 'mekanism:steel_casing'}),
  event.shaped('4x mekanismgenerators:fission_reactor_casing', ['111','121','111'], { 1: '#forge:ingots/refined_obsidian', 2: 'mekanism:steel_casing'}),
  event.shaped('mekanismgenerators:fission_reactor_logic_adapter', ['111','121','111'], { 1: '#forge:storage_blocks/redstone', 2: 'mekanismgenerators:fission_reactor_casing'}),
  event.shaped('4x mekanismgenerators:reactor_glass', ['131','323','131'], { 1: '#forge:ingots/refined_obsidian', 2: 'mekanism:structural_glass', 3: '#forge:ingots/enderium'}),
  event.shaped('mekanism:radioactive_waste_barrel', ['121','2 2','121'], { 1: '#forge:ingots/enderium', 2: 'thermal:constantan_ingot'}),
  event.shaped('mekanism:isotopic_centrifuge', ['111','323','111'], { 1: '#forge:ingots/refined_obsidian', 2: 'mekanism:ultimate_chemical_tank', 3: 'mekanism:ultimate_control_circuit'}),
  event.shaped('mekanism:metallurgic_infuser', ['141','323','141'], { 1: '#forge:ingots/invar', 2: 'mekanism:steel_casing', 3:'#forge:ingots/rose_gold', 4: '#forge:storage_blocks/osmium' })
})

ServerEvents.recipes(event => {
//Absolute
  //Universal Cable
  event.remove({id: 'mekaevolution:absolute_universal_cable'})
  event.shaped('4x mekaevolution:absolute_universal_cable', ['111','121','111'], {
    1: 'mekanism:ultimate_universal_cable', 2: 'mekaevolution:absolute_control_circuit'})
  //Logistical Transporter
  event.remove({id: 'mekaevolution:absolute_logistical_transporter'})
  event.shaped('4x mekaevolution:absolute_logistical_transporter', ['111','121','111'], {
    1: 'mekanism:ultimate_logistical_transporter', 2: 'mekaevolution:absolute_control_circuit'})
  //Mechanical Pipe
  event.remove({id: 'mekaevolution:absolute_mechanical_pipe'})
  event.shaped('4x mekaevolution:absolute_mechanical_pipe', ['111','121','111'], {
    1: 'mekanism:ultimate_mechanical_pipe', 2: 'mekaevolution:absolute_control_circuit'})
  //Energy Cube
  event.remove({id: 'mekaevolution:absolute_energy_cube'})
  event.shaped('mekaevolution:absolute_energy_cube', ['121','343','121'], {
    1: 'mekaevolution:absolute_control_circuit', 2: 'mekanism:ultimate_energy_cube', 3:'#forge:ingots/lumium', 4: 'solarpanels:spectral_energy_tablet'})
//Spectral
  //Energy Tablet
  event.remove({id: 'solarpanels:spectral_energy_tablet'})
  event.shaped('solarpanels:spectral_energy_tablet', ['121','343','121'], {
    1: 'mekaevolution:absolute_control_circuit', 2: '#forge:ingots/lumium', 3:'mekanism:alloy_atomic', 4: 'solarpanels:quantum_energy_tablet'})
  //Solar Element
  event.remove({id: 'solarpanels:spectral_solar_element'})
  event.shaped('solarpanels:spectral_solar_element', ['111','232','444'], {
    1: '#forge:glass_panes', 2: 'mekaevolution:absolute_control_circuit', 3:'solarpanels:quantum_solar_element', 4: '#forge:ingots/lumium'})
  //Solar Panel
  event.remove({id: 'solarpanels:spectral_solar_panel'})
  event.shaped('solarpanels:spectral_solar_panel', ['111','232','454'], {
    1: 'solarpanels:spectral_solar_element', 2: '#forge:ingots/lumium', 3:'solarpanels:quantum_solar_panel', 4: 'mekaevolution:absolute_control_circuit', 5: 'solarpanels:spectral_energy_tablet'})
  //Supreme
  //Universal Cable
  event.remove({id: 'mekaevolution:supreme_universal_cable'})
  event.shaped('4x mekaevolution:supreme_universal_cable', ['111','121','111'], {
    1: 'mekaevolution:absolute_universal_cable', 2: 'mekaevolution:supreme_control_circuit'})
  //Logistical Transporter
  event.remove({id: 'mekaevolution:supreme_logistical_transporter'})
  event.shaped('4x mekaevolution:supreme_logistical_transporter', ['111','121','111'], {
    1: 'mekaevolution:absolute_logistical_transporter', 2: 'mekaevolution:supreme_control_circuit'})
  //Mechanical Pipe
  event.remove({id: 'mekaevolution:supreme_mechanical_pipe'})
  event.shaped('4x mekaevolution:supreme_mechanical_pipe', ['111','121','111'], {
    1: 'mekaevolution:absolute_mechanical_pipe', 2: 'mekaevolution:supreme_control_circuit'})
  //Energy Cube
  event.remove({id: 'mekaevolution:supreme_energy_cube'})
  event.shaped('mekaevolution:supreme_energy_cube', ['121','343','121'], {
    1: 'mekaevolution:supreme_control_circuit', 2: 'mekaevolution:absolute_energy_cube', 3:'#forge:ingots/signalum', 4: 'solarpanels:singular_energy_tablet'})
  //Singular
  //Energy Tablet
  event.remove({id: 'solarpanels:singular_energy_tablet'})
  event.shaped('solarpanels:singular_energy_tablet', ['121','343','121'], {
    1: 'mekaevolution:supreme_control_circuit', 2: '#forge:ingots/signalum', 3:'mekanism:alloy_atomic', 4: 'solarpanels:spectral_energy_tablet'})
  //Solar Element
  event.remove({id: 'solarpanels:singular_solar_element'})
  event.shaped('solarpanels:singular_solar_element', ['111','232','444'], {
    1: '#forge:glass_panes', 2: 'mekaevolution:supreme_control_circuit', 3:'solarpanels:spectral_solar_element', 4: '#forge:ingots/signalum'})
  //Solar Panel
  event.remove({id: 'solarpanels:singular_solar_panel'})
  event.shaped('solarpanels:singular_solar_panel', ['111','232','454'], {
    1: 'solarpanels:singular_solar_element', 2: '#forge:ingots/signalum', 3:'solarpanels:spectral_solar_panel', 4: 'mekaevolution:supreme_control_circuit', 5: 'solarpanels:singular_energy_tablet'})
  //Cosmic
  //Universal Cable
  event.remove({id: 'mekaevolution:cosmic_universal_cable'})
  event.shaped('4x mekaevolution:cosmic_universal_cable', ['111','121','111'], {
    1: 'mekaevolution:supreme_universal_cable', 2: 'mekaevolution:cosmic_control_circuit'})
  //Logistical Transporter
  event.remove({id: 'mekaevolution:cosmic_logistical_transporter'})
  event.shaped('4x mekaevolution:cosmic_logistical_transporter', ['111','121','111'], {
    1: 'mekaevolution:supreme_logistical_transporter', 2: 'mekaevolution:cosmic_control_circuit'})
  //Mechanical Pipe
  event.remove({id: 'mekaevolution:cosmic_mechanical_pipe'})
  event.shaped('4x mekaevolution:cosmic_mechanical_pipe', ['111','121','111'], {
    1: 'mekaevolution:supreme_mechanical_pipe', 2: 'mekaevolution:cosmic_control_circuit'})
  //Energy Cube
  event.remove({id: 'mekaevolution:cosmic_energy_cube'})
  event.shaped('mekaevolution:cosmic_energy_cube', ['121','343','121'], {
    1: 'mekaevolution:cosmic_control_circuit', 2: 'mekaevolution:supreme_energy_cube', 3:'#forge:ingots/twinite', 4: 'solarpanels:light_absorbing_energy_tablet'})
  //Light Absorbing
  //Energy Tablet
  event.remove({id: 'solarpanels:light_absorbing_energy_tablet'})
  event.shaped('solarpanels:light_absorbing_energy_tablet', ['121','343','121'], {
    1: 'mekaevolution:cosmic_control_circuit', 2: '#forge:ingots/twinite', 3:'mekanism:alloy_atomic', 4: 'solarpanels:singular_energy_tablet'})
  //Solar Element
  event.remove({id: 'solarpanels:light_absorbing_solar_element'})
  event.shaped('solarpanels:light_absorbing_solar_element', ['111','232','444'], {
    1: '#forge:glass_panes', 2: 'mekaevolution:cosmic_control_circuit', 3:'solarpanels:singular_solar_element', 4: '#forge:ingots/twinite'})
  //Solar Panel
  event.remove({id: 'solarpanels:light_absorbing_solar_panel'})
  event.shaped('solarpanels:light_absorbing_solar_panel', ['111','232','454'], {
    1: 'solarpanels:light_absorbing_solar_element', 2: '#forge:ingots/twinite', 3:'solarpanels:singular_solar_panel', 4: 'mekaevolution:cosmic_control_circuit', 5: 'solarpanels:light_absorbing_energy_tablet'})
  //Infinite
  //Universal Cable
  event.remove({id: 'mekaevolution:infinite_universal_cable'})
  event.shaped('4x mekaevolution:infinite_universal_cable', ['111','121','111'], {
    1: 'mekaevolution:cosmic_universal_cable', 2: 'mekaevolution:infinite_control_circuit'})
  //Logistical Transporter
  event.remove({id: 'mekaevolution:infinite_logistical_transporter'})
  event.shaped('4x mekaevolution:infinite_logistical_transporter', ['111','121','111'], {
    1: 'mekaevolution:cosmic_logistical_transporter', 2: 'mekaevolution:infinite_control_circuit'})
  //Mechanical Pipe
  event.remove({id: 'mekaevolution:infinite_mechanical_pipe'})
  event.shaped('4x mekaevolution:infinite_mechanical_pipe', ['111','121','111'], {
    1: 'mekaevolution:cosmic_mechanical_pipe', 2: 'mekaevolution:infinite_control_circuit'})
  //Energy Cube
  event.remove({id: 'mekaevolution:infinite_energy_cube'})
  event.shaped('mekaevolution:infinite_energy_cube', ['121','343','121'], {
    1: 'mekaevolution:infinite_control_circuit', 2: 'mekaevolution:cosmic_energy_cube', 3:'#forge:ingots/forgotten_metal', 4: 'solarpanels:light_absorbing_energy_tablet'})
  //Photonic
  //Energy Tablet
  event.remove({id: 'solarpanels:photonic_energy_tablet'})
  event.shaped('solarpanels:photonic_energy_tablet', ['121','343','121'], {
    1: 'mekaevolution:infinite_control_circuit', 2: '#forge:ingots/forgotten_metal', 3:'mekanism:alloy_atomic', 4: 'solarpanels:light_absorbing_energy_tablet'})
  //Solar Element
  event.remove({id: 'solarpanels:photonic_solar_element'})
  event.shaped('solarpanels:photonic_solar_element', ['111','232','444'], {
    1: '#forge:glass_panes', 2: 'mekaevolution:infinite_control_circuit', 3:'solarpanels:light_absorbing_solar_element', 4: '#forge:ingots/forgotten_metal'})
  //Solar Panel
  event.remove({id: 'solarpanels:photonic_solar_panel'})
  event.shaped('solarpanels:photonic_solar_panel', ['111','232','454'], {
    1: 'solarpanels:photonic_solar_element', 2: '#forge:ingots/forgotten_metal', 3:'solarpanels:light_absorbing_solar_panel', 4: 'mekaevolution:infinite_control_circuit', 5: 'solarpanels:light_absorbing_energy_tablet'})

  //Improved
  //Energy Tablet
  event.remove({id: 'solarpanels:improved_energy_tablet'})
  event.shaped('solarpanels:improved_energy_tablet', ['121','343','121'], {
    1: 'mekanism:elite_control_circuit', 2: '#forge:ingots/zinc', 3:'mekanism:alloy_atomic', 4: 'mekanism:energy_tablet'})
  //Solar Element
  event.remove({id: 'solarpanels:improved_hybrid_solar_element'})
  event.shaped('solarpanels:improved_hybrid_solar_element', ['111','232','444'], {
    1: '#forge:glass_panes', 2: 'mekanism:elite_control_circuit', 3:'solarpanels:hybrid_solar_element', 4: '#forge:ingots/zinc'})
  //Solar Panel
  event.remove({id: 'solarpanels:ultimate_hybrid_solar_panel'})
  event.shaped('solarpanels:ultimate_hybrid_solar_panel', ['111','232','454'], {
    1: 'solarpanels:improved_hybrid_solar_element', 2: '#forge:ingots/zinc', 3:'solarpanels:hybrid_solar_panel', 4: 'mekanism:elite_control_circuit', 5: 'solarpanels:improved_energy_tablet'})

  //Quantum
  //Energy Tablet
  event.remove({id: 'solarpanels:quantum_energy_tablet'})
  event.shaped('solarpanels:quantum_energy_tablet', ['121','343','121'], {
    1: 'mekanism:ultimate_control_circuit', 2: '#forge:ingots/iridium', 3:'mekanism:alloy_atomic', 4: 'solarpanels:improved_energy_tablet'})
  //Solar Element
  event.remove({id: 'solarpanels:quantum_solar_element'})
  event.shaped('solarpanels:quantum_solar_element', ['111','232','444'], {
    1: '#forge:glass_panes', 2: 'mekanism:ultimate_control_circuit', 3:'solarpanels:improved_hybrid_solar_element', 4: '#forge:ingots/iridium'})
  //Solar Panel
  event.remove({id: 'solarpanels:quantum_solar_panel'})
  event.shaped('solarpanels:quantum_solar_panel', ['111','232','454'], {
    1: 'solarpanels:quantum_solar_element', 2: '#forge:ingots/iridium', 3:'solarpanels:ultimate_hybrid_solar_panel', 4: 'mekanism:ultimate_control_circuit', 5: 'solarpanels:quantum_energy_tablet'})

  //Carbone
  //Solar Element
  event.remove({id: 'solarpanels:carbone_solar_element'})
  event.shaped('solarpanels:carbone_solar_element', ['111','232','444'], {
    1: '#forge:glass_panes', 2: 'mekanism:basic_control_circuit', 3:'mekanismgenerators:solar_panel', 4: '#forge:ingots/osmium'})  
  //Hybird
  //Solar Element
  event.remove({id: 'solarpanels:hybrid_solar_element'})
  event.shaped('solarpanels:hybrid_solar_element', ['111','232','444'], {
    1: '#forge:glass_panes', 2: 'mekanism:advanced_control_circuit', 3:'solarpanels:carbone_solar_element', 4: '#forge:ingots/osmium'})
  //Solar Panel
  event.remove({id: 'solarpanels:hybrid_solar_panel'})
  event.shaped('solarpanels:hybrid_solar_panel', ['111','232','454'], {
    1: 'solarpanels:hybrid_solar_element', 2: '#forge:ingots/osmium', 3:'solarpanels:advanced_solar_panel', 4: 'mekanism:advanced_control_circuit', 5: 'mekanism:energy_tablet'})

  //Energy Cube
  //Ulitmate
  event.remove({id: 'mekanism:energy_cube/ultimate'})
  event.shaped('mekanism:ultimate_energy_cube', ['121','343','121'], {
    1: 'mekanism:ultimate_control_circuit', 2: 'mekanism:elite_energy_cube', 3:'#forge:ingots/iridium', 4: 'solarpanels:quantum_energy_tablet'})
  //Elite
  event.remove({id: 'mekanism:energy_cube/elite'})
  event.shaped('mekanism:elite_energy_cube', ['121','343','121'], {
    1: 'mekanism:elite_control_circuit', 2: 'mekanism:advanced_energy_cube', 3:'#forge:ingots/zinc', 4: 'solarpanels:improved_energy_tablet'})
  //Advanced
  event.remove({id: 'mekanism:energy_cube/advanced'})
  event.shaped('mekanism:advanced_energy_cube', ['121','343','121'], {
    1: 'mekanism:advanced_control_circuit', 2: 'mekanism:basic_energy_cube', 3:'#forge:ingots/osmium', 4: 'mekanism:energy_tablet'})
  //Basic
  event.remove({id: 'mekanism:energy_cube/basic'})
  event.shaped('mekanism:basic_energy_cube', ['121','343','121'], {
    1: 'mekanism:basic_control_circuit', 2: 'immersiveengineering:capacitor_hv', 3:'#forge:ingots/osmium', 4: 'mekanism:energy_tablet'})

//Creative Tablet
event.shaped('solarpanels:creative_energy_tablet', ['121','343','121'], {
  1: 'mekaevolution:infinite_control_circuit', 2: 'avaritia:infinity_ingot', 3:'mekanism:alloy_atomic', 4: 'solarpanels:photonic_energy_tablet'})

//Cardboard Box
event.remove({id: 'mekanism:cardboard_box'})
event.custom({"type": "extendedcrafting:shaped_table", "pattern": [
    "ABCDA",
    "EFGFE",
    "CGHGC",
    "EFGFE",
    "AICJA"],
  "key": {
    "A": {"item": "blue_skies:lunar_log"},
    "B": {"item": "ars_nouveau:green_archwood_log"},
    "C": {"item": "undergarden:grongle_log"},
    "D": {"item": "ars_nouveau:blue_archwood_log"},
    "E": {"item": "allthemodium:soul_log"},
    "F": {"item": "twilightforest:giant_log"},
    "G": {"item": "ad_astra:glacian_log"},
    "H": {"item": "botania:alfheim_portal"},
    "I": {"item": "ars_nouveau:purple_archwood_log"},
    "J": {"item": "ars_nouveau:red_archwood_log"}},
  "result": {"item": "mekanism:cardboard_box"}})

})