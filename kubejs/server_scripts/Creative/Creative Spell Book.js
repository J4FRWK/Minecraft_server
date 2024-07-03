// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABBCDCBBA",
      "ABDEFEDBA",
      "ACEGGGECA",
      "ADFHIHFDA",
      "ACEGGGECA",
      "ABDEFEDBA",
      "ABBCDCBBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "ars_nouveau:source_gem_block"
      },
      "B": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "C": {
        "item": "minecraft:amethyst_block"
      },
      "D": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "E": {
        "type": "forge:nbt",
        "item": "ars_nouveau:source_jar",
        "count": 1,
        "nbt": "{BlockEntityTag:{Items:[],id:\"ars_nouveau:source_jar\",source:10000}}"
      },
      "F": {
        "item": "ars_nouveau:archmage_spell_book"
      },
      "G": {
        "item": "ars_nouveau:source_gem"
      },
      "H": {
        "item": "ars_nouveau:apprentice_spell_book"
      },
      "I": {
        "item": "ars_nouveau:novice_spell_book"
      }
    },
    "result": {
      "item": "ars_nouveau:creative_spell_book"
    }
  })
})