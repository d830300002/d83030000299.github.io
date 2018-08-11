module scenes {
    export class Level_skip extends objects.Scene {
        // member variables
        private _level1_button: objects.Button;
        private _level2_button: objects.Button;
        private _level3_button: objects.Button;
        // constructors
        constructor() {
            super();
            this.Start();
        }

        // private methods

        // public methods
        public Start(): void {
            this._level1_button = new objects.Button("level1_button", 150, 225, true);
            this._level2_button = new objects.Button("level2_button", 450, 225, true);
            this._level3_button = new objects.Button("level3_button", 750, 225, true);
            this.Main();
        }

        public Update(): void {

        }

        public Reset(): void {

        }

        public Destroy(): void {

            this.removeAllChildren();
        }

        public Main(): void {
            this.addChild(this._level1_button);
            this.addChild(this._level2_button);
            this.addChild(this._level3_button);
            this._level1_button.on("click", function () {
                managers.Game.CurrentState = config.Scene.LV1;
            }, this);
            this._level2_button.on("click", function () {
                managers.Game.CurrentState = config.Scene.LV2;
            }, this);
            this._level3_button.on("click", function () {
                managers.Game.CurrentState = config.Scene.LV3;
            }, this);
        }
    }
}