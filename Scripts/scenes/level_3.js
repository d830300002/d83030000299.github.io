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
    var Level_3 = /** @class */ (function (_super) {
        __extends(Level_3, _super);
        // constructors
        function Level_3() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Level_3.prototype._keyDown = function (event) {
            switch (event.keyCode) {
                case 38:
                    this._move = true;
                    break;
            }
        };
        Level_3.prototype._keyUp = function (event) {
            switch (event.keyCode) {
                case 38:
                    this._move = false;
                    break;
                case 32:
                    if (!this._player_upgrade) {
                        if (this._player_bullet_type_0s.length < 3) {
                            var sound_bulletshoot = createjs.Sound.play("sound_bulletshoot");
                            sound_bulletshoot.volume = 0.3;
                            this._player_bullet_type_0 = new objects.Player_bullet_type_0();
                            this._player_bullet_type_0.y = this._player_plane.y;
                            this._player_bullet_type_0.x = this._player_plane.x;
                            this.addChild(this._player_bullet_type_0);
                            this._player_bullet_type_0s.push(this._player_bullet_type_0);
                        }
                    }
                    if (this._player_upgrade) {
                        if (this._player_bullet_type_2s.length < 3) {
                            var sound_bulletshoot = createjs.Sound.play("sound_bulletshoot");
                            sound_bulletshoot.volume = 0.3;
                            this._player_bullet_type_2 = new objects.Player_bullet_type_2();
                            this._player_bullet_type_2.y = this._player_plane.y;
                            this._player_bullet_type_2.x = this._player_plane.x;
                            this.addChild(this._player_bullet_type_2);
                            this._player_bullet_type_2s.push(this._player_bullet_type_2);
                        }
                    }
                    console.log(this.children);
                    console.log(this._player_bullet_type_0s.length);
                    break;
            }
        };
        Level_3.prototype._eye_kid_action = function () {
            var _this = this;
            this._enemy_bullet_stars.push(this._enemy_bullet_star);
            setInterval(function () {
                if (_this._enemy_eye_kid.x > 350 && _this._enemy_eye_kid.x <= 900) {
                    _this._enemy_bullet_star.y = _this._enemy_eye_kid.y;
                    _this._enemy_bullet_star.x = _this._enemy_eye_kid.x;
                    managers.Tracking_bullets.runTracking(_this._player_plane, _this._enemy_bullet_star);
                }
            }, 1000);
        };
        // public methods
        Level_3.prototype.Start = function () {
            //background sound
            this.sound_wind = createjs.Sound.play("sound_wind");
            this.sound_wind.loop = -1;
            this.sound_wind.volume = 0.5;
            //hits
            this._ufo_hits = 0;
            this._moto_hits = 0;
            this._desk_hits = 0;
            //background
            this._background_sky = new objects.Background_sky_lv3();
            this._background_school = new objects.Background_school_lv3();
            this._background_desk = new objects.Background_desk_lv3();
            //player
            this._player_plane = new objects.Player_plane();
            this._player_plane_type_2 = new objects.Player_plane_type_2();
            this._player_bullet_type_0s = new Array();
            this._player_bullet_type_2s = new Array();
            this._player_explosion_type_0 = new objects.Player_explosion_type_0();
            this._player_explosion_type_1 = new objects.Player_explosion_type_1();
            this._player_upgrade = false;
            //supply
            this._supply = new objects.Supply();
            this._supply_active = false;
            this._parachute = new objects.Parachute;
            this._explosion_type_0 = new objects.Explosion_type_0;
            //enemy
            this._enemy_ufo = new objects.Enemy_ufo_lv3();
            this._enemy_bullet_laser = new objects.Enemy_bullet_Laser_lv2();
            this._enemy_bullet_stars = new Array();
            this._enemy_eye_kid = new objects.Enemy_eye_kid_lv3();
            this._enemy_moto_kid = new objects.Enemy_moto_kid_lv3();
            this._enemy_bullet_star = new objects.Enemy_bullet_star_lv3();
            this._enemy_ufo_crack = new objects.Enemy_ufo_crack_lv3;
            this._enemy_ufo_smoke = new objects.Enemy_ufo_smoke_lv3;
            this._enemy_desk_kid = new objects.Enemy_desk_kid_lv3();
            //label
            this._label_finalBattle = new objects.Label("Now! Destroy the UFO! Let they cry!", "20px", "Ink Free", "#000000", 450, 150, true);
            this._label_start = new objects.Label("Give these naughty children a lesson !", "20px", "Ink Free", "#000000", 450, 150, true);
            this._label_gameFinish = new objects.Label("Good job! Who is the next unfortunate kid?", "20px", "Ink Free", "#000000", 450, 150, true);
            //falling function start
            this._move = false;
            //set up final battle
            //keyboard listener
            window.onkeydown = this._keyDown.bind(this);
            window.onkeyup = this._keyUp.bind(this);
            this.Main();
        };
        Level_3.prototype.Update = function () {
            var _this = this;
            // finish the level
            if (this._ufo_hits >= 30) {
                this.removeChild(this._enemy_bullet_star, this._enemy_bullet_laser);
                this._player_bullet_type_0s.forEach(function (bullet) {
                    _this.removeChild(bullet);
                });
                this._player_bullet_type_2s.forEach(function (bullet) {
                    _this.removeChild(bullet);
                });
                this._enemy_ufo.rotation++;
                this.addChild(this._label_gameFinish);
                this._player_plane_type_2.alpha = 0;
                createjs.Tween.get(this._enemy_ufo).to({ x: 1000, y: 500 }, 2000);
                createjs.Tween.get(this._enemy_eye_kid).to({ y: 600 }, 2000);
                createjs.Tween.get(this._player_plane).to({ x: 1500 }, 2000);
                setTimeout(function () {
                    managers.Game.CurrentState = config.Scene.END;
                }, 4000);
            }
            this._background_sky.Update();
            this._background_desk.Update();
            this._enemy_eye_kid.Update();
            this._background_school.Update();
            // still in the level
            if (this._ufo_hits < 30) {
                this._enemy_ufo.Update();
                this._enemy_bullet_laser.Update();
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
                if (this._desk_hits <= 15) {
                    this._enemy_desk_kid.Update();
                }
                else {
                    createjs.Tween.get(this._enemy_desk_kid).to({ rotation: 360, y: 900 }, 1000);
                    setTimeout(function () {
                        if (_this._background_desk.x > 1000) {
                            _this._enemy_desk_kid.x = _this._background_desk.x;
                            _this._desk_hits = 0;
                        }
                    }, 5000);
                }
                if (this._moto_hits <= 15) {
                    this._enemy_moto_kid.Update();
                }
                else {
                    createjs.Tween.get(this._enemy_moto_kid).to({ rotation: 360, y: 800 }, 1000);
                    setTimeout(function () {
                        _this._moto_hits = 0;
                    }, 5000);
                }
                //enemy bullet reset
                if (this._enemy_bullet_laser.x < 0) {
                    var sound_lasershoot = createjs.Sound.play("sound_lazershoot");
                    sound_lasershoot.volume = 0.3;
                    this._enemy_bullet_laser.y = this._enemy_ufo.y;
                    this._enemy_bullet_laser.x =
                        this._enemy_ufo.x - this._enemy_bullet_laser.halfWidth;
                }
                //player vs enemy
                if (managers.Collision_2.check(this._enemy_desk_kid, this._player_plane, true) || managers.Collision_2.check(this._enemy_moto_kid, this._player_plane, true)) {
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
                    this._supply.Reset();
                }
                //enemy vs background objects
                if (managers.Collision.check(this._player_plane, this._background_desk, false)) {
                    if (!this._player_plane.invincible_time) {
                        managers.Explosion_type_0.runExplosion(this._player_explosion_type_1);
                        managers.Game.ScoreBoard.Lives -= 1;
                        managers.Twinking.runTwinking(this._player_plane);
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
                if (managers.Collision.check(this._player_plane, this._enemy_bullet_star, false)) {
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
                if (managers.Collision.check(this._supply, this._enemy_bullet_star, false)) {
                    if (!this._player_plane.invincible_time) {
                        managers.Explosion_type_1.runExplosion(this._explosion_type_0, this._supply);
                        this._supply.Reset();
                    }
                }
                //player bullet vs enemy and player bullet vs supply 
                this._player_bullet_type_0s.forEach(function (bullet) {
                    bullet.Update();
                    if (managers.Collision.check(_this._enemy_ufo, bullet, false)) {
                        //explosion effect
                        managers.Explosion_type_1.runExplosion(_this._explosion_type_0, bullet);
                        managers.Game.ScoreBoard.Score += 100;
                        _this._ufo_hits += 1;
                        _this._player_bullet_type_0s.splice(_this._player_bullet_type_0s.indexOf(bullet), 1);
                        _this.removeChild(bullet);
                    }
                    else if (managers.Collision_2.check(_this._enemy_moto_kid, bullet, false)) {
                        managers.Explosion_type_1.runExplosion(_this._explosion_type_0, bullet);
                        _this._player_bullet_type_0s.splice(_this._player_bullet_type_0s.indexOf(bullet), 1);
                        managers.Game.ScoreBoard.Score += 50;
                        _this._moto_hits += 1;
                        _this.removeChild(bullet);
                    }
                    else if (managers.Collision_2.check(_this._enemy_desk_kid, bullet, false)) {
                        managers.Explosion_type_1.runExplosion(_this._explosion_type_0, bullet);
                        _this._player_bullet_type_0s.splice(_this._player_bullet_type_0s.indexOf(bullet), 1);
                        managers.Game.ScoreBoard.Score += 50;
                        _this._desk_hits += 1;
                        _this.removeChild(bullet);
                    }
                    else if (managers.Collision.check(_this._supply, bullet, false)) {
                        managers.Explosion_type_1.runExplosion(_this._explosion_type_0, bullet);
                        _this._supply.Reset();
                        _this._player_bullet_type_0s.splice(_this._player_bullet_type_0s.indexOf(bullet), 1);
                        _this.removeChild(bullet);
                    }
                    else if (bullet.x > config.Screen.WIDTH) {
                        _this._player_bullet_type_0s.splice(_this._player_bullet_type_0s.indexOf(bullet), 1);
                        _this.removeChild(bullet);
                    }
                });
                this._player_bullet_type_2s.forEach(function (bullet) {
                    bullet.Update();
                    if (managers.Collision.check(_this._enemy_ufo, bullet, false)) {
                        //explosion effect
                        managers.Explosion_type_1.runExplosion(_this._explosion_type_0, bullet);
                        managers.Game.ScoreBoard.Score += 150;
                        _this._ufo_hits += 1;
                        _this._player_bullet_type_2s.splice(_this._player_bullet_type_2s.indexOf(bullet), 1);
                        _this.removeChild(bullet);
                    }
                    else if (managers.Collision.check(_this._supply, bullet, false)) {
                        managers.Explosion_type_1.runExplosion(_this._explosion_type_0, bullet);
                        _this._supply.Reset();
                        _this._player_bullet_type_2s.splice(_this._player_bullet_type_2s.indexOf(bullet), 1);
                        _this.removeChild(bullet);
                    }
                    else if (managers.Collision_2.check(_this._enemy_moto_kid, bullet, false)) {
                        managers.Explosion_type_1.runExplosion(_this._explosion_type_0, bullet);
                        _this._player_bullet_type_2s.splice(_this._player_bullet_type_2s.indexOf(bullet), 1);
                        managers.Game.ScoreBoard.Score += 50;
                        _this._moto_hits += 15;
                        _this.removeChild(bullet);
                    }
                    else if (managers.Collision_2.check(_this._enemy_desk_kid, bullet, false)) {
                        managers.Explosion_type_1.runExplosion(_this._explosion_type_0, bullet);
                        _this._player_bullet_type_2s.splice(_this._player_bullet_type_2s.indexOf(bullet), 1);
                        managers.Game.ScoreBoard.Score += 50;
                        _this._desk_hits += 15;
                        _this.removeChild(bullet);
                    }
                    else if (bullet.x > config.Screen.WIDTH) {
                        _this._player_bullet_type_2s.splice(_this._player_bullet_type_2s.indexOf(bullet), 1);
                        _this.removeChild(bullet);
                    }
                });
                switch (this._ufo_hits) {
                    case 5:
                        this._enemy_ufo_crack.alpha = 0.8;
                        break;
                    case 10:
                        this._enemy_ufo_crack.alpha = 1;
                        break;
                    case 15:
                        this._supply_active = true;
                        this._enemy_ufo_smoke.alpha = 0.6;
                        break;
                    case 20:
                        this._enemy_ufo_smoke.alpha = 1;
                        break;
                }
            }
            if (!this._player_upgrade) {
                this._player_plane_type_2.y = this._player_plane.y;
                this._player_plane_type_2.x = -50;
            }
            if (this._player_upgrade) {
                this._player_plane_type_2.y = this._player_plane.y;
                this._player_plane_type_2.Update();
            }
            this._enemy_ufo_smoke.x = this._enemy_ufo_crack.x = this._enemy_ufo.x;
            this._enemy_ufo_smoke.y = this._enemy_ufo_crack.y = this._enemy_ufo.y;
            this._player_explosion_type_1.y = this._player_explosion_type_0.y = this._player_plane.y;
            this._player_explosion_type_1.x = this._player_explosion_type_0.x = this._player_plane.x;
            this._parachute.x = this._supply.x;
            this._parachute.y = this._supply.y - this._supply.halfHeight - this._parachute.halfHeight;
        };
        Level_3.prototype.Reset = function () { };
        Level_3.prototype.Destroy = function () {
            this.sound_wind.stop();
            this.removeAllChildren();
        };
        Level_3.prototype.Main = function () {
            var _this = this;
            this.addChild(this._background_sky);
            this.addChild(this._enemy_eye_kid);
            this.addChild(this._background_school);
            this.addChild(this._background_desk);
            this.addChild(this._enemy_moto_kid);
            this.addChild(this._enemy_desk_kid);
            this.addChild(this._player_plane);
            this.addChild(this._player_plane_type_2);
            this.addChild(this._player_explosion_type_0);
            this._player_explosion_type_0.alpha = 0;
            this.addChild(this._player_explosion_type_1);
            this._player_explosion_type_1.alpha = 0;
            this.addChild(this._enemy_ufo);
            this.addChild(this._enemy_bullet_laser);
            this.addChild(this._enemy_bullet_star);
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
                       this._player_bullet_type_0= new objects.Player_bullet_type_0();
                       this._player_bullet_type_0.y=this._player_plane.y;
                       this.addChild(this._player_bullet_type_0);
                       this._player_bullet_type_0s.push(this._player_bullet_type_0);
                       console.log(this.children)
       
                   },this);
                   */
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            this.addChild(this._label_start);
            setTimeout(function () {
                _this.removeChild(_this._label_start);
            }, 3000);
            setTimeout(function () {
                _this.addChild(_this._label_finalBattle);
            }, 14000);
            this._eye_kid_action();
            setTimeout(function () {
                _this.removeChild(_this._label_finalBattle);
            }, 17000);
        };
        return Level_3;
    }(objects.Scene));
    scenes.Level_3 = Level_3;
})(scenes || (scenes = {}));
//# sourceMappingURL=level_3.js.map