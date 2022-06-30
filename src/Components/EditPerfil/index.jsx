import { useEffect, useState } from "react";
import { UserContext } from "../../Providers/SignUp";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { EditPerfilStyle, Input, Button } from "./style";

export const EditPerfil = () => {
  const { UpdateUser, token, UserInfos, info } = useContext(UserContext);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const {
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const submit = () => {
    let { user_id } = jwt_decode(token);

    UpdateUser(user_id, { username, email });
  };

  //   useEffect(() => {
  //     let { user_id } = jwt_decode(token);
  //     UserInfos(user_id);
  //   }, []);

  return (
    <EditPerfilStyle onSubmit={handleSubmit(submit)}>
      <div>
        <h2>UserName: </h2>
        <Input
          type="text"
          placeholder={info.username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <Button type="submit">All Done</Button>
      <div>
        <h2>Email: </h2>
        <Input
          type="text"
          placeholder={info.email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </EditPerfilStyle>
  );
};
