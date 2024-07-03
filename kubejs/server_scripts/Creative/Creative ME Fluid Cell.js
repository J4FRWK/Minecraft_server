// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABCCCBAA",
      "ADBDEDBDA",
      "BBFFGFFBB",
      "FFFHIHFFF",
      "FIIJKJIIF",
      "FFFHIHFFF",
      "BBFFGFFBB",
      "ADBDEDBDA",
      "AABCCCBAA"
    ],
    "key": {
      "A": {
        "item": "ae2:quantum_entangled_singularity"
      },
      "B": {
        "item": "megacells:bulk_cell_component"
      },
      "C": {
        "item": "ae2:spatial_cell_component_128"
      },
      "D": {
        "item": "megacells:mega_energy_cell"
      },
      "E": {
        "item": "aeinfinitybooster:dimension_card"
      },
      "F": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "G": {
        "item": "mysticalagradditions:creative_essence"
      },
      "H": {
        "item": "extendedcrafting:the_ultimate_block"
      },
      "I": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "J": {
        "item": "megacells:fluid_storage_cell_256m"
      },
      "K": {
        "item": "ae2additions:me_wireless_transceiver"
      }
    },
    "result": {
      "item": "ae2:creative_fluid_cell"
    }
  })
})