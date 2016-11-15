import React from 'react';
import { browserHistory } from 'react-router'
import {Select} from 'antd';
const Option = Select.Option;

export default class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (v) => {
        if(v === '退出') {
            browserHistory.push('login');
        }
    }
    render() {
        let logoutWrap = {
            textAlign: 'right',
            paddingRight: 25,
            borderBottom: '1px solid #ddd',
            paddingBottom: 20
        }
        return (
            <div style={logoutWrap}>
                <Select defaultValue="超级管理员" size="large" onChange={this.handleChange}>
                    <Option value="超级管理员">超级管理员</Option>
                    <Option value="退出">退出</Option>
                </Select>
            </div>
        );
    }
}

