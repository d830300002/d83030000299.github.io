namespace objects {
    export class Enemy_trump_crack_lv2 extends objects.GameObject {
      // member variables
      private _horizontalSpeed: number;
  
      /**
       * Creates an instance of Plane.
       * @memberof Enemy_trump_crack_lv2;
       */
      constructor() {
        super("enemy_trump_crack_lv2");
  
        this.Start();
      }
  
      // private methods
   
      // public methods
      public Start(): void { 
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
      }
  
      public Update(): void {    
      }
  
      public Reset(): void {           
      }
    }
  }