import { inject, signal, WritableSignal } from "@angular/core";
import { Hero } from "../../hero-sheet/services/hero";
import { Tile } from "./tile";

export class Monster implements Tile {
    
    private hero = inject(Hero);
    private _monsterHp: number | undefined;
    style: WritableSignal<string>;
    walkable: boolean = true;
    interactible: boolean = true;
    dead: boolean = false;

    constructor(monsterHp?: number) {
        this.style = signal("monster");
        this._monsterHp = monsterHp; //Monster HP
    }

    description(): string {
        return "Monster";
    }

    value(): number | undefined {
        return this._monsterHp;
    }

    interaction(): void {
        if (!this.dead) {

        console.info("Interaction avec un monstre");
        if (this._monsterHp == undefined) {
            this.hero.random();
            this._monsterHp == this.hero.dice_result();
        }
        this.kill();
        this.hero.current_hp.update((currentHp) => {
            return currentHp - (this._monsterHp ?? 0);
        })
        }
    }

    kill(): void {
        this.dead = true;
        this.style.set("dead-monster");
    }
}
