// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABCDCBAA",
      "AEFGDGFEA",
      "HFFDDDFFH",
      "CIJDKDJIC",
      "JJJKLKJJJ",
      "CIJDKDJIC",
      "HFFDDDFFH",
      "AEFGDGFEA",
      "AABCDCBAA"
    ],
    "key": {
      "A": {
        "item": "functionalstorage:netherite_upgrade"
      },
      "B": {
        "item": "extradisks:65536k_fluid_storage_part"
      },
      "C": {
        "item": "megacells:cell_component_256m"
      },
      "D": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "E": {
        "item": "megacells:bulk_cell_component"
      },
      "F": {
        "item": "extendedcrafting:the_ultimate_block"
      },
      "G": {
        "item": "compressium:netherrack_9"
      },
      "H": {
        "item": "extradisks:1024k_storage_part"
      },
      "I": {
        "item": "compressium:cobblestone_9"
      },
      "J": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "K": {
        "item": "mysticalagradditions:creative_essence"
      },
      "L": {
        "item": "storagedrawers:creative_storage_upgrade"
      }
    },
    "result": {
      "item": "functionalstorage:creative_vending_upgrade"
    }
  })
})