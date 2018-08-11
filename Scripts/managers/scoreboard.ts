module managers {
    export class ScoreBoard {
        // private member variables
        private _level:number;
        private _lives:number;
        private _score:number;
        private _highScore:number;
        private _livesLabel:objects.Label;
        private _scoreLabel:objects.Label;
        private _highScoreLabel:objects.Label;

        // public properties

        /**
         * This returns a reference to the LivesLabel object
         *
         * @readonly
         * @type {objects.Label}
         */
        get LivesLabel():objects.Label {
            return this._livesLabel;
        }

        /**
         * This returns a reference to the ScoreLabel object
         *
         * @readonly
         * @type {objects.Label}
         * @memberof ScoreBoard
         */
        get ScoreLabel():objects.Label {
            return this._scoreLabel;
        }

        /**
         * This returns a reference to the HighScoreLabel object
         *
         * @readonly
         * @type {objects.Label}
         */
        get HighScoreLabel():objects.Label {
            return this._highScoreLabel;
        }

        get Level():number {
            return this._level;
        }

        set Level(newValue:number) {
            this._level = newValue;
    
        }
        get Lives():number {
            return this._lives;
        }

        set Lives(newValue:number) {
            this._lives = newValue;
            if(this._lives <= 0) {
                managers.Game.CurrentState = config.Scene.LO;
            }
            else {
                this.LivesLabel.text = "Lives: " + this._lives;
            }
        }

        get HighScore():number {
            return this._highScore;
        }

        set HighScore(newValue:number) {
            this._highScore = newValue;
            this.HighScoreLabel.text = "High Score: " + this._highScore;
        }

        get Score():number {
            return this._score;
        }

        set Score(newValue:number) {
            this._score = newValue;
            this.ScoreLabel.text = "Score: " + this._score;
            if(this._score > this.HighScore) {
                this.HighScore = this._score;
            }
        }

        
        // constructors
        constructor() {
            this.Start();
        }

        // private methods

        // public methods
        public Start() {
            this._livesLabel = new objects.Label("Lives: 99", "30px", "Ink Free", "#000000", 20, 20, false);
            this._scoreLabel = new objects.Label("Score: 999", "30px", "Ink Free", "#000000", 700, 20, false);
            this._highScoreLabel = new objects.Label("High Score: 9999", "30px", "Ink Free", "#000000", 750, 60, true);
            
            this.HighScore = 0;
            this.Reset();
        }

        public Reset_restart(){
            this.Lives = 99;
            this.Score = 0;
        }
        public Reset() {
            this.Level = 0;
            this.Lives = 99;
            this.Score = 0;
        }
    }
}