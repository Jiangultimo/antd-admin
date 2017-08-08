import React from 'react';
import { connect } from 'dva';
import {Table, Input, Button, Icon} from 'antd';
import articleStyle from '../style/article.css';

const {Column, ColumnGroup} = Table;
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

// class ArticleList extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             filterDropdownVisible: false,
//             data,
//             searchText: '',
//             filtered: false
//         }
//     }
//
//     onInputChange = (e) => {
//         this.setState({
//             searchText: e.target.value
//         });
//     }
//
//     onSearch = () => {
//         const {searchText} = this.state;
//         const reg = new RegExp(searchText, 'gi');
//         this.setState({
//             filterDropdownVisible: false,
//             filtered: !!searchText,
//             data: data.map((record) => {
//                 const match = record.name.match(reg);
//                 console.log(match);
//                 if(!match) {
//                     return null;
//                 }
//                 return {
//                     ...record,
//                     name: (
//                         <span>
//                             {record.name.split(reg).map( (text,i) => {
//                                 i > 0 ? [<span className={articleStyle.highlight}>{match[0]}</span>, text] : text
//                             })}
//                         </span>
//                     )
//                 };
//             }).filter(record => !!record)
//         })
//     }
//
//     render() {
//         const columns = [{
//             title: '公众号',
//             dataIndex: 'name',
//             key: 'name',
//             filterDropdown: (
//                 <div className={articleStyle.custom__filter__dropdown}>
//                     <Input
//                         ref={ele => this.searchInput = ele}
//                         placeholder="搜索公众号"
//                         value={this.state.searchText}
//                         onChange={this.onInputChange}
//                         onPressEnter={this.onSearch}
//                     />
//                     <Button type="primary" onClick={this.onSearch}>搜索</Button>
//                 </div>
//             ),
//             filterIcon: <Icon type="search" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
//             filterDropdownVisible: this.state.filterDropdownVisible,
//             onFilterDropdownVisibleChange: (visible) => {
//                 this.setState({
//                     filterDropdownVisible: visible,
//                 }, () => this.searchInput.focus());
//             },
//         }, {
//             title: '文章标题',
//             dataIndex: 'title',
//             key: 'title',
//             // filterDropdown: (
//             //     <div className={articleStyle.custom__filter__dropdown}>
//             //         <Input
//             //             ref={ele => this.searchInput = ele}
//             //             placeholder="搜索文章标题"
//             //             value={this.state.searchText}
//             //             onChange={this.onInputChange}
//             //             onPressEnter={this.onSearch}
//             //         />
//             //         <Button type="primary" onClick={this.onSearch}>搜索</Button>
//             //     </div>
//             // ),
//             // filterIcon: <Icon type="search" style={{color : this.state.filtered ? '#108ee9' : '#aaa'}} />,
//             // filterDropdownVisible: this.state.filterDropdownVisible,
//             // onFilterDropdownVisibleChange: (visible) => {
//             //     this.setState({
//             //         filterDropdownVisible:visible
//             //     }, () => this.searchInput.focus());
//             // }
//         }, {
//             title: '摘要',
//             dataIndex: 'summary',
//             key: 'summary'
//         },{
//             title: '时间',
//             dataIndex:'time',
//             key: 'time'
//         }];
//         return <Table className={articleStyle.article_list__container} columns={columns} dataSource={this.state.data} />;
//     }
// }

class ArticleList extends React.Component{
    constructor(){
        super();
    }
    onSearch(value) {
        console.log('click', value);
    }
    render(){
        return (
            <div className={articleStyle.article_list__container}>
                <div className={articleStyle.article__search}>
                    <Search
                        placeholder="请输入搜索内容"
                        style={{width:250}}
                        onSearch={this.onSearch(value)}
                        onPressEnter={this.onSearch}
                    />
                </div>
                <Table dataSource={data}>
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
