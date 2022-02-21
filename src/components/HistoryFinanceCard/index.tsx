import { Container, Tag } from "./styles";

interface HistoryFinanceCardProps {
  tagColor: string;
  title: string;
  subTitle: string;
  amount: string;
}
export default function HistoryFinanceCard({
  tagColor,
  title,
  subTitle,
  amount,
}: HistoryFinanceCardProps) {
  return (
    <Container>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subTitle}</small>
      </div>
      <h3>{amount}</h3>
    </Container>
  );
}
