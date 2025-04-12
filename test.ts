
import { List, ListType, list } from "./main.ts"

const todoList = [{
  id: 0,
  todo: "clean my phone",
  status: false
},
{
  id: 1,
  todo: "clean my PC",
  status: false
}]


const todos = new List(todoList)
console.log(todos)