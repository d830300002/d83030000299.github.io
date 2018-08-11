namespace objects {
    export class Enemy_dancer_kid_lv3 extends objects.GameObjectAnimation {
      // member variables
      private _verticalSpeed: number;
      private _horizontalSpeed: number;
  
      /**
       * Creates an instance of Cloud.
       * @memberof Enemy_dancer_kid_lv3
       */
      constructor() {
        super("dancer");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds(): void {
        // check bottom boundary
        if (this.x<=600 || this.x>=800) {
          this.Reset();
        }
      }
  
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        this._horizontalSpeed = 1;
        this.x=700;
        this.y=525;
        this.Reset();
      }
  
      public Update(): void {
        this.x += this._horizontalSpeed;
        this._checkBounds();
      }
  
      public Reset(): void {
        this._horizontalSpeed = -this._horizontalSpeed // between -2 and 2 ppf     
      }
    }
  }