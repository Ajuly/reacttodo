// 实现数据的持久化
export default class TodoModel{
    constructor(){
        // 向localStorage里面写入的时候需要这个key
        this.STORE_KEY = 'todos';
        this.todos = localStorage.getItem(this.STORE_KEY)?JSON.parse(localStorage.getItem(this.STORE_KEY)):[];// 存放着所有的todos
        // 这里可以注册监听器，当模型数据发生变化之后会调用这些监听函数       
        this.listeners = [];
    }
    // 订阅 on(type,listener); emit
    subscribe(listener){
        this.listeners.push(listener)
    }
    emit(){
        this.listeners.forEach(listener => listener())
    }
    Notify(todos){
        localStorage.setItem(this.STORE_KEY,JSON.stringify(todos));
        this.todos = todos;
        this.emit();
    }
    // 增加todo
    addTodo = (todo) => {
        todo = Object.assign({},{id:Math.random(),completed:false},todo);
        let todos = this.todos;
        todos.push(todo);
        this.Notify(todos);
    }  
    toggle = (id) => {
        let todos = this.todos;
        todos = todos.map(todo =>{
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
        })
        this.Notify(todos);
    }
    remove = (id) =>{
        let todos = this.todos;
        let index = todos.findIndex(todo =>todo.id === id);
        todos.splice(index,1);
        this.Notify(todos);
    }
    toggleAll = (event) =>{
        let checked = event.target.checked;
        let todos = this.todos;
        todos = todos.map(todo => {
            todo.completed = checked;
            return todo;
        })
        this.Notify(todos);
    }
    clearCompleted = () => {
        let todos = this.todos;
        todos = todos.filter(todo =>!todo.completed);
        this.Notify(todos);
    }


}