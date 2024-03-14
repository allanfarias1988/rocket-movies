import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function Tag({ icon: Icon, title, ...rest }) {
    return (
        <Container {...rest} >
            {title}{Icon && <Icon />}
        </Container>
    )
}