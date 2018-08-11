namespace objects {
    export class Player_bullet_type_1_icon extends objects.GameObject {
      // member variables
      private _horizontalSpeed: number;
  
      /**
       * Creates an instance of Plane.
       * @memberof Player_bullet_type_1_icon;
       */
      constructor() {
        super("player_bullet_type_1_icon");
  
        this.Start();
      }
  
      // private methods
  
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;      
        this.x=570;
        this.y=30;
      }
  
      public Update(): void {
    
      }
  
      public Reset(): void {
  
      }
    }
  }