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
    var Background_shelves_lv2 = /** @class */ (function (_super) {
        __extends(Background_shelves_lv2, _super);
        // constructors
        function Background_shelves_lv2() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("background_shelves_lv2")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Background_shelves_lv2.prototype._checkBounds = function () {
            // check the top boundary
            if (this.x <= -900) {
                this.Reset();
            }
        };
        // public methods
        Background_shelves_lv2.prototype.Start = function () {
            this._horizontalSpeed = 5; // the sky will move down 5ppf
            this.Reset();
        };
        Background_shelves_lv2.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Background_shelves_lv2.prototype.Reset = function () {
            this.x = 0;
        };
        return Background_shelves_lv2;
    }(createjs.Bitmap));
    objects.Background_shelves_lv2 = Background_shelves_lv2;
})(objects || (objects = {}));
//# sourceMappingURL=background_shelves_lv2.js.map