module scenes {
    export class Instruction extends objects.Scene {
        // member variables
        private _ins:objects.Ins_start;
        private _start_button:objects.Button;
        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._ins=new objects.Ins_start();
            this._start_button=new objects.Button("start_button",450,350,true);
            this.Main();
        }

        public Update():void {

        
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            this.addChild(this._ins);
            this.addChild(this._start_button);
            console.log(`Starting - END SCENE`);
            this._start_button.on("click", function () {
                managers.Game.CurrentState = config.Scene.LV1;
            },this);
        }
    }
}