import { Menu, Icon } from 'antd';
import headerStyle from '../style/header.css';
import DoPromise from '../utils/dopromise';
import { routerRedux } from 'dva/router'
const SubMenu = Menu.SubMenu;
const MenuItenGroup = Menu.ItemGroup;

class Header extends React.Component {
    constructor() {
        super();
    }
    logout = (e) => {
        console.log('click', e);
        if(e.key === 'logout') {
            DoPromise().then( (data) => {
                window.location = '/';
            }).catch( (error) => {
                console.log(error);
            });
        }
    }
    render() {
        return (
            <Menu mode="horizontal" onClick={this.logout}>
                <SubMenu className={headerStyle.header__right} title={<span><Icon type="user" />{this.props.username}</span>}>
                    <Menu.Item key="logout">注销</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default Header;
