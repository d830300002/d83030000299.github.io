module scenes {
    export class End extends objects.Scene {
        // member variables
        private _background_win: objects.Background_win;
        private _menu_button: objects.Button;
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
            this._menu_button = new objects.Button("menu_button",450,355,true);
            this._background_win = new objects.Background_win();
            this.Main();
        }

        public Update(): void {

        }

        public Reset(): void {

        }

        public Destroy(): void {
            this.sound_wind.stop();
            this.removeAllChildren();
        }

        public Main(): void {
           
            this.addChild(this._background_win);
            this.addChild(this._menu_button);
            console.log(`Starting - END SCENE`);
            this._menu_button.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
                managers.Game.ScoreBoard.Reset_restart();
            },this);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            this.addChild(managers.Game.ScoreBoard.HighScoreLabel);


        }
    }
}