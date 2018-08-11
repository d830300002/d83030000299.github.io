namespace objects {
    export class Player_bullet_type_2 extends objects.GameObject {
      // member variables
      private _horizontalSpeed: number;
  
      /**
       * Creates an instance of Plane.
       * @memberof Player_bullet_type_2;
       */
      constructor() {
        super("player_bullet_type_2");
  
        this.Start();
      }
  
      // private methods
  
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        this._horizontalSpeed = 10;
       
      }
  
      public Update(): void {
        this.x += this._horizontalSpeed;
      }
  
      public Reset(): void {
  
      }
    }
  }