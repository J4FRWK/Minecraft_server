// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "BBBCCCBBB",
      "DDEFEFEDD",
      "GGGHHHGGG",
      "IJIKLKIJI",
      "GGGHHHGGG",
      "DDEFEFEDD",
      "BBBCCCBBB",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "rebornstorage:multiblock_frame"
      },
      "B": {
        "item": "rebornstorage:super_advanced_processor"
      },
      "C": {
        "item": "extradisks:withering_processor"
      },
      "D": {
        "item": "extrastorage:neural_processor"
      },
      "E": {
        "item": "rebornstorage:multiblock_heat"
      },
      "F": {
        "item": "rebornstorage:multiblock_storage"
      },
      "G": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "H": {
        "item": "rebornstorage:multiblock_cpu"
      },
      "I": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "J": {
        "item": "mysticalagradditions:creative_essence"
      },
      "K": {
        "item": "refinedstorage:controller"
      },
      "L": {
        "item": "powah:energy_cell_creative"
      }
    },
    "result": {
      "item": "refinedstorage:creative_controller"
    }
  })
})