//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    let canvas: HTMLCanvasElement;
    let stage: createjs.Stage;
    let AssetManager: createjs.LoadQueue;
    let CurrentScene: objects.Scene;
    let CurrentState: config.Scene;
    let DancerSpriteSheet: createjs.SpriteSheet;
    let ScoreBoard: managers.ScoreBoard;

    let level3Data = {
        "images": [
        ],

        "framerate": 20,
        "frames": [
            [1, 1, 119, 185, 0, 0, 0],
            [1, 1, 119, 185, 0, 0, 0],
            [122, 1, 118, 185, 0, 0, 0],
            [1, 188, 119, 185, 0, 0, 0],
            [1, 188, 119, 185, 0, 0, 0],
            [122, 188, 118, 184, 0, 0, -1],
            [122, 374, 100, 126, 0, 0, 0],
            [1, 375, 100, 125, 0, 0, -1]
        ],

        "animations": {
            "dancer": { "frames": [2, 0, 3, 5, 4, 1], "speed": 0.2 },
            "moto": { "frames": [6, 7], "speed": 0.2 }
        }
    };


    let Manifest = [
        { id: "new_button", src: "/Assets/images/button/new_button.png" },
        { id: "old_button", src: "/Assets/images/button/old_button.png" },
        { id: "exit_button", src: "/Assets/images/button/exit_button.png" },
        { id: "re_button", src: "/Assets/images/button/re_button.png" },
        { id: "menu_button", src: "/Assets/images/button/menu_button.png" },
        { id: "start_button", src: "/Assets/images/button/start_button.png" },
        { id: "level1_button", src: "/Assets/images/button/level1_button.png" },
        { id: "level2_button", src: "/Assets/images/button/level2_button.png" },
        { id: "level3_button", src: "/Assets/images/button/level3_button.png" },

        //player images and sounds

        { id: "player_plane", src: "/Assets/images/player/Plane.png" },
        { id: "player_explosion_type_0", src: "/Assets/images/player/Explosion_2.png" },
        { id: "player_explosion_type_1", src: "/Assets/images/player/Explosion_3.png" },
        { id: "player_bullet_type_0", src: "/Assets/images/player/Bullet_type_0.png" },
        { id: "player_bullet_type_1", src: "/Assets/images/player/Bullet_type_1.png" },
        { id: "player_bullet_type_2", src: "/Assets/images/player/Bullet_type_2.png" },
        { id: "player_plane_type_0", src: "/Assets/images/player/Plane_type_0.png" },
        { id: "player_plane_type_1", src: "/Assets/images/player/Plane_type_1.png" },
        { id: "player_plane_type_2", src: "/Assets/images/player/Plane_type_2.png" },
        { id: "player_bullet_type_1_icon", src: "/Assets/images/player/Bullet_type_1_icon.png" },
        { id: "sound_player_explosion", src: "Assets/audio/player/PlayerExplosion.mp3" },
        { id: "sound_player_upgrade", src: "Assets/audio/player/PlayerUpgrade.mp3" },
        { id: "sound_bulletshoot", src: "Assets/audio/player/BulletShoot.mp3" },


        //supply images and sound
        { id: "supply", src: "/Assets/images/player/Supply.png" },
        { id: "parachute", src: "/Assets/images/player/Parachute.png" },

        //explosion images and sound
        { id: "explosion_type_0", src: "/Assets/images/explosion/Explosion_1.png" },
        { id: "sound_explosion_type_0", src: "/Assets/audio/explosion/explosion_type_0.mp3" },

        //start imgage and sound
        { id: "background_anime_start", src: "/Assets/images/start/background_anime.png" },
        { id: "background_bottom_start", src: "/Assets/images/start/background_bottom.png" },
        { id: "background_top_start", src: "/Assets/images/start/background_top.png" },
        { id: "ins_start", src: "/Assets/images/start/ins_start.png" },
        //lose imgage and sound
        { id: "background_anime_lose", src: "/Assets/images/gameover/background_anime.png" },
        { id: "background_top_lose", src: "/Assets/images/gameover/background_top.png" },
        //win imgage and sound
        { id: "background_win", src: "/Assets/images/gameover/background_win.png" },
        //level 1 images and sound

        { id: "enemy_ufo_lv1", src: "/Assets/images/level1/UFO.png" },
        { id: "enemy_bullet_laser_lv1", src: "/Assets/images/level1/Laser.png" },
        { id: "enemy_bullet_stone_lv1", src: "/Assets/images/level1/Stone.png" },
        { id: "enemy_ufo_crack_lv1", src: "/Assets/images/level1/UFO_Crack.png" },
        { id: "enemy_ufo_smoke_lv1", src: "/Assets/images/level1/UFO_Smoke.png" },
        { id: "enemy_alien_kid_lv1", src: "/Assets/images/level1/Alien_Kid.png" },

        { id: "background_sky_lv1", src: "/Assets/images/level1/Sky.png" },
        { id: "background_slide_lv1", src: "/Assets/images/level1/Slide.png" },
        { id: "background_street_lamp_lv1", src: "/Assets/images/level1/Street_Lamp.png" },
        { id: "background_tree_lv1", src: "/Assets/images/level1/Tree.png" },
        { id: "background_wall_lv1", src: "/Assets/images/level1/Wall.png" },


        { id: "sound_wind", src: "/Assets/audio/level1/Wind.mp3" },
        { id: "sound_lazershoot", src: "/Assets/audio/level1/LazerShoot.mp3" },
        { id: "sound_blink", src: "/Assets/audio/level1/Blink.mp3" },


        //level 2 images and sound
        { id: "enemy_trump_lv2", src: "/Assets/images/level2/Trump.png" },
        { id: "enemy_bullet_laser_lv2", src: "/Assets/images/level2/Laser.png" },
        { id: "enemy_bullet_spat_lv2", src: "/Assets/images/level2/Spat.png" },
        { id: "enemy_trump_crack_lv2", src: "/Assets/images/level2/Trump_Crack.png" },
        { id: "enemy_trump_smoke_lv2", src: "/Assets/images/level2/Trump_Smoke.png" },
        { id: "enemy_trump_baby_lv2", src: "/Assets/images/level2/Trump_baby.png" },

        { id: "background_supermarket_lv2", src: "/Assets/images/level2/Supermarket.png" },
        { id: "background_poster_lv2", src: "/Assets/images/level2/Poster.png" },
        { id: "background_cart_lv2", src: "/Assets/images/level2/Cart.png" },
        { id: "background_box_lv2", src: "/Assets/images/level2/Box.png" },
        { id: "background_shelves_lv2", src: "/Assets/images/level2/Shelves.png" },

        //level 3 images and sound

        { id: "background_school_lv3", src: "/Assets/images/level3/School.png" },
        { id: "background_sky_lv3", src: "/Assets/images/level3/Sky.png" },
        { id: "background_desk_lv3", src: "/Assets/images/level3/Desk.png" },

        { id: "enemy_eye_kid_lv3", src: "/Assets/images/level3/HandsomeKid.png" },
        { id: "enemy_ufo_lv3", src: "/Assets/images/level3/UFO.png" },
        { id: "enemy_ufo_crack_lv3", src: "/Assets/images/level3/UFO_Crack.png" },
        { id: "enemy_ufo_smoke_lv3", src: "/Assets/images/level3/UFO_Smoke.png" },
        { id: "Enemy_lv3", src: "Assets/images/level3/Enemy_lv3.png" },
        { id: "enemy_bullet_star_lv3", src: "/Assets/images/level3/Star.png" }
    ]


    function Init(): void {
        console.log(`%c Assets Loading...`, "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }

    function Start(): void {
        console.log(`%c Game Initializing...`, "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);

        managers.Game.Stage = stage;

        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);

        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;

        ScoreBoard = new managers.ScoreBoard;
        managers.Game.ScoreBoard = ScoreBoard;

        level3Data.images = [AssetManager.getResult("Enemy_lv3")];
        DancerSpriteSheet = new createjs.SpriteSheet(level3Data);
        managers.Game.DancerSpriteSheet = DancerSpriteSheet;


        Main();
    }

    function Update(): void {
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }

        CurrentScene.Update();

        stage.update();
    }

    function Main(): void {
        console.log(`%c Main Game Started...`, "font-style:italic; font-size:16px; color:blue;");

        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }

        switch (CurrentState) {
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;

            case config.Scene.SK:
                CurrentScene = new scenes.Level_skip();
                break;
            case config.Scene.INS:
                CurrentScene = new scenes.Instruction();
                break;
            case config.Scene.LV1:
                CurrentScene = new scenes.Level_1();
                managers.Game.ScoreBoard.Level = 1;
                break;
            case config.Scene.LV2:
                CurrentScene = new scenes.Level_2();
                managers.Game.ScoreBoard.Level = 2;
                break;
            case config.Scene.LV3:
                CurrentScene = new scenes.Level_3();
                managers.Game.ScoreBoard.Level = 3;
                break;
            case config.Scene.LO:
                CurrentScene = new scenes.Lose();
                break;
            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
        }

        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }

    window.addEventListener("load", Init);

})();