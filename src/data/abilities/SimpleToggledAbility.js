import { AbilityStatus } from '../../ecs/components/AbilityStatus';
import { getAbilityStatus } from '../Abilities';
import Ability from './Ability';

export default class SimpleToggledAbility extends Ability {
    isToggleable = true;

    getDuration(entity) {
        return 10000;
    }

    getCooldownDuration(entity) {
        return 50000;
    }

    execute(entity, data) {
        const status = getAbilityStatus(this.key, entity);

        if (status) {
            if (status.isToggledOn) {
                status.startCooldown();

                return true;
            }

            return false;
        }

        entity.add(AbilityStatus, {
            key: this.key,
            isToggledOn: true,
            isCoolingDown: false,
            duration: this.getDuration(entity),
            cooldownDuration: this.getCooldownDuration(entity),
            statMods: this.getStatMods(entity),
            skillMods: this.getSkillMods(entity),
        });

        return true;
    }
}
