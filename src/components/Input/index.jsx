import { Container } from "./styles";
import PropTypes from 'prop-types';

export function Input({ icon: Icon, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    );
}

Input.propTypes = {
    icon: PropTypes.elementType, // Valida que `icon` seja um componente React
    rest: PropTypes.object, // Valida que `rest` seja um objeto
};

