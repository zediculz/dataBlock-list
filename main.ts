
interface ListType {
  hash: number
  data: any | undefined 
  timeStamp: string 
  text: string|null
}

class List {
  lists:ListType[]
  constructor(data: any) {
    console.log(typeof data, data?.length)
    this.lists = []
  }
}

const list = new List("oo")
console.log(list)