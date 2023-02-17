import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { getTheme, getCore, getSystem} from "../utility/token";
import Text from "./type";

const Wrapper = styled.div`
    display: inline-grid;
    align-items: center;
    grid-template-columns:${props=> props.leftIcon ? 'max-content': ''} auto ${props=> props.rightIcon ? 'max-content': ''};
    background: ${props=> getTheme(props.theme.mode, props.color)};
    height: ${props=> getSystem(`dimension.button-height.${props.size}`)};
    border-radius: ${props=> getSystem(`border-radius.medium`)};
    color: ${props=> getTheme(props.theme.mode, `on-${props.color}`)};
    padding: 0 ${getCore('{dimension.16}')};
    grid-gap: ${getCore('{dimension.8}')};

    ${props=> props.type === 'outline' && css`
        background: none;
        color: ${props=> getTheme(props.theme.mode, `on-surface`)};
        border: 1px solid ${props=> getTheme(props.theme.mode, `outline`)};
    `}
    ${props=> props.type === 'outline-variant' && css`
        background: none;
        color: ${props=> getTheme(props.theme.mode, `on-surface`)};
        border: 1px solid ${props=> getTheme(props.theme.mode, `outline-variant`)};
    `}
    ${props=> props.type === 'tertiary' && css`
        background: none;
        color: ${props=> getTheme(props.theme.mode, `on-surface`)};
        border: none;
    `}
`;

const Button = props=> {
    const {children, leftIcon, rightIcon} = props;
    return <Wrapper {...props}>{leftIcon && <i className={leftIcon} /> }<Text type="label.large">{children}</Text>{leftIcon && <i className={rightIcon} /> }</Wrapper>
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