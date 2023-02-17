import styled from "styled-components";
import PropTypes from "prop-types";
import { getSystemObject, getTheme, getValue, getCore } from "../utility/token";

const Wrapper = styled.span`
    display: inline-block;
    font-family: ${props=> props.fontFamily && getValue(props.fontFamily)};
    font-size: ${props=> props.fontSize && getValue(props.fontSize)}px;
    line-height: ${props=> props.lineHeight && getValue(props.lineHeight)}px;
    color: ${props=> props.color !== 'overide' ? getTheme(props.theme.mode,`${props.color}`) : 'inherit'};
    font-weight: ${props=> props.fontWeight && getValue(props.fontWeight)};
`;

const Text = props => {
    const { type, color} = props;
    const typo = type ? getSystemObject(`typography.${type}.value`) : null;
    return <Wrapper {...typo} color={color}>{props.children}</Wrapper>
}
Text.defaultProps = {
    type: 'title.large',
    color: 'on-surface'
  };
  
  Text.propTypes = {
    type: PropTypes.any,
    color: PropTypes.string
  };

export default Text;
