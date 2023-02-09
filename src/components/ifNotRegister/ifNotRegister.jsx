import { WrapPage,P } from "./ifNotRegister.styled";
import { Link } from "react-router-dom";
import { ButtonBack } from "pages/registerForm/registerForm.styled";

export const IfNotRegister = ()=> {
    return (
      <WrapPage>
        <Link to="/">
          <ButtonBack>Back</ButtonBack>
        </Link>
        <P>
          To access the features of the personal page, please register or log in
        </P>
      </WrapPage>
    );
}