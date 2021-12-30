import Phaser from 'phaser';
import SceneKeys from '../consts/SceneKeys';
import TextureKeys from '../consts/TextureKeys';

export default class Demo extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Game);
  }

  preload() {
    
  }

  create() {
    const logo = this.add.image(400, 70, TextureKeys.Logo);

    this.tweens.add({
      targets: logo,
      y: 350,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });
  }
}
