ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:hellforged_parts_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'kubejs:compressed_hellforged_parts',
            O: 'oretrees:ancient_sapling',
            L: 'minecraft:oak_log'
        }
    )
})