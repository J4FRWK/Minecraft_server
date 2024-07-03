// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCDEDCBA",
      "BFGHHHGFB",
      "IJKLELKJI",
      "HMINONIMH",
      "EPEHPHEPE",
      "HMINONIMH",
      "IJKLELKJI",
      "BFGHHHGFB",
      "ABCDEDCBA"
    ],
    "key": {
      "A": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_chemical_tank",
        "count": 1,
        "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanismgenerators:deuterium\"}}]}}"
      },
      "B": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_chemical_tank",
        "count": 1,
        "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:lithium\"}}]}}"
      },
      "C": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_chemical_tank",
        "count": 1,
        "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:sodium\"}}]}}"
      },
      "D": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_chemical_tank",
        "count": 1,
        "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:chlorine\"}}]}}"
      },
      "E": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_chemical_tank",
        "count": 1,
        "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:oxygen\"}}]}}"
      },
      "F": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_chemical_tank",
        "count": 1,
        "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:hydrogen_chloride\"}}]}}"
      },
      "G": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_chemical_tank",
        "count": 1,
        "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanismgenerators:tritium\"}}]}}"
      },
      "H": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "I": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "J": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_chemical_tank",
        "count": 1,
        "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:ethene\"}}]}}"
      },
      "K": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_chemical_tank",
        "count": 1,
        "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:brine\"}}]}}"
      },
      "L": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_chemical_tank",
        "count": 1,
        "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:sulfuric_acid\"}}]}}"
      },
      "M": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_chemical_tank",
        "count": 1,
        "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:hydrogen\"}}]}}"
      },
      "N": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_chemical_tank",
        "count": 1,
        "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:sulfur_dioxide\"}}]}}"
      },
      "O": {
        "item": "mekanism:isotopic_centrifuge"
      },
      "P": {
        "item": "mysticalagradditions:creative_essence"
      }
    },
    "result": {
      "item": "mekanism:creative_chemical_tank"
    }
  })
})