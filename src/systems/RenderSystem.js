import ecs from '../ecs';
import { Glyph, Position } from '../ecs/components';
import System from './System';

export default class RenderSystem extends System {
    #query = null;

    constructor(game) {
        super(game);
        this.#query = ecs.createQuery({
            all: [Glyph, Position],
        });
    }

    update(dt) {
        this.game.renderer.clear();

        this.#query.get().forEach((renderable) => {
            this.game.renderer.draw(
                renderable.position.x,
                renderable.position.y,
                renderable.glyph.char,
                renderable.glyph.fg,
                renderable.glyph.bg
            );
        });
    }
}