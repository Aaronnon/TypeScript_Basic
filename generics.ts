function echo<T>(arg: T): T {
    return arg
}
// const str: string = 'str'

const result = echo(true)

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

const result2 = swap(['string', 123])

function echoWithArray<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg
}

const arrs = echoWithArray([1, 2, 3])

interface IwithLength {
    length: number
}

function echoWithLength<T extends IwithLength>(arg: T): T {
    console.log(arg.length);
    return arg

}

const str = echoWithLength('str')
const obj = echoWithLength({ length: 10, width: 10 })
const arr2 = echoWithLength([1, 2, 3])


class Queue<T> {
    private data = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(1)
// queue.push('str')
console.log(queue.pop().toFixed());

interface IKeyPair<T, U> {
    key: T,
    value: U
}

let kp1: IKeyPair<number, string> = { key: 1, value: 'string' }
let kp2: IKeyPair<string, number> = { key: 'str', value: 123 }
let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 34]