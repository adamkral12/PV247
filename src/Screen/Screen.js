import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderWrapper from "./Header/HeaderWrapper";
import BodyWrapper from "./Body/BodyWrapper";

export default class Screen extends Component {
    render() {
        return (
            <div>
                Screen
                <HeaderWrapper/>
                <BodyWrapper/>
            </div>
        );
    }
}
