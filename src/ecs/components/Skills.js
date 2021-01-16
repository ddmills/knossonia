import { Component } from 'geotic';

export class Skills extends Component {
    static properties = {
        SKILL_ARMOR: 0,
        SKILL_SPEED: 0,
        SKILL_THROWING: 0,
        SKILL_DODGE: 0,
    };

    onQuerySkillMod(evt) {
        const mod = this[evt.data.skill];

        if (mod) {
            evt.data.modifiers.push({
                source: this.entity.moniker.name,
                mod,
            });
        }
    }
}