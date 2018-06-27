import { types } from 'mobx-state-tree';

const Counter = types
    .model({
        count: types.optional(types.number, 0)
    })
    .actions(self => ({
        increment(){
            self.count++
        },
        decrement(){
            self.count--
        },
        reset(){
            self.count = 0
        }
    }))
    
export default Counter