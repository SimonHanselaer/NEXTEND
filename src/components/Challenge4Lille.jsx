import React from "react";
import { inject, observer } from "mobx-react";
import { useHistory } from "react-router-dom";

import Phaser from "phaser";

import LilleImage from "../assets/img/Kortrijk.jpg";
import item1 from "../assets/img/item1.jpg";
import item2 from "../assets/img/item2.png";
import item3 from "../assets/img/item3.png";

const Challenge4Lille = (props) => {
    const {databaseStore} = props;
    const {grens} = props;

    let history = useHistory();

    let config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        scene: {
        preload: preload,
        init: init,
        create: create
        },
        backgroundColor: '#FFF'
    }

    const game = new Phaser.Game(config);

    history.listen((location, action) => {
      game.destroy(true);
    });

    function init() {
      this.screenWidth = this.sys.game.config.width;
      this.screenHeight = this.sys.game.config.height;
      this.score = 0;
    }

  function preload() {
    console.log('preload');
    this.load.image(`lille`, LilleImage);
    this.load.image(`item1K`, item1);
    this.load.image(`item2D`, item2);
    this.load.image(`item3L`, item3);
    this.load.image(`item4K`, item1);
    this.load.image(`item5D`, item2);
    this.load.image(`item6L`, item3);
    this.load.image(`item7K`, item1);
    this.load.image(`item8D`, item2);
    this.load.image(`item9L`, item3);

    this.items = ['item1K', 'item2D', 'item3L', 'item4K', 'item5D', 'item6L', 'item7K', 'item8D', 'item9L'];
  }

  function create() {
    //Load in City ------------------------------------------------------------------------------------------
    this.city = this.add.image(game.config.width / 2, 100, 'lille').setScale(.06);

    //Load in items -----------------------------------------------------------------------------------------
    this.itemX = 20;

    this.randomItem = this.items[Math.floor(Math.random() * this.items.length)];
    this.item = this.add.image(this.itemX, this.screenHeight - 200, this.randomItem).setScale(.1).setInteractive();
    this.input.setDraggable(this.item);

    //Set dropzone ------------------------------------------------------------------------------------------
    const zone = this.add.zone(this.screenWidth / 2, 100, 280, 200).setRectangleDropZone(280, 200);
    zone.setOrigin(.5);
    zone.setData('status', 'juist');

    const graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    const zone2 = this.add.zone(this.screenWidth / 2, 400, 280, 200).setRectangleDropZone(280, 200);
    zone2.setOrigin(.5);
    zone2.setData('status', 'fout');

    const graphics2 = this.add.graphics();
    graphics2.lineStyle(2, 0xff0000);
    graphics2.strokeRect(zone2.x - zone2.input.hitArea.width / 2, zone2.y - zone2.input.hitArea.height / 2, zone2.input.hitArea.width, zone2.input.hitArea.height);

    //Listen for input --------------------------------------------------------------------------------------
    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
      gameObject.setScale(.2);

      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on('dragend', (pointer, gameObject) => {
      gameObject.setScale(.1);
    });

    this.input.on('drop', (pointer, gameObject, dropzone) => {


      if (gameObject.texture.key[gameObject.texture.key.length - 1] === 'L' && dropzone.data.list.status === 'juist') {
        this.items.splice(this.items.indexOf(this.randomItem), 1);
        this.score += 1;

        if (this.score === 3) {
          this.sys.game.destroy(true);
          history.push("/info/" + 3 + "/" + grens);
          const props = {
            challenge: 'challenge4',
            grens: grens,
            id: 3,
            uid: localStorage.uid
          }
          databaseStore.updateCompletedChallenges(props);
        }
      }
      
      if (gameObject.texture.key[gameObject.texture.key.length - 1] !== 'L' && dropzone.data.list.status === 'fout') {
        this.items.splice(this.items.indexOf(this.randomItem), 1);
      }

      this.randomItem = this.items[Math.floor(Math.random() * this.items.length)];
      this.item = this.add.image(this.itemX, this.screenHeight - 200, this.randomItem).setScale(.1).setInteractive();
      this.input.setDraggable(this.item);



      gameObject.setScale(.1);

      gameObject.x = dropzone.x + (dropzone.width / 2);
      gameObject.y = dropzone.y + (dropzone.height / 2);

      gameObject.input.enabled = false;
      gameObject.destroy();
    });
  }

    return (
        <h1 className="header-1">Lille</h1>
    )
}

export default inject(`databaseStore`)(observer(Challenge4Lille));