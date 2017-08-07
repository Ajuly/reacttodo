import React, { Component } from 'react'
import * as filterTypes from './filter-types'

export default class TodoFooter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-3 text-center">
                    {
                        this.props.activeTodoCount ? <div style={{height:'30px',lineHeight:'30px'}}>
                                                        <button className="btn btn-default btn-sm">
                                                            你有<span className="badge">{this.props.activeTodoCount}</span>
                                                            件待办事
                                                        </button>
                                                    </div>:null
                    }
                    
                </div>
                <div className="col-xs-6 text-center">
                    <button className={`btn btn-sm ${this.props.filterType === filterTypes.ALL ? 'btn-success' : 'btn-default'}`} onClick={() => this.props.changeFilterType(filterTypes.ALL)}>全部</button>
                    <button className={`btn btn-sm ${this.props.filterType === filterTypes.ACTIVE ? 'btn-success' : 'btn-default'}`} onClick={() => this.props.changeFilterType(filterTypes.ACTIVE)} style={{ marginLeft: 10 }}>未完成</button>
                    <button className={`btn btn-sm ${this.props.filterType === filterTypes.COMPLETED ? 'btn-success' : 'btn-default'}`} onClick={() => this.props.changeFilterType(filterTypes.COMPLETED)} style={{ marginLeft: 10 }}>已完成</button>
                </div>
                <div className="col-xs-3 text-center">
                    {
                        this.props.completedTodoCount?<button className="btn btn-danger btn-sm" onClick={this.props.clearCompleted} style={{ marginLeft: 10 }}>删除已完成的</button>:null
                    }
                </div>
            </div>
        )
    }
}