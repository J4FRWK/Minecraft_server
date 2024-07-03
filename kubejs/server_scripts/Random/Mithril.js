//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'mysticalagriculture:mithril_essence'})
  event.remove({output: 'mysticalagriculture:mithril_seed'})
  event.remove({id: 'mysticalagriculture:seed/infusion/mithril'})
})