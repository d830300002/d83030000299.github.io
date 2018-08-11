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
    var Lose = /** @class */ (function (_super) {
        __extends(Lose, _super);
        // constructors
        function Lose() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Lose.prototype.Start = function () {
            this.sound_wind = createjs.Sound.play("sound_wind");
            this.sound_wind.loop = -1;
            this.sound_wind.volume = 0.5;
            this._menu_button = new objects.Button("menu_button", 450, 300, true);
            this._re_button = new objects.Button("re_button", 450, 260, true);
            this._background_anime_lose = new objects.Background_anime_lose();
            this._background_bottom = new objects.Background_bottom_start();
            this._background_top = new objects.Background_top_lose();
            this.Main();
        };
        Lose.prototype.Update = function () {
            this._background_anime_lose.Update();
        };
        Lose.prototype.Reset = function () {
            this.sound_wind.stop();
            this.removeAllChildren();
        };
        Lose.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Lose.prototype.Main = function () {
            console.log("Starting - LOSE SCENE");
            this.addChild(this._background_bottom);
            this.addChild(this._background_anime_lose);
            this.addChild(this._background_top);
            this.addChild(this._re_button);
            this.addChild(this._menu_button);
            this._re_button.on("click", function () {
                switch (managers.Game.ScoreBoard.Level) {
                    case 1:
                        managers.Game.CurrentState = config.Scene.LV1;
                        managers.Game.ScoreBoard.Reset_restart();
                        break;
                    case 2:
                        managers.Game.CurrentState = config.Scene.LV2;
                        managers.Game.ScoreBoard.Reset_restart();
                        break;
                    case 3:
                        managers.Game.CurrentState = config.Scene.LV3;
                        managers.Game.ScoreBoard.Reset_restart();
                        break;
                    default:
                        managers.Game.CurrentState = config.Scene.START;
                        managers.Game.ScoreBoard.Reset_restart();
                        break;
                }
            }, this);
            this._menu_button.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
                managers.Game.ScoreBoard.Reset_restart();
            }, this);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
        };
        return Lose;
    }(objects.Scene));
    scenes.Lose = Lose;
})(scenes || (scenes = {}));
//# sourceMappingURL=lose.js.map