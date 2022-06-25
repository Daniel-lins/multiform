import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";

export const FormStep4 = () => {
  let navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 4,
    });
  }, []);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };
  return (
    <Theme>
      <C.Container>
        <p>Passo 4/4 </p>
        <h1>Informações</h1>
        <p>Abaixo você pode ver suas informações</p>

        <hr />
        <C.ContainerInfo>
          <C.Name>
            <h1 className="TitlesInformation">Nome:</h1>
            <p>{state.name} </p>
          </C.Name>
          <C.Nivel>
            <h1 className="TitlesInformation">Nível:</h1>
            <p>
              {state.level === 0
                ? "Você é um iniciante na programação 🥳"
                : "Você é um programador experiente 😎"}{" "}
            </p>
          </C.Nivel>
          <C.Email>
            <h1 className="TitlesInformation">Email:</h1>
            <div className="Container-contatos">
              <p>{state.email}</p>
            </div>
          </C.Email>
          <C.GithubContainer>
            <h1 className="TitlesInformation">Github: </h1>
            <p> {state.github} </p>
          </C.GithubContainer>
        </C.ContainerInfo>
        <Link to="/step2" className="backButton">
          Voltar
        </Link>
      </C.Container>
    </Theme>
  );
};
