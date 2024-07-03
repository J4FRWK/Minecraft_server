// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
 event.remove({output: 'pipez:item_pipe'}),
 event.remove({output: 'pipez:energy_pipe'}),
 event.remove({output: 'pipez:fluid_pipe'}),
 event.remove({output: 'pipez:gas_pipe'}),
 event.remove({output: 'pipez:universal_pipe'})
})

ServerEvents.recipes(event => {
  event.shaped('6x pipez:item_pipe', ['111','111','111'], {1: 'cyclic:item_pipe'}),
  event.shaped('6x pipez:fluid_pipe', ['111','111','111'], {1: 'cyclic:fluid_pipe'}),
  event.shaped('6x pipez:energy_pipe', ['111','111','111'], {1: 'cyclic:energy_pipe'})
  event.shaped('6x pipez:gas_pipe', [' 3 ','121',' 4 '], {1: '#forge:ingots/osmium', 2: 'cyclic:item_pipe', 3: 'cyclic:fluid_pipe', 4: 'cyclic:energy_pipe'}),
  event.shaped('8x pipez:universal_pipe', 
  ['121','353','424'], {
    1: 'mekanism:ultimate_logistical_transporter',
    2: 'mekanism:ultimate_universal_cable',
    3: 'mekanism:ultimate_pressurized_tube',
    4: 'mekanism:ultimate_mechanical_pipe',
    5: 'mekanism:ultimate_control_circuit'})

  //Infinity Pipe
  event.custom({"type": "extendedcrafting:shaped_table", "pattern": ["AABAA","ACDCA","AEFEA","ACDCA","AABAA"],
    "key": {"A": {"item": "spirit:soul_steel_ingot"},
            "B": { "item": "thermal:turbo_servo_attachment"},
            "C": {"item": "avaritia:infinity_nugget"},
            "D": {"item": "mysticalagradditions:insanium_nugget"},
            "E": {"item": "pipez:ultimate_upgrade"},
            "F": {"item": "avaritia:neutron_gear"}},
      "result": {"item": "pipez:infinity_upgrade"}})
})
