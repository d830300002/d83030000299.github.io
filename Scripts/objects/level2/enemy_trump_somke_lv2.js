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
    var Enemy_trump_smoke_lv2 = /** @class */ (function (_super) {
        __extends(Enemy_trump_smoke_lv2, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Enemy_trump_smoke_lv2;
         */
        function Enemy_trump_smoke_lv2() {
            var _this = _super.call(this, "enemy_trump_smoke_lv2") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Enemy_trump_smoke_lv2.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        Enemy_trump_smoke_lv2.prototype.Update = function () {
        };
        Enemy_trump_smoke_lv2.prototype.Reset = function () {
        };
        return Enemy_trump_smoke_lv2;
    }(objects.GameObject));
    objects.Enemy_trump_smoke_lv2 = Enemy_trump_smoke_lv2;
})(objects || (objects = {}));
//# sourceMappingURL=enemy_trump_somke_lv2.js.map