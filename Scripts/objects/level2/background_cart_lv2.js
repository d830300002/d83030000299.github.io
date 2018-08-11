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
    var Background_cart_lv2 = /** @class */ (function (_super) {
        __extends(Background_cart_lv2, _super);
        /**
         *
         * @memberof  Background_cart_lv2;
         */
        function Background_cart_lv2() {
            var _this = _super.call(this, "background_cart_lv2") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Background_cart_lv2.prototype._checkBounds = function () {
            // check the top boundary
            if (this.x <= -650) {
                this.Reset();
            }
        };
        // public methods
        Background_cart_lv2.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._horizontalSpeed = 10;
            this.Reset();
        };
        Background_cart_lv2.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Background_cart_lv2.prototype.Reset = function () {
            this.x = 1150;
            this.y = 400;
        };
        return Background_cart_lv2;
    }(objects.GameObject));
    objects.Background_cart_lv2 = Background_cart_lv2;
})(objects || (objects = {}));
//# sourceMappingURL=background_cart_lv2.js.map