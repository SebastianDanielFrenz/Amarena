ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:core_t2_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'oretrees:core_t2_essence',
            O: 'minecraft:oak_sapling',
            L: 'minecraft:oak_log'
        }
    )
    event.shaped(
        Item.of('oretrees:core_t2_essence'),
        [
            'CCC',
            'CCC',
            'CCC'
        ],
        {
            C: 'kubejs:core_t2'
        }
    )
    event.shapeless(
        Item.of('kubejs:core_t2', 9),
        [
            'oretrees:core_t2_essence'
        ]
    )
})