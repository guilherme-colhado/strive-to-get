import { CardStyle, HeaderCard, InfosCard } from "./style";

export const CardGoals = () => {
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
          <button>SignUp</button>
        </div>
      </InfosCard>
    </CardStyle>
  );
};
