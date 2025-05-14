execute as @e[type=#fastpath:fastable] at @s if block ~ ~ ~ dirt_path run attribute @s minecraft:generic.movement_speed modifier add 423-223-323-123-23 path.speed 0.3 multiply_base
execute as @e[type=#fastpath:fastable] at @s unless block ~ ~-0.5 ~ dirt_path run execute unless block ~ ~-0.5 ~ #fastpath:permeable run attribute @s minecraft:generic.movement_speed modifier remove 423-223-323-123-23

schedule function fastpath:loop 1t replace