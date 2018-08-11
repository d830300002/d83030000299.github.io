namespace managers {
    export class Collision_2{
      public static check(
        object1: objects.GameObjectAnimation,
        object2: objects.GameObject,
        isbackgounrd_object: boolean
      ): boolean {
        let P1 = new math.Vec2(object1.x, object1.y);
        let P2 = new math.Vec2(object2.x, object2.y);
  
        if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
          if (!object2.isColliding) {
            object2.isColliding = true;
  
            if (isbackgounrd_object) {
              object2.alpha = 0.5;
              setTimeout(() => {
                object2.alpha = 1;
              }, 1000)
            }
            return true;
          }
        }
        else {
          object2.isColliding = false;
          return false;
        }
      }
    }
  }
  