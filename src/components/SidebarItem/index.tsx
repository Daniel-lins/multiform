import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ProfileIcon } from "../../svgs/profile.svg";
import { ReactComponent as BookIcon } from "../../svgs/book.svg";
import { ReactComponent as MailIcon } from "../../svgs/mail.svg";
import { ReactComponent as InfoIcon } from "../../svgs/info.svg";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

export const SidebarItem = ({
  title,
  description,
  icon,
  path,
  active,
}: Props) => {
  let navigate = useNavigate();
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    navigate(`${path}`);

    console.log(state.currentStep);
  };

  return (
    <>
      <C.Container>
        <C.Button onClick={handleNextStep}>
          <C.Info>
            <C.Title>{title}</C.Title>
            <C.Description>{description}</C.Description>
          </C.Info>
          <C.IconArea active={active}>
            {icon === "profile" && (
              <ProfileIcon fill="white" width={24} height={24} />
            )}
            {icon === "book" && (
              <BookIcon fill="white" width={24} height={24} />
            )}
            {icon === "mail" && (
              <MailIcon fill="white" width={24} height={24} />
            )}

            {icon === "info" && (
              <InfoIcon fill="white" width={24} height={24} />
            )}
          </C.IconArea>
          <C.Point active={active}></C.Point>
        </C.Button>
      </C.Container>
    </>
  );
};
