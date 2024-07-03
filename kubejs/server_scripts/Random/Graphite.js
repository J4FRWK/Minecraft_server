//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'mysticalagriculture:graphite_essence'})
  event.remove({output: 'mysticalagriculture:graphite_seed'})
  event.remove({id: 'mysticalagriculture:seed/infusion/graphite'})
})