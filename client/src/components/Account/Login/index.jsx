import { Dir, LeftMenu, Li, MenuBody, MenuTitle, Wrapper, Title, Ul, Button, Text } from "./RegisterStyles";


import {NavLink} from 'react-router-dom'

import Navbar from "../Navbar";

import {connect} from "react-redux"

import {Container, Row, Col,InptGroup,Form, Label, Input, FormTitle} from "../../Utils/Elements"

import React from "react";

import {authLogin} from "../../../store/action/authAction"

class Login extends React.Component {

    state = {
      email : "",
      password : "",
      error : {}
    }
    static getDerivedStateFromProps(nextProps, prevProps){
        
        if(JSON.stringify(nextProps.login.error) !== JSON.stringify(prevProps.error)){
           return nextProps.login
        }
        return null
    }
    changeHandler = (e) => {
     this.setState({
         [e.target.name] : e.target.value,
         error : this.props.login
     })
    }

    formSubmit = (e) => {
        e.preventDefault();
        const {email,password} = this.state;
     
        this.props.authLogin({email,password})
    }

    render(){

        const {email, password, error} = this.state

        const {loading, isTaken} = this.props.login
        console.log(error)
        return (
            <>
            <Navbar />
            <Wrapper>
                <Container>
                    <Row>
                        <Col>
                          <Dir>
                              <NavLink to="/">Home | </NavLink>
                              <NavLink to="/account/login">Login </NavLink>
                          </Dir>
                        </Col>
                    </Row>
                </Container>
               <Container>
                   <Row>
                       <Col w="30">
                           <LeftMenu>
                              <MenuTitle>
                                  <Title>
                                    Account
                                  </Title>
                                   </MenuTitle>
                               <MenuBody>
                                   <Ul>
                                       <Li>
                                           <NavLink to="/account/login">
                                               Login
                                           </NavLink>
                                       </Li>
                                       <Li>
                                           <NavLink to='/account/register'>
                                             Register
                                           </NavLink>
                                       </Li>
                                       <Li>My Account</Li>
                                       <Li>Wish List</Li>
                                       <Li>Login</Li>
                                       <Li>Order History</Li>
                                   </Ul>
                               </MenuBody>
                           </LeftMenu>
                       </Col>
                       <Col w="70">
                       <FormTitle>
                            Login Your Account
                           </FormTitle>
                           <Form onSubmit={this.formSubmit}>
                                <InptGroup>
                                    <Label>
                                        Email :
                                    </Label>
                                    <Input 
                                    type="eamil"
                                    name="email"
                                    //    className={error.email ? "error" : ""}
                                    value={email}
                                    placeholder="Email" 
                                    onChange={this.changeHandler }
                                    />
                                    <Text>
                                     {error.email}
                                    </Text>
                                </InptGroup>
                                <InptGroup>
                                    <Label>
                                        Password :
                                    </Label>
                                    <Input 
                                        name="password"
                                        type="password"
                                        placeholder="Password" 
                                        value={password}
                                        onChange={this.changeHandler }
                                    />
                                    <Text>
                                     {error.password}
                                    </Text>
                                    <Text>
                                     {error.message}
                                    </Text>
                                </InptGroup>
                                <Button type="submit">Login</Button>
                           </Form>
                       </Col>
                   </Row>
               </Container>
            </Wrapper>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login : state.login
    }
}

export default connect(mapStateToProps,{authLogin})(Login);