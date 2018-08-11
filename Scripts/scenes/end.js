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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // constructors
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        End.prototype.Start = function () {
            this.sound_wind = createjs.Sound.play("sound_wind");
            this.sound_wind.loop = -1;
            this.sound_wind.volume = 0.5;
            this._menu_button = new objects.Button("menu_button", 450, 355, true);
            this._background_win = new objects.Background_win();
            this.Main();
        };
        End.prototype.Update = function () {
        };
        End.prototype.Reset = function () {
        };
        End.prototype.Destroy = function () {
            this.sound_wind.stop();
            this.removeAllChildren();
        };
        End.prototype.Main = function () {
            this.addChild(this._background_win);
            this.addChild(this._menu_button);
            console.log("Starting - END SCENE");
            this._menu_button.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
                managers.Game.ScoreBoard.Reset_restart();
            }, this);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            this.addChild(managers.Game.ScoreBoard.HighScoreLabel);
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map