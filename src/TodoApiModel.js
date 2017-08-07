import $ from 'jquery'
// 接口调用
export default class TodoModel{
    constructor(){
        this.todos = [];// 存放着所有的todos
        // 这里可以注册监听器，当模型数据发生变化之后会调用这些监听函数       
        this.listeners = [];
        this.init();
    }
    init(){
        $.ajax({
            url:'http://localhost:3000/todos',
            type:'GET',
            success(todo){//一定要让服务器返回最新的todos
                this.Notify(todos);
            }
        })
    }
    // 订阅 on(type,listener); emit
    subscribe(listener){
        this.listeners.push(listener)
    }
    emit(){
        this.listeners.forEach(listener => listener())
    }
    Notify(todos){
        this.todos = todos;
        this.emit();
    }
    // 增加todo
    addTodo = (todo) => {
        $.ajax({
            url:'http://localhost:3000/todos',
            type:'POST',
            data:todo,
            success(todo){//一定要让服务器返回最新的todos
                this.Notify(todos);
            }
        })
    }  
    toggle = (id) => {
        $.ajax({
            url:'http://localhost:3000/todos/toggle',
            type:'GET',
            data:{id},
            success(todo){//一定要让服务器返回最新的todos
                this.Notify(todos);
            }
        })
    }
    remove = (id) =>{
        $.ajax({
            url:'http://localhost:3000/todos',
            type:'DELETE',
            data:{id},
            success(todo){//一定要让服务器返回最新的todos
                this.Notify(todos);
            }
        })
    }
    toggleAll = (event) =>{
        let checked = event.target.checked;
        $.ajax({
            url:'http://localhost:3000/todos',
            type:'GET',
            data:{checked},
            success(todo){//一定要让服务器返回最新的todos
                this.Notify(todos);
            }
        })
    }
    clearCompleted = () => {
        $.ajax({
            url:'http://localhost:3000/todos',
            type:'GET',
            success(todo){//一定要让服务器返回最新的todos
                this.Notify(todos);
            }
        })
    }
}