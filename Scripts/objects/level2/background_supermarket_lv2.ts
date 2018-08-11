module objects {
    export class Background_supermarket_lv2 extends createjs.Bitmap {
        // member variables
        private _horizontalSpeed:number;

        // constructors
        constructor() {
            super(managers.Game.AssetManager.getResult("background_supermarket_lv2"));

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the top boundary
            if(this.x <= -900) {
                this.Reset();
            }

        }

         // public methods
         public Start():void {
             this._horizontalSpeed = 5; // the sky will move down 5ppf
             this.Reset();
        }

        public Update():void {
            this.x -= this._horizontalSpeed;
            
            this._checkBounds();
        }

        public Reset():void {
            this.x = 0;
        }
    }
}