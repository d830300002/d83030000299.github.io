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
    var Background_anime_lose = /** @class */ (function (_super) {
        __extends(Background_anime_lose, _super);
        // constructors
        function Background_anime_lose() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("background_anime_lose")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Background_anime_lose.prototype._checkBounds = function () {
            // check the top boundary
            if (this.x <= -900) {
                this.Reset();
            }
        };
        // public methods
        Background_anime_lose.prototype.Start = function () {
            this._horizontalSpeed = 5; // the sky will move down 5ppf
            this.Reset();
        };
        Background_anime_lose.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Background_anime_lose.prototype.Reset = function () {
            this.x = 900;
            this.y = Math.floor(Math.random() * 400);
        };
        return Background_anime_lose;
    }(createjs.Bitmap));
    objects.Background_anime_lose = Background_anime_lose;
})(objects || (objects = {}));
//# sourceMappingURL=background_anime_lose.js.map