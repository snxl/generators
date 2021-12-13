import { ISymbolPromiseNames } from "./repository"
import { name } from "./shared"

const DBNames = (): Promise<Array<ISymbolPromiseNames>> => Promise.resolve([
    {[name]: 'teste_1'},
    {[name]: 'teste_2'}
])

async function* processDBNamesGen():AsyncGenerator<string>{
    for(const item of await DBNames()){
        yield item[name].toUpperCase()
    }
}

(async ()=>{
    for await (const item of processDBNamesGen()){
        console.log(item)
    }
})()