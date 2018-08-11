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
    var Enemy_moto_kid_lv3 = /** @class */ (function (_super) {
        __extends(Enemy_moto_kid_lv3, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Enemy_moto_kid_lv3
         */
        function Enemy_moto_kid_lv3() {
            var _this = _super.call(this, "moto") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Enemy_moto_kid_lv3.prototype._checkBounds = function () {
            if (this.x < 0) {
                this.Reset_Left();
            }
            else if (this.x > 900) {
                this.Reset_Right();
            }
        };
        // public methods
        Enemy_moto_kid_lv3.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = 800;
            this._horizontalSpeed = 5;
        };
        Enemy_moto_kid_lv3.prototype.Update = function () {
            this.x += this._horizontalSpeed;
            this._checkBounds();
        };
        Enemy_moto_kid_lv3.prototype.Reset_Left = function () {
            this._horizontalSpeed = 5;
        };
        Enemy_moto_kid_lv3.prototype.Reset_Right = function () {
            this.y = 0 + this.halfHeight + 5;
            this._horizontalSpeed = -5;
        };
        return Enemy_moto_kid_lv3;
    }(objects.GameObjectAnimation));
    objects.Enemy_moto_kid_lv3 = Enemy_moto_kid_lv3;
})(objects || (objects = {}));
//# sourceMappingURL=enemy_moto_kid_lv3.js.map