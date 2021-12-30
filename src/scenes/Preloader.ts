import Phaser from 'phaser';
import SceneKeys from '../consts/SceneKeys';
import TextureKeys from '../consts/TextureKeys';
import AnimationKeys from '../consts/AnimationKeys';


export default class Preloader extends Phaser.Scene {

    constructor() {
        super(SceneKeys.Preloader);
    }

    preload() {
        this.load.image(TextureKeys.Background, 'assets/spaceBackground.png');

        this.load.atlas(
            TextureKeys.SpaceMonkey,
            'assets/characters/spaceMonkey.png',
            'assets/characters/spaceMonkey.json'
        );
    }

    create() {
        this.anims.create({
            key: AnimationKeys.SpaceMonkeyFly,
            frames: this.anims.generateFrameNames(TextureKeys.SpaceMonkey, {
                start: 1,
                end: 2,
                prefix: 'spacemonkey_fly',
                zeroPad: 2, 
                suffix: '.png'
            }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.start(SceneKeys.Game);
    }
}