import { createStore } from 'redux'
import { reducer } from '../reducers/index'
import { create } from 'domain';

const initialStates = [
    {
        id: 0,
        text: 'Go Shopping 0',
        completed: false
    },
    {
        id: 1,
        text: 'Go Shopping 1',
        completed: false
    }
]

let store = createStore(reducer, initialStates)

export default store