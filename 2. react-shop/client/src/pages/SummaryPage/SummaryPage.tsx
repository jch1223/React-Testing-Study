import React, { useContext, useState } from "react";
import { OrderContext } from "../../context/OrderContext";

interface SummaryPageProps {
  setStep?: React.Dispatch<React.SetStateAction<number>>;
}

const SummaryPage = ({ setStep }: SummaryPageProps) => {
  const [checked, setChecked] = useState(false);
  const [orderDatas] = useContext(OrderContext);

  const productArray = Array.from(orderDatas.products);
  const productList = productArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const hasOptions = orderDatas.options.size > 0;
  let optionsRender = null;
  if (hasOptions) {
    const optionList = Array.from(orderDatas.options.keys()).map((key) => (
      <li key={key}>{key}</li>
    ));

    optionsRender = (
      <>
        <h2>옵션: {orderDatas.totals.options}</h2>
        <ul>{optionList}</ul>
      </>
    );
  }

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setStep(2);
  };

  return (
    <div>
      <h1>주문 확인</h1>
      <h2>여행 상품: {orderDatas.totals.products}</h2>
      <ul>{productList}</ul>
      {optionsRender}
      <form>
        <input
          id="confirm-checkbox"
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <button type="submit" disabled={!checked} onClick={handleSubmit}>
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
