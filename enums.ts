const enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

console.log(Direction.Up);
// console.log(Direction[0]); //const cannot

const value = 'UP'
if (value === Direction.Up) {
    console.log('go up!');

}
