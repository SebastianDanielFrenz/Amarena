ServerEvents.recipes(event => {
    event.replaceInput(
        { input: '#ae2:glass_cable' },
        '#ae2:glass_cable',
        '#ae2:smart_cable'
    )
    event.replaceInput(
        { input: '#ae2:covered_cable' },
        '#ae2:covered_cable',
        '#ae2:smart_cable'
    )
    event.replaceInput(
        { input: '#ae2:covered_dense_cable' },
        '#ae2:covered_dense_cable',
        '#ae2:smart_dense_cable'
    )
    event.remove({ output: '#ae2:covered_cable' })
    event.remove({ output: '#ae2:covered_dense_cable' })
    event.remove({ output: '#ae2:glass_cable' })
    event.remove({ id: 'ae2:network/cables/dense_smart_fluix'})
    event.remove({ id: 'ae2:network/cables/smart_fluix'})
    event.shapeless(
        Item.of('ae2:fluix_smart_cable'),
        [
            'minecraft:white_wool',
            'minecraft:redstone',
            'minecraft:glowstone_dust',
            'ae2:quartz_fiber',
            'ae2:fluix_crystal',
            'ae2:fluix_crystal'
        ]
    )
})