import Phaser from 'phaser';
import SceneKeys from '../consts/SceneKeys';
import TextureKeys from '../consts/TextureKeys';


export default class Preloader extends Phaser.Scene {

    constructor() {
        super(SceneKeys.Preloader);
    }

    preload() {
        this.load.image(TextureKeys.Logo, 'assets/phaser3-logo.png');
    }

    create() {
        this.scene.start(SceneKeys.Game);
    }
}