import { CardStyle, HeaderCard, InfosCard } from "./style";

export const CardGoalsInscribed = () => {
  return (
    <CardStyle>
      <HeaderCard>"Name"</HeaderCard>
      <InfosCard>
        <div>
          <section>
            <h3>
              <span>Categoria:</span> <span>"Categoria"</span>
            </h3>
            <h4>
              <span>Description:</span> <span>"Description"</span>
            </h4>
          </section>
          <button>Exit</button>
        </div>
      </InfosCard>
    </CardStyle>
  );
};