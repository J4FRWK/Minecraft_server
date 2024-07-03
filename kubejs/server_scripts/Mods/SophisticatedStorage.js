ServerEvents.recipes(event => {

//Stack Upgrade
  //Tier 2
  event.remove({id: 'sophisticatedstorage:stack_upgrade_tier_2'})
  event.shaped('sophisticatedstorage:stack_upgrade_tier_2', ['111','121','111'], {1: '#forge:ingots/iron', 2: 'sophisticatedstorage:stack_upgrade_tier_1'})
  //Tier 3
  event.remove({id: 'sophisticatedstorage:stack_upgrade_tier_3'})
  event.shaped('sophisticatedstorage:stack_upgrade_tier_3', ['111','121','111'], {1: '#forge:ingots/gold', 2: 'sophisticatedstorage:stack_upgrade_tier_2'})
  //Tier 4
  event.remove({id: 'sophisticatedstorage:stack_upgrade_tier_4'})
  event.shaped('sophisticatedstorage:stack_upgrade_tier_4', ['111','121','111'], {1: '#forge:gems/diamond', 2: 'sophisticatedstorage:stack_upgrade_tier_3'})
})