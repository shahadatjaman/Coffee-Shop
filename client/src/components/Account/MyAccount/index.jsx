import { Dir, LeftMenu, Li, MenuBody, MenuTitle, Wrapper, Title, Ul, Button, Text } from "./AccountStyles";


import {NavLink} from 'react-router-dom'

import Navbar from "../Navbar";

import {connect} from "react-redux"

import {Container, Row, Col,InptGroup,Form, Label, Input, FormTitle} from "../../Utils/Elements"

import React from "react";

import {authLogin} from "../../../store/action/authAction"

class Account extends React.Component {


    render(){


        return (
            <>
            {/* <Navbar /> */}
            <Wrapper>
                <Container>
                    <Row>
                        <Col>
                          <Dir>
                              <NavLink to="/">Home | </NavLink>
                              <NavLink to="/account"> Account </NavLink>
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
                                        <NavLink to="/account">My Account </NavLink>
                                       </Li>
                                       <Li>Wish List</Li>
                                       <Li>Order History</Li>
                                   </Ul>
                               </MenuBody>
                           </LeftMenu>
                       </Col>
                       <Col w="70">
                          <h4>Account Edit</h4>
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

export default connect(mapStateToProps,{authLogin})(Account);