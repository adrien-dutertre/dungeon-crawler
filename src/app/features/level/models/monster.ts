import { inject } from "@angular/core";
import { Interactible } from "./interactible";
import { Hero } from "../../hero-sheet/services/hero";

export class Monster extends Interactible {
    private _monsterDead: boolean = false;
    private hero = inject(Hero);

    constructor(monsterHp?: number) {
        super();
        super.style.set("monster");
        this.value = monsterHp; //Monster HP
    }

    override description(): string {
        return "Monster";
    }

    kill() {
        this._monsterDead = true;
        super.style.set("dead-monster");
    }

    interaction(): void {
        console.info("Interaction avec un monstre");
        if (this.value == undefined) {
            this.hero.random();
            this.value == this.hero.dice_result();
        }
        this.kill();
        this.hero.current_hp.update((currentHp) => {
            return currentHp - (this.value ?? 0);
        })
    }
}
