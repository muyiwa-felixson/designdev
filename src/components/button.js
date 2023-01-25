import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { sys, getValue, short, getSysValue, getCoreValue } from "../utility/token";

const Wrapper = styled.div`
    display: inline-grid;
    align-items: center;
    grid-template-columns:${props=> props.leftIcon ? 'max-content': ''} auto ${props=> props.rightIcon ? 'max-content': ''};
    background: ${props=> short(props.theme.mode, `sys.${props.color}.value`).value};
    height: ${props=> getValue(getSysValue(`sys.dimension.button-height.${props.size}.value`))};
    border-radius: ${props=> getValue(getSysValue(`sys.border-radius.medium.value`))};
    color: ${props=> short(props.theme.mode, `sys.on-${props.color}.value`).value};
    padding: 0 ${getCoreValue('{core.dimension.16.value}')};
    grid-gap: ${getCoreValue('{core.dimension.8.value}')};

    ${props=> props.type === 'outline' && css`
        background: none;
        color: ${props=> short(props.theme.mode, `sys.on-surface.value`).value};
        border: 1px solid ${props=> short(props.theme.mode, `sys.outline.value`).value};
    `}
    ${props=> props.type === 'outline-variant' && css`
        background: none;
        color: ${props=> short(props.theme.mode, `sys.on-surface.value`).value};
        border: 1px solid ${props=> short(props.theme.mode, `sys.outline-variant.value`).value};
    `}
    ${props=> props.type === 'tertiary' && css`
        background: none;
        color: ${props=> short(props.theme.mode, `sys.on-surface.value`).value};
        border: none;
    `}
`;

const Button = props=> {
    const {children, leftIcon, rightIcon} = props;
    return <Wrapper {...props}>{leftIcon && <i className={leftIcon} /> }{children}{leftIcon && <i className={rightIcon} /> }</Wrapper>
}

Button.defaultProps = {
    size: 'large',
    color: 'primary',
    type: 'default',
  };
  
  Button.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string
  };
export default Button;