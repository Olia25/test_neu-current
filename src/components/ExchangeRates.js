import { useQuery } from "@apollo/client";
import { getCurrencyQuery } from "../constants/getCurrencyQuery";
import {InfoCircleOutlined} from "@ant-design/icons"

function ExchangeRates() {
  const { loading, error, data } = useQuery(getCurrencyQuery);
  if (loading) return <p>Loading...</p>;
  if (error) <p>Error...</p>;

  return (
    <div>
      <p>Основна валюта <InfoCircleOutlined style={{color:" #BABEC9"}}/></p>
      <div>
        {data.currencies.map(({ badge, code, value, _id }) => (
          <div className="popoverWidth" key={_id}>
            <input type="checkbox" />
            <span className="currencyStyle">
              <span className="badgeStyle">{badge}</span> {code} {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExchangeRates;
