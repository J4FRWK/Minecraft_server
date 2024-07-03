// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABCDEDCBA",
      "AECFEFCEA",
      "ACCGGGCCA",
      "FDFGHGFDF",
      "ACCGGGCCA",
      "AECFEFCEA",
      "ABCDEDCBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "evilcraft:blood_orb_filled"
      },
      "B": {
        "item": "evilcraft:promise_tier_3"
      },
      "C": {
        "item": "evilcraft:hardened_blood"
      },
      "D": {
        "item": "evilcraft:bowl_of_promises_tier3"
      },
      "E": {
        "item": "evilcraft:inverted_potentia_empowered"
      },
      "F": {
        "item": "evilcraft:piercing_vengeance_focus"
      },
      "G": {
        "item": "evilcraft:bucket_blood"
      },
      "H": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_fluid_tank",
        "count": 1,
        "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:256000,FluidName:\"evilcraft:blood\"}}]}}"
      }},
      "result": {"item": "evilcraft:creative_blood_drop"}})
})