import { useMemo } from "react";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import SelectdInput from "../../components/SelectdInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { Container, Content, Filters } from "./styles";

interface RouteParams{
  match:{
    params:{
      type:string
    }
  }
}
//TODO: criação de interface, para o entendimento de rotas dinamicas
export default function List() {
  const title = useMemo(({match}) => {
    return(

    )
  }, []);
  const months = [
    {
      value: "1",
      label: "Janeiro",
    },
    {
      value: "2",
      label: "Fevereiro",
    },
    {
      value: "3",
      label: "Março",
    },
    {
      value: "4",
      label: "Abril",
    },
  ];
  const years = [
    {
      value: "2020",
      label: "2020",
    },
    {
      value: "2021",
      label: "2021",
    },
  ];
  return (
    <Container>
      <ContentHeader title="Saidas" lineColor="#f32f15">
        <SelectdInput options={months} />
        <SelectdInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-recurrent">
          Recorentes
        </button>
        <button type="button" className="tag-filter tag-eventual">
          Eventuais
        </button>
      </Filters>
      <Content>
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de agua"
          subTitle="sub"
          amount="R$ 332,00"
        />
      </Content>
    </Container>
  );
}
