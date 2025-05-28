ServerEvents.recipes(event => {
    // You can replace `event` with any name you like, as
    // long as you change it inside the callback too!

    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.

    console.log('Hello! The recipe event has fired!')

    event.remove({ output: 'ad_astra:radio'})
    event.shaped(
        Item.of('ad_astra:radio', 1),
        [
            'R  ',
            'PPP',
            'PCP'
        ],
        {
            R: '#forge:rods/steel',
            P: '#forge:plates/steel',
            C: 'kubejs:core_t3'
        }
    )
})