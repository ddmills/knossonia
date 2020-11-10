import ecs from '../ecs';
import { MoveCommand, Position } from '../ecs/components';
import * as Directions from '../enums/Directions';
import System from './System';

export default class MovementSystem extends System {
    #query = null;

    constructor(game) {
        super(game);
        this.#query = ecs.createQuery({
            all: [MoveCommand, Position],
        });
    }

    update(dt) {
        this.#query.get().forEach((entity) => {
            const delta = Directions.delta(entity.moveCommand.direction);

            entity.fireEvent('TryMove', delta);

            entity.moveCommand.destroy();
        });
    }
}