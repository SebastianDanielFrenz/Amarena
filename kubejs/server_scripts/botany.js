ServerEvents.recipes(event => {
    event.forEachRecipe({ type: 'botanypots:crop' }, recipe => {
        if (recipe.getId().startsWith("botanypots:oretrees/")) {
            recipe.json["addProperty(java.lang.String,java.lang.Number)"]("growthTicks", 601 - 1)
        }
    })

    event.remove({ id: 'lbu2:netherstar_recipe' })

    var colors = [
        "",
        "white_",
        "orange_",
        "magenta_",
        "light_blue_",
        "yellow_",
        "lime_",
        "pink_",
        "gray_",
        "light_gray_",
        "cyan_",
        "purple_",
        "blue_",
        "brown_",
        "green_",
        "red_",
        "black_"
    ]
    var baseColors = [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "light_gray",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black"
    ]
    var types = [
        "terracotta",
        "glazed_terracotta",
        "concrete"
    ]
    var tiers = [
        "elite",
        "ultra",
        "creative"
    ]

    /**
     * @param {string} color 
     * @param {string} type
     */
    function addBasic(color, type) {
        event.shaped(
            Item.of("botanypots:" + color + type + "_botany_pot"),
            [
                'TPT',
                'BCA',
                'TTT'
            ],
            {
                T: 'minecraft:' + color + type,
                B: 'minecraft:beehive',
                P: 'bonsaitrees3:bonsaipot',
                C: 'kubejs:core_t3',
                A: 'minecraft:netherite_axe'
            }
        )
    }
    /**
     * @param {string} color 
     * @param {string} type
     * @param {string} hopper
     */
    function addElite(color, type, hopper) {
        event.shaped(
            Item.of("botanypotstiers:elite_" + color + type + "_" + hopper + "botany_pot"),
            [
                'SGS',
                'SPS',
                'SNS'
            ],
            {
                S: "#forge:storage_blocks/steel",
                G: "minecraft:enchanted_golden_apple",
                P: "botanypots:" + color + type + "_" + hopper + "botany_pot",
                N: "minecraft:nether_star"
            }
        )
    }
    /**
     * @param {string} color 
     * @param {string} type
     * @param {string} hopper
     */
    function addUltra(color, type, hopper) {
        event.shaped(
            Item.of("botanypotstiers:ultra_" + color + type + "_" + hopper + "botany_pot"),
            [
                'ACA',
                'SPD',
                'ARA'
            ],
            {
                C: "draconicevolution:large_chaos_frag",
                A: "draconicevolution:awakened_draconium_block",
                R: "#forge:storage_blocks/radium",
                P: "botanypotstiers:elite_" + color + type + "_" + hopper + "botany_pot",
                S: "powah:solar_panel_nitro",
                D: "minecraft:dragon_breath"
            }
        )
    }
    /**
     * @param {string} mod
     * @param {string} tier
     * @param {string} fromColor
     * @param {string} toColor
     * @param {string} fromType
     * @param {string} toType
     * @param {string} hopper
     * @param {Internal.ItemStack_} item
     */
    function addConversion(mod, fromColor, toColor, tier, fromType, toType, hopper, item) {
        event.shaped(
            Item.of(mod + ":" + tier + toColor + toType + "_" + hopper + "botany_pot"),
            [
                'TTT',
                'TPT',
                'TTT'
            ],
            {
                P: mod + ":" + tier + fromColor + fromType + "_" + hopper + "botany_pot",
                T: item
            }
        )
    }
    /**
     * @param {string} mod
     * @param {string} tier
     * @param {string} fromColor
     * @param {string} toColor
     * @param {string} fromType
     * @param {string} toType
     * @param {Internal.ItemStack_} item
     */
    function addConversionBoth(mod, fromColor, toColor, tier, fromType, toType, item) {
        addConversion(mod, fromColor, toColor, tier, fromType, toType, "", item);
        addConversion(mod, fromColor, toColor, tier, fromType, toType, "hopper_", item);
    }
    /**
     * @param {string} fromColor
     * @param {string} toColor
     * @param {string} fromType
     * @param {string} toType
     * @param {Internal.ItemStack_} item
     */
    function addConversionAllTiers(fromColor, toColor, fromType, toType, item) {
        addConversionBoth("botanypots", fromColor, toColor, "", fromType, toType, item)
        addConversionBoth("botanypotstiers", fromColor, toColor, "elite_", fromType, toType, item)
        addConversionBoth("botanypotstiers", fromColor, toColor, "ultra_", fromType, toType, item)
        addConversionBoth("botanypotstiers", fromColor, toColor, "creative_", fromType, toType, item)
    }
    /**
     * @param {string} mod
     * @param {string} color 
     * @param {string} type
     * @param {string} tier
     */
    function addHopper(mod, color, type, tier) {
        event.shaped(
            Item.of(mod + ":" + tier + color + type + "_hopper_botany_pot"),
            [
                'ICI',
                'RPR',
                'IHI'
            ],
            {
                I: 'minecraft:iron_block',
                R: 'minecraft:redstone_block',
                H: 'minecraft:hopper',
                C: 'minecraft:chest',
                P: mod + ":" + tier + color + type + "_botany_pot"
            }
        )
    }


    for (var color of colors) {
        for (var type of types) {
            // normal
            event.remove({ id: "botanypots:botanypots/crafting/" + color + type + "_botany_pot" })
            event.remove({ id: "botanypots:botanypots/crafting/" + color + type + "_hopper_botany_pot" })
            event.remove({ id: "botanypots:botanypots/crafting/" + color + type + "_compact_hopper_botany_pot" })

            for (var tier of tiers) {
                event.remove({ id: "botanypotstiers:crafting/" + tier + "_" + color + type + "_botany_pot" })
                event.remove({ id: "botanypotstiers:crafting/" + tier + "_" + color + type + "_botany_pot_2" })
                event.remove({ id: "botanypotstiers:crafting/" + tier + "_" + color + type + "_hopper_botany_pot" })
                event.remove({ id: "botanypotstiers:crafting/" + tier + "_" + color + type + "_compact_hopper_botany_pot" })
                event.remove({ id: "botanypotstiers:crafting/" + tier + "_" + color + type + "_compact_hopper_botany_pot_2" })
            }
        }

        addBasic(color, "terracotta")
        addHopper("botanypots", color, "terracotta", "")
        for (var fromColor of colors) {
            if (fromColor !== color) {
                // terracotta -> terracotta
                addConversionAllTiers(fromColor, color, "terracotta", "terracotta", 'minecraft:' + color + 'terracotta')
            }
            if (fromColor !== "") {
                // concrete -> terracotta
                addConversionAllTiers(fromColor, color, "concrete", "terracotta", "minecraft:" + color + "terracotta")
                // glazed -> terracotta
                addConversionAllTiers(fromColor, color, "glazed_terracotta", "terracotta", "minecraft:" + color + "terracotta")

                if (color !== "") {
                    if (fromColor !== color) {
                        // concrete -> concrete
                        addConversionAllTiers(fromColor, color, "concrete", "concrete", "minecraft:" + color + "concrete")
                        // glazed -> glazed
                        addConversionAllTiers(fromColor, color, "glazed_terracotta", "glazed_terracotta", "minecraft:" + color + "glazed_terracotta")
                    }
                    // glazed -> concrete
                    addConversionAllTiers(fromColor, color, "glazed_terracotta", "concrete", "minecraft:" + color + "concrete")
                    // concrete -> glazed
                    addConversionAllTiers(fromColor, color, "concrete", "glazed_terracotta", "minecraft:" + color + "glazed_terracotta")
                }
            }
            if (color !== "") {
                // terracotta -> concrete
                addConversionAllTiers(fromColor, color, "terracotta", "concrete", "minecraft:" + color + "concrete")
                // terracotta -> glazed
                addConversionAllTiers(fromColor, color, "terracotta", "glazed_terracotta", "minecraft:" + color + "glazed_terracotta")
            }
        }

        addElite(color, "terracotta", "")
        addElite(color, "terracotta", "hopper_")
        addHopper("botanypotstiers", color, "terracotta", "elite_")

        addUltra(color, "terracotta", "")
        addUltra(color, "terracotta", "hopper_")
        addHopper("botanypotstiers", color, "terracotta", "ultra_")

        addHopper("botanypotstiers", color, "terracotta", "creative_")

        if (color !== "") {
            addBasic(color, "glazed_terracotta")
            addBasic(color, "concrete")
            addHopper("botanypots", color, "glazed_terracotta", "")
            addHopper("botanypots", color, "concrete", "")

            addElite(color, "glazed_terracotta", "")
            addElite(color, "glazed_terracotta", "hopper_")
            addElite(color, "concrete", "")
            addElite(color, "concrete", "hopper_")
            addHopper("botanypotstiers", color, "glazed_terracotta", "elite_")
            addHopper("botanypotstiers", color, "concrete", "elite_")

            addUltra(color, "glazed_terracotta", "")
            addUltra(color, "glazed_terracotta", "hopper_")
            addUltra(color, "concrete", "")
            addUltra(color, "concrete", "hopper_")
            addHopper("botanypotstiers", color, "glazed_terracotta", "ultra_")
            addHopper("botanypotstiers", color, "concrete", "ultra_")

            addHopper("botanypotstiers", color, "glazed_terracotta", "creative_")
            addHopper("botanypotstiers", color, "concrete", "creative_")
        }
    }

})
