// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "BCCCCCCCB",
      "BCDDDDDCB",
      "EEDFFFDEE",
      "EGHGIGHGE",
      "EEDFFFDEE",
      "BCDDDDDCB",
      "BCCCCCCCB",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "extradisks:withering_processor"
      },
      "B": {
        "item": "extendedcrafting:the_ultimate_block"
      },
      "C": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "D": {
        "item": "extrastorage:neural_processor"
      },
      "E": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "F": {
        "item": "rebornstorage:super_advanced_processor"
      },
      "G": {
        "item": "mysticalagradditions:creative_essence"
      },
      "H": {
        "item": "extradisks:infinite_fluid_storage_part"
      },
      "I": {
        "item": "extradisks:advanced_machine_casing"
      }
    },
    "result": {
      "item": "refinedstorage:creative_fluid_storage_block"
    }
  })
})