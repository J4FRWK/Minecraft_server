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
      "FEGHIHGEF",
      "FEJKLKMEF",
      "FEGHIHGEF",
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
        "item": "creativewirelesstransmitter:creative_wireless_transmitter"
      },
      "J": {
        "item": "refinedstorageaddons:creative_wireless_crafting_grid"
      },
      "K": {
        "item": "mysticalagradditions:creative_essence"
      },
      "L": {
        "item": "refinedstorage:creative_wireless_crafting_monitor"
      },
      "M": {
        "item": "refinedstorage:creative_wireless_fluid_grid"
      }
    },
    "result": {
      "item": "rebornstorage:creative_super_wireless_crafting_grid"
    }
  })
})