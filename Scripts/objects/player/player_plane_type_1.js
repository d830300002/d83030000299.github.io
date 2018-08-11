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
    var Player_plane_type_1 = /** @class */ (function (_super) {
        __extends(Player_plane_type_1, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Player_plane_type_1;
         */
        function Player_plane_type_1() {
            var _this = _super.call(this, "player_plane_type_1") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // private methods
        Player_plane_type_1.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x >= 100) {
                this.Reset();
            }
        };
        // public methods
        Player_plane_type_1.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._horizontalSpeed = 2;
        };
        Player_plane_type_1.prototype.Update = function () {
            this.x += this._horizontalSpeed;
            this._checkBounds();
        };
        Player_plane_type_1.prototype.Reset = function () {
            this._horizontalSpeed = 0;
        };
        return Player_plane_type_1;
    }(objects.GameObject));
    objects.Player_plane_type_1 = Player_plane_type_1;
})(objects || (objects = {}));
//# sourceMappingURL=player_plane_type_1.js.map