import * as Styled from "./style";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
  return (
    <Styled.Container>
      <Summary />
      <TransactionsTable />
    </Styled.Container>
  );
}
