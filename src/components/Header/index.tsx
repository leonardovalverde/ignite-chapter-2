import logoImg from "../../assets/logo.svg";
import * as Styled from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
  return (
    <Styled.Container>
      <Styled.Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Styled.Content>
    </Styled.Container>
  );
}
