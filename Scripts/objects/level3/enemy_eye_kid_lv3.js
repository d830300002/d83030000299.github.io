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
    var Enemy_eye_kid_lv3 = /** @class */ (function (_super) {
        __extends(Enemy_eye_kid_lv3, _super);
        /**
         * Creates an instance of Cloud.
         * @memberof Enemy_eye_kid_lv3
         */
        function Enemy_eye_kid_lv3() {
            var _this = _super.call(this, "enemy_eye_kid_lv3") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Enemy_eye_kid_lv3.prototype._checkBounds = function () {
            // check the top boundary
            if (this.x <= -200) {
                this.Reset();
            }
        };
        // public methods
        Enemy_eye_kid_lv3.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._horizontalSpeed = 5;
            this.Reset();
        };
        Enemy_eye_kid_lv3.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Enemy_eye_kid_lv3.prototype.Reset = function () {
            this.x = 1600;
            this.y = 325;
        };
        return Enemy_eye_kid_lv3;
    }(objects.GameObject));
    objects.Enemy_eye_kid_lv3 = Enemy_eye_kid_lv3;
})(objects || (objects = {}));
//# sourceMappingURL=enemy_eye_kid_lv3.js.map