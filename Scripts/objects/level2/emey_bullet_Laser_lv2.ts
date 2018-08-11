namespace objects {
    export class Enemy_bullet_Laser_lv2 extends objects.GameObject {
      // member variables
      private _horizontalSpeed: number;
  
      /**
       * 
       * @memberof Enemy_bullet_Laser_lv2;
       */
      constructor() {
        super("enemy_bullet_laser_lv2");
  
        this.Start();
      }
  
      // private methods
   
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        this._horizontalSpeed = 10;
        this.x = 0;
        this.y=0;

      }
  
      public Update(): void {
        this.x -= this._horizontalSpeed;    
      }
  
      public Reset(): void {
             
      }
    }
  }