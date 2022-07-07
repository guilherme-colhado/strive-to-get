import { useEffect, useState } from "react";
import { UserContext } from "../../Providers/usersFunctions";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { EditPerfilStyle, Input, Button, Section } from "./style";
import { AiFillCaretDown } from "react-icons/ai";

export const EditPerfil = () => {
  const { UpdateUser, token, UserInfos, user } = useContext(UserContext);
  const [username, setUser] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const submit = () => {
    UserInfos();
    UpdateUser({ username, email });
  };

  return (
    <Section>
      <EditPerfilStyle onSubmit={handleSubmit(submit)}>
        <div>
          <h2>Usuário: </h2>
          <Input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <Button type="submit">Confirmar</Button>

        <div>
          <h2>Email: </h2>
          <Input
            type="text"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </EditPerfilStyle>
      <AiFillCaretDown />
    </Section>
  );
};
