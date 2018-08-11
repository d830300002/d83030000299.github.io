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
var scenes;
(function (scenes) {
    var Level_skip = /** @class */ (function (_super) {
        __extends(Level_skip, _super);
        // constructors
        function Level_skip() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Level_skip.prototype.Start = function () {
            this._level1_button = new objects.Button("level1_button", 150, 225, true);
            this._level2_button = new objects.Button("level2_button", 450, 225, true);
            this._level3_button = new objects.Button("level3_button", 750, 225, true);
            this.Main();
        };
        Level_skip.prototype.Update = function () {
        };
        Level_skip.prototype.Reset = function () {
        };
        Level_skip.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Level_skip.prototype.Main = function () {
            this.addChild(this._level1_button);
            this.addChild(this._level2_button);
            this.addChild(this._level3_button);
            this._level1_button.on("click", function () {
                managers.Game.CurrentState = config.Scene.LV1;
            }, this);
            this._level2_button.on("click", function () {
                managers.Game.CurrentState = config.Scene.LV2;
            }, this);
            this._level3_button.on("click", function () {
                managers.Game.CurrentState = config.Scene.LV3;
            }, this);
        };
        return Level_skip;
    }(objects.Scene));
    scenes.Level_skip = Level_skip;
})(scenes || (scenes = {}));
//# sourceMappingURL=level_skip.js.map