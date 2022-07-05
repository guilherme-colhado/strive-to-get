import { Card, CardInfo, CardTitle, Infos } from "./style";
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";
import { useContext, useState } from "react";
import { HabitsContext } from "../../Providers/habits";
import { Modal } from "../Modal";
import { ComfirmDelete } from "../ComfirmDelete";
import { ComfirmAchieved } from "../ComfirmAchieved";
export const CardHabit = ({ element }) => {
  const { deleteHabit, archiveHabit, checkInHabit } = useContext(HabitsContext);
  const [delet, setDelet] = useState(false);
  const [archive, setArchive] = useState(false);
  const [howMuch, setHowMuch] = useState(element.how_much_achieved);
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <Card>
        <CardTitle
          tabIndex="-1"
          onFocus={() => setMobile(true)}
          onBlur={() => {
            setMobile(false);
          }}
          mobile={mobile}
        >
          {element.title}{" "}
          <button onClick={() => setDelet(true)}>
            <AiOutlineDelete />
          </button>
        </CardTitle>
        <CardInfo mobile={mobile}>
          <Infos>
            <div>
              <span>Categoria:</span> <span>{element.category}</span>
            </div>
            <div>
              <span>Dificuldade:</span> <span>{element.difficulty}</span>
            </div>
            <div>
              <span>Frequencia:</span> <span>{element.frequency}</span>
            </div>
            <div>
              <span>Faltam: {howMuch}</span>
              <button
                onClick={() => {
                  setHowMuch((previus) => previus - 1);
                  checkInHabit(element, howMuch - 1);
                }}
              >
                <AiOutlineCheckCircle /> Checkin
              </button>
            </div>
          </Infos>
          <button onClick={() => setArchive(true)}>
            <BiArchiveIn />
            Arquivar
          </button>
        </CardInfo>
      </Card>
      <Modal open={delet}>
        <ComfirmDelete
          onClose={() => setDelet(false)}
          onSubmit={() => {
            deleteHabit(element);
          }}
        >
          Tem certeza que deseja deletar este habito
        </ComfirmDelete>
      </Modal>
      <Modal open={archive}>
        <ComfirmAchieved
          onClose={() => setArchive(false)}
          onSubmit={() => {
            archiveHabit(element);
            setArchive(false);
          }}
        />
      </Modal>
    </>
  );
};
