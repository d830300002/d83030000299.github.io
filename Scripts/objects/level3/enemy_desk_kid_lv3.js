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
    var Enemy_desk_kid_lv3 = /** @class */ (function (_super) {
        __extends(Enemy_desk_kid_lv3, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Enemy_moto_kid_lv3
         */
        function Enemy_desk_kid_lv3() {
            var _this = _super.call(this, "dancer") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Enemy_desk_kid_lv3.prototype._checkBounds = function () {
            if (this.x <= -200) {
                this.Reset();
            }
        };
        // public methods
        Enemy_desk_kid_lv3.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._horizontalSpeed = 5;
            this.Reset();
        };
        Enemy_desk_kid_lv3.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Enemy_desk_kid_lv3.prototype.Reset = function () {
            this.y = 330;
            this.x = 1200;
        };
        return Enemy_desk_kid_lv3;
    }(objects.GameObjectAnimation));
    objects.Enemy_desk_kid_lv3 = Enemy_desk_kid_lv3;
})(objects || (objects = {}));
//# sourceMappingURL=enemy_desk_kid_lv3.js.map