namespace objects {
    export class Enemy_eye_kid_lv3 extends objects.GameObject {
      // member variables  
      private _horizontalSpeed:number;
      /**
       * Creates an instance of Cloud.
       * @memberof Enemy_eye_kid_lv3
       */
      constructor() {
        super("enemy_eye_kid_lv3");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds():void {
        // check the top boundary
        if(this.x <= -200) {
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
        this.x=1600;
        this.y=325;
      }
    }
  }