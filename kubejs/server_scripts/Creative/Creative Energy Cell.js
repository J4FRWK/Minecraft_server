// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABCCCBAA",
      "ABDCECDBA",
      "BDDEEEDDB",
      "FFFGGGFFF",
      "HIHGJGHIH",
      "FFFGGGFFF",
      "BDDEEEDDB",
      "ABDCECDBA",
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
        "item": "ae2:energy_cell"
      },
      "D": {
        "item": "ae2:spatial_cell_component_128"
      },
      "E": {
        "item": "ae2:dense_energy_cell"
      },
      "F": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "G": {
        "item": "megacells:mega_energy_cell"
      },
      "H": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "I": {
        "item": "mysticalagradditions:creative_essence"
      },
      "J": {
        "item": "powah:energy_cell_creative"
      }
    },
    "result": {
      "item": "ae2:creative_energy_cell"
    }
  })
})