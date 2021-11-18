// global objects
const a: Array<number> = [1, 2, 3]
const date = new Date()
date.getTime()
const reg = /abc/
reg.test('abc')

//build-in project
Math.pow(2, 3)

//DOM and BOM
let body = document.body
body.innerHTML
let allLis = document.querySelectorAll('li')
allLis.forEach

document.addEventListener('click', (e) => {
    e.preventDefault()
})

//Utility Types
interface IPerson {
    name: string
    age: number
}

let Aaron: IPerson = { name: 'Aaron', age: 22 }
type IPartial = Partial<IPerson>
let Aaron2: IPartial = { name: 'AA' }

type IOmit = Omit<IPerson, 'name'>
let Aaron3: IOmit = { age: 22 }