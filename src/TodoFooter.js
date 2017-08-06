import React, { Component } from 'react'
import * as filterTypes from './filter-types'

export default class TodoFooter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-4 text-center">
                    <a href="#" style={{ textDecoration: 'none' }}>
                        你有<span className="badge">{this.props.activeTodoCount}</span>
                        件待办事项
                    </a>
                </div>
                <div className="col-xs-6 text-center">
                    <button className={`btn ${this.props.filterType === filterTypes.ALL ? 'btn-success' : 'btn-default'}`} onClick={() => this.props.changeFilterType(filterTypes.ALL)}>全部</button>
                    <button className={`btn ${this.props.filterType === filterTypes.ACTIVE ? 'btn-success' : 'btn-default'}`} onClick={() => this.props.changeFilterType(filterTypes.ACTIVE)} style={{ marginLeft: 10 }}>未完成</button>
                    <button className={`btn ${this.props.filterType === filterTypes.COMPLETED ? 'btn-success' : 'btn-default'}`} onClick={() => this.props.changeFilterType(filterTypes.COMPLETED)} style={{ marginLeft: 10 }}>已完成</button>
                </div>
                <div className="col-xs-3 text-center">
                </div>
            </div>
        )
    }
}