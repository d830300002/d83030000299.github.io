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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            this.sound_wind = createjs.Sound.play("sound_wind");
            this.sound_wind.loop = -1;
            this.sound_wind.volume = 0.5;
            this._background_anime = new objects.Background_anime_start();
            this._background_top = new objects.Background_top_start();
            this._background_bottom = new objects.Background_bottom_start();
            this._new_button = new objects.Button("new_button", 450, 260, true);
            this._old_button = new objects.Button("old_button", 450, 300, true);
            this._exit_button = new objects.Button("exit_button", 450, 340, true);
            this.Main();
        };
        Start.prototype.Update = function () {
            this._background_anime.Update();
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Destroy = function () {
            this.sound_wind.stop();
            this.removeAllChildren();
        };
        Start.prototype.Main = function () {
            console.log("Starting - START SCENE");
            this.addChild(this._background_bottom);
            this.addChild(this._background_anime);
            this.addChild(this._background_top);
            this.addChild(this._new_button);
            this.addChild(this._old_button);
            this.addChild(this._exit_button);
            this._new_button.on("click", function () {
                managers.Game.CurrentState = config.Scene.INS;
            }, this);
            this._old_button.on("click", function () {
                managers.Game.CurrentState = config.Scene.SK;
            }, this);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map