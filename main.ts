sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Pizza.setPosition(randint(10, 160), randint(10, 120))
    info.startCountdown(10)
})
let Pizza: Sprite = null
scene.setBackgroundColor(5)
let mySprite = sprites.create(img`
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 b c 5 5 d 4 c . . 
    . b b b b 5 5 5 b f d d 4 4 4 b 
    . b d 5 b 5 5 b c b 4 4 4 4 b . 
    . . b 5 5 b 5 5 5 4 4 4 4 b . . 
    . . b d 5 5 b 5 5 5 5 5 5 b . . 
    . b d b 5 5 5 d 5 5 5 5 5 5 b . 
    b d d c d 5 5 b 5 5 5 5 5 5 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
Pizza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Food)
