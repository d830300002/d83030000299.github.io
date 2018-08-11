var managers;
(function (managers) {
    var Collision_2 = /** @class */ (function () {
        function Collision_2() {
        }
        Collision_2.check = function (object1, object2, isbackgounrd_object) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    if (isbackgounrd_object) {
                        object2.alpha = 0.5;
                        setTimeout(function () {
                            object2.alpha = 1;
                        }, 1000);
                    }
                    return true;
                }
            }
            else {
                object2.isColliding = false;
                return false;
            }
        };
        return Collision_2;
    }());
    managers.Collision_2 = Collision_2;
})(managers || (managers = {}));
//# sourceMappingURL=collision_2.js.map