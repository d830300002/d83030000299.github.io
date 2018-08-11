var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var GameObjectAnimation = /** @class */ (function (_super) {
        __extends(GameObjectAnimation, _super);
        // constructors
        function GameObjectAnimation(imageString) {
            var _this = _super.call(this, managers.Game.DancerSpriteSheet, imageString) || this;
            _this.name = imageString;
            _this._initialize();
            return _this;
        }
        // private methods
        GameObjectAnimation.prototype._initialize = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.isColliding = false;
            this.invincible_time = false;
        };
        // public methods
        GameObjectAnimation.prototype.Start = function () {
        };
        GameObjectAnimation.prototype.Update = function () {
        };
        GameObjectAnimation.prototype.Reset = function () {
        };
        return GameObjectAnimation;
    }(createjs.Sprite));
    objects.GameObjectAnimation = GameObjectAnimation;
})(objects || (objects = {}));
//# sourceMappingURL=gameobjectanimation.js.map