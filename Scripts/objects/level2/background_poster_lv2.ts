namespace objects {
    export class Background_poster_lv2 extends objects.GameObject {
      // member variables
      private _horizontalSpeed: number;
  
      /**
       * 
       * @memberof  Background_shelves_1_lv2;
       */
      constructor() {
        super("background_poster_lv2");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds():void {
        // check the top boundary
        if(this.x <= -250) {
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
        this.x=1000;
        this.y=50;   
      }
    }
  }