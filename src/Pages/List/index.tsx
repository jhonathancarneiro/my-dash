import { useMemo, useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import SelectdInput from "../../components/SelectdInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import { Container, Content, Filters } from "./styles";
import { useParams } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import listOfMonths from "../../utils/months";
interface Data {
  description: string;
  amountFormatted: string;
  type: string;
  frequency: string;
  dateFromatted: string;
  tagColor: string;
}

export default function List() {
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string | number>(
    String(new Date().getFullYear())
  );

  const [selectedFrequency, setselectedFrequency] = useState([
    "recorrente",
    "eventual",
  ]);

  const [data, setData] = useState<Data[]>([]);

  const { type } = useParams();

  const title = useMemo(() => {
    return type === "entry-balance" ? "Entrada" : "Saidas";
  }, [type]);

  const dataList = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  const lineColor = useMemo(() => {
    return type === "entry-balance" ? "#F7931B" : "#E44C4E";
  }, [type]);

  // const months = [
  //   {
  //     value: "1",
  //     label: "Janeiro",
  //   },
  //   {
  //     value: "2",
  //     label: "Fevereiro",
  //   },
  //   {
  //     value: "3",
  //     label: "Março",
  //   },
  //   {
  //     value: "4",
  //     label: "Abril",
  //   },
  //   {
  //     value: "5",
  //     label: "Maio",
  //   },
  //   {
  //     value: "6",
  //     label: "Junho",
  //   },
  //   {
  //     value: "7",
  //     label: "Julho",
  //   },
  // ];
  // const years = [
  //   {
  //     value: "2019",
  //     label: "2019",
  //   },
  //   {
  //     value: "2020",
  //     label: "2020",
  //   },
  //   {
  //     value: "2021",
  //     label: "2021",
  //   },
  //   {
  //     value: "2022",
  //     label: "2022",
  //   },
  // ];

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];
    dataList.forEach((element) => {
      const date = new Date(element.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
        uniqueYears.sort();
        setYearSelected(year);
      }
    });
    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, []);

  const hanfleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFrequency.findIndex(
      (item) => item === frequency
    );
    if (alreadySelected >= 0) {
      console.log("ja esta selct");
    } else {
      console.log("freq");
      setselectedFrequency([frequency]);
    }
  };
  useEffect(() => {
    const filteredDate = dataList.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear);

      setYearSelected(year);

      return month === monthSelected && year === yearSelected;
    });

    const formattedData = filteredDate.map((item) => {
      return {
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        type: item.type,
        frequency: item.frequency,
        dateFromatted: formatDate(item.date),
        tagColor: "#fc2",
      };
    });
    setData(formattedData);
  }, [dataList, monthSelected, yearSelected, data.length]);

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectdInput
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectdInput
          options={years}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className="tag-filter tag-eventual"
          onClick={() => hanfleFrequencyClick("recorente")}
        >
          Recorentes
        </button>
        <button
          type="button"
          className="tag-filter tag-recurrent"
          onClick={() => hanfleFrequencyClick("eventual")}
        >
          Eventuais
        </button>
      </Filters>
      <Content>
        {data.map((item, index) => (
          <HistoryFinanceCard
            tagColor={item.frequency === "recorrente" ? "#4e41f0" : "#E44c4e"}
            title={item.description}
            subTitle={item.dateFromatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
}
//TODO: revizar a filtragem de ano
