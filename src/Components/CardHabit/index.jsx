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
  console.log(element)
  return (
    <>
      <Card>
        <CardTitle onClick={() => setMobile(!mobile)} mobile={mobile}>
          {element.title.length > 6
            ? `${element.title.slice(0, 6)}...`
            : element.title}{" "}
          <button onClick={() => setDelet(true)}>
            <AiOutlineDelete />
          </button>
        </CardTitle>
        <CardInfo archive={element.achieved} mobile={mobile}>
          <Infos archive={element.achieved}>
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
                  const num = element.frequency === "Mensalmente" ? 30 
                  : element.frequency === 'Semanalmente' ? 7 
                  : 1
                  if(howMuch - num > 0){
                    setHowMuch((previus) => previus - num);
                    checkInHabit(element, howMuch - num);
                  }else{
                    setHowMuch(0);
                    checkInHabit(element, 0);
                  }
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
