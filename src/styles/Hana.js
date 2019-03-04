import React from "react";
import styled from "styled-components";

const Emoji = styled.div`
  position: absolute;
  font-size: 60px;
  margin: 0 30px;
  transform: rotate(330deg);
`;

const Hana = props => (
    <Emoji>
        <span
            role="img"
            aria-label="props.label"
            >
            {props.value}
        </span>
    </Emoji>
)

export default Hana;
