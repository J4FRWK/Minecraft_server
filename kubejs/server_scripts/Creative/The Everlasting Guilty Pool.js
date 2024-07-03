// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCCCCCBA",
      "BDEDFDEDB",
      "CEGHIHJEC",
      "CDKLLLKDC",
      "FIMLNLMIF",
      "CDKLLLKDC",
      "CEOHIHPEC",
      "BDEDFDEDB",
      "ABCCCCCBA"
    ],
    "key": {
      "A": {
        "item": "botanicadds:gaiasteel_pylon"
      },
      "B": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "C": {
        "item": "botanicadds:gaiasteel_ingot"
      },
      "D": {
        "item": "mythicbotany:alfsteel_ingot"
      },
      "E": {
        "item": "botania:terrasteel_block"
      },
      "F": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "G": {
        "type": "forge:nbt",
        "item": "botanicadds:mana_ring_gaia",
        "count": 1,
        "nbt": "{mana:7947000}"
      },
      "H": {
        "item": "botania:manasteel_block"
      },
      "I": {
        "type": "forge:nbt",
        "item": "botania:mana_tablet",
        "count": 1,
        "nbt": "{mana:500000}"
      },
      "J": {
        "type": "forge:nbt",
        "item": "botanicadds:mana_ring_gaia",
        "count": 1,
        "nbt": "{mana:7898000}"
      },
      "K": {
        "item": "botanicadds:dreaming_pool"
      },
      "L": {
        "item": "botanicadds:gaia_shard"
      },
      "M": {
        "item": "botania:fabulous_pool"
      },
      "N": {
        "item": "mysticalagradditions:creative_essence"
      },
      "O": {
        "type": "forge:nbt",
        "item": "botanicadds:mana_ring_gaia",
        "count": 1,
        "nbt": "{mana:7830000}"
      },
      "P": {
        "type": "forge:nbt",
        "item": "botanicadds:mana_ring_gaia",
        "count": 1,
        "nbt": "{mana:7959000}"
      }
    },
    "result": {
      "item": "botania:creative_pool"
    }
  })
})