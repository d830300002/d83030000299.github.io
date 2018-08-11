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
    var Background_bottom_start = /** @class */ (function (_super) {
        __extends(Background_bottom_start, _super);
        // constructors
        function Background_bottom_start() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("background_bottom_start")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Background_bottom_start.prototype._checkBounds = function () {
        };
        // public methods
        Background_bottom_start.prototype.Start = function () {
        };
        Background_bottom_start.prototype.Update = function () {
        };
        Background_bottom_start.prototype.Reset = function () {
        };
        return Background_bottom_start;
    }(createjs.Bitmap));
    objects.Background_bottom_start = Background_bottom_start;
})(objects || (objects = {}));
//# sourceMappingURL=background_bottom_start.js.map