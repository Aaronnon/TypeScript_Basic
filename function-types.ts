const add = (x: number, y: number, z?: number): number => {
    if (typeof z === 'number') {
        return x + y + z
    }
    return x + y
}

let result = add(1, 2)

interface Isum {
    (x: number, y: number, z?: number): number
}


let add2: (x: number, y: number, z?: number) => number = add
let add3: Isum = add

