// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABCCCBAA",
      "ADDDDDDDA",
      "BDEEEEEDB",
      "CDEFFFEDC",
      "CDEFGFEDC",
      "CDEFFFEDC",
      "BDEEEEEDB",
      "ADDDDDDDA",
      "AABCCCBAA"
    ],
    "key": {
      "A": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "B": {
        "item": "ars_nouveau:bucket_of_source"
      },
      "C": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "D": {
        "type": "forge:nbt",
        "item": "ars_nouveau:source_jar",
        "count": 1,
        "nbt": "{BlockEntityTag:{Items:[],id:\"ars_nouveau:source_jar\",source:10000}}"
      },
      "E": {
        "item": "minecraft:amethyst_block"
      },
      "F": {
        "item": "ars_nouveau:source_gem_block"
      },
      "G": {
        "item": "mysticalagradditions:creative_essence"
      }
    },
    "result": {
      "item": "ars_nouveau:creative_source_jar"
    }
  })
})