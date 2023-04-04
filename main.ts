controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . 2 . . 2 . . . . . . . . . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . . 2 . 2 2 2 2 . . . . . . 
        . . . 2 . 2 4 4 4 4 2 2 . . . . 
        . . . . 2 4 5 5 5 5 4 4 2 2 . . 
        . . . . 2 4 5 5 5 5 5 5 4 4 2 . 
        . 2 . . 2 4 5 5 5 5 4 4 2 2 . . 
        . . . . . 2 4 4 4 4 2 2 . . . . 
        . . . . . . 2 2 2 2 . . . 2 . . 
        . . 2 . . 2 . . . . . . 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
    sprites.destroy(Bush, effects.ashes, 500)
})
let projectile: Sprite = null
let mySprite: Sprite = null
let Bush: Sprite = null
let You = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
Bush = sprites.create(assets.image`Bush`, SpriteKind.Player)
controller.moveSprite(mySprite)
