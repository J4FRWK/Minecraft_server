// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'easy_piglins:barterer'}),
  event.remove({output: 'easy_villagers:farmer'}),
  event.remove({output: 'easy_villagers:trader'}),
  event.remove({output: 'easy_villagers:auto_trader'}),
  event.remove({output: 'easy_villagers:breeder'}),
  event.remove({output: 'easy_villagers:incubator'}),
  event.remove({output: 'easy_villagers:converter'}),
  event.remove({output: 'easy_villagers:iron_farm'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('easy_piglins:barterer', ['111','121','333'], {1: 'minecraft:tinted_glass', 2: '#forge:storage_blocks/gold', 3: '#forge:ingots/steel'}),
  event.shaped('easy_villagers:farmer', ['111','121','333'], {1: 'minecraft:tinted_glass', 2: 'compressium:dirt_2', 3: '#forge:ingots/steel'}),
  event.shaped('easy_villagers:trader', ['111','121','333'], {1: 'minecraft:tinted_glass', 2: '#forge:storage_blocks/emerald', 3: '#forge:ingots/steel'}),
  event.shaped('easy_villagers:auto_trader', ['111','121','333'], {1: 'minecraft:tinted_glass', 2: 'easy_villagers:trader', 3: '#forge:ingots/steel'}),
  event.shaped('easy_villagers:breeder', ['111','121','333'], {1: 'minecraft:tinted_glass', 2: '#minecraft:beds', 3: '#forge:ingots/steel'}),
  event.shaped('easy_villagers:incubator', ['111','121','333'], {1: 'minecraft:tinted_glass', 2: 'easy_villagers:breeder', 3: '#forge:ingots/steel'}),
  event.shaped('easy_villagers:converter', ['111','121','333'], {1: 'minecraft:tinted_glass', 2: 'minecraft:enchanted_golden_apple', 3: '#forge:ingots/steel'}),
  event.shaped('easy_villagers:iron_farm', ['111','121','333'], {1: 'minecraft:tinted_glass', 2: 'easy_villagers:converter', 3: '#forge:ingots/steel'})
})