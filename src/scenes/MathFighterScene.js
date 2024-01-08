// @ts-nocheck
import Phaser from "phaser";
export default class MathFighterScene extends Phaser.Scene
{
    constructor(){
        super('math-fighter-scene')
    }
    init(){

    }

    preload(){
        this.load.image('background', 'images/bg_layer1.png')
        this.load.image('fight-bg', 'images/fight-bg.png')
        this.load.image('tile', 'images/tile.png')
        this.load.spritesheet('player', 'images/warrior1.png', {
            frameHeight: 80,
            frameWidth: 80,
        })
        
        this.load.spritesheet('enemy', 'images/warrior2.png',{
            frameHeight: 80,
            frameWidth: 80,
        })

        this.load.spritesheet('numbers', 'images/',{
            frameHeight: 71.25,
            frameWidth: 131,
        })

        this.load.spritesheet('slash', 'images/slash.png',{
            frameHeight: 88,
            frameWidth: 42,
        })

        
    }
    create(){
        this.add.image(240, 320, 'background')
        const fight_bg = this.add.image(240, 160, 'fight-bg')

        const tile = this.physics.add.staticImage(240, fight_bg.height- 40,'tile')

        this.player = this.physycs.add.sprite(
            this.gameHalfWidth - 150,
            this.gameHalfHeight - 200, 'player')

        this.physics.add.collider(this.player, tile)

    }
    update(){

    }
}