ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:core_t3_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'oretrees:core_t3_essence',
            O: 'minecraft:oak_sapling',
            L: 'minecraft:oak_log'
        }
    )
    event.shaped(
        Item.of('oretrees:core_t3_essence'),
        [
            'CCC',
            'CCC',
            'CCC'
        ],
        {
            C: 'kubejs:core_t3'
        }
    )
    event.shapeless(
        Item.of('kubejs:core_t3', 9),
        [
            'oretrees:core_t3_essence'
        ]
    )
})