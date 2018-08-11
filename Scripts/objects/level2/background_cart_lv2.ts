namespace objects {
    export class Background_cart_lv2 extends objects.GameObject {
      // member variables
      private _horizontalSpeed: number;
  
      /**
       * 
       * @memberof  Background_cart_lv2;
       */
      constructor() {
        super("background_cart_lv2");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds():void {
        // check the top boundary
        if(this.x <= -650) {
            this.Reset();
        }
    }

      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        this._horizontalSpeed = 10; 
        this.Reset();
      }
  
      public Update(): void {    
        this.x -= this._horizontalSpeed;           
        this._checkBounds();
      }
      
  
      public Reset(): void {       
        this.x=1150;
        this.y=400;   
      }
    }
  }