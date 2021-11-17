interface IPerson {
  readonly id: number
  name: string
  age?: number
}

let Aaron: IPerson = {
  id: 1,
  name: 'aaron'
  // age: 20
}

// Aaron.id = 111