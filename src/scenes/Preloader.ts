import Phaser from 'phaser';
import SceneKeys from '../consts/SceneKeys';
import TextureKeys from '../consts/TextureKeys';


export default class Preloader extends Phaser.Scene {

    constructor() {
        super(SceneKeys.Preloader);
    }

    preload() {
        this.load.image(TextureKeys.Background, 'assets/spaceBackground.png');
        this.load.image(TextureKeys.Hero, 'assets/spacemonkey_fly01.png');
    }

    create() {
        this.scene.start(SceneKeys.Game);
    }
}