import * as S from "./style";
import { FiX } from "react-icons/fi";

export const RegisterGroup = ({ onClose }) => {
  return (
    <S.Container>
      <S.Box>
        <form>
          <S.Header>
            <h1>Cadastrar Grupo</h1>
            <S.Close onclick={onClose}>
              <FiX />
            </S.Close>
          </S.Header>
          <S.Input>
            <label>Grupo:</label>
            <input placeholder="Digite aqui o nome do seu grupo" />
          </S.Input>
          <S.Select>
            <label>Categoria:</label>
            <select>
              <option value="" disabled>
                Selecione a categoria
              </option>
              <option value="study">Estudo</option>
              <option value="health">Saúde</option>
              <option value="work">Trabalho</option>
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
            />
          </S.Textarea>
          <S.Button>
            <span>Cadastrar</span>
          </S.Button>
        </form>
      </S.Box>
    </S.Container>
  );
};
