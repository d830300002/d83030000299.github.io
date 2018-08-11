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
    var Level_1 = /** @class */ (function (_super) {
        __extends(Level_1, _super);
        // constructors
        function Level_1() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Level_1.prototype._keyDown = function (event) {
            switch (event.keyCode) {
                case 38:
                    this._move = true;
                    break;
            }
        };
        Level_1.prototype._keyUp = function (event) {
            switch (event.keyCode) {
                case 38:
                    this._move = false;
                    break;
                case 32:
                    if (!this._player_upgrade) {
                        if (this._player_bullets.length < 3) {
                            var sound_bulletshoot = createjs.Sound.play("sound_bulletshoot");
                            sound_bulletshoot.volume = 0.3;
                            this._player_bullet = new objects.Player_bullet_type_0();
                            this._player_bullet.y = this._player_plane.y;
                            this._player_bullet.x = this._player_plane.x;
                            this.addChild(this._player_bullet);
                            this._player_bullets.push(this._player_bullet);
                        }
                    }
                    if (this._player_upgrade) {
                        if (this._player_bullets.length < 6) {
                            var sound_bulletshoot = createjs.Sound.play("sound_bulletshoot");
                            sound_bulletshoot.volume = 0.3;
                            for (var i = 0; i < 2; i++) {
                                this._player_bullet = new objects.Player_bullet_type_0();
                                this._player_bullet.y = this._player_plane.y + i * 20;
                                this._player_bullet.x = this._player_plane.x + i * 5;
                                this.addChild(this._player_bullet);
                                this._player_bullets.push(this._player_bullet);
                            }
                        }
                    }
                    console.log(this.children);
                    console.log(this._player_bullets.length);
                    break;
            }
        };
        Level_1.prototype._alien_action = function () {
            var _this = this;
            this._enemy_bullet_stones.push(this._enemy_bullet_stone);
            setInterval(function () {
                createjs.Tween.get(_this._enemy_alien).to({ x: Math.floor(Math.random() * 10) * 20 + 650 }, 1000);
                setTimeout(function () {
                    _this._enemy_bullet_stone.y = 420;
                    _this._enemy_bullet_stone.x = _this._enemy_alien.x - 60;
                    createjs.Tween.get(_this._enemy_bullet_stone).to({ y: 300 }, 1000);
                }, 1000);
                setTimeout(function () {
                    managers.Tracking_bullets.runTracking(_this._player_plane, _this._enemy_bullet_stone);
                }, 2000);
            }, 3000);
        };
        // public methods
        Level_1.prototype.Start = function () {
            //background sound
            this.sound_wind = createjs.Sound.play("sound_wind");
            this.sound_wind.loop = -1;
            this.sound_wind.volume = 0.5;
            //hits
            this._hits = 0;
            //background
            this._background_sky = new objects.Background_sky_lv1();
            this._background_wall = new objects.Background_wall_lv1();
            this._background_tree = new objects.Background_tree_lv1();
            this._background_slide = new objects.Background_slide_lv1();
            this._background_street_lamp = new objects.Background_street_lamp_lv1();
            //player
            this._player_plane = new objects.Player_plane();
            this._player_plane_type_0 = new objects.Player_plane_type_0();
            this._player_bullets = new Array();
            this._player_explosion_type_0 = new objects.Player_explosion_type_0();
            this._player_explosion_type_1 = new objects.Player_explosion_type_1();
            this._player_upgrade = false;
            //supply
            this._supply = new objects.Supply();
            this._supply_active = false;
            this._parachute = new objects.Parachute;
            this._explosion_type_0 = new objects.Explosion_type_0;
            //enemy
            this._enemy_ufo = new objects.Enemy_ufo_lv1();
            this._enemy_bullet_laser = new objects.Enemy_bullet_Laser_lv1();
            this._enemy_bullet_stones = new Array();
            this._enemy_alien = new objects.Enemy_alien_kid_lv1();
            this._enemy_bullet_stone = new objects.Enemy_bullet_stone_Lv1();
            this._enemy_ufo_crack = new objects.Enemy_ufo_crack_lv1;
            this._enemy_ufo_smoke = new objects.Enemy_ufo_smoke_lv1;
            //label
            this._label_start = new objects.Label("Beat the UFO before the alien kids help !", "20px", "Ink Free", "#000000", 450, 150, true);
            this._label_finalBattle = new objects.Label("Continue to attack ufo!!!", "20px", "Ink Free", "#000000", 450, 150, true);
            this._label_gameFinish = new objects.Label("Good job! Who is the next unfortunate kid?", "20px", "Ink Free", "#000000", 450, 150, true);
            //falling function start
            this._move = false;
            //set up final battle
            //keyboard listener
            window.onkeydown = this._keyDown.bind(this);
            window.onkeyup = this._keyUp.bind(this);
            this.Main();
        };
        Level_1.prototype.Update = function () {
            var _this = this;
            // finish the level
            if (this._hits >= 25) {
                this.removeChild(this._enemy_bullet_stone, this._enemy_bullet_laser);
                this._player_bullets.forEach(function (bullet) {
                    _this.removeChild(bullet);
                });
                this._enemy_ufo.rotation++;
                this.addChild(this._label_gameFinish);
                this._player_plane_type_0.alpha = 0;
                createjs.Tween.get(this._enemy_ufo).to({ x: 1000, y: 500 }, 2000);
                createjs.Tween.get(this._enemy_alien).to({ y: 600 }, 2000);
                createjs.Tween.get(this._player_plane).to({ x: 1500 }, 2000);
                setTimeout(function () {
                    managers.Game.CurrentState = config.Scene.LV2;
                }, 4000);
            }
            this._background_sky.Update();
            this._background_wall.Update();
            this._background_street_lamp.Update();
            this._background_tree.Update();
            this._background_slide.Update();
            // still in the level
            if (this._hits < 25) {
                switch (this._move) {
                    case true:
                        this._player_plane.MoveUp();
                        break;
                    case false:
                        this._player_plane.MoveDown();
                        break;
                }
                if (this._supply_active) {
                    this._supply.Update();
                }
                this._enemy_ufo.Update();
                this._enemy_bullet_laser.Update();
                //enemy bullet reset
                if (this._enemy_bullet_laser.x < 0) {
                    var sound_lasershoot = createjs.Sound.play("sound_lazershoot");
                    sound_lasershoot.volume = 0.3;
                    this._enemy_bullet_laser.y = this._enemy_ufo.y;
                    this._enemy_bullet_laser.x =
                        this._enemy_ufo.x - this._enemy_bullet_laser.halfWidth;
                }
                //player vs background objects
                if (managers.Collision.check(this._player_plane, this._background_tree, true) ||
                    managers.Collision.check(this._player_plane, this._background_slide, true) ||
                    managers.Collision.check(this._player_plane, this._background_street_lamp, true)) {
                    if (!this._player_plane.invincible_time) {
                        managers.Explosion_type_0.runExplosion(this._player_explosion_type_1);
                        managers.Game.ScoreBoard.Lives -= 1;
                        managers.Twinking.runTwinking(this._player_plane);
                    }
                }
                //player vs supply
                if (managers.Collision.check(this._player_plane, this._supply, false)) {
                    this._player_upgrade = true;
                    var sound_player_upgrade = createjs.Sound.play("sound_player_upgrade");
                    sound_player_upgrade.volume = 1;
                    this._supply.y = -50;
                    this._supply.x = config.Screen.HALF_WIDTH;
                    this._supply.Reset();
                }
                //enemy vs background objects
                if (managers.Collision.check(this._enemy_ufo, this._background_tree, false) ||
                    managers.Collision.check(this._enemy_ufo, this._background_slide, false) ||
                    managers.Collision.check(this._enemy_ufo, this._background_street_lamp, false)) {
                    if (!this._enemy_ufo.invincible_time) {
                        managers.Blinking.runBlinking(this._enemy_ufo);
                        this._enemy_ufo.ResetX();
                        this._enemy_ufo.ResetY();
                    }
                }
                //enemy bullet vs player
                if (managers.Collision.check(this._player_plane, this._enemy_bullet_laser, false)) {
                    this._enemy_bullet_laser.y = this._enemy_ufo.y;
                    this._enemy_bullet_laser.x =
                        this._enemy_ufo.x - this._enemy_bullet_laser.halfWidth;
                    if (!this._player_plane.invincible_time) {
                        managers.Explosion_type_0.runExplosion(this._player_explosion_type_0);
                        managers.Game.ScoreBoard.Lives -= 1;
                        managers.Twinking.runTwinking(this._player_plane);
                    }
                }
                if (managers.Collision.check(this._player_plane, this._enemy_bullet_stone, false)) {
                    if (!this._player_plane.invincible_time) {
                        managers.Explosion_type_0.runExplosion(this._player_explosion_type_0);
                        managers.Game.ScoreBoard.Lives -= 1;
                        managers.Twinking.runTwinking(this._player_plane);
                    }
                }
                //enemy bullet vs supply
                if (managers.Collision.check(this._supply, this._enemy_bullet_laser, false)) {
                    managers.Explosion_type_1.runExplosion(this._explosion_type_0, this._supply);
                    this._supply.Reset();
                }
                if (managers.Collision.check(this._supply, this._enemy_bullet_stone, false)) {
                    if (!this._player_plane.invincible_time) {
                        managers.Explosion_type_1.runExplosion(this._explosion_type_0, this._supply);
                        this._supply.Reset();
                    }
                }
                //player bullet vs enemy
                //player bullet vs supply 
                this._player_bullets.forEach(function (bullet) {
                    bullet.Update();
                    if (managers.Collision.check(_this._enemy_ufo, bullet, false)) {
                        //explosion effect
                        managers.Explosion_type_1.runExplosion(_this._explosion_type_0, bullet);
                        managers.Game.ScoreBoard.Score += 100;
                        _this._hits += 1;
                        _this._player_bullets.splice(_this._player_bullets.indexOf(bullet), 1);
                        _this.removeChild(bullet);
                    }
                    else if (managers.Collision.check(_this._enemy_alien, bullet, false)) {
                        _this._enemy_alien.alpha = 0.1;
                        setTimeout(function () {
                            _this._enemy_alien.alpha = 1;
                        }, 1000);
                    }
                    else if (managers.Collision.check(_this._supply, bullet, false)) {
                        managers.Explosion_type_1.runExplosion(_this._explosion_type_0, bullet);
                        _this._supply.Reset();
                        _this._player_bullets.splice(_this._player_bullets.indexOf(bullet), 1);
                        _this.removeChild(bullet);
                    }
                    else if (bullet.x > config.Screen.WIDTH) {
                        _this._player_bullets.splice(_this._player_bullets.indexOf(bullet), 1);
                        _this.removeChild(bullet);
                    }
                });
                switch (this._hits) {
                    case 5:
                        this._enemy_ufo_crack.alpha = 0.5;
                        break;
                    case 10:
                        this._supply_active = true;
                        this._enemy_ufo_crack.alpha = 1;
                        break;
                    case 15:
                        this._enemy_ufo_smoke.alpha = 0.4;
                        break;
                    case 20:
                        this._enemy_ufo_smoke.alpha = 0.8;
                        break;
                }
            }
            this._enemy_ufo_smoke.x = this._enemy_ufo_crack.x = this._enemy_ufo.x;
            this._enemy_ufo_smoke.y = this._enemy_ufo_crack.y = this._enemy_ufo.y;
            if (!this._player_upgrade) {
                this._player_plane_type_0.y = this._player_plane.y;
                this._player_plane_type_0.x = -50;
            }
            if (this._player_upgrade) {
                this._player_plane_type_0.y = this._player_plane.y;
                this._player_plane_type_0.Update();
            }
            this._player_explosion_type_1.y = this._player_explosion_type_0.y = this._player_plane.y;
            this._player_explosion_type_1.x = this._player_explosion_type_0.x = this._player_plane.x;
            this._parachute.x = this._supply.x;
            this._parachute.y = this._supply.y - this._supply.halfHeight - this._parachute.halfHeight;
        };
        Level_1.prototype.Reset = function () { };
        Level_1.prototype.Destroy = function () {
            this.sound_wind.stop();
            this.removeAllChildren();
        };
        Level_1.prototype.Main = function () {
            var _this = this;
            this.addChild(this._background_sky);
            this.addChild(this._enemy_alien);
            this.addChild(this._enemy_bullet_stone);
            this.addChild(this._background_wall);
            this.addChild(this._background_tree);
            this.addChild(this._background_slide);
            this.addChild(this._background_street_lamp);
            this.addChild(this._player_plane);
            this.addChild(this._player_plane_type_0);
            this.addChild(this._player_explosion_type_0);
            this._player_explosion_type_0.alpha = 0;
            this.addChild(this._player_explosion_type_1);
            this._player_explosion_type_1.alpha = 0;
            this.addChild(this._enemy_ufo);
            this.addChild(this._enemy_bullet_laser);
            this.addChild(this._enemy_ufo_crack);
            this._enemy_ufo_crack.alpha = 0;
            this.addChild(this._enemy_ufo_smoke);
            this._enemy_ufo_smoke.alpha = 0;
            this.addChild(this._supply);
            this.addChild(this._parachute);
            this.addChild(this._explosion_type_0);
            this._explosion_type_0.alpha = 0;
            //mouse fire
            /*
                  this.on("click",function(){
                       var bulletSound = createjs.Sound.play("bulletshoot");
                       bulletSound.volume = 0.5;
                       this._player_bullet= new objects.Player_bullet_type_0();
                       this._player_bullet.y=this._player_plane.y;
                       this.addChild(this._player_bullet);
                       this._player_bullets.push(this._player_bullet);
                       console.log(this.children)
       
                   },this);
                   */
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            this.addChild(this._label_start);
            setTimeout(function () {
                _this.removeChild(_this._label_start);
            }, 4000);
            setTimeout(function () {
                _this.addChild(_this._label_finalBattle);
                createjs.Tween.get(_this._enemy_alien).to({ y: 350 }, 1000);
            }, 14000);
            setTimeout(this._alien_action.bind(this), 15000);
            setTimeout(function () {
                _this.removeChild(_this._label_finalBattle);
            }, 18000);
        };
        return Level_1;
    }(objects.Scene));
    scenes.Level_1 = Level_1;
})(scenes || (scenes = {}));
//# sourceMappingURL=level_1.js.map