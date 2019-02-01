import * as octicons from 'octicons';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Octicon = styled.span`
    display: inline-block;
    
    svg {
        width: 100%;
        height: auto;
    }
`;

export function OcticonComponent(props) {
    const width = props.size === 'normal' ? 24 : 48;
    const height = props.size === 'normal' ? 24 : 48;

    return (
        <Octicon style={{width: `${width}px`, height: `${height}px`}} dangerouslySetInnerHTML={{__html: octicons[props.name].toSVG()}}></Octicon>
    );
}

OcticonComponent.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['normal', 'large'])
};
