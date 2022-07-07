import * as S from "./style";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { toast } from "react-toastify";

export const RegisterGroup = ({ onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Estudo");
  const [description, setDescription] = useState("");

  const onSubmitFunction = (e) => {
    e.preventDefault();
    const data = {
      name,
      category,
      description,
    };

    if (!data.name) return toast.error("Por favor digite o nome do grupo!");

    if (!data.description)
      return toast.error("Por favor digite a descrição do grupo!");

    onSubmit(data);
    onClose();
  };

  return (
    <S.Container>
      <S.Box>
        <form onSubmit={onSubmitFunction}>
          <S.Header>
            <h1>Cadastrar Grupo</h1>
            <S.Close onClick={onClose}>
              <FiX />
            </S.Close>
          </S.Header>
          <S.Input>
            <label>Grupo:</label>
            <input
              placeholder="Digite aqui o nome do seu grupo"
              onChange={(e) => setName(e.target.value)}
            />
          </S.Input>
          <S.Select>
            <label>Categoria:</label>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="" disabled>
                Selecione a categoria
              </option>
              <option value="Estudo">Estudo</option>
              <option value="Saúde">Saúde</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Entretenimento">Entretenimento</option>
            </select>
          </S.Select>
          <S.Textarea>
            <label>Descrição:</label>
            <textarea
              name="description"
              id="description"
              cols="20"
              rows="5"
              placeholder="Digite aqui a descrição do seu grupo"
              onChange={(e) => setDescription(e.target.value)}
            />
          </S.Textarea>
          <S.Button onClick={onSubmit}>
            <span>Cadastrar</span>
          </S.Button>
        </form>
      </S.Box>
    </S.Container>
  );
};
