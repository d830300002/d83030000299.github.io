namespace objects {
    export class Enemy_moto_kid_lv3 extends objects.GameObjectAnimation {
        private _horizontalSpeed: number;
        /**
         * Creates an instance of Plane.
         * @memberof Enemy_moto_kid_lv3
         */
        constructor() {
            super("moto");

            this.Start();
        }

        // private methods
        private _checkBounds(): void {
            if(this.x<0 ){
                this.Reset_Left();
            }
            else if(this.x>900){
                this.Reset_Right();
            }
        }

        // public methods
        public Start(): void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = 800;           
            this._horizontalSpeed=5;
        }

        public Update(): void {
            this.x+=this._horizontalSpeed;
            this._checkBounds();
        }

        public Reset_Left(): void { 
            this._horizontalSpeed=5;
        }
        public Reset_Right(): void { 
            this.y = 0+this.halfHeight+5;
            this._horizontalSpeed=-5;
           
        }
    }
}
