module objects {
    export class Ins_start extends createjs.Bitmap {
        // member variables
        private _horizontalSpeed:number;

        
        // constructors
        constructor() {
            super(managers.Game.AssetManager.getResult("ins_start"));
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