module objects {
    export class Background_top_lose extends createjs.Bitmap {
        // member variables
        private _horizontalSpeed:number;

        // constructors
        constructor() {
            super(managers.Game.AssetManager.getResult("background_top_lose"));
            this.Start();
        }

        // private methods
        private _checkBounds():void {
         
        }

         // public methods
         public Start():void {
        
        }

        public Update():void {
           
        }

        public Reset():void {
           
        }
    }
}