ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:core_t1_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'oretrees:core_t1_essence',
            O: 'oretrees:coal_sapling',
            L: 'minecraft:oak_log'
        }
    )
    event.shaped(
        Item.of('oretrees:core_t1_essence'),
        [
            'CCC',
            'CCC',
            'CCC'
        ],
        {
            C: 'kubejs:core_t1'
        }
    )
    event.shapeless(
        Item.of('kubejs:core_t1', 9),
        [
            'oretrees:core_t1_essence'
        ]
    )
})