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
    var Background_top_start = /** @class */ (function (_super) {
        __extends(Background_top_start, _super);
        // constructors
        function Background_top_start() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("background_top_start")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Background_top_start.prototype._checkBounds = function () {
        };
        // public methods
        Background_top_start.prototype.Start = function () {
        };
        Background_top_start.prototype.Update = function () {
        };
        Background_top_start.prototype.Reset = function () {
        };
        return Background_top_start;
    }(createjs.Bitmap));
    objects.Background_top_start = Background_top_start;
})(objects || (objects = {}));
//# sourceMappingURL=background_top_start.js.map