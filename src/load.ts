loadSprite("flame-floor", "/assets/flame-floor.png", {
    sliceX: 4,
    anims: {
        "fire": {
            from: 0,
            to: 3,

            loop: true
        }
    }
});

loadSprite("flame-wall", "/assets/flame-wall.png", {
    sliceX: 3,

    anims: {
        "fire": {
            from: 0,
            to: 2,

            loop: true
        }
    }
});

loadSprite("ice-screen", "/assets/ice-screen.png");

loadSprite("snow-powerup", "/assets/snow-powerup.png", {
    sliceX: 4,

    anims: {
        "snow": {
            from: 0,
            to: 3,

            loop: true,
        }
    }
});


loadSprite("player", "/assets/stick-anims.png", {
    sliceX: 29,

    anims: {
        "idle": {
            from: 0, 
            to: 2,

            loop: true,
        },

        "jump": {
            from: 3,
            to: 8,
        },

        "run-start": {
            from: 9,
            to: 16
        },

        "run": {
            from: 17,
            to: 22,

            loop: true,
        },

        "wall-slide-start": {
            from: 23,
            to: 26,
        },

        "wall-slide": {
            from: 27,
            to: 28
        }
    }
})