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
    var Background_sky_lv3 = /** @class */ (function (_super) {
        __extends(Background_sky_lv3, _super);
        // constructors
        function Background_sky_lv3() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("background_sky_lv3")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Background_sky_lv3.prototype._checkBounds = function () {
            // check the top boundary
            if (this.x <= -900) {
                this.Reset();
            }
        };
        // public methods
        Background_sky_lv3.prototype.Start = function () {
            this._horizontalSpeed = 5; // the sky will move down 5ppf
            this.Reset();
        };
        Background_sky_lv3.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Background_sky_lv3.prototype.Reset = function () {
            this.x = 0;
        };
        return Background_sky_lv3;
    }(createjs.Bitmap));
    objects.Background_sky_lv3 = Background_sky_lv3;
})(objects || (objects = {}));
//# sourceMappingURL=background_sky_lv3.js.map