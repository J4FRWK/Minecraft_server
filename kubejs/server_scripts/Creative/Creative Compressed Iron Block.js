// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABBCBBAA",
      "ADDDDDDDA",
      "BDEEFEEDB",
      "CDEDFDEDC",
      "CDFFGFFDC",
      "CDEDFDEDC",
      "BDEEFEEDB",
      "ADDDDDDDA",
      "AABBCBBAA"
    ],
    "key": {
      "A": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "B": {
        "item": "pneumaticcraft:printed_circuit_board"
      },
      "C": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "D": {
        "item": "pneumaticcraft:compressed_iron_block"
      },
      "E": {
        "item": "pneumaticcraft:compressed_stone"
      },
      "F": {
        "item": "pneumaticcraft:pressure_chamber_wall"
      },
      "G": {
        "item": "mysticalagradditions:creative_essence"
      }
    },
    "result": {
      "item": "pneumaticcraft:creative_compressed_iron_block"
    }
  })
})