module scenes {
    export class Lose extends objects.Scene {
        // member variables
        private _re_button: objects.Button;
        private _menu_button: objects.Button;
        private _background_anime_lose: objects.Background_anime_lose;
        private _background_bottom: objects.Background_bottom_start;
        private _background_top: objects.Background_top_lose;
        public sound_wind: createjs.AbstractSoundInstance;
        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start(): void {
            this.sound_wind = createjs.Sound.play("sound_wind");
            this.sound_wind.loop = -1;
            this.sound_wind.volume = 0.5;
            
            this._menu_button = new objects.Button("menu_button",450,300,true);
            this._re_button = new objects.Button("re_button", 450, 260, true);
            this._background_anime_lose = new objects.Background_anime_lose();
            this._background_bottom = new objects.Background_bottom_start();
            this._background_top = new objects.Background_top_lose();
            this.Main();
        }

        public Update(): void {
            this._background_anime_lose.Update();
        }

        public Reset(): void {
            this.sound_wind.stop();
            this.removeAllChildren();
        }

        public Destroy(): void {
            this.removeAllChildren();
        }

        public Main(): void {
            console.log(`Starting - LOSE SCENE`);
            this.addChild(this._background_bottom);
            this.addChild(this._background_anime_lose);
            this.addChild(this._background_top);
            this.addChild(this._re_button);
            this.addChild(this._menu_button);
            this._re_button.on("click", function () {
                switch (managers.Game.ScoreBoard.Level) {
                    case 1:
                        managers.Game.CurrentState = config.Scene.LV1;
                        managers.Game.ScoreBoard.Reset_restart();
                        break;
                    case 2:
                        managers.Game.CurrentState = config.Scene.LV2;
                        managers.Game.ScoreBoard.Reset_restart();
                        break;
                    case 3:
                        managers.Game.CurrentState = config.Scene.LV3;
                        managers.Game.ScoreBoard.Reset_restart();
                        break;

                    default:
                        managers.Game.CurrentState = config.Scene.START;
                        managers.Game.ScoreBoard.Reset_restart();
                        break;
                }

            }, this);
            this._menu_button.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
                managers.Game.ScoreBoard.Reset_restart();
            },this);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);

        }
    }
}