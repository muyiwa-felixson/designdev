import styled from "styled-components";
import PropTypes from "prop-types";
import { short, getValue, sys } from "../utility/token";


const Typography = sys.typography;
const Wrapper = styled.div`
    display: inline-block;
    font-family: ${props=> props.fontFamily && getValue(props.fontFamily)};
    font-size: ${props=> props.fontSize && getValue(props.fontSize)}px;
    line-height: ${props=> props.lineHeight && getValue(props.lineHeight)}px;
    color: ${props=> short(props.theme.mode, 'sys.on-surface.value').value};
`;

const Text = props => {
    const { type, color, others} = props;
    const typo = type ? type.split(".").reduce((o, i) => o[i], Typography) : null;
    // console.log(typo)
    return <Wrapper {...typo}>{props.children}</Wrapper>
}
Text.defaultProps = {
    type: 'title.large.value',
    color: ''
  };
  
  Text.propTypes = {
    type: PropTypes.any,
    color: PropTypes.string
  };

export default Text;
