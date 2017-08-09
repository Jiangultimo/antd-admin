import React from 'react';
import { connect } from 'dva';
import {Table, Input, Button, Icon, Select} from 'antd';
import articleStyle from '../style/article.css';
import DoPromise from '../utils/dopromise';

const {Column, ColumnGroup} = Table;
const Option = Select.Option;
const Search = Input.Search;
const data = [{
  key: '1',
  offical: 'John Brown',
  title: 32,
  summary: 'New York No. 1 Lake Park',
  time: 1111
}, {
  key: '2',
  offical: 'Joe Black',
  title: 42,
  summary: 'London No. 1 Lake Park',
  time: 2222
}];

class ArticleList extends React.Component{
    constructor(){
        super();
        this.state = {
            key:'',
            value:'',
            data: data
        }
    }
    onSearch = (value) => {
        DoPromise('/', {key:this.state.key, value: value}, 'GET').then( data => {
            this.setState({
                data: data
            });
        }).catch( error => {
                console.log(error);
        })
    }
    handleChange = (key) => {
        this.setState({
            key:key
        })
    }
    render(){
        return (
            <div className={articleStyle.article_list__container}>
                <Select defaultValue="offical" onChange={this.handleChange}>
                    <Option value="offical">公众号</Option>
                    <Option value="title">标题</Option>
                    <Option value="summary">摘要</Option>
                </Select>
                <div className={articleStyle.article__search}>
                    <Search
                        placeholder="请输入搜索内容"
                        style={{width:250}}
                        onSearch={value => this.onSearch(value)}
                    />
                </div>
                <Table dataSource={this.state.data}>
                    <Column
                        title="公众号"
                        dataIndex="offical"
                        key="offical"
                    />
                    <Column
                        title="文章标题"
                        dataIndex="title"
                        key="title"
                    />
                    <Column
                        title="摘要"
                        dataIndex="summary"
                        key="summary"
                    />
                    <Column
                        title="时间"
                        dataIndex="time"
                        key="time"
                    />
                </Table>
            </div>
        );
    }
}
export default ArticleList;
