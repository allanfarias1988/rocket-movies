import { Tag } from "../Tag";
import { Container } from "./styles";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

export function Films() {
    return (
        <Container>
            <div>
                <h3>Interestellar</h3>
                <span className="star"><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStarOutline/></span>
                <p>
                    Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade
                    agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma
                    fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que
                    seu quarto está assombrado por um fantasma que tenta se comunicar com ela.
                </p>
            </div>
            <div>
                <Tag title="Ficção Científica" />
                <Tag title="Drama" />
                <Tag title="Família" />
            </div>
        </Container>
    )
}