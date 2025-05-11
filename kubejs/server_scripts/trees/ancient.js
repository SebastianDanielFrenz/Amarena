ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:ancient_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'minecraft:netherite_block',
            O: 'oretrees:diamond_sapling',
            L: 'oretrees:gold_log'
        }
    )
})