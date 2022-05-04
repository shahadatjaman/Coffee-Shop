import { Dir, LeftMenu, Li,Button, MenuBody, MenuTitle, Wrapper, Title, Ul, Text } from "./RegisterStyles";


import {connect} from "react-redux"


import {NavLink} from 'react-router-dom'

import {Container, Row, Col, InptGroup, Label, Input, FormTitle, Form} from "../../Utils/Elements"

import React from "react";

import Navbar from "../../Home/Navbar/index";

import { authRegister } from "../../../store/action/authAction";



class Register extends React.Component {

    state = {
        firstName : "",
        lastName : "",
        email : "",
        phone : "",
        password : "",
        confirmpassword : "",
        error : {},
        isError : false
    }

    static getDerivedStateFromProps(nextProps, prevProps){
        
        if(JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevProps.error)){
           return nextProps.auth
        }
        return null
    }
   
    changeHandler = (e) => {
        this.setState({
        [e.target.name] : e.target.value,
        error : this.props.auth
       })
    }

    
    formHandler = e => {
        e.preventDefault()
        const {firstName, lastName, email, phone, password, confirmpassword} = this.state
        this.props.authRegister({
            firstName,
            lastName,
            email,
            phone,
            password,
            confirmpassword,
            
        })
        // window.history.replaceState(null, document.title, "/")
    }
    render(){
        const {firstName, lastName, email, phone, password, confirmpassword, error} = this.state

        const {loading, isTaken} = this.props.auth
     
        return (
            <>
            <Navbar />
            <Wrapper>
                <Container>
                    <Row>
                        <Col>
                          <Dir>
                              <NavLink to="/">Home | </NavLink>
                              <NavLink to="/account/register">Register </NavLink>
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
                            Register Account
                           </FormTitle>
                          <Form onSubmit={this.formHandler}>
                          <InptGroup>
                               <Label>
                                   Firsr Name :
                               </Label>
                               <Input 
                                 type="text"
                                 name="firstName"
                                
                                 placeholder="First Name" 
                                 onChange={this.changeHandler }
                                 value={firstName}
                                 className={error.firstName ? "error" : ""}
                                 />
                                 <Text>
                                     {error.firstName}
                                 </Text>

                           </InptGroup>
                           <InptGroup>
                               <Label>
                                   Last Name :
                               </Label>
                               <Input 
                               type="text"
                               name="lastName"
                               className={error.lastName ? "error" : ""}
                               value={lastName}
                               placeholder="Last Name"
                               onChange={this.changeHandler }
                               />
                               <Text>
                                     {error.lastName}
                                 </Text>
                           </InptGroup>
                           <InptGroup>
                               <Label>
                                   Email :
                               </Label>
                               <Input 
                               type="eamil"
                               name="email"
                               className={error.email ? "error" : ""}
                               value={email}
                               placeholder="Email" 
                               onChange={this.changeHandler }
                               />
                               <Text>
                                     {error.email}
                                 </Text>
                                 <Text>
                                     {isTaken ? "Email Taken" : ""}
                                 </Text>
                           </InptGroup>
                           <InptGroup>
                               <Label>
                                   Phone :
                               </Label>
                               <Input 
                               type="text"
                               name="phone"
                               className={error.phone ? "error" : ""}
                               value={phone}
                               placeholder="Phone" 
                               onChange={this.changeHandler }
                               />
                               <Text>
                                     {error.phone}
                                 </Text>
                           </InptGroup>
                           <InptGroup>
                               <Label>
                                   Password :
                               </Label>
                               <Input 
                               type="text"
                               name="password"
                               className={error.password ? "error" : ""}
                               value={password}
                               placeholder="Password" 
                               onChange={this.changeHandler }
                               />
                               <Text>
                                     {error.password}
                                 </Text>
                           </InptGroup>
                           <InptGroup>
                               <Label>
                               Confirm Password :
                               </Label>
                               <Input 
                               type="text"
                               name="confirmpassword"
                               className={error.confirmpassword ? "error" : ""}
                               value={confirmpassword}
                               placeholder=" Confirm Password" 
                               onChange={this.changeHandler }
                               />
                               <Text>
                                     {error.confirmpassword}
                                 </Text>
                           </InptGroup>
                           {loading ? (<Button disabled type="submit">Register</Button>) : (<Button className={loading ? "" : "notload"} type="submit">Register</Button>)}
                          </Form>
    
                       </Col>
                   </Row>
               </Container>
            </Wrapper>
            </>
        );
    }
}

const mapStateToProps = state => {
   return {
       auth : state.auth,

   }
}

export default connect(mapStateToProps, {authRegister})(Register);

