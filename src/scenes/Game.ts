import Phaser from 'phaser';
import SceneKeys from '../consts/SceneKeys';
import TextureKeys from '../consts/TextureKeys';

export default class Demo extends Phaser.Scene {
  private background!: Phaser.GameObjects.TileSprite;
  private hero!: Phaser.Physics.Arcade.Sprite;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super(SceneKeys.Game);
  }

  preload() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    const { width, height } = this.scale;

    this.background = this.add.tileSprite(0, 0, width, height, TextureKeys.Background)
    .setOrigin(0, 0)
    .setScrollFactor(0, 0);

    this.hero = this.physics.add.sprite(width * 0.5, height, TextureKeys.Hero);
    this.hero.setCollideWorldBounds(true);

    this.hero.setVelocityY(300);

    this.cameras.main.startFollow(
      this.hero,
      false,
      1,
      1,
      0,
      200);
    this.cameras.main.setBounds(0, 0, width, Number.MAX_SAFE_INTEGER);

    this.physics.world.setBounds(
      0,
      0,
      width,
      Number.MAX_SAFE_INTEGER
    );
  }

  update(t:Number, dt: Number) {
    this.background.setTilePosition(0, -this.cameras.main.scrollY);

    if(this.cursors.left.isDown) {
      this.hero.setVelocityX(-500);
    } 
    else if (this.cursors.right.isDown) {
      this.hero.setVelocityX(500);
    }
    else {
      this.hero.setVelocityX(0);
    }
  }
}
