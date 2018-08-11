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
    var Ins_start = /** @class */ (function (_super) {
        __extends(Ins_start, _super);
        // constructors
        function Ins_start() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("ins_start")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Ins_start.prototype._checkBounds = function () {
        };
        // public methods
        Ins_start.prototype.Start = function () {
        };
        Ins_start.prototype.Update = function () {
        };
        Ins_start.prototype.Reset = function () {
        };
        return Ins_start;
    }(createjs.Bitmap));
    objects.Ins_start = Ins_start;
})(objects || (objects = {}));
//# sourceMappingURL=ins_start.js.map