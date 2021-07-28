namespace SpriteKind {
    export const premio_final = SpriteKind.create()
    export const andrea = SpriteKind.create()
    export const diablo = SpriteKind.create()
    export const Fernanda = SpriteKind.create()
    export const premio_final2 = SpriteKind.create()
    export const enemigo = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direccion == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . f . . . . . . . . . . 
            . . . . f . . . . . . . . . . . 
            . . . f . . . f . . . . . . . . 
            . . f . f . f 1 f . . . . . . . 
            . f . . . f 1 1 1 f . . . . . . 
            . . . . f 1 1 2 1 1 f . . . . . 
            . . . f 1 1 2 1 1 2 1 f . . . . 
            . . . . f 1 1 1 2 1 1 1 f . . . 
            . . . . . f 1 2 1 1 2 1 1 f . . 
            . . . . . . f 1 1 2 2 2 1 1 f . 
            . . . . . . . f 1 1 2 1 1 f . . 
            . . . . . . . . f 1 1 1 f . . . 
            . . . . . . . . . f 1 f . f . . 
            . . . . . . . . . . f . . . f . 
            . . . . . . . . . . . . . . . f 
            . . . . . . . . . . . . . . . . 
            `, Sebastian_Oruro_Diablada_Sara, 200, 0)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . f . . . . 
            . . . . . . . . . . . . f . . . 
            . . . . . . . . . f . . . f . . 
            . . . . . . . . f 1 f . f . f . 
            . . . . . . . f 1 1 1 f . . . f 
            . . . . . . f 1 1 2 1 1 f . . . 
            . . . . . f 1 2 1 1 2 1 1 f . . 
            . . . . f 1 1 1 2 1 1 1 f . . . 
            . . . f 1 1 2 1 1 2 1 f . . . . 
            . . f 1 1 2 2 2 1 1 f . . . . . 
            . . . f 1 1 2 1 1 f . . . . . . 
            . . . . f 1 1 1 f . . . . . . . 
            . . . f . f 1 f . . . . . . . . 
            . . f . . . f . . . . . . . . . 
            . f . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Sebastian_Oruro_Diablada_Sara, -200, 0)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Sebastian_Oruro_Diablada_Sara.isHittingTile(CollisionDirection.Bottom)) {
        Sebastian_Oruro_Diablada_Sara.setVelocity(0, -200)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direccion = 0
    Sebastian_Oruro_Diablada_Sara.setImage(img`
        ..........................................
        ..........................................
        ........ff...........................ff...
        ........ff..........................fff...
        ........f2f.........................f2f...
        ........f2f....f............f......ff2f...
        ........f2f.....ff.......f.f.......f22f...
        ........f22f......f.f...fff........f22f...
        ........f22f..fff..ff..fff..ffff..ff2ff...
        ........f22ffffef.f5ffff5ff.feeff.f2ff....
        .........f22ffeefff55ff55ffffeeeff22f.....
        .........ff22fffeff55ff55fffeefff222f.....
        ..........fffffffff55ff55ffffff222ff......
        ............f11111f55ff55f11111ffff.......
        ............f11f11f55ff55f11f11ff.........
        ............f1fff1f55ff55f1fff1f..........
        ............f1fff1ffffffff1fff1f..........
        ............f11111ffffffff11111f..........
        .......5555..fffffeffffffefffff...........
        ....555fff5......eeffffffee...............
        ....5f555f55....eeeeffffffee.....ffffffff.
        ....5f5555ff5...efeeeeeeeefe....fff55555f.
        ....5f55f55555..ee1ffffff1ee....f5555555ff
        ...55ff5fff5fffffe1eeeeee1effff.f555ff55ff
        ..55fff5ffff555f5555ffff55555fffffffff55ff
        .55ffff5f2ff555555ff5555fffff555fff2ff55ff
        .5fff55ff2fffff55ffffffffffff5fffff22f5fff
        .5ff55ff22fffff5ffffffffff2ff5ffffff2f5fff
        .5f555fffff55f25fffffffff52ff5fff555ff55ff
        .5f55ffffff5ff25ffffff2ff522f5fffff5fff5ff
        .ff55ffff555f225fff55f2ff5f2f5ff2ff5fff5ff
        .fff5ff55fff22ff5fff5f22f5f2f5ff2ff5ff55ff
        .fff5ff5fffff515f22f55f2f55ff55f2f5fffffff
        .fff5ff5ffff5515ff2ff5f2ff5ff5152f555ff5ff
        .fff5ff5fff55115ff22f5f2fffff51522ff5fff5f
        .fff5fffff55115ffff2f5fffffff5115fff55ff5f
        .fff55fff551115ffffffffffffff511555ff5ff5f
        .fff55fff5111555ffffffffffff5511115ff5f55f
        .ffff555511115f555ffffffff555511115fff55ff
        .fffffff111115fff55ffff555fff5111155555fff
        .ffffff1111555ffff5ffff5ffffff511111ffffff
        .ffffffdddd5fffffff55555fffffff5ddddffffff
        .ffffffdddd5fff55ffffffffff55ff5ddddffffff
        .ffffffddd5fff252ff252fffff252ff5dddfffff.
        .ffffffddd5ff555ffff5fffffff55ff5dddfffff.
        .ffffffff55ffffff5ff5ff55fffffff5ffffffff.
        .fffffffff5fffff55fffff5f55fffff5ffffffff.
        ..ffffffff5ff5555f5fff5ffff555ff55fffffff.
        ..ffffffff5555.fff55555fffff.55ffffffffff.
        ..ffff..ffff...fff55555fffff..5f5fffffff..
        ...............ffffff4ffffff.ff55fffffff..
        ...............ffffff4ffffff.ffffffff.....
        ...............ffffff4ffffff..............
        ...............ffffff4ffffff..............
        ...............ffffff4ffffff..............
        ................eeee...eeee...............
        ................effe...effe...............
        ...............eeffee.eeffee..............
        ...............effffe.effffe..............
        ...............eeeeee.eeeeee..............
        `)
})
sprites.onOverlap(SpriteKind.diablo, SpriteKind.premio_final, function (sprite, otherSprite) {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f f f f f f f f f f f f f f f 
        `)
    game.showLongText("Oh no!! el virus se encuentra expandido en una ciudad más del país, haz clic en siguiente para ir al siguiente nivel", DialogLayout.Bottom)
    nivel2()
    Sebastian_Oruro_Diablada_Sara.destroy()
})
function nivel2 () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    game.splash("Ayuda a Fernanda a recolectar alcohol")
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `)
    tiles.setTilemap(tilemap`level5`)
    Fernanda_Santa_Cruz_Sara = sprites.create(img`
        .......................................
        .......................................
        .......................................
        .......................................
        .................eeeeeeeee.............
        ..............eeeeeeeeeeeeeee..........
        .............eeeeeeeeeeeeeeee..........
        ............eeeeeeeeeeeeeeeeee.........
        ............eeeeeeeeeeeeeeeeee.........
        ...........eeeeeeeeedeeeeeeeee.........
        ..........eeeeeeededddeeeeeeee.........
        ..........eeeeeeeddddddeeddeee.........
        ..........eeeedddddddddeddddd..........
        ..........eeeeddddddddddddddd..........
        ..........eeddddfffddddfffddd..........
        ..........eeddddee1ddddee1ddd..........
        ..........eeedddeeeddddeeeddd..........
        ..........eeedddddddddddddddd..........
        ..........eeedddddddddddddddd..........
        ..........eeeeddddfdddddddddd..........
        ..........eeeedddddfffdddddd...........
        ..........eeeedddddddddddddd...........
        ...........eeeeedddddddddd.............
        ...........eeeeeddddddd777.............
        ............eeeddddddd71117............
        ............eeedddd777177717...........
        .............eeee77111711171...........
        ............dddde11177111117...........
        ............ddddeee711111111...........
        ...........ddddd114411111111...........
        ...........ddddd111e111111ddd..........
        ...........ddddd111ee11111dddd.........
        ...........ddddd111ee11111ddddd........
        ..........ddddd11111111111.ddddd.......
        .........7dddd777777777777.ddddd7......
        .........77777111111111111..ddd7dddd...
        .........ddddd111111111111...dd7dddd...
        .........ddddd1111111111111....7dddd...
        ............111111111111111............
        ...........1111111111111111............
        ...........11111111111111111...........
        ...........11111111111111111...........
        ...........11111111111111111...........
        ...........77777777777777777...........
        ...........11111111111111111...........
        ...........77777777777777777...........
        ...............ddd..ddd................
        ...............ddd..ddd................
        ...............ddd..ddd................
        ...............ddd..ddd................
        ...............dddd.dddd...............
        ...............dddd.dddd...............
        `, SpriteKind.Fernanda)
    Fernanda_Santa_Cruz_Sara.ay = 300
    Fernanda_Santa_Cruz_Sara.setPosition(20, 0)
    controller.moveSprite(Fernanda_Santa_Cruz_Sara, 100, 0)
    scene.cameraFollowSprite(Fernanda_Santa_Cruz_Sara)
    Paloma2 = sprites.create(img`
        ............................................................cc.....
        ...........................................................ccc.....
        ...........................................................cdc.....
        ..........................................................ccdc.....
        ..........................................................cddcc....
        .........................................................ccddbcc...
        .........................................................cdddbcc...
        ........................................................ccdddbdc...
        .......................................................ccdddbddc...
        ......................................................ccdddbbddbcc.
        ....................................................ccbbddbbdddbdc.
        ..................................................cccddbddddddbddc.
        .................................................ccddddbdddddbdddcc
        ................................................cdddddbbddddddddbcc
        ccc............................................cdddddbbddddddddbddc
        cdcc..........................................cddddddbbddddddbbddcc
        cddcc........................................cddddddddbbdddddddddc.
        .cddcc.......................................cdddddddddbddddddddc..
        .cdddcc......................................cdddddddddbdddddbbbccc
        ccbdddc......................................cbdddddddbbddddddddddc
        cdbbddcc.................ccccccc.............cbdddddbbbddddddddddcc
        cddbbddc...............ccbbbbbbbcc............cdddddbbddddddddddcc.
        ccdddddcc.............ccbbbbbbbbbcc...........cdddddbbddddddbbbbc..
        .cddddddcc............cbbbbbbbbbbbc...........cddddddbdddddddbbbc..
        .ccddddddcc...........cbbbbbbffbbbcc.........cbddddddbddddddddddc..
        ..cddddddbccccccc....c111bbbbffbbbbcc......cccddddddbbddddbbdddcc..
        ...cddddbbdddddddcc..f111bbbbbbbbbbbccc..ccddddddbbbbdddddddbbbc...
        ..cbbbddbbddddddddcccfbb11cbbbbbbbbbbbcccddddddddbbdddddbdddddc....
        .cdddbbdbbbbdddddddddfbbbbcbbbbbbbbbbb6cdddddddddbdddddddbdddc.....
        .ccdddddddbbbddddddddfbbfccbbbbbbbbbbb6cdddbbbbdbbddddddddbbbc.....
        ..ccddddddddbddddddddfbfdcbbbbbbbbbbb66bddbbbdbbbbddbddbdddbc......
        ....cddddddbbddddddddffddcbbbbbbbbbbb663bbbdddddddddbddbbdddc......
        ....cbbddddbbdbbbddddddddcbbbbbbbbbbb663bbbddbdddddddbddbbbcc......
        ....cddbbdddbbbbbddddddddcbbbbbbbbb66633ddbddbdddbbdddbddccc.......
        ....ccddddddddddbdddddddccbbbbbbbbb6633dddbddbbdddbbddcccc.........
        .....ccdddddddddbbddbbddcbbbbbbbbbb663dddddddcbbdddbbc.............
        ......ccddddddddbbbbbbddc6bbbbbbbb666ddddddcccccccccc..............
        .......ccbbbbdddddddbbbbc666bb6666663ddddddc.......................
        .........cbbddddddddddbbc66666666663dddddddc.......................
        .........cdddddbddddddbccd3666633ddddddddddc.......................
        .........ccddbbbddbdddbccdd33333dddddddddddc.......................
        ..........cccccddbbddbb.ccddddddddddddddddddc......................
        ..............ccccccbb...ccdddddddddddddddddc......................
        ...................cc.....ccddddddddddddddddcc.....................
        ...........................ccddddddddddbbbbddcc....................
        ............................bbbdddddddbbbbbddccccccc...............
        .............................bbbddddddbdddddddddddbcc..............
        .............................ccccddddbccccddddddddbbc..............
        ............................c3333cdddc3333cddddddcccc..............
        ...........................cc33333cbcc33333cdddddcc................
        ...........................c3333333cc3333333cdcdbbc................
        ...................bbbbbbbbc3c3c3c3cc3c3c3c3cdccbbc................
        ...................b1d11111c3c3c3cb1c3c3c3cbbdbccc.................
        ...................b1dd11111bcbccc111bcbcccdbbbcc..................
        ...................b11d111111111111111dd111dbccc...................
        ..................b111dd1111111111111dd1111dbc.....................
        ..................b1111dd11111111111dd1111ddb......................
        ..................b11111dd111111111dd11111ddb......................
        .................b1111111d11111111dd111111ddb......................
        .................b1111111dd111111dd1111111db.......................
        .................b11111111dd111ddd11111111db.......................
        .................b111111111dd1dd1111111111db.......................
        ................b11111111111ddd1111111111ddb.......................
        ................b111111111111111111111111ddb.......................
        ................b111111111111111111111111ddb.......................
        ................b111111111111111111111111ddb.......................
        ................bbbb111111111111111111111db........................
        ...................bbbbbbb111111111111111db........................
        ..........................bbbbbbbb1111111db........................
        .................................bbbbbbbbbb........................
        `, SpriteKind.premio_final2)
    Paloma2.ay = 300
    Paloma2.setPosition(0, 0)
    enemigo2 = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.enemigo)
    animation.runImageAnimation(
    enemigo2,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c . . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f b 3 b c 3 b c f b b c c c . 
        . c b b b b b b c f b c b c c . 
        . c b b b b b b c b b c b b c . 
        c b 1 b b b 1 b b b c c c b c . 
        c b b b b b b b b c c c c c . . 
        f b c b b b c b b b b f c . . . 
        f b 1 f f f 1 b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . c c . . c c . . . . . . . . 
        . . c 3 c c 3 c c c . . . . . . 
        . c b 3 b c 3 b c c c . . . . . 
        . c b b b b b b b b f f . . . . 
        c c b b b b b b b b f f . . . . 
        c b 1 b b b 1 b b c f f f . . . 
        c b b b b b b b b f f f f . . . 
        f b c b b b c b c c b b b . . . 
        f b 1 f f f 1 b f c c c c . . . 
        . f b b b b b b f b b c c . . . 
        c c f b b b b b c c b b c . . . 
        c c c f f f f f f c c b b c . . 
        . c c c . . . . . . c c c c c . 
        . . c c c . . . . . . . c c c c 
        . . . . . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c b 1 b b b 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    200,
    true
    )
    enemigo2.setPosition(0, 0)
    enemigo2.vy = 60
    enemigo2.setBounceOnWall(true)
    alcohol = sprites.create(img`
        .......................
        ....fffffffffffffff....
        ...f88888888888888f....
        ..f88888888888fffff....
        ..f8888888888ff........
        ..fffff88888ff.........
        .......fffff...........
        ........f11f...........
        ........f11f...........
        ........f11f...........
        ........f11f...........
        ........f11f...........
        fffffffffffffffffff....
        f99999999999999999f....
        f99999999999999999f....
        f99999999999999999f....
        f99911111111111999f....
        f99999999999999999f....
        f99999999999999999f....
        f99999999299999999f....
        f99999999299999999f....
        f99999222222299999f....
        f99999999299999999f....
        f99999999299999999f....
        f99999999999999999f....
        f99991111111119999f....
        f99991111111119999f....
        f99999999999999999f....
        f99999999999999999f....
        fffffffffffffffffff....
        `, SpriteKind.Player)
    alcohol.setPosition(0, 0)
    enemigo2.ay = 300
}
sprites.onOverlap(SpriteKind.diablo, SpriteKind.Food, function (sprite, otherSprite) {
    barbijos_veces += 1
    info.changeScoreBy(1)
    if (barbijos_veces == 1) {
        barbijos.setPosition(1200, 0)
    } else if (barbijos_veces == 2) {
        barbijos.setPosition(400, 200)
    } else if (barbijos_veces == 3) {
        barbijos.setPosition(710, 0)
    } else if (barbijos_veces == 4) {
        barbijos.setPosition(800, 220)
    } else {
        barbijos.destroy()
    }
    Sebastian_Oruro_Diablada_Sara.say("Muy bien!!", 500)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direccion = 1
    Sebastian_Oruro_Diablada_Sara.setImage(img`
        ..........................................
        ..........................................
        ........ff...........................ff...
        ........ff..........................fff...
        ........f2f.........................f2f...
        ........f2f....f............f......ff2f...
        ........f2f.....ff.......f.f.......f22f...
        ........f22f......f.f...fff........f22f...
        ........f22f..fff..ff..fff..ffff..ff2ff...
        ........f22ffffef.f5ffff5ff.feeff.f2ff....
        .........f22ffeefff55ff55ffffeeeff22f.....
        .........ff22fffeff55ff55fffeefff222f.....
        ..........fffffffff55ff55ffffff222ff......
        ............f11111f55ff55f11111ffff.......
        ............f11f11f55ff55f11f11ff.........
        ............f1fff1f55ff55f1fff1f..........
        ............f1fff1ffffffff1fff1f..........
        ............f11111ffffffff11111f..........
        .......5555..fffffeffffffefffff...........
        ....555fff5......eeffffffee...............
        ....5f555f55....eeeeffffffee.....ffffffff.
        ....5f5555ff5...efeeeeeeeefe....fff55555f.
        ....5f55f55555..ee1ffffff1ee....f5555555ff
        ...55ff5fff5fffffe1eeeeee1effff.f555ff55ff
        ..55fff5ffff555f5555ffff55555fffffffff55ff
        .55ffff5f2ff555555ff5555fffff555fff2ff55ff
        .5fff55ff2fffff55ffffffffffff5fffff22f5fff
        .5ff55ff22fffff5ffffffffff2ff5ffffff2f5fff
        .5f555fffff55f25fffffffff52ff5fff555ff55ff
        .5f55ffffff5ff25ffffff2ff522f5fffff5fff5ff
        .ff55ffff555f225fff55f2ff5f2f5ff2ff5fff5ff
        .fff5ff55fff22ff5fff5f22f5f2f5ff2ff5ff55ff
        .fff5ff5fffff515f22f55f2f55ff55f2f5fffffff
        .fff5ff5ffff5515ff2ff5f2ff5ff5152f555ff5ff
        .fff5ff5fff55115ff22f5f2fffff51522ff5fff5f
        .fff5fffff55115ffff2f5fffffff5115fff55ff5f
        .fff55fff551115ffffffffffffff511555ff5ff5f
        .fff55fff5111555ffffffffffff5511115ff5f55f
        .ffff555511115f555ffffffff555511115fff55ff
        .fffffff111115fff55ffff555fff5111155555fff
        .ffffff1111555ffff5ffff5ffffff511111ffffff
        .ffffffdddd5fffffff55555fffffff5ddddffffff
        .ffffffdddd5fff55ffffffffff55ff5ddddffffff
        .ffffffddd5fff252ff252fffff252ff5dddfffff.
        .ffffffddd5ff555ffff5fffffff55ff5dddfffff.
        .ffffffff55ffffff5ff5ff55fffffff5ffffffff.
        .fffffffff5fffff55fffff5f55fffff5ffffffff.
        ..ffffffff5ff5555f5fff5ffff555ff55fffffff.
        ..ffffffff5555.fff55555fffff.55ffffffffff.
        ..ffff..ffff...fff55555fffff..5f5fffffff..
        ...............ffffff4ffffff.ff55fffffff..
        ...............ffffff4ffffff.ffffffff.....
        ...............ffffff4ffffff..............
        ...............ffffff4ffffff..............
        ...............ffffff4ffffff..............
        ................eeee...eeee...............
        ................effe...effe...............
        ...............eeffee.eeffee..............
        ...............effffe.effffe..............
        ...............eeeeee.eeeeee..............
        `)
})
sprites.onOverlap(SpriteKind.diablo, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Sebastian_Oruro_Diablada_Sara.setPosition(20, 0)
})
info.onLifeZero(function () {
    game.over(false)
})
function nivel1 () {
    game.splash("Ayuda a Sebastián a recolectar barbijos")
    game.splash("Y al final del nivel encontraras a un mensajero especial ¡El te ayudara!")
    game.splash("Nivel 1")
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `)
    tiles.setTilemap(tilemap`level1`)
    effects.clouds.startScreenEffect()
    Sebastian_Oruro_Diablada_Sara = sprites.create(img`
        ..........................................
        ..........................................
        ........ff...........................ff...
        ........ff..........................fff...
        ........f2f.........................f2f...
        ........f2f....f............f......ff2f...
        ........f2f.....ff.......f.f.......f22f...
        ........f22f......f.f...fff........f22f...
        ........f22f..fff..ff..fff..ffff..ff2ff...
        ........f22ffffef.f5ffff5ff.feeff.f2ff....
        .........f22ffeefff55ff55ffffeeeff22f.....
        .........ff22fffeff55ff55fffeefff222f.....
        ..........fffffffff55ff55ffffff222ff......
        ............f11111f55ff55f11111ffff.......
        ............f11f11f55ff55f11f11ff.........
        ............f1fff1f55ff55f1fff1f..........
        ............f1fff1ffffffff1fff1f..........
        ............f11111ffffffff11111f..........
        .......5555..fffffeffffffefffff...........
        ....555fff5......eeffffffee...............
        ....5f555f55....eeeeffffffee.....ffffffff.
        ....5f5555ff5...efeeeeeeeefe....fff55555f.
        ....5f55f55555..ee1ffffff1ee....f5555555ff
        ...55ff5fff5fffffe1eeeeee1effff.f555ff55ff
        ..55fff5ffff555f5555ffff55555fffffffff55ff
        .55ffff5f2ff555555ff5555fffff555fff2ff55ff
        .5fff55ff2fffff55ffffffffffff5fffff22f5fff
        .5ff55ff22fffff5ffffffffff2ff5ffffff2f5fff
        .5f555fffff55f25fffffffff52ff5fff555ff55ff
        .5f55ffffff5ff25ffffff2ff522f5fffff5fff5ff
        .ff55ffff555f225fff55f2ff5f2f5ff2ff5fff5ff
        .fff5ff55fff22ff5fff5f22f5f2f5ff2ff5ff55ff
        .fff5ff5fffff515f22f55f2f55ff55f2f5fffffff
        .fff5ff5ffff5515ff2ff5f2ff5ff5152f555ff5ff
        .fff5ff5fff55115ff22f5f2fffff51522ff5fff5f
        .fff5fffff55115ffff2f5fffffff5115fff55ff5f
        .fff55fff551115ffffffffffffff511555ff5ff5f
        .fff55fff5111555ffffffffffff5511115ff5f55f
        .ffff555511115f555ffffffff555511115fff55ff
        .fffffff111115fff55ffff555fff5111155555fff
        .ffffff1111555ffff5ffff5ffffff511111ffffff
        .ffffffdddd5fffffff55555fffffff5ddddffffff
        .ffffffdddd5fff55ffffffffff55ff5ddddffffff
        .ffffffddd5fff252ff252fffff252ff5dddfffff.
        .ffffffddd5ff555ffff5fffffff55ff5dddfffff.
        .ffffffff55ffffff5ff5ff55fffffff5ffffffff.
        .fffffffff5fffff55fffff5f55fffff5ffffffff.
        ..ffffffff5ff5555f5fff5ffff555ff55fffffff.
        ..ffffffff5555.fff55555fffff.55ffffffffff.
        ..ffff..ffff...fff55555fffff..5f5fffffff..
        ...............ffffff4ffffff.ff55fffffff..
        ...............ffffff4ffffff.ffffffff.....
        ...............ffffff4ffffff..............
        ...............ffffff4ffffff..............
        ...............ffffff4ffffff..............
        ................eeee...eeee...............
        ................effe...effe...............
        ...............eeffee.eeffee..............
        ...............effffe.effffe..............
        ...............eeeeee.eeeeee..............
        `, SpriteKind.diablo)
    Sebastian_Oruro_Diablada_Sara.ay = 300
    Sebastian_Oruro_Diablada_Sara.setPosition(30, 0)
    controller.moveSprite(Sebastian_Oruro_Diablada_Sara, 100, 0)
    scene.cameraFollowSprite(Sebastian_Oruro_Diablada_Sara)
    paloma = sprites.create(img`
        ............................................................cc.....
        ...........................................................ccc.....
        ...........................................................cdc.....
        ..........................................................ccdc.....
        ..........................................................cddcc....
        .........................................................ccddbcc...
        .........................................................cdddbcc...
        ........................................................ccdddbdc...
        .......................................................ccdddbddc...
        ......................................................ccdddbbddbcc.
        ....................................................ccbbddbbdddbdc.
        ..................................................cccddbddddddbddc.
        .................................................ccddddbdddddbdddcc
        ................................................cdddddbbddddddddbcc
        ccc............................................cdddddbbddddddddbddc
        cdcc..........................................cddddddbbddddddbbddcc
        cddcc........................................cddddddddbbdddddddddc.
        .cddcc.......................................cdddddddddbddddddddc..
        .cdddcc......................................cdddddddddbdddddbbbccc
        ccbdddc......................................cbdddddddbbddddddddddc
        cdbbddcc.................ccccccc.............cbdddddbbbddddddddddcc
        cddbbddc...............ccbbbbbbbcc............cdddddbbddddddddddcc.
        ccdddddcc.............ccbbbbbbbbbcc...........cdddddbbddddddbbbbc..
        .cddddddcc............cbbbbbbbbbbbc...........cddddddbdddddddbbbc..
        .ccddddddcc...........cbbbbbbffbbbcc.........cbddddddbddddddddddc..
        ..cddddddbccccccc....c111bbbbffbbbbcc......cccddddddbbddddbbdddcc..
        ...cddddbbdddddddcc..f111bbbbbbbbbbbccc..ccddddddbbbbdddddddbbbc...
        ..cbbbddbbddddddddcccfbb11cbbbbbbbbbbbcccddddddddbbdddddbdddddc....
        .cdddbbdbbbbdddddddddfbbbbcbbbbbbbbbbb6cdddddddddbdddddddbdddc.....
        .ccdddddddbbbddddddddfbbfccbbbbbbbbbbb6cdddbbbbdbbddddddddbbbc.....
        ..ccddddddddbddddddddfbfdcbbbbbbbbbbb66bddbbbdbbbbddbddbdddbc......
        ....cddddddbbddddddddffddcbbbbbbbbbbb663bbbdddddddddbddbbdddc......
        ....cbbddddbbdbbbddddddddcbbbbbbbbbbb663bbbddbdddddddbddbbbcc......
        ....cddbbdddbbbbbddddddddcbbbbbbbbb66633ddbddbdddbbdddbddccc.......
        ....ccddddddddddbdddddddccbbbbbbbbb6633dddbddbbdddbbddcccc.........
        .....ccdddddddddbbddbbddcbbbbbbbbbb663dddddddcbbdddbbc.............
        ......ccddddddddbbbbbbddc6bbbbbbbb666ddddddcccccccccc..............
        .......ccbbbbdddddddbbbbc666bb6666663ddddddc.......................
        .........cbbddddddddddbbc66666666663dddddddc.......................
        .........cdddddbddddddbccd3666633ddddddddddc.......................
        .........ccddbbbddbdddbccdd33333dddddddddddc.......................
        ..........cccccddbbddbb.ccddddddddddddddddddc......................
        ..............ccccccbb...ccdddddddddddddddddc......................
        ...................cc.....ccddddddddddddddddcc.....................
        ...........................ccddddddddddbbbbddcc....................
        ............................bbbdddddddbbbbbddccccccc...............
        .............................bbbddddddbdddddddddddbcc..............
        .............................ccccddddbccccddddddddbbc..............
        ............................c3333cdddc3333cddddddcccc..............
        ...........................cc33333cbcc33333cdddddcc................
        ...........................c3333333cc3333333cdcdbbc................
        ...................bbbbbbbbc3c3c3c3cc3c3c3c3cdccbbc................
        ...................b1d11111c3c3c3cb1c3c3c3cbbdbccc.................
        ...................b1dd11111bcbccc111bcbcccdbbbcc..................
        ...................b11d111111111111111dd111dbccc...................
        ..................b111dd1111111111111dd1111dbc.....................
        ..................b1111dd11111111111dd1111ddb......................
        ..................b11111dd111111111dd11111ddb......................
        .................b1111111d11111111dd111111ddb......................
        .................b1111111dd111111dd1111111db.......................
        .................b11111111dd111ddd11111111db.......................
        .................b111111111dd1dd1111111111db.......................
        ................b11111111111ddd1111111111ddb.......................
        ................b111111111111111111111111ddb.......................
        ................b111111111111111111111111ddb.......................
        ................b111111111111111111111111ddb.......................
        ................bbbb111111111111111111111db........................
        ...................bbbbbbb111111111111111db........................
        ..........................bbbbbbbb1111111db........................
        .................................bbbbbbbbbb........................
        `, SpriteKind.premio_final)
    paloma.ay = 300
    paloma.setPosition(1300, 0)
    enemigo = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    enemigo,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . c c . . . . . . . . 
        . . f 3 c c 3 c c c . . . . . . 
        . f c 3 b c 3 b c c c . . . . . 
        f c b b b b b b b b f f . . . . 
        c c 1 b b b 1 b b b f f . . . . 
        c b b b b b b b b c f f f . . . 
        c b 1 f f 1 c b b f f f f . . . 
        f f 1 f f 1 f b c c b b b . . . 
        f f f f f f f b f c c c c . . . 
        f f 2 2 2 2 f b f b b c c c . . 
        . f 2 2 2 2 2 b c c b b c . . . 
        . . f 2 2 2 b f f c c b b c . . 
        . . . f f f f f f f c c c c c . 
        . . . . . . . . . . . . c c c c 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c 1 1 b b b 1 1 b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    200,
    true
    )
    enemigo.setPosition(1140, 42)
    enemigo.setVelocity(-100, 0)
    barbijos = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....fffffffffff.....
        ..fff666666666fff...
        ..f.f611111116f.f...
        ..f.f666666666f.f...
        ..f.f661111166f.f...
        ..fff666666666fff...
        ....fffffffffff.....
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Food)
    barbijos.setPosition(350, 0)
    barbijos.ay = 300
    info.setLife(3)
    info.setScore(0)
}
function sprites2 () {
    Vanessa_La_PazSara = sprites.create(img`
        ..........888.........333..............
        ..........89888......33a3..............
        ..........888988...333a33..............
        ............88988.33aa33...............
        ..............898.3a333................
        ..............888.333..................
        ..............ffffffffff...............
        .............ff888ff888ff..............
        ............ff8333333338ff.............
        ...........ff88aaaffaaa88ff............
        ...........f88aa333333aa88f............
        ...........f8aaaaaffaaaaa8f............
        ...........f88888888888888f............
        ..........ffffffffffffffffff...........
        .........eeeeeeeddddddeeddeee..........
        .........eeeedddddddddeddddd...........
        .........eeeeddddddddddddddd...........
        .........eeddddfffddddfffddd...........
        .........eeddddee1ddddee1ddd...........
        .........eeedddeeeddddeeeddd...........
        .........eeedddddddddddddddd...........
        .........eeedddddddddddddddd...........
        .........eeeeddddfdddddddddd...........
        .........eeeedddddfffdddddd............
        .........eeeeddddddddddddd.............
        ..........eeeeeddddddddd...............
        ..........eeeeedddddddd................
        ...........eeeddddddddddddd............
        ...........eeefddddddddfddd............
        ............eeeeddddddfffddd...........
        ...........ddddefddddf333fdd...........
        ...........ddddeeeddf3333fdd...........
        ..........dddddf34ff33ff3fdd...........
        ..........ddddf333e333f3fddd...........
        ..........ddddf333ee333f.dddd..........
        ..........ddddf333ee33f..ddddd.........
        .........ddddf333333333f..ddddd........
        ........dddddf3333333333f.dddddd.......
        ........dddddf333333f333f..dddddddd....
        ........ddddf333f333fff33f..ddddddd....
        ........ddddf333f33333f333f...ddddd....
        ..........ff333ff333333f333f...........
        .........f333333333333333333f..........
        .........f3333333ffff3333333f..........
        ..........ffffffff..ffffffff...........
        ..............ddd...ddd................
        ..............ddd...ddd................
        ..............ddd...ddd................
        ..............ddd...ddd................
        ..............fff...fff................
        ..............f3f...f3f................
        ..............fff...fff................
        ..............f3fff.f3fff..............
        ..............fff3f.fff3f..............
        ..............f.fff.f.fff..............
        `, SpriteKind.Player)
    Matteo_Beni_Sara = sprites.create(img`
        .......................................
        .....................2.................
        ............2...5...22.....5...........
        ...........22...5...22....55........55.
        ...2...5...22..55..2222..555.22....555.
        ..22...55.222.5555.2222.555.222...555..
        ..222..55.22888888888888888822...555...
        .2222..55528888888888888888822..555....
        .2222..555888885fff5fff55ff882.5555....
        .222228888888f55fff5fff5fffff88555..222
        ..2222888885ff5555555555555ff8855..2222
        5.22228888855555eeeeeeeeee55ff85..2222.
        5.22888888ff5eeeeeeeeeeeeee55f88822222.
        552288885855eeeeeeeeeeeeeee55ff882222..
        555288885f5eeeeeeeeeeeeeeeee5ff8822..5.
        55528888f55eeeeeeeeeeeeeeeee5ff88..555.
        55558888f5eeeeeededddeeeeeee5ff8855555.
        .555888ff5eeeeeeddddddeeddee5ff85555...
        .555888ff5eeedddddddddeddddd...........
        ..55888555eeeddddddddddddddd...........
        ..55888ff5eddddfffddddfffddd...........
        ...5888ff5eddddee1ddddee1ddd...........
        ....888ff5eedddeeeddddeeeddd...........
        ....888ff5eedddddddddddddddd...........
        ....888ff5eedddddddddddddddd...........
        .....88f55eeeddddfdddddddddd...........
        .............dddddfffdddddd............
        .............dddddddddddddd............
        ...............ddddddddd...............
        .........ffffffffffffffffffffff........
        ........ff22222222111222222222ff.......
        .......ff1222222221112222222221ff......
        .......f111222222211122222222111f......
        .......f111122222211122222222111f......
        .......f111122222111112222221111f......
        .......f111112221111111222211111f......
        .......fff11122211111112222111fff......
        ........1ffff22111111111122ffff1.......
        ........1111f21111111111112f1111.......
        ........1111f11111111111111f1111.......
        ........1111f11111111111111f111........
        .........111f11111111111111f111........
        .........111f11111111111111f111........
        .........111f11111111111111ff11........
        .........11f1111111111111111f11........
        .........11f1111111111111111f11........
        ........dddf1111111111111111fddd.......
        ........dddf1111111111111111fddd.......
        ........dddf1111111111111111fddd.......
        ...........f1111111111111111f..........
        ...........f1111111111111111f..........
        ...........ffffffffffffffffff..........
        ................ddd...ddd..............
        ................ddd...ddd..............
        ................ddd...ddd..............
        ................dddd..dddd.............
        `, SpriteKind.Player)
    Andrea_Cochabamba_Sara = sprites.create(img`
        .......................................
        .......................................
        .......................................
        .......................................
        .......................................
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........fffffffffffffffffff...........
        ......111111111111ff11111111111........
        ......11111111111f11f1111111111........
        .........eeeeeeefddddfeeddeee..........
        .........eeeedddddddddeddddd...........
        .........eeeeddddddddddddddd...........
        .........eeddddfffddddfffddd...........
        .........eeddddee1ddddee1ddd...........
        .........eeedddeeeddddeeeddd...........
        .........eeedddddddddddddddd...........
        .........eeedddddddddddddddd...........
        .........eeeeddddfdddddddddd...........
        ..........eeedddddfffdddddd............
        ..........eeeddddddddddddd.............
        ..........eeeeeddddddddd...............
        ...........eeeedddddddd................
        ...........feedddddddddf...............
        ..........f1eefdddddddd1f..............
        .........f11eeeedddddd111f.............
        ........f111111efdddd11111f............
        ........f111111eeedd111111f............
        ........f11111111ee1111111f............
        .......f1111111111e11111111f...........
        ......f11111111111ee11111111f..........
        ..fffff11111111111ee11111111ffffff.....
        ..fa11111111f11111111111f1111111af.....
        ..fa1111111f.f111111111f.f111111af.....
        ..faa11111f..f6a6c68696f..f1111aaf.....
        ..ffa11111f.f6a6c68696b6f.f1111aff.....
        ..dfaaa111f.f6a6c68696b6aff11aaafd.....
        ..dfffaaaaff6a6c68696b6a6cfaaafffd.....
        ..ddddfffff6a6c68696b6a6c6fffffddd.....
        ..ddddd...f6a6c68696b6a6c6f...dddd.....
        ..........f6a6c68696b6a6c6f............
        ..........fffffffffffffffff............
        ..............ddd...ddd................
        ..............ddd...ddd................
        ..............ddd...ddd................
        ..............1dd11.1dd11..............
        ..............11111.11111..............
        ..............1.111.1.111..............
        `, SpriteKind.andrea)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemigo.destroy()
    info.changeScoreBy(1)
    animation.runImageAnimation(
    enemigo,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . c c . . . . . . . . 
        . . f 3 c c 3 c c c . . . . . . 
        . f c 3 b c 3 b c c c . . . . . 
        f c b b b b b b b b f f . . . . 
        c c 1 b b b 1 b b b f f . . . . 
        c b b b b b b b b c f f f . . . 
        c b 1 f f 1 c b b f f f f . . . 
        f f 1 f f 1 f b c c b b b . . . 
        f f f f f f f b f c c c c . . . 
        f f 2 2 2 2 f b f b b c c c . . 
        . f 2 2 2 2 2 b c c b b c . . . 
        . . f 2 2 2 b f f c c b b c . . 
        . . . f f f f f f f c c c c c . 
        . . . . . . . . . . . . c c c c 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c 1 1 b b b 1 1 b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    500,
    false
    )
})
let Andrea_Cochabamba_Sara: Sprite = null
let Matteo_Beni_Sara: Sprite = null
let Vanessa_La_PazSara: Sprite = null
let enemigo: Sprite = null
let paloma: Sprite = null
let barbijos: Sprite = null
let alcohol: Sprite = null
let enemigo2: Sprite = null
let Paloma2: Sprite = null
let Fernanda_Santa_Cruz_Sara: Sprite = null
let Sebastian_Oruro_Diablada_Sara: Sprite = null
let projectile: Sprite = null
let direccion = 0
let barbijos_veces = 0
barbijos_veces = 0
scene.setBackgroundImage(img`
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff1111111111111111111ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff111111111111111111111111111ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff1111111111111111111111111111111fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeff1111111111111111111111111111111111111ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeff11111111111111111111111111111111111111111ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeef111111111111111111111111111111111111111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeff11111111111111111111111111111111111111111111111ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeef111111111111111111111111111111111111111111111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeef111111111111111111fffffffffffffffff111111111111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeff1111111111111111fffdddddddddddddddddfff1111111111111111ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeef111111111111111fffdddddddddddddddddddddddfff111111111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeef11111111111111ffdddddddddddddddddddddddddddddff11111111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeef1111111111111ffdddddddddddddddddddddddddddddddddff1111111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeef1111111111111fdddddddddddddddddddddddddddddddddddddf1111111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeef11111111111ffdddddddddddddddddddddddddddddddddddddddff11111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeef11111111111fdddddddddddddddddddddddddddddddddddddddddddf11111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeef11111111111fdddddddddddddddddddddddddddddddddddddddddddddf11111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeef11111111111fdddddddddddddddddddddddddddddddddddddddddddddddf11111111111feeeeeeeeeeeeeeeeeeeeeeeeeee777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeef1111111111fdddddddddddddddddddddddddddddddddddddddddddddddddf1111111111feeeeeeeeeeeeeeeeeeeeeeeeee77777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeef1111111111fdddddddddddddddddddddddddddddddddddddddddddddddddddf1111111111feeeeeeeeeeeeeeeeeeeeeeee7777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeef1111111111fdddddddddddddddddddddddddddddddddddddddddddddddddddddf1111111111feeeeeeeeeeeeeeeeeeeeeee7777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeef111111111fdddddddddddddddddddddddddddddddddddddddddddddddddddddddf111111111feeeeeeeeeeeeeeeeeeeeeee7777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeef1111111111fdddddddddddddddddddddddddd7ddddddddd777ddddddddddddddddf1111111111feeeeeeeeeeeeeeeeeeeeee7777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeef111111111fdddddffddddddddddddfddddddddddddddddd7d7dddddddddddddddddf1111111fffeeeeeeeeeeeeeeeeeeeeee7777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeef111111111fdddddddffdddddddddffdddddddddddddddddd777ddddddddddddddddddf1111fff11feeeeeeeeeeeeeeeeeeeee7777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeef111111111fdddddddfffddddddffffdddddddddddddddddddddddddddddddddddddddf11ffff111feeeeeeeeeeeeeeeeeeeee7777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeef11111111fdddddddddfffffffffffdddddddddddddddddddddddddddddddddddddddddfffff1111feeeeeeeeeeeeeeeeeeeeee77777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeef111111111fdddddddddffffffffffdddddddddddddddddddddddddddddddddddddddddffff1111111feeeeeeeeeeeeeeeeeeeeee777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeef11111111fdddddddddddfffffffffddddddddddddddddddddddddddddddddddddddddffff11111111feeeeeeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeef111111111fdddddddddddfffffffffddddddddddddddddddddddddddddddddddddddffffff111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeef111111111fdffddddddddfffffffffdddddddddddffddddddddddddddddddddddddfffffdf111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeef11111111fdddfffddddddfffffffffdddddddffffffdddddddddddddddddddddddfffffdddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeef11111111fdddfffffddddfffffffffdddfffffffffdddddddddddddddddddddddfffffddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef111111111fddddffffffddffffffffffffffffffffdddddddddddddddddddddddfffffdddddf111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fddddddfffffffffffffffffffffffffffdddddddddddddddddddddfffffddddddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fddddddffffffffffffffffffffffffffdddddddddddddddddddddfffffdddddddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fdddddddffffffffffffffffffffffffdddddddddddddddddddddfffffddddddddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fddddddddfffffffffffffffffffffffddddddddddddddddddddfffffdddddddddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fddddddddffffffffffffffffffffffddddddddddddddddddddfffffdddddddddffdf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fdddddddddffffffffffffffffffffdddddddddddddddddddffffffdddddddddfdddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fddddddddddfffffffffffffffffffddddddddddddddddddffffffddddddddffddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fddddddddddffffffffffffffffffddddddddddddfffddffffffdddddddddfddddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fdddddddddddfffffffffffffffffddddddddddffdddfffffffdddddddddfdddddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fddddddddddddfffffffffffffffdddddddddffddfffffffffddddddddffddddddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fdddddddddddffffffffffffffddddddddddfdddffffffffffffffffffddddddddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fddddddfffffdddddddddfffddddddddddffddddfffffffffdddddddddddddddddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fddddffdddddddddddddddddffffffffffddddddfffffffffdddddddddddddddddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fddffdddddddddddddddddddddddddddddddddddfffffffffdddddddddddddddddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fdfdddddddddddddddddddddddddddddddddddddfffffffffdddddddddddddddddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fdddddddddddddddddddddddddddddddddddddddfffffffffddddddddd77777dddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef11111111fdddddddddddddddddddddddddddddddddddddddfffffffffdddddddd7777777ddddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeef111111111fdddddddddddddddddddddddddddddddddddddddfffffffddddddddd7777777dddf111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeef11111111fdddddddddddddddddddddddddddd77777dddddddddddddddddddddd7777777dddf11111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeef11111111fdddddddddddddddddddddddddddd77777dddddddddddddddddddddd7777777dddf11111111feeeeeeeeeeeefffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeef111111111fddddddddddddddddddddddddddd77777dddddddddddddddddddddd7777777ddf111111111feeeeeeeeeeff11111111111ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeef111111111fddddddddddddddddddddddddddd77777ddddddddddddd777ddddddd77777dddf111111111feeeeeeeeff111111111111111ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeef11111111fddddddddddddddddddddddddddd77777ddddddddddddd7d7dddddddddddddddf11111111feeeeeeeef1111111111111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeef111111111fdddddddddddddddddddddddddddddddddddddddddddd777ddddddddddddddf111111111feeeeeeef111111111111111111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeef11111111fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf11111111feeeeeeef1111111fffffffff1111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeef111111111fdddddddd777ddddddddddddddddddddddddddddddddddddddddddddddddf111111111feeeeeef111111ff111111111ff111111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeef111111111fdddddddd7d7dddddddddddddddddddddddddddddd777dddddddddddddddf111111111feeeeeef11111f1111111111111f11111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeef111111111fddddddd777dddddddddddddddddddddddddddddd7d7ddddddddddddddf111111111feeeeeef11111f111111111111111f11111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeef1111111111fddddddddddddddddddddddddddddddddddddddd777dddddddddddddf1111111111feeeeeef1111f11111111111111111f1111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeef111111111fdddddddddddddddddddddddddddddddddddddddddddddddddddddddf111111111feeeeeef1111f1111777771111111111f1111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeef1111111111fdddddddddddddddddddddddddddddddddddddddddddddddddddddf1111111111feeeeeef1111f1117777771111111111f1111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeef1111111111fdddddddddddddddddddddddddddddddddddddddddddddddddddf1111111111feeeeeeef111f111177777711111111111f111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeef1111111111fdddddddddddddddddddddddddddddddddddddddddddddddddf1111111111feeeeeeeef111f111177777771111111111f111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeef11111111111fdddddddddddddddddd777ddddddddddddddddddddddddddf11111111111feeeeeeeef111f111177777771111111111f111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeef11111111111fddddddddddddddddd7d7dddddddddddddddddddddddddf11111111111feeeeeeeeef111f111117777711177777111f111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeef11111111111fdddddddddddddddd777ddddddddddddddddddddddddf11111111111feeeeeeeeeef111f111117777711177777111f111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeef11111111111ffdddddddddddddddddddddddddddddddddddddddff11111111111feeeeeeeeeeef111f111117777111177777711f111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeef1111111111111fdddddddddddddddddddddddddddddddddddddf1111111111111feeeeeeeeeeef111f111117771111177777711f111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeef1111111111111ffdddddddddddddddddddddddddddddddddff1111111111111feeeeeeeeeeeef111f111111111111177777711f111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeef11111111111111ffdddddddddddddddddddddddddddddff11111111111111feeeeeeeeeeeeef111f111111111111177777111f111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeef111111111111111fffdddddddddddddddddddddddfff111111111111111feeeeeeeeeeeeeeef111f1111111111117777111f111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeff1111111111111111fffdddddddddddddddddfff1111111111111111ffeeeeeeeeeeeeeeeef111f1111111111117771111f111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeef111111111111111111fffffffffffffffff111111111111111111feeeeeeeeeeeeeeeeeeef111f11111111111771111f111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeef111111111111111111111111111111111111111111111111111feeeeeeeeeeeeeeeeeeeef1111f111111111111111f1111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeff11111111111111111111111111111111111111111111111ffeeeeeeeeeeeeeeeeeeeeeef1111f1111111111111f1111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeef111111111111111111111111111111111111111111111feeeeeeeeeeeeeeeeeeeeeeeeef1111ff111111111ff1111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeff11111111111111111111111111111111111111111ffeeeeeeeeeeeeeeeeeeeeeeeeeeef11111fffffffff11111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeff1111111111111111111111111111111111111ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff111111111111111ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff1111111111111111111111111111111fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff11111111111ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff111111111111111111111111111ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff1111111111111111111ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
game.setDialogFrame(img`
    f f f f f f f f f f f f f f f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f f f f f f f f f f f f f f f 
    `)
game.setDialogTextColor(1)
game.showLongText("Ñam Ñam...", DialogLayout.Bottom)
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
    6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
    6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
    6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
    66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
    66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b66666669bb666666669966bbb66666666666666b66666669bb6ddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb96666b66666669bb666666669966bbb666666666666
    66b66666699dbb666666dd9666bb66666666666666b666666999bbd9999999999999bbbbb99bbd99fffffffffffffdd9999999999999bbbbb99bbd9666b666666999bb666666999666bb666666666666
    6bb6669669966bbb69666d9966bb6666666666666bb6669669966b99999999999999bbbbb99bbfffeeeeeeeeeeeeefff999999999999bbbbb99bbd996bb6669669966bbb69666d9966bb666666666666
    6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d999999999999999bbbbb9bffeeeeeeeeeeeeeeeeeeeff9999999999bbbbb9bbbd996bb666d96696d9bbb9966d9966bbb66666666666
    6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d999999999999999bbbbbb9feeeeeeeeeeeeeeeeeeeeeeef99999999bbbbbb9bbb99b6bb66dd9999d996bb99ddd96666bb66666666666
    bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d999999999999999bbbbbfeeeeeeeeeeeeeeeeeeeeeeeeeeff999999bbbbbbbbb999bbbb666d9999d996bb99dd99669dbbb6696666666
    bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999999999999999bbbbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999bbbbbbbbb999bbbbdd6d22222999bbb9dd999996bbb6699966666
    bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d99999999999999bbbbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef999bbbbbbbbb9999bbbb6ddd222229999bb9dd9999d6bbb9699666666
    bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d999999999999999bbbfeeeeeeeeedddddddddddddddeeeeeeeeef99bbbbbbbbb9999bbbb6ddd222229999bbbdd9999d9bbb9999669966
    bbbdddd999d999999bbdd9999d9bbbb9999d9996bb22222999d999999999999999bbfeeeeeeeeeeddddddddddddddddddeeeeeeef9bbbbbbbb9999bbbbbdddd2222299999bbdd9999d9bbbb9999d9996
    bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb2222299dd99999999999999bbbfeeeeeeeeddddddddddddddddddddeeeeeeefbbbbbbbbb9999bbbb9dddd22222999999bb9999dd9bbbb9999d9999
    bb99ddddd999999999bbb999d999bbb9999d9999bb22222dd9999999999999999bbfeeeeeeeeedddddddddddddddddddddddeeeeefbbbbbbbb9999bbbb99ddd22222999999bbb999d999bbb9999d9999
    bb99dddd9999999999dbbbbdd999bbb9999d999bbb22222d99999999999999999bfeeeeeeeedddddddddddddddddddddddddeeeeeefbbbbbbb9999b9bb99ddd22222999999dbbbbdd999bbb9999d999b
    bb99ddd99999999999ddbbbb9999bbbb999d999bbb22222999999999999999999beeeeeeeeddddddddddddddddddddddddddddeeeefbbbbbbb999999bb99ddd22222999999ddbbbb9999bbbb999d999b
    bb99ddd99999999999ddbbbbbb99bbbb999d999bbb22222999999999999999999feeeeeeedddddddddddddddddddddddddddddeeeeefbbbbb9999999bb99ddd22222999999ddbbbbbb99bbbb999d999b
    b9999dd9999999999ddddbbbbbbbbbbbb999d99bb922222999999999999999999feeeeedddddddddddddddddddddddddddddddeeeeefbbbbb9999999b9999d22222299999ddddbbbbbbbbbbbb999d99b
    b9999ddd999999999dd99999bbbbbbbbb999d99bb922222d99999999999999999feeeeeddddddddddddddddddddddddddddddddeeeefbbbbb9999999b9999d22222299999dd99999bbbbbbbbb999d99b
    b9999dddd99999999dd999999bbbbbbbb999d9bbb922222dd999999999999999feeeeeeddddddddddddddddddddddddddddddddeeeeefbbbb99999d9b9999d22222299999dd999999bbbbbbbb999d9bb
    b9999ddddd999999ddd9999999bbbbbbb999dbbbb922222ddd9999d999999999feeeeedddddddddddddddddddddddddddddddddeeeeefbbbb99999d9b9999d2222229999ddd9999999bbbbbbb999dbbb
    dd99999ddddd9999ddd999999999bbbbb999bbbbdd22222ddddd99d999999999feeeefffffffffddddddddddddddfffffffffddddeeefbbbb99999d9dd999922222d9999ddd999999999bbbbb999bbbb
    9d99999ddddddd9ddd9999999999bbbbb99bbbb99d22222dddddddd999999999fddddf1111111fddddddddddddddf1111111fdddddddfbbb999999dd9d999922222ddd9ddd9999999999bbbbb99bbbb9
    9d999999dddddddddd9999999999bbbbb99bbb999d222229ddddddd999999999fddddf11111fffddddddddddddddf11111fffdddddddfbbb9999999d9d999922222ddddddd9999999999bbbbb99bbb99
    9d999999ddddddddd99999999999bbbbb99bb9999d222229ddddddd999999999fddddf11111fffddddddddddddddf11111fffdddddddfbbb999999999d999922222dddddd99999999999bbbbb99bb999
    9dd99999ddddddd9999999999999bbbbb99bbd999d222229ddddddd999999999fddddfffffffffddddddddddddddfffffffffdddddddfbbb999999999dd99922222dddd9999999999999bbbbb99bbd99
    99dd9999dddddd99999999999999bbbbb99bbd9999222229dddddddd99999999fdddddddddddddddddddddddddddddddddddddddddddfbbb99999d9999dd9922222ddd99999999999999bbbbb99bbd99
    99ddd999dddddd99999999999999bbbbb9bbbdd992222229dddddddd99999999fdddddddddddddddddddddddddddddddddddddddddddfbbb99999d9999ddd922222ddd99999999999999bbbbb9bbbdd9
    9999dddddddddd9999999999999bbbbbb9bbb9d99222222ddddddddd99999999fdddddddddddddddddddddddddddddddddddddddddddfbbb99999d999999dd22222ddd9999999999999bbbbbb9bbb9d9
    9999dddddddddd9999999999999bbbbbbbbb99d99222222dddddddddd9999999fdddddddddddddddddddddddddddddddddddddddddddfbbb9999dd999999dd22222ddd9999999999999bbbbbbbbb99d9
    999999dddddddd9999999999999bbbbbbbbb99dd9222222dddddddddd9999999fdddddddddddddddddddddddddddddddddddddddddddfbbb9999dd9999999922222ddd9999999999999bbbbbbbbb99dd
    d9999999dddddd999999999999bbbbbbbbb9999dd2222299ddddddddd9999999fdddddddddddddddddddddddddddddddddddddddddddfbbb9999dd99d9999922222ddd999999999999bbbbbbbbb9999d
    dd9999999ddddd999999999999bbbbbbbbb99999d22222999ddddddddd999999bfdddddddddddddddfffffffdddddddddddddddddddfbbbb9999dd99dd999922222ddd999999999999bbbbbbbbb99999
    dd9999999ddddd999999999999bbbbbbbb999999d22222999ddddddddd999999bfddddddddddddddfffffffffddddddddddddddddddfbbbbdddddd99dd999922222ddd999999999999bbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb999999922222999ddddddddd999999bfddddddddddddddfffffffffddddddddddddddddddfbbbbbddddd999d999922222ddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb999999922222999dddddddddd999ddbbfdddddddddddddfffffffffdddddddddddddddddfbbbbbbddddd999d999922222ddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb999999922222999dddddddddd9ddddbbfdddddddddddddfffffffffdddddddddddddddddfbbbbbbddddd999d999922222ddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb999999922222999dddddddddddddddbbbfddddddddddddff22222ffddddddddddddddddfbbbbbbbbdddd9d9d999922222ddd99999999999bbbbbbbbb999999
    9dd999999ddddd99999999999bbbbbbbb9999999922222999dddddddddddddddbbbbfdddddddddddf2222222fdddddddddddddddfbbbbbbbbbdddddd9dd999999ddddd99999999999bbbbbbbb9999999
    9dd999999ddddd99999999999bbbbbbbb9999999922222999ddddddddddddddbbbbbfdddddddddddf2222222fddddddddddddddbfbbbbbbbbbdddddd9dd999999ddddd99999999999bbbbbbbb9999999
    ddd999999ddddd99999999999bbbbbbbb9999999d22222999ddddddddddddddbbbbbbfddddddddddd2222222dddddddddddddddfbbbbbbbbbbbdddddddd999999ddddd99999999999bbbbbbbb9999999
    dd9999999ddddd99999999999bbbbbbbb9999999d22222999ddddddddddddddbbbbbbbfdddddddddddddddddddddddddddddddfbbbbbbbbbbbbddddddd9999999ddddd99999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999d22222999ddddddddddddddbbbbbbbbfdddddddddddddddddddddddddddddfdbbbbbdddddddddddddd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddddddddddddddddbbbbffdddddddddddddddddddddddddffddbbddddddddddddddddd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbb99999999dd9999999ddddddddddddddddddddbbbbbfdddddddddddddddddddddddf777777ddddddddddddddddd9999999dddddd9999999999bbbbbbb99999999
    d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddddddddddddddddd77777bffddddddddddddddddd77ff7777777dddddddddddddd9d99999999dddddd9999999999bbbbbbb9999999d
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddddddddddddddddd7777777dfffddddddddddd77fff777777777dddddddddddddd9d99999999dddddd9999999999bbbbbbb999999dd
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddddddddddddddddd77788888888fffffffff8888888888887777dddddddddddddddd99999999dddddd9999999999bbbbbbb999999dd
    999999999ddddddd999999999bbbbbbb99999ddd999999999dddddddddddddddddddd78888888888ddddd88888888888888888888888888ddddddddd9999922222dddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd922222999ddddddddddddddddddd888888888888888888888888888888888888888888888ddddddd9999922222dddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd922222999dddddddddddddddddd88888888888888888888888888888888888888888888888dddddd9999922222dddddd999999999bbbbbbb99999ddd
    999999999dddddddd99999999bbbbbbb9999dddd922222999dddddddddddddddd7888888888888888888888888888888888888888888888888ddddddd999922222ddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999dddd922222999ddddddddddddddd78888888888888888888888888888888888888888888888888ddddddd999922222ddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999ddd9922222999dddddddddddd77788888888888888888888888888888888888888888888888888ddddddd99999999dddddddd99999999bbbbbbb9999ddd9
    9999999999dddddddd999999bbbbbbbb9999ddd99999999999ddddddddd7777888888888888888888888888888888888888888888888888888ddddddd999999999dddddddd999999bbbbbbbb9999ddd9
    d999999999dddddddd999999bbbbbbbbddddddddd999999999ddddddddd77888888888888888888888888888888888888888888888888888888dddddd999999999dddddddd999999bbbbbbbbdddddddd
    ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999ddddddddd788888888888888888888888888888888888888888888888888888888ddddddddd99999dddddddd999999bbbbbbbbbddddddd
    dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd888888888888888888888888888888888888888888888888888888888dddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
    ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd888888888888888888888888888888888888888888888888888888888ddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888ddddddddddddddddddddddddddbbbbbbbbbbdddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888ddddddddddddddddddddddddddbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888dddddddddddddddddddddddddbbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888877dddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888877dddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888877dddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888877dddddddddddddddddddddddbbbbbbbbbbbbddddd
    ddddddddddddddddddd7777777777bbbbbbddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888877ddddddddddddddddddd7777777777bbbbbbddddd
    dddddddddddddd77777777777777777777bddddddddddddddddddd888888888888888888888888888888888888888888888888888888888888888888dddddddddddddd77777777777777777777bddddd
    ddddddddddd7777777777777777777777777ddddddddddddddd777888888888888888888888888888888888888888888888888888888888888888888ddddddddddd7777777777777777777777777dddd
    dddddddd777777777777777777777777777777dddddddddd777777888888888888888888888888888888888888888888888888888888888888888888dddddddd777777777777777777777777777777dd
    ddddd77777777777777777777777777777777777ddddd777777777888888888888888888888888888888888888888888888888888888888888888888ddddd77777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777778888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777778888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777778888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777778888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777778888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777778888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777778888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777778888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777778888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777778888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777778888878888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
game.showLongText("Oh no!", DialogLayout.Bottom)
game.showLongText("Es un virus!!!", DialogLayout.Bottom)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbb2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168b2222229ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111222222b99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818222222bb299fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb6661888188881881822222be9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd6888888888888888822222299fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffd22d9666666dbb668886888888222222222222229ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffd22299666966d6886688888822222222222222222269ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffd2229996696666668888888882222bbb228b22222222229fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffd222999666666666888888888cbb2be8bbbcb22222bb222b9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9222999666666666688888888bccb888888bbbbb88888b22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffd222999669666666866888868bbbbb8888888ccc888b88bb28222ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffd2229d99ddd666668868888688bbcb888888888bc888bcc8b288629fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff222222ddd966666888688888888888888b88888888888cc8222886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd222222dd6966666666868888888888bb2bbebb8888888888b228c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff922d2ddd6666666666888688868888222222222e8888888888b22bbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9d229dd666666666668868888888b222222b2bb2222222d88b8eb22bbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888b22222bbbbb2bbb222222b8bbb2228bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbb22222bbbddbbbbbbbbb22228b222bb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bb222bbbbdbbbbbbbbbbb2222228bb22288bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bb22222bbbdbbbbbbbbbbbb2b22288b222288c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666b22bbb22bbdbbbbbbbbbbbb22222288bb2228869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668b22bbdbbbbbbbbbbbbbbbbb222222288b2222866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668b222bbbbbbbbbbbbbbbbbbb2222222888bb222669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868b22bbbdbbbbbbbbbbbbbbbb22222222888bb22869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd6966666668888886822bddbbbbbbbbbbbbbbbbbb222222222888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbb22b222228888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbb2b22222222288888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9992299666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbb2222222222228888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff992222966696666666666888886888bbbbbbbbbbbbbbbbbbbbbb2b22222222222888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9922d22666969666666668888868888bbbbbbbbbbbbbbbbbbbb22b222222222228888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99d222226696966666666668886868888bbbbeb888bbbbbbbbb222222222222228888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99222222e6969666666666888888888888888888888bbbbbbbb222222222222288888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff922222222266966666666688888688888888888d888ebbbbbbb22222222222bb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9222222222269996666688668886888888dd88dbbd88bbbbbbb22222222222eb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff922222222222999966668868888888888ddddbbbbd88cbbbbbbbb2222222228888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9e2222222222229966666688888888888888ddbbbb888bbbbbbbb2222222228888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff922222222222222666666888866888888888dddddbdd88bbbbbb22222222288888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff22222222222222226666688888888888888888d8888888bbbbbb22222222288888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9d222222222222222666688868888888888888888888888bbbbb222222222888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9d22222222222222266666688888888888888888888888bbbb2222222222288888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9222222222222222666666688888888888888888888888bbbb2222222222888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9222222222222222666666688888888888888888888888bbbb222222222288888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9922222222222226666668888888888888888888888888bbbb2b2222222288888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99d222222222226666668888888888888888888888888bbbbb222222222888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99d222222222226666668688688888888888888888888bbbb2222222228888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999222222222b26666666688688888888888888888888bbbb2222222288888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969222222222269666666668688868888888888888888bbbb222222288888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff992222222222696bb668888888868888888888888888bbb222222228888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999922222229666dbbb8888888888888888888888888ccb222222228888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff6992222222966966bbb8888888888888888888888888bbbb2222288888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999222222666666dbbdd88888888688888888888888bb22222288888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699d2222266666666bb6d8888888688888888888888bb2222228888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff96962222266666666dbbd6886868888888888888888bb2b2228888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999e22222666666666dbb8868888688888888888888bbb2228888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9692222266996666666bbb868888888888888888888bbb2888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9622222966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff9922b2996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff96922b9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff9692226696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969229669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9622266699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96266669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.showLongText("Oh no!! Parece que se expandió por todo el mundo", DialogLayout.Bottom)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
nivel1()
game.onUpdate(function () {
    if (Sebastian_Oruro_Diablada_Sara.tileKindAt(TileDirection.Bottom, assets.tile`myTile39`) || Sebastian_Oruro_Diablada_Sara.tileKindAt(TileDirection.Bottom, assets.tile`myTile38`) || Sebastian_Oruro_Diablada_Sara.tileKindAt(TileDirection.Bottom, assets.tile`myTile38`)) {
        info.changeLifeBy(-3)
    }
})
