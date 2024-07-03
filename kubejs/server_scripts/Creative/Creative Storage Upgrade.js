// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAABBBAAA",
      "ACDEFEDCA",
      "AGHFIFHGA",
      "BCJKLKJCB",
      "BMNOMOPMB",
      "BCJKLKJCB",
      "AGHFIFHGA",
      "ACDEFEDCA",
      "AAABBBAAA"
    ],
    "key": {
      "A": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "B": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "C": {
        "item": "industrialforegoing:supreme_black_hole_unit"
      },
      "D": {
        "item": "storagedrawers:emerald_storage_upgrade"
      },
      "E": {
        "item": "refinedstorage:256k_fluid_storage_part"
      },
      "F": {
        "item": "ae2additions:super_cell_component_256k"
      },
      "G": {
        "item": "functionalstorage:netherite_upgrade"
      },
      "H": {
        "item": "extradisks:256k_storage_part"
      },
      "I": {
        "item": "ironchest:obsidian_chest"
      },
      "J": {
        "item": "sophisticatedbackpacks:stack_upgrade_tier_4"
      },
      "K": {
        "item": "dimstorage:dimensional_chest"
      },
      "L": {
        "item": "extradisks:262144k_storage_part"
      },
      "M": {
        "item": "mysticalagradditions:creative_essence"
      },
      "N": {
        "item": "mekanism:creative_chemical_tank"
      },
      "O": {
        "item": "megacells:cell_component_256m"
      },
      "P": {
        "item": "mekanism:creative_fluid_tank"
      }
    },
    "result": {
      "item": "storagedrawers:creative_storage_upgrade"
    }
  })
})