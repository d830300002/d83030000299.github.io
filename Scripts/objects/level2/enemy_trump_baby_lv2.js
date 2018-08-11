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
    var Enemy_trump_baby_lv2 = /** @class */ (function (_super) {
        __extends(Enemy_trump_baby_lv2, _super);
        /**
         * Creates an instance of Cloud.
         * @memberof Enemy_trump_baby_lv2
         */
        function Enemy_trump_baby_lv2() {
            var _this = _super.call(this, "enemy_trump_baby_lv2") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Enemy_trump_baby_lv2.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x <= 600 || this.x >= 800) {
                this.Reset();
            }
        };
        // public methods
        Enemy_trump_baby_lv2.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._horizontalSpeed = 1;
            this.x = 700;
            this.y = 525;
            this.Reset();
        };
        Enemy_trump_baby_lv2.prototype.Update = function () {
            this.x += this._horizontalSpeed;
            this._checkBounds();
        };
        Enemy_trump_baby_lv2.prototype.Reset = function () {
            this._horizontalSpeed = -this._horizontalSpeed; // between -2 and 2 ppf     
        };
        return Enemy_trump_baby_lv2;
    }(objects.GameObject));
    objects.Enemy_trump_baby_lv2 = Enemy_trump_baby_lv2;
})(objects || (objects = {}));
//# sourceMappingURL=enemy_trump_baby_lv2.js.map