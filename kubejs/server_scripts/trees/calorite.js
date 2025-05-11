ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:calorite_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'ad_astra:calorite_block',
            O: 'oretrees:ostrum_sapling',
            L: 'minecraft:oak_log'
        }
    )
})