ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:draconium_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'draconicevolution:draconium_block',
            O: 'oretrees:diamond_sapling',
            L: 'minecraft:oak_log'
        }
    )
})