ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:ice_shard_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'ad_astra:permafrost',
            O: 'oretrees:lapis_sapling',
            L: 'minecraft:oak_log'
        }
    )
})