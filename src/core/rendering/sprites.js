import Sprite from './Sprite';
import SpriteSheet from './SpriteSheet';

const image = document.getElementById('tileset');

const sheet = new SpriteSheet('base', image, 16, 16);

const sprite = (name, x, y) => new Sprite(name, sheet, x, y);

export default [
    sprite(' ', 0, 0),
    sprite('smile', 2, 0),
    sprite('#', 3, 2),
    sprite('@', 0, 4),
    sprite('!', 1, 2),
    sprite('(', 8, 2),
    sprite(')', 9, 2),
    sprite('*', 10, 2),
    sprite('+', 11, 2),
    sprite(',', 12, 2),
    sprite('-', 13, 2),
    sprite('.', 14, 2),
    sprite('0', 0, 3),
    sprite('1', 1, 3),
    sprite('2', 2, 3),
    sprite('3', 3, 3),
    sprite('4', 4, 3),
    sprite('5', 5, 3),
    sprite('6', 6, 3),
    sprite('7', 7, 3),
    sprite('8', 8, 3),
    sprite('9', 9, 3),
    sprite('A', 1, 4),
    sprite('B', 2, 4),
    sprite('C', 3, 4),
    sprite('D', 4, 4),
    sprite('E', 5, 4),
    sprite('F', 6, 4),
    sprite('G', 7, 4),
    sprite('H', 8, 4),
    sprite('I', 9, 4),
    sprite('J', 10, 4),
    sprite('K', 11, 4),
    sprite('L', 12, 4),
    sprite('M', 13, 4),
    sprite('N', 14, 4),
    sprite('O', 15, 4),
    sprite('P', 0, 5),
    sprite('Q', 1, 5),
    sprite('R', 2, 5),
    sprite('S', 3, 5),
    sprite('T', 4, 5),
    sprite('U', 5, 5),
    sprite('V', 6, 5),
    sprite('W', 7, 5),
    sprite('X', 8, 5),
    sprite('Y', 9, 5),
    sprite('Z', 10, 5),
    sprite('[', 11, 5),
    sprite(']', 13, 5),
    sprite('a', 1, 6),
    sprite('b', 2, 6),
    sprite('c', 3, 6),
    sprite('d', 4, 6),
    sprite('e', 5, 6),
    sprite('f', 6, 6),
    sprite('g', 7, 6),
    sprite('h', 8, 6),
    sprite('i', 9, 6),
    sprite('j', 10, 6),
    sprite('k', 11, 6),
    sprite('l', 12, 6),
    sprite('m', 13, 6),
    sprite('n', 14, 6),
    sprite('o', 15, 6),
    sprite('p', 0, 7),
    sprite('q', 1, 7),
    sprite('r', 2, 7),
    sprite('s', 3, 7),
    sprite('t', 4, 7),
    sprite('u', 5, 7),
    sprite('v', 6, 7),
    sprite('w', 7, 7),
    sprite('x', 8, 7),
    sprite('y', 9, 7),
    sprite('z', 10, 7),
    sprite('?', 15, 3),
];







