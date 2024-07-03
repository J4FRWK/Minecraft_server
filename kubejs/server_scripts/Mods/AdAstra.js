// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({id: 'ad_astra:recipes/nasa_workbench'}),
  event.remove({id: 'ad_astra_giselle_addon:crafting/automation_nasa_workbench'}),
  event.remove({id: 'ad_astra:nasa_workbench/tier_1_rocket'}),
  event.remove({id: 'ad_astra:recipes/rocket_nose_cone'}),
  event.remove({id: 'ad_astra:recipes/rocket_fin'}),
  event.remove({id: 'ad_astra:recipes/fuel_refinery'}),
  event.remove({id: 'ad_astra:recipes/compressor'}),
  //Armor
  //Space Suit
  event.remove({id: 'ad_astra:recipes/space_helmet'}),
  event.remove({id: 'ad_astra:recipes/space_suit'}),
  event.remove({id: 'ad_astra:recipes/space_pants'}),
  event.remove({id: 'ad_astra:recipes/space_boots'}),
  //Netherite Space Suit
  event.remove({id: 'ad_astra:recipes/netherite_space_helmet'}),
  event.remove({id: 'ad_astra:recipes/netherite_space_suit'}),
  event.remove({id: 'ad_astra:recipes/netherite_space_pants'}),
  event.remove({id: 'ad_astra:recipes/netherite_space_boots'}),
  //Netherite Space Suit
  event.remove({id: 'ad_astra:recipes/jet_suit_helmet'}),
  event.remove({id: 'ad_astra:recipes/jet_suit'}),
  event.remove({id: 'ad_astra:recipes/jet_suit_pants'}),
  event.remove({id: 'ad_astra:recipes/jet_suit_boots'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('ad_astra:nasa_workbench', ['161','232','454'], 
    {1: '#forge:ingots/hop_graphite', 2: '#forge:gears/compressed_iron', 3: 'pneumaticcraft:assembly_controller', 4: 'pneumaticcraft:printed_circuit_board', 
     5: '#forge:storage_blocks/compressed_iron', 6: '#pneumaticcraft:plastic_sheets'}),
  event.shaped('ad_astra_giselle_addon:automation_nasa_workbench', ['161','232','454'], 
    {1: 'pneumaticcraft:capacitor', 2: '#forge:gears/compressed_iron', 3: 'ad_astra:nasa_workbench', 4: 'pneumaticcraft:printed_circuit_board', 
     5: '#forge:storage_blocks/compressed_iron', 6: 'pneumaticcraft:transistor'}),
  event.shaped('ad_astra:rocket_nose_cone', [' 1 ','222','2 2'], 
    {1: 'minecraft:lightning_rod', 2: '#forge:plates/iridium'}),
  event.shaped('4x ad_astra:rocket_fin', [' 1 ', '111', '1 1'], 
    {1: '#forge:plates/iridium'}),
  event.shaped('ad_astra:fuel_refinery', ['111', '232', '111'], 
    {1: '#forge:plates/iridium', 2: 'minecraft:bucket', 3: '#forge:storage_blocks/compressed_iron'}),
  event.shaped('ad_astra:compressor', ['121', '131', '141'], 
    {1: '#forge:plates/iridium', 2: 'pneumaticcraft:transistor', 3: 'thermal:machine_press', 4: 'pneumaticcraft:capacitor'}),
  //Armor
  //Space Suit
  event.shaped('ad_astra:space_helmet', ['131', '121'], 
    {1: '#forge:ingots/compressed_iron', 2: 'pneumaticcraft:compressed_iron_helmet',  3: '#forge:wool'}),
  event.shaped('ad_astra:space_suit', ['151', '232', '141'], 
    {1: '#forge:ingots/compressed_iron', 2: 'ad_astra:oxygen_tank', 3: 'ad_astra:oxygen_gear', 4: '#forge:wool', 5: 'pneumaticcraft:compressed_iron_chestplate'}),
  event.shaped('ad_astra:space_pants', ['111', '232', '1 1'], 
    {1: '#forge:ingots/compressed_iron', 2: '#forge:wool', 3: 'pneumaticcraft:compressed_iron_leggings'}),
  event.shaped('ad_astra:space_boots', ['131', '2 2'], 
    {1: '#forge:wool', 2: '#forge:ingots/compressed_iron', 3: 'pneumaticcraft:compressed_iron_boots'}),
  //Netherite Space Suit
  event.shaped('ad_astra:netherite_space_helmet', ['111', '232'], 
    {1: '#forge:plates/ostrum', 2: '#forge:plates/desh', 3: 'ad_astra:space_helmet'}),
  event.shaped('ad_astra:netherite_space_suit', ['151', '232', '141'], 
    {1: '#forge:plates/ostrum', 2: 'ad_astra:oxygen_tank', 3: 'ad_astra:oxygen_gear', 4: 'ad_astra:space_suit', 5: '#forge:plates/desh'}),
  event.shaped('ad_astra:netherite_space_pants', ['111', '232', '1 1'], 
    {1: '#forge:plates/ostrum', 2: '#forge:plates/desh', 3: 'ad_astra:space_pants'}),
  event.shaped('ad_astra:netherite_space_boots', ['212', '3 3'], 
    {1: 'ad_astra:space_boots', 2: '#forge:plates/ostrum', 3: '#forge:plates/desh'}),
  //Jet Suit
  event.shaped('ad_astra:jet_suit_helmet', ['111', '323'], 
    {1: '#forge:plates/calorite', 2: 'ad_astra:netherite_space_helmet', 3: '#forge:storage_blocks/calorite'}),
  event.shaped('ad_astra:jet_suit', ['111', '323', '454'], 
    {1: '#forge:plates/calorite', 2: 'ad_astra:netherite_space_suit', 3: 'ad_astra:calorite_tank', 4: '#forge:storage_blocks/calorite', 5: 'ad_astra:calorite_engine'}),
  event.shaped('ad_astra:jet_suit_pants', ['111', '121', '3 3'], 
    {1: '#forge:plates/calorite', 2: 'ad_astra:netherite_space_pants', 3: '#forge:storage_blocks/calorite'}),
  event.shaped('ad_astra:jet_suit_boots', ['212', '3 3'], 
    {1: 'ad_astra:netherite_space_boots', 2: '#forge:plates/calorite', 3: '#forge:storage_blocks/calorite'}),

  //Nasa Workbench
  event.custom({"type": "ad_astra:nasa_workbench", "ingredients": [
    {"ingredient": {"item": "ad_astra:rocket_nose_cone"}},
    {"ingredient": {"item": "pneumaticcraft:compressed_iron_block"}},
    {"ingredient": {"item": "pneumaticcraft:compressed_iron_block"}},
    {"ingredient": {"item": "pneumaticcraft:compressed_iron_block"}},
    {"ingredient": {"item": "pneumaticcraft:compressed_iron_block"}},
    {"ingredient": {"item": "pneumaticcraft:compressed_iron_block"}},
    {"ingredient": {"item": "pneumaticcraft:compressed_iron_block"}},
    {"ingredient": {"item": "ad_astra:rocket_fin"}},
    {"ingredient": {"item": "ad_astra:steel_tank"}},
    {"ingredient": {"item": "ad_astra:steel_tank"}},
    {"ingredient": {"item": "ad_astra:rocket_fin"}},
    {"ingredient": {"item": "ad_astra:rocket_fin"}},
    {"ingredient": {"item": "ad_astra:steel_engine"}},
    {"ingredient": {"item": "ad_astra:rocket_fin"}}],
      "output": "ad_astra:tier_1_rocket"})
})