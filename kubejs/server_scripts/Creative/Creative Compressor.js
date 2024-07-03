// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAABBBAAA",
      "ACDEEEDCA",
      "ADFFGFFDA",
      "BEFHHHFEB",
      "BEGIJIGEB",
      "BEFHHHFEB",
      "ADFFGFFDA",
      "ACDEEEDCA",
      "AAABBBAAA"
    ],
    "key": {
      "A": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "B": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "C": {
        "item": "pneumaticcraft:security_upgrade"
      },
      "D": {
        "item": "pneumaticcraft:plastic_bucket"
      },
      "E": {
        "item": "pneumaticcraft:pressure_chamber_glass"
      },
      "F": {
        "item": "pneumaticcraft:pressure_chamber_wall"
      },
      "G": {
        "item": "pneumaticcraft:advanced_pressure_tube"
      },
      "H": {
        "item": "pneumaticcraft:compressed_iron_block"
      },
      "I": {
        "item": "pneumaticcraft:flux_compressor"
      },
      "J": {
        "item": "mysticalagradditions:creative_essence"
      }
    },
    "result": {
      "item": "pneumaticcraft:creative_compressor"
    }
  })
})