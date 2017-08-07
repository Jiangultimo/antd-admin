import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Slider extends React.Component {
    constructor(){
        super();
    }

    handleClick() {
        console.log('click', e);
    }

    render(){
        return(
            <Menu
                onClick={this.handleClick}
                style={{width: 240}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode='inline'
                >
                    <SubMenu Key="sub1" title={<span><Icon type="mail" /><span>文章管理</span></span>}>
                        <Menu.Item key="1">文章管理</Menu.Item>
                    </SubMenu>
            </Menu>
        );
    }
}

export default Slider;
