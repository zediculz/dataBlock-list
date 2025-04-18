
export interface ListType {
  hash: string
  data: any | undefined 
  timeStamp: string 
  text: string|null
}

export class List {
  lists:ListType[]
  constructor(data: any) {
    this.lists = []
    this.#init(data)
  }

  /**@method init in-bound constructor */
  #init(data:any) {
    const type = typeof data
    const length = data?.length

    if (type === "object" && length !== undefined) {
      const nd:ListType[] = []
      data?.flatMap((d: any, i: number) => {

        const list:ListType = {
          hash: `${Math.floor(Math.random() * 9999999999)}`,
          timeStamp: new Date().toDateString(),
          data: d,
          text: i === 0 ? "first memeber of the list" : null
        }

        nd.push(list)
      })

      this.lists = nd
    } else {
      const list:ListType = {
        hash: `${Math.floor(Math.random() * 9999999999)}`,
        timeStamp: new Date().toDateString(),
        data,
        text: "first memeber on the list"
      }

      this.lists = [list]
    }
  }
}


export function list(data:any) {
  return new List(data)
}