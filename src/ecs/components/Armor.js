import { Component } from 'geotic';

export class Armor extends Component {
    static properties = {
        value: 20,
    };

    onQueryEquippedAbilityModifierArmor(evt) {
        evt.data.modifiers.push({
            source: this.entity.moniker.name,
            mod: this.value,
        });
    }
}