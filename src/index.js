import React from 'react'
import ReactDOM from 'react-dom'

import TodoApp from './TodoApp'
import TodoModel from './TodoModel'
// import TodoApiModel from './TodoApiModel'

let model = new TodoModel();
// let model = new TodoApiModel();

function render(){
    ReactDOM.render(<TodoApp model = { model }/>,document.querySelector('#root'));
}

model.subscribe(render);
render();
