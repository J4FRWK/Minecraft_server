// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'wirelesschargers:basic_wireless_block_charger'}),
  event.remove({output: 'wirelesschargers:advanced_wireless_block_charger'}),
  event.remove({output: 'wirelesschargers:basic_wireless_player_charger'}),
  event.remove({output: 'wirelesschargers:advanced_wireless_player_charger'})
})

//Add
  //Applied Enegistics 2
ServerEvents.recipes(event => {
  event.shaped('wirelesschargers:basic_wireless_block_charger', [' 1 ','232','242'], {
    1:'#forge:ingots/hop_graphite', 2:'#forge:ingots/lumium', 3:'#forge:ender_pearls', 4:'#forge:storage_blocks/redstone'}),
  event.shaped('wirelesschargers:advanced_wireless_block_charger', [' 1 ','232','242'],{
    1:'#forge:ingots/hop_graphite', 2:'#forge:ingots/enderium', 3:'wirelesschargers:basic_wireless_block_charger', 4:'#forge:storage_blocks/redstone'}),
  event.shaped('wirelesschargers:basic_wireless_player_charger', [' 1 ','232','242'], {
    1:'#forge:ingots/steel', 2:'#forge:ingots/lumium', 3:'#forge:ender_pearls', 4:'#forge:storage_blocks/redstone'}),
  event.shaped('wirelesschargers:advanced_wireless_player_charger', [' 1 ','232','242'], {
    1:'#forge:ingots/steel', 2:'#forge:ingots/enderium', 3:'wirelesschargers:basic_wireless_player_charger', 4:'#forge:storage_blocks/redstone'})
})