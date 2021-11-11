import * as me from 'https://cdn.jsdelivr.net/npm/melonjs@10.1.0/dist/melonjs.module.js';

import EnemyManager from "../managers/enemy-manager.js";

// Note : Jay Inheritance to be replaced with standard ES6 inheritance in melonjs 10+
class PlayScreen extends me.Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {

        me.game.world.addChild(new me.ColorLayer("background", "#000000"), 0);

        this.player = me.pool.pull("player");
        me.game.world.addChild(this.player, 1);

        this.enemyManager = new EnemyManager();
        this.enemyManager.createEnemies();
        me.game.world.addChild(this.enemyManager, 2);


        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.A, "left");
        me.input.bindKey(me.input.KEY.D, "right");

        me.input.bindKey(me.input.KEY.SPACE, "shoot", true);
    }


    onDestroyEvent() {
        me.input.unbindKey(me.input.KEY.LEFT);
        me.input.unbindKey(me.input.KEY.RIGHT);
        me.input.unbindKey(me.input.KEY.A);
        me.input.unbindKey(me.input.KEY.D);

        me.input.unbindKey(me.input.KEY.SPACE);
    }


    checkIfLoss(y) {
        if (y >= this.player.pos.y) {
            this.reset();
        }
    }
};

export default PlayScreen;
