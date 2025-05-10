ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:compressed_nitro_generator'),
        [
            'NBN',
            'BNB',
            'NBN'
        ],
        {
            N: 'powah:thermo_generator_nitro',
            B: 'powah:blazing_crystal_block'
        }
    )
})