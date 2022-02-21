import ContentHeader from "../../components/ContentHeader/ContentHeader";
import { Container } from "../../components/toggle/styles";
import SelectdInput from "../../components/SelectdInput";

export default function Dashboard() {
  const options = [
    {
      value: "maria",
      label: "Roberto",
    },
    {
      value: "goiaba",
      label: "Robe",
    },
    {
      value: "goiaba",
      label: "goiaba",
    },
  ];
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="yellow">
        <SelectdInput options={options} />
      </ContentHeader>
    </Container>
  );
}
