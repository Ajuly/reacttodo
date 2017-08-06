import React ,{ Component}from 'react'

const ENRTY_KEY = 13;
export default class TodoHeader extends Component{
    handleKeyDown = (event) =>{
        // event.preventDefault();
        if(event.keyCode === ENRTY_KEY && event.target.value.length!=null && event.target.value.length > 0){
            let title = event.target.value;
            this.props.addTodo({title});
            event.target.value = '';
        }
    }
    render(){
        return (
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    autoFocus={true} 
                    onKeyDown={this.handleKeyDown} />
            </div>
        )
    }
}
