import { calculateInvestmentResults, formatter } from "../util/investment";

const COLUMN_NAMES = [
  "Year",
  "Investment Value",
  "Interest(Year)",
  "Total Interest",
  "Invested Capital",
];

export default function Result({ inputValues }) {
  const results = calculateInvestmentResults(inputValues);

  function getTableBody() {
    const body = [];
    let investmentCapital = inputValues.initialInvestment;
    let totalInterest = 0;
    
    for (let i = 0; i < results.length; i++) {
        const curResult = results[i];
        investmentCapital += curResult.annualInvestment;
        totalInterest+=curResult.interest;

      body.push(
        <tr key={curResult.year}>
          <td>{curResult.year}</td>
          <td>{formatter.format(curResult.valueEndOfYear)}</td>
          <td>{formatter.format(curResult.interest)}</td>
          <td>{formatter.format(totalInterest)}</td>
          <td>{formatter.format(investmentCapital)}</td>
        </tr>
      );
    }
    return body;
  }

  return (
    <table id="result" className="center">
      <thead>
        <tr>
          {COLUMN_NAMES.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {...getTableBody()}
      </tbody>
    </table>
  );
}
