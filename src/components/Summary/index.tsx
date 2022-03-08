import * as Styled from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <Styled.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="incomeImg" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="outcomeImg" />
        </header>
        <strong>- R$100,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>entradas</p>
          <img src={totalImg} alt="totalImg" />
        </header>
        <strong>R$900,00</strong>
      </div>
    </Styled.Container>
  );
}
