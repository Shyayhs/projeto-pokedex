import styled from "styled-components"

export default function Button(props) {
    return (
        <DefaultButton {...props}>{props.value}</DefaultButton>
    )
};

const DefaultButton = styled.button`
    border-radius: 8px;
    padding: 0.6em 1.2em;
    cursor: pointer;
`