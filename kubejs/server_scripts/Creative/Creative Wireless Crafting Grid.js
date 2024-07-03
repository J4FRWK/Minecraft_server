// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABBBBBAA",
      "AACBDBCAA",
      "AEEEEEEEA",
      "FEGHHHGEF",
      "FEIJKJIEF",
      "FEGHHHGEF",
      "AEEEEEEEA",
      "AACBDBCAA",
      "AABBBBBAA"
    ],
    "key": {
      "A": {
        "item": "extrastorage:neural_processor"
      },
      "B": {
        "item": "extradisks:withering_processor"
      },
      "C": {
        "item": "rebornstorage:advanced_wireless_transmitter"
      },
      "D": {
        "item": "rsinfinitybooster:dimension_card"
      },
      "E": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "F": {
        "item": "rebornstorage:super_advanced_processor"
      },
      "G": {
        "item": "extendedcrafting:the_ultimate_block"
      },
      "H": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "I": {
        "item": "refinedstorage:crafting_grid"
      },
      "J": {
        "item": "mysticalagradditions:creative_essence"
      },
      "K": {
        "item": "refinedstorageaddons:wireless_crafting_grid"
      }
    },
    "result": {
      "item": "refinedstorageaddons:creative_wireless_crafting_grid"
    }
  })
})