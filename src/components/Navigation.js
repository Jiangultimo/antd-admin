import {Menu, Icon} from 'antd';
import navStyle from '../style/navigation.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Slider extends React.Component {
    constructor(){
        super();
    }

    handleClick(e) {
        console.log('click', e);
    }

    render(){
        return(
            <Menu
                onClick={this.handleClick}
                style={{width: '20%'}}
                defaultSelectedKeys={['article']}
                mode='inline'
                className={navStyle.nav__container}
                >
                    <Menu.Item key="article">
                        <Icon type="book" />
                        <span>文章管理</span>
                    </Menu.Item>
            </Menu>
        );
    }
}

export default Slider;
