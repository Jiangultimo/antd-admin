import React from 'react';
import {connect} from 'dva';
import loginStyle from '../style/login.css';
import DoPromise from '../utils/dopromise';
import {browserHistory} from 'react-router';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;

class NormalLoginFrom extends React.Component{
    constructor(){
        super();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.context);
        console.log(browserHistory);
        this.props.form.validateFields((err,values) => {
            if(!err) {
                var params = {
                    url:'',
                    data: values,
                    methos: 'POST'
                }
                console.log('Received values of form', params);
                this.props.dispatch({type:'login/login', payload:params});
            }
        });
    }

    render(){
        const {getFieldDecorator} = this.props.form;
        return (
            <div className={loginStyle.login__container}>
                <Form onSubmit={this.handleSubmit} className={loginStyle.login__form}>
                    <FormItem>
                        {
                            getFieldDecorator('userName', {
                                rules:[{
                                    required: true,
                                    message:'请输入用户名'
                                }]
                            })(
                                <Input prefix={<Icon type="user" style={{fontSize:13}}/>} type="text" placeholder="请输入用户名" />
                            )
                        }
                    </FormItem>

                    <FormItem>
                        {
                            getFieldDecorator('password',{
                                rules: [{
                                    required: true,
                                    message: '请输入密码'
                                }]
                            })(
                                <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="请输入密码" />
                            )
                        }
                    </FormItem>
                    <FormItem>
                        <a className={loginStyle.login__form__forgot} href="/article">忘记密码？</a>
                        <Button type="primary" htmlType="submit" className={loginStyle.login__form__button}>登录</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrapperNormalLoginForm = Form.create()(NormalLoginFrom);
export default connect()(WrapperNormalLoginForm);
