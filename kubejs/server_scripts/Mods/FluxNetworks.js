ServerEvents.recipes(event => {

//Flux Block
event.remove({id: 'fluxnetworks:fluxblock'})
event.shaped('fluxnetworks:flux_block', ['111','111','111'], {
    1: 'fluxnetworks:flux_dust'})

//Flux Core
event.remove({id: 'fluxnetworks:fluxcore'})
event.shaped('fluxnetworks:flux_core', ['121','232','121'], {
    1: 'fluxnetworks:flux_block',
    2: 'compressium:obsidian_1',
    3: 'thermal:enderium_block'})

//Flux Controller
event.remove({id: 'fluxnetworks:fluxcontroller'})
event.shaped('fluxnetworks:flux_controller', ['121','232','121'], {
    1: 'fluxnetworks:flux_block',
    2: 'fluxnetworks:flux_core',
    3: 'mekanism:quantum_entangloporter'})

//Flux Plug
event.remove({id: 'fluxnetworks:fluxplug'})
event.shaped('fluxnetworks:flux_plug', ['121','232','121'], {
    1: 'fluxnetworks:flux_block',
    2: 'fluxnetworks:flux_core',
    3: 'twilightforest:carminite_block'})

//Flux Point
event.remove({id: 'fluxnetworks:fluxpoint'})
event.shaped('fluxnetworks:flux_point', ['121','232','121'], {
    1: 'fluxnetworks:flux_core',
    2: 'fluxnetworks:flux_block',
    3: 'twilightforest:carminite_block'})
})