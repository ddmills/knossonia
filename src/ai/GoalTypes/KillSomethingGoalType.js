import { GoalType } from './GoalType';
import { FAILURE, SUCCESS } from '../GoalActionResult';
import { Dead } from '../../ecs/components';
import { computeAStar } from '../../utils/AStar';
import { game } from '../../core/Game';
import { diagonalDistance } from '../../utils/diagonalDistance';
import { MoveGoalType } from './MoveGoalType';

export class KillSomethingGoalType extends GoalType {
    static name = 'KillSomething';

    static isFinished = (entity, goal) => {
        return !goal.target || goal.target.has(Dead) || goal.target.isDestroyed;
    };

    static takeAction = (entity, goal) => {
        // try melee
        let evt = entity.fireEvent('try-melee', {
            target: goal.target,
        });

        if (evt.handled) {
            return SUCCESS;
        }

        const start = entity.position.getPos();
        const targetPos = goal.target.position.getPos();

        // try pathing to target
        const result = computeAStar({
            start,
            goal: targetPos,
            cost: (a, b) => {
                const entities = game.map.getEntitiesAt(b.x, b.y);

                if (game.map.isOutOfbounds(b.x, b.y)) {
                    return Infinity;
                }

                if (entities.some((e) => e.blocker)) {
                    return Infinity;
                }

                return diagonalDistance(a, b);
            }
        });

        if (result.success) {
            const segment = result.path[1];
            const delta = {
                x: segment.x - start.x,
                y: segment.y - start.y,
            };
            const moveGoal = MoveGoalType.createAsSubGoal(goal, {
                data: delta
            });

            entity.brain.pushGoal(moveGoal);

            entity.fireEvent('take-action');

            return SUCCESS;
        }

        // try defense
        // try ranged
        // try items
        // try movement
        // fail to intent

        entity.fireEvent('energy-consumed', 1000);

        return FAILURE;
    };
}