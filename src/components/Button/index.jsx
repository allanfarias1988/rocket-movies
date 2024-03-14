import { Container } from "./styles";



// eslint-disable-next-line react/prop-types
export function Button({ icon: Icon, title }) {
    return (
        <Container type="button">
            {Icon && <Icon />}
            {title}
        </Container>
    )
}

