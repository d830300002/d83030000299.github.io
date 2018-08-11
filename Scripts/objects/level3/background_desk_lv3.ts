namespace objects {
    export class Background_desk_lv3 extends objects.GameObject {
      // member variables
      private _horizontalSpeed: number;
  
      /**
       * 
       * @memberof Background_desk_lv3;
       */
      constructor() {
        super("background_desk_lv3");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds():void {
        // check the top boundary
        if(this.x <=-200) {
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
        this.x=1200;
        this.y=498;      
      }
    }
  }