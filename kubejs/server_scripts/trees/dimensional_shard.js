ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:dimensional_shard_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'rftoolsdim:dimensional_blank_block',
            O: 'oretrees:amethyst_sapling',
            L: 'minecraft:oak_log'
        }
    )
})