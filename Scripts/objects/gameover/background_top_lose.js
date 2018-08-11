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
    var Background_top_lose = /** @class */ (function (_super) {
        __extends(Background_top_lose, _super);
        // constructors
        function Background_top_lose() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("background_top_lose")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Background_top_lose.prototype._checkBounds = function () {
        };
        // public methods
        Background_top_lose.prototype.Start = function () {
        };
        Background_top_lose.prototype.Update = function () {
        };
        Background_top_lose.prototype.Reset = function () {
        };
        return Background_top_lose;
    }(createjs.Bitmap));
    objects.Background_top_lose = Background_top_lose;
})(objects || (objects = {}));
//# sourceMappingURL=background_top_lose.js.map