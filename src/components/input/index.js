import React from 'react';
import PropTypes from 'prop-types';

import {Container, InputField, Label} from './styles'

/**
 * Cusotom input
 * @param type can be text or password
 * @param errors
 * @param rest
 * @returns {*}
 * @constructor
 */
const Input = ({
    type,
    errors,
    ...rest
               }) => {
    return (
        <Container>
            <Label>{rest.label}</Label>
            <InputField
                placeholder={rest.placeholder}
                type={type}
                name={rest.name}
                isWithButton={rest.isWithButton}
            />
            {
                errors.map((error) => <span>{error}, </span>)
            }
        </Container>
    )
};

export default Input;

Input.propTypes = {
    /**
     * Input label
     */
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password']).isRequired,
    isWithButton: PropTypes.bool,
    errors: PropTypes.arrayOf(PropTypes.string)
};

Input.defaultProps = {
    placeholder: '',
    isWithButton: false,
    errors: []
};