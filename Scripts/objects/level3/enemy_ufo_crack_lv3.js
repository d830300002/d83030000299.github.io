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
    var Enemy_ufo_crack_lv3 = /** @class */ (function (_super) {
        __extends(Enemy_ufo_crack_lv3, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Enemy_ufo_crack_lv3;
         */
        function Enemy_ufo_crack_lv3() {
            var _this = _super.call(this, "enemy_ufo_crack_lv3") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Enemy_ufo_crack_lv3.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        Enemy_ufo_crack_lv3.prototype.Update = function () {
        };
        Enemy_ufo_crack_lv3.prototype.Reset = function () {
        };
        return Enemy_ufo_crack_lv3;
    }(objects.GameObject));
    objects.Enemy_ufo_crack_lv3 = Enemy_ufo_crack_lv3;
})(objects || (objects = {}));
//# sourceMappingURL=enemy_ufo_crack_lv3.js.map