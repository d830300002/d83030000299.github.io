namespace scenes {
  export class Level_2 extends objects.Scene {
    // member variables
    private _label_start: objects.Label;
    private _label_finalBattle: objects.Label;
    private _label_gameFinish: objects.Label;

    private _background_supermarket: objects.Background_supermarket_lv2;
    private _background_shelves: objects.Background_shelves_lv2;
    private _background_box: objects.Background_box_lv2;
    private _background_cart: objects.Background_cart_lv2;
    private _background_poster: objects.Background_poster_lv2;

    private _player_plane: objects.Player_plane;
    private _player_plane_type_1: objects.Player_plane_type_1;
    private _player_bullet_type_0: objects.Player_bullet_type_0;
    private _player_bullet_type_1: objects.Player_bullet_type_1;
    private _player_bullet_type_0s: objects.Player_bullet_type_0[];
    private _player_bullet_type_1s: objects.Player_bullet_type_1[];
    private _label_player_bullet_type_1: objects.Label;
    private _player_bullet_type_1_icon: objects.Player_bullet_type_1_icon;;
    private _player_explosion_type_0: objects.Player_explosion_type_0;
    private _player_explosion_type_1: objects.Player_explosion_type_1;
    private _player_explosion_type_1_count: number=0;
    private _player_upgrade: boolean;

    private _supply: objects.Supply;
    private _supply_active: boolean;
    private _parachute: objects.Parachute;


    private _enemy_bullet_laser: objects.Enemy_bullet_Laser_lv2;
    private _enemy_bullet_spats: objects.Enemy_bullet_spat_Lv2[];
    private _enemy_bullet_spat: objects.Enemy_bullet_spat_Lv2;
    private _enemy_trump: objects.Enemy_trump_lv2;
    private _explosion_type_0: objects.Explosion_type_0;
    private _enemy_trump_crack: objects.Enemy_trump_crack_lv2;
    private _enemy_trump_smoke: objects.Enemy_trump_smoke_lv2;
    private _enemy_trump_baby: objects.Enemy_trump_baby_lv2;

    private _hits: number;

    private _move: boolean;


    public sound_wind: createjs.AbstractSoundInstance;

    // constructors
    constructor() {
      super();
      this.Start();
    }

    // private methods
    private _keyDown(event: KeyboardEvent): void {
      switch (event.keyCode) {
        case 38:
          this._move = true;
          break;
      }
    }

    private _keyUp(event: KeyboardEvent): void {
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
            if (this._player_explosion_type_1_count != 0) {
              if (this._player_bullet_type_1s.length < 1) {
                var sound_bulletshoot = createjs.Sound.play("sound_bulletshoot");
                sound_bulletshoot.volume = 0.3;
                this._player_bullet_type_1 = new objects.Player_bullet_type_1();
                this._player_bullet_type_1.y = this._player_plane.y;
                this._player_bullet_type_1.x = this._player_plane.x;
                this.addChild(this._player_bullet_type_1);
                this._player_bullet_type_1s.push(this._player_bullet_type_1)
                this._player_explosion_type_1_count -= 1;

              }
            }
            else {
              this._player_upgrade = false;
            }
          }
          console.log(this.children);
          console.log(this._player_bullet_type_0s.length);
          break;
      }
    }

    private _trump_baby_action(): void {

      this._enemy_bullet_spats.push(this._enemy_bullet_spat);
      setInterval(() => {
        createjs.Tween.get(this._enemy_trump_baby).to(
          { x: Math.floor(Math.random() * 10) * 20 + 650 },
          1000
        );
        setTimeout(() => {
          this._enemy_bullet_spat.y = 395;
          this._enemy_bullet_spat.x = this._enemy_trump_baby.x - 60;
          managers.Tracking_bullets.runTracking(
            this._player_plane,
            this._enemy_bullet_spat
          );
        }, 1000);
      }, 2000);
    }

    // public methods
    public Start(): void {
      //background sound
      this.sound_wind = createjs.Sound.play("sound_wind");
      this.sound_wind.loop = -1;
      this.sound_wind.volume = 0.5;

      //hits
      this._hits = 0;

      //background
      this._background_supermarket = new objects.Background_supermarket_lv2();
      this._background_shelves = new objects.Background_shelves_lv2();
      this._background_box = new objects.Background_box_lv2();
      this._background_cart = new objects.Background_cart_lv2();
      this._background_poster = new objects.Background_poster_lv2();

      //player
      this._player_plane = new objects.Player_plane();
      this._player_plane_type_1 = new objects.Player_plane_type_1();
      this._player_bullet_type_0s = new Array<objects.Player_bullet_type_0>();
      this._player_bullet_type_1s = new Array<objects.Player_bullet_type_1>();
      this._player_explosion_type_0 = new objects.Player_explosion_type_0();
      this._player_explosion_type_1 = new objects.Player_explosion_type_1();
      this._player_bullet_type_1_icon = new objects.Player_bullet_type_1_icon();
      this._player_upgrade = false;

      

      //supply
      this._supply = new objects.Supply();
      this._supply_active = false;
      this._parachute = new objects.Parachute;
      this._explosion_type_0 = new objects.Explosion_type_0();


      //enemy
      this._enemy_trump = new objects.Enemy_trump_lv2();
      this._enemy_bullet_laser = new objects.Enemy_bullet_Laser_lv2();
      this._enemy_bullet_spats = new Array<objects.Enemy_bullet_spat_Lv2>();   
      this._enemy_trump_baby = new objects.Enemy_trump_baby_lv2();
      this._enemy_bullet_spat = new objects.Enemy_bullet_spat_Lv2();
      this._enemy_trump_crack = new objects.Enemy_trump_crack_lv2;
      this._enemy_trump_smoke = new objects.Enemy_trump_smoke_lv2;

      //label
      this._label_finalBattle = new objects.Label(
        "Continue to attack ufo! ! !",
        "20px",
        "Ink Free",
        "#000000",
        450,
        150,
        true
      );
      this._label_start = new objects.Label(
        "Attack the UFO until the Trump baby get ungry",
        "20px",
        "Ink Free",
        "#000000",
        450,
        150,
        true
      );
      this._label_gameFinish = new objects.Label(
        "Good job! Who is the next unfortunate kid?",
        "20px",
        "Ink Free",
        "#000000",
        450,
        150,
        true
      );
      this._label_player_bullet_type_1 = new objects.Label(
        "x 0",
        "30px",
        "Ink Free",
        "#000000",
        600,
        20,
        false
      );
      //falling function start
      this._move = false;

      //set up final battle

      //keyboard listener
      window.onkeydown = this._keyDown.bind(this);
      window.onkeyup = this._keyUp.bind(this);

      this.Main();
    }

    public Update(): void {

      // finish the level
      if (this._hits >= 25) {
        this.removeChild(this._enemy_bullet_spat, this._enemy_bullet_laser);
        this._player_bullet_type_0s.forEach(bullet => {
          this.removeChild(bullet);
        });
        this._player_bullet_type_1s.forEach(bullet => {
          this.removeChild(bullet);
        });
        this._enemy_trump.rotation++;
        this.addChild(this._label_gameFinish);
        this._player_plane_type_1.alpha = 0;
        createjs.Tween.get(this._enemy_trump).to({ x: 1000, y: 500 }, 2000);
        createjs.Tween.get(this._enemy_trump_baby).to({ y: 600 }, 2000);
        createjs.Tween.get(this._player_plane).to({ x: 1500 }, 2000);
        setTimeout(() => {
          managers.Game.CurrentState = config.Scene.LV3;
        }, 4000
        )
      }
      this._background_supermarket.Update();
      this._background_shelves.Update();
      this._background_poster.Update();
      this._background_box.Update();
      this._background_cart.Update();

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

        this._enemy_trump.Update();
        this._enemy_bullet_laser.Update();

        //enemy bullet reset
        if (this._enemy_bullet_laser.x < 0) {
          var sound_lasershoot = createjs.Sound.play("sound_lazershoot");
          sound_lasershoot.volume = 0.3;
          this._enemy_bullet_laser.y = this._enemy_trump.y;
          this._enemy_bullet_laser.x =
            this._enemy_trump.x - this._enemy_bullet_laser.halfWidth;
        }

        //player vs background objects
        if (
          managers.Collision.check(this._player_plane, this._background_box, true) ||
          managers.Collision.check(this._player_plane, this._background_cart, true) ||
          managers.Collision.check(this._player_plane, this._background_poster, true)
        ) {
          if (!this._player_plane.invincible_time) {
            managers.Explosion_type_0.runExplosion(this._player_explosion_type_1);
            managers.Game.ScoreBoard.Lives -= 1;
            managers.Twinking.runTwinking(this._player_plane);
          }
        }

        //player vs supply
        if (managers.Collision.check(this._player_plane, this._supply, false)) {
          this._player_upgrade = true;
          this._player_explosion_type_1_count = 5;
        
          var sound_player_upgrade = createjs.Sound.play("sound_player_upgrade");
          sound_player_upgrade.volume = 1;
          this._supply.Reset();
        }

        //enemy vs background objects
        if (
          managers.Collision.check(this._enemy_trump, this._background_box, false) ||
          managers.Collision.check(this._enemy_trump, this._background_cart, false) ||
          managers.Collision.check(this._enemy_trump, this._background_poster, false)
        ) {
          if (!this._enemy_trump.invincible_time) {
            managers.Blinking.runBlinking(this._enemy_trump);
            this._enemy_trump.ResetX();
            this._enemy_trump.ResetY();
          }
        }

        //enemy bullet vs player
        if (managers.Collision.check(this._player_plane, this._enemy_bullet_laser, false)) {
          this._enemy_bullet_laser.y = this._enemy_trump.y;
          this._enemy_bullet_laser.x =
            this._enemy_trump.x - this._enemy_bullet_laser.halfWidth;
          if (!this._player_plane.invincible_time) {
            managers.Explosion_type_0.runExplosion(this._player_explosion_type_0);
            managers.Game.ScoreBoard.Lives -= 1;
            managers.Twinking.runTwinking(this._player_plane);
          }
        }
        if (managers.Collision.check(this._player_plane, this._enemy_bullet_spat, false)) {
          if (!this._player_plane.invincible_time) {
            managers.Explosion_type_0.runExplosion(this._player_explosion_type_0);
            managers.Game.ScoreBoard.Lives -= 1;
            managers.Twinking.runTwinking(this._player_plane);
          }
        }
        //enemy bullet vs supply
        if (managers.Collision.check(this._supply, this._enemy_bullet_laser, false)) {
          managers.Explosion_type_1.runExplosion(this._explosion_type_0,this._supply);      
          this._supply.Reset();
        }
        if (managers.Collision.check(this._supply, this._enemy_bullet_spat, false)) {
          if (!this._player_plane.invincible_time) {
            managers.Explosion_type_1.runExplosion(this._explosion_type_0,this._supply);
          
            this._supply.Reset();
          }
        }
        //player bullet vs enemy
        //player bullet vs supply 
        this._player_bullet_type_0s.forEach(bullet => {
          bullet.Update();
          if (managers.Collision.check(this._enemy_trump, bullet, false)) {
            //explosion effect
            managers.Explosion_type_1.runExplosion(this._explosion_type_0, bullet);
            managers.Game.ScoreBoard.Score += 100;
            this._hits += 1;
            this._player_bullet_type_0s.splice(this._player_bullet_type_0s.indexOf(bullet), 1);
            this.removeChild(bullet);
          }
          else if (managers.Collision.check(this._enemy_trump_baby, bullet, false)) {
            createjs.Tween.get(this._enemy_trump_baby).to({y:config.Screen.HEIGHT+this._enemy_trump_baby.halfHeight},100);
            setTimeout(()=>{             
            createjs.Tween.get(this._enemy_trump_baby).to({y:450},500);
            },500);
          }
          else if (managers.Collision.check(this._supply, bullet, false)) {
            managers.Explosion_type_1.runExplosion(this._explosion_type_0, bullet);
           
            this._supply.Reset();
            this._player_bullet_type_0s.splice(this._player_bullet_type_0s.indexOf(bullet), 1);
            this.removeChild(bullet);

          }
          else if (bullet.x > config.Screen.WIDTH) {
            this._player_bullet_type_0s.splice(this._player_bullet_type_0s.indexOf(bullet), 1);
            this.removeChild(bullet);
          }


        });
        this._player_bullet_type_1s.forEach(bullet => {
          bullet.Update();
          if (managers.Collision.check(this._enemy_trump, bullet, false)) {
            //explosion effect
            managers.Explosion_type_1.runExplosion(this._explosion_type_0, bullet);
            managers.Game.ScoreBoard.Score += 200;
            this._hits += 2;
            this._player_bullet_type_1s.splice(this._player_bullet_type_1s.indexOf(bullet), 1);
            this.removeChild(bullet);
          }
          else if (managers.Collision.check(this._enemy_trump_baby, bullet, false)) {
            createjs.Tween.get(this._enemy_trump_baby).to({y:config.Screen.HEIGHT+this._enemy_trump_baby.halfHeight},100);
            setTimeout(()=>{             
            createjs.Tween.get(this._enemy_trump_baby).to({y:450},500);
            },500);
          }
          else if (managers.Collision.check(this._supply, bullet, false)) {
            managers.Explosion_type_1.runExplosion(this._explosion_type_0, bullet);
          
            this._supply.Reset();
            this._player_bullet_type_1s.splice(this._player_bullet_type_1s.indexOf(bullet), 1);
            this.removeChild(bullet);

          }
          else if (bullet.x > config.Screen.WIDTH) {
            this._player_bullet_type_1s.splice(this._player_bullet_type_1s.indexOf(bullet), 1);
            this.removeChild(bullet);
          }


        });
        switch (this._hits) {
          case 5:

            this._enemy_trump_crack.alpha = 0.8;
            break;

          case 10:
            this._supply_active = true;
            this._enemy_trump_crack.alpha = 1;

            break;
          case 15:
            this._enemy_trump_smoke.alpha = 0.6;
            break;
          case 20:
            this._enemy_trump_smoke.alpha = 1;
            break;
        }
      }
      this._enemy_trump_smoke.x = this._enemy_trump_crack.x  = this._enemy_trump.x;
      this._enemy_trump_smoke.y = this._enemy_trump_crack.y  = this._enemy_trump.y;
      this._label_player_bullet_type_1.text = "x " + this._player_explosion_type_1_count;

      if (!this._player_upgrade) {
        this._player_plane_type_1.y = this._player_plane.y;
        this._player_plane_type_1.x = -50;
      }
      if (this._player_upgrade) {
        this._player_plane_type_1.y = this._player_plane.y;
        this._player_plane_type_1.Update();

      }
      this._player_explosion_type_1.y = this._player_explosion_type_0.y = this._player_plane.y;
      this._player_explosion_type_1.x = this._player_explosion_type_0.x = this._player_plane.x;
      this._parachute.x = this._supply.x;
      this._parachute.y = this._supply.y - this._supply.halfHeight - this._parachute.halfHeight;

    }
    public Reset(): void { }

    public Destroy(): void {
      this.sound_wind.stop();
      this.removeAllChildren();
    }

    public Main(): void {
      this.addChild(this._background_supermarket);

      this.addChild(this._enemy_trump_baby);

      this.addChild(this._enemy_bullet_spat);

      this.addChild(this._background_shelves);

      this.addChild(this._background_box);

      this.addChild(this._background_cart);

      this.addChild(this._background_poster);

      this.addChild(this._player_plane);

      this.addChild(this._player_plane_type_1);

      this.addChild(this._player_explosion_type_0);
      this._player_explosion_type_0.alpha = 0;

      this.addChild(this._player_explosion_type_1);
      this._player_explosion_type_1.alpha = 0;

      this.addChild(this._enemy_trump);

      this.addChild(this._enemy_bullet_laser);

      this.addChild(this._enemy_trump_crack);
      this._enemy_trump_crack.alpha = 0;

      this.addChild(this._enemy_trump_smoke);
      this._enemy_trump_smoke.alpha = 0;

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
      this.addChild(this._label_player_bullet_type_1);

      this.addChild(this._player_bullet_type_1_icon);
      this.addChild(this._label_start);

      setTimeout(() => {
        this.removeChild(this._label_start);
      }, 3000);

      setTimeout(() => {
        this.addChild(this._label_finalBattle);
        createjs.Tween.get(this._enemy_trump_baby).to({ y: 450 }, 1000);
      }, 14000);

      setTimeout(this._trump_baby_action.bind(this), 15000);

      setTimeout(() => {
        this.removeChild(this._label_finalBattle);
      }, 17000);
    }
  }
}
