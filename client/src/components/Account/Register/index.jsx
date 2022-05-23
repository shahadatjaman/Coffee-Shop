import { Dir, LeftMenu, Li,Button, MenuBody, MenuTitle, Wrapper, Title, Ul, Text } from "./RegisterStyles";


import {connect} from "react-redux"


import {NavLink, useNavigate} from 'react-router-dom'

import {Container, Row, Col, InptGroup, Label, Input, FormTitle, Form} from "../../Utils/Elements"

import React, {useState} from "react";

import Validation from "./Validation";

import { authRegister } from "../../../store/action/authAction";



const Register = ({auth,authRegister}) => {

    const initialState = {firstName : "", lastName : "", email : "", phone : "", password : "", confirmpassword : ""}
    
    const [formValues, setFormValues] = useState(initialState)

    const [formErrors, setFormErrors] = useState({});
   


    const changeHandler = (e) => {
         const {name, value} = e.target
         setFormValues({...formValues, [name] : value})
    }
    const navigate = useNavigate()
    const formHandler = (e) => {
        e.preventDefault()
        setFormErrors(validator(formValues))
        authRegister(formValues,navigate)
       
    }

    const validator = (values) => {

     const error = {};

    if(!values.firstName){
        error.firstName = "Enter  your First Name!"
    }
    if(!values.lastName){
        error.lastName = "Enter  your Last Name!"
    }
    if(!values.email){
        error.email = "Enter  your Email!"
    }
    if(!values.phone){
        error.phone = "Enter  your Phone Number!"
    }
    if(!values.password){
        error.password = "Enter  your Password!"
    }
    if(!values.confirmpassword){
        error.confirmpassword = "Confirm Password Required!"
    }else if(values.confirmpassword !== values.password){
        error.confirmpassword = "Password isn't same!!"
    }
    return error
    }
 
        return (
            <>
            {/* <Navbar /> */}
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
                       <Col w="30" md="30" none="true">
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
                       <Col w="70" md="70" sm="100">
                           <FormTitle>
                            Register Account
                           </FormTitle>
                          <Form onSubmit={formHandler}>
                          <InptGroup>
                               <Label>
                                   Firsr Name :
                               </Label>
                               <Input 
                                 type="text"
                                 name="firstName"
                                
                                 placeholder="First Name" 
                                 onChange={changeHandler }
                                 value={formValues.firstName}
                                 className={formErrors.firstName ? "error" : ""}
                                 />
                                 <Text>
                                     {formErrors.firstName}
                                 </Text>

                           </InptGroup>
                           <InptGroup>
                               <Label>
                                   Last Name :
                               </Label>
                               <Input 
                               type="text"
                               name="lastName"
                               className={formErrors.lastName ? "error" : ""}
                               value={formValues.lastName}
                               placeholder="Last Name"
                               onChange={changeHandler }
                               />
                               <Text>
                                     {formErrors.lastName}
                               </Text>
                           </InptGroup>
                           <InptGroup>
                               <Label>
                                   Email :
                               </Label>
                               <Input 
                               type="eamil"
                               name="email"
                               className={formErrors.email ? "error" : ""}
                               value={formValues.email}
                               placeholder="Email" 
                               onChange={changeHandler }
                               />
                               <Text>
                                     {formErrors.email}
                               </Text>
                                 <Text>
                                     {auth.isTakenEmail ? "Email Taken" : ""}
                                 </Text>
                           </InptGroup>
                           <InptGroup>
                               <Label>
                                   Phone :
                               </Label>
                               <Input 
                               type="text"
                               name="phone"
                               className={formErrors.phone ? "error" : ""}
                               value={formValues.phone}
                               placeholder="Phone" 
                               onChange={changeHandler }
                               />
                               <Text>
                                     {formErrors.phone}
                                 </Text>
                           </InptGroup>
                           <InptGroup>
                               <Label>
                                   Password :
                               </Label>
                               <Input 
                               type="text"
                               name="password"
                               className={formErrors.password ? "error" : ""}
                               value={formValues.password}
                               placeholder="Password" 
                               onChange={changeHandler }
                               />
                               <Text>
                                     {formErrors.password}
                                </Text>
                           </InptGroup>
                           <InptGroup>
                               <Label>
                               Confirm Password :
                               </Label>
                               <Input 
                               type="text"
                               name="confirmpassword"
                               className={formErrors.confirmpassword ? "error" : ""}
                               value={formValues.confirmpassword}
                               placeholder=" Confirm Password" 
                               onChange={changeHandler }
                               />
                               <Text>
                                     {formErrors.confirmpassword}
                                 </Text>
                           </InptGroup>
                           <Button type="submit">Register</Button>
                          </Form>
    
                       </Col>
                   </Row>
               </Container>
            </Wrapper>
            </>
        );
}

const mapStateToProps = state => {
   return {
       auth : state.auth,

   }
}

export default connect(mapStateToProps, {authRegister,Validation})(Register);

