import Phaser from "phaser";
export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super('over-scene')
    }
    init(data) {
        this.replayButton = undefined
        this.score = data.score
    }
    preload() {
        this.load.image('background', 'images/bg_layer1.png')
        this.load.image('gameover',  'images/gameover.png')
        this.load.image('replay', 'images/replay.png')
    }
    create(){
        this.add.image(240, 320, 'background')
        this.add.image(240, 120, 'gameover')
        this.replayButton = this.add.image(240, 400, 'replay').setInteractive()
        this.replayButton.once('pointerup', () => {
            this.scene.start('math-fighter-scene')
            }, this)
        // this.add.text(100, 300, 'score: '+ this.score, {
        //     fontSize: '32px', fill: 'black'})
        // this.replayButton = this.add.image(200, 400, '
        // replay-button').setInteractive().setScale(0.5)
        // this.replayButton.once('pointerup', () => {
        //     this.scene.start('math-fighter-scene')
        // }, this)
    }
}