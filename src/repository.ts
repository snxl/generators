import { name } from './shared'

export interface ISymbolPromiseNames {
    [name]: string 
 }

export interface Generator<T = unknown, TReturn = any, TNext = unknown> extends Iterator<T, TReturn, TNext> {
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return(value: TReturn): IteratorResult<T, TReturn>;
    throw(e: any): IteratorResult<T, TReturn>;
    [Symbol.iterator](): Generator<T, TReturn, TNext>;
}