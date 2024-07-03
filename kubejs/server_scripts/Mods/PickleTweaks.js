// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  
    //Reinforced Watering Can
    event.remove({id: 'pickletweaks:reinforced_watering_can'})
    event.shaped('pickletweaks:reinforced_watering_can', ['  2','212',' 2 '], {
      1: 'pickletweaks:watering_can', 2: '#forge:gems/diamond'})



//General Remove
    //Emerald Tools
    event.remove({id: 'pickletweaks:emerald_sword'})
    event.remove({id: 'pickletweaks:emerald_pickaxe'})
    event.remove({id: 'pickletweaks:emerald_shovel'})
    event.remove({id: 'pickletweaks:emerald_axe'})
    event.remove({id: 'pickletweaks:emerald_hoe'})
    event.remove({id: 'pickletweaks:emerald_paxel'})
    event.remove({id: 'pickletweaks:emerald_sickle'})
    event.remove({id: 'pickletweaks:emerald_scythe'})
    //Emerald Armor
    event.remove({id: 'pickletweaks:emerald_helmet'})
    event.remove({id: 'pickletweaks:emerald_chestplate'})
    event.remove({id: 'pickletweaks:emerald_leggings'})
    event.remove({id: 'pickletweaks:emerald_boots'})
    //General
    event.remove({id: 'pickletweaks:emerald_apple'})
    event.remove({id: 'pickletweaks:diamond_paxel'})
    event.remove({id: 'pickletweaks:netherite_paxel'})
})