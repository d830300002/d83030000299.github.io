namespace objects {
    export class Enemy_desk_kid_lv3 extends objects.GameObjectAnimation {
        private _horizontalSpeed: number;
        /**
         * Creates an instance of Plane.
         * @memberof Enemy_moto_kid_lv3
         */
        constructor() {
            super("dancer");

            this.Start();
        }

        // private methods
        private _checkBounds(): void {
            if (this.x<=-200) {
                this.Reset();
            }
        }

        // public methods
        public Start(): void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;          
            this._horizontalSpeed = 5;
            this.Reset();
        }

        public Update(): void {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        }

        public Reset(): void {
            this.y = 330;
            this.x= 1200;
        }
    }
}
