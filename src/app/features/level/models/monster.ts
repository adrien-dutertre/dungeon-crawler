import { Interactible } from "./interactible";

export class Monster extends Interactible {
    private _monsterDead: boolean = false;

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
}
