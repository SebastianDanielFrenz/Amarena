ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:ostrum_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'ad_astra:ostrum_block',
            O: 'oretrees:desh_sapling',
            L: 'minecraft:oak_log'
        }
    )
})