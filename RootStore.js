import { types } from 'mobx-state-tree'
import Counter from './models/Counter'

const RootStore = types
    .model({
        counter: types.optional(Counter, Counter.create({}))
    })

export default RootStore