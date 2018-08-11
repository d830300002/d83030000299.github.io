module scenes {
    export class Start extends objects.Scene {
        // member variables
       
        private _new_button: objects.Button;
        private _old_button: objects.Button;
        private _exit_button: objects.Button;
        private _background_anime:objects.Background_anime_start;
        private _background_top:objects.Background_top_start;
        private _background_bottom:objects.Background_bottom_start;

        public sound_wind: createjs.AbstractSoundInstance;
        // constructors
        constructor() {
            super();
            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this.sound_wind = createjs.Sound.play("sound_wind");
            this.sound_wind.loop = -1;
            this.sound_wind.volume = 0.5;

            this._background_anime=new objects.Background_anime_start();
            this._background_top=new objects.Background_top_start();
            this._background_bottom=new objects.Background_bottom_start();

            this._new_button = new objects.Button("new_button", 450, 260, true);
            this._old_button = new objects.Button("old_button", 450, 300, true);
            this._exit_button = new objects.Button("exit_button", 450, 340, true);
            this.Main();
        }

        public Update():void {
            this._background_anime.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.sound_wind.stop();
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - START SCENE`);
            this.addChild(this._background_bottom);
            this.addChild(this._background_anime);
            this.addChild(this._background_top);
            this.addChild(this._new_button);
            this.addChild(this._old_button);
            this.addChild(this._exit_button);
            this._new_button.on("click", function(){
                managers.Game.CurrentState = config.Scene.INS;
            }, this);
            this._old_button.on("click", function(){
                managers.Game.CurrentState = config.Scene.SK;
            }, this);
        }
    }
}