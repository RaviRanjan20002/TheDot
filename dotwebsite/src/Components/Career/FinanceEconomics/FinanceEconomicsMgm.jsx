import React from 'react';
import "./FinanceEconomicsMgm.css";

// Import images
import FinancialAnalyst from "../../../assets/FinancialAnalyst.jpg";
import FinancialPlanner from "../../../assets/FinancialPlanner.jpg";
import InsuranceUnderwriter from "../../../assets/InsuranceUnderwriter.jpg";
import InvestmentAnalyst from "../../../assets/InvestmentAnalyst.jpg";
import InvestmentManager from "../../../assets/InvestmentManager.jpg";
import PersonalFinancialAdvisor from "../../../assets/PersonalFinancialAdvisor.jpg";
import PurchaseManager from "../../../assets/PurchaseManager.jpg";
import RuralManagementSpecialist from "../../../assets/RuralManagementSpecialist.jpg";
import manymore from "../../../assets/manymore.jpg";
// import StockBroker from "../../../assets/StockBroker.jpg";
// import TaxAdvisor from "../../../assets/TaxAdvisor.jpg";
// import Trader from "../../../assets/Trader.jpg";
// import TreasuryAnalyst from "../../../assets/TreasuryAnalyst.jpg";
// import AccountExecutive from "../../../assets/AccountExecutive.jpg";
// import Accountant from "../../../assets/Accountant.jpg";
// import Auditor from "../../../assets/Auditor.jpg";
// import BankManager from "../../../assets/BankManager.jpg";
// import BudgetAnalyst from "../../../assets/BudgetAnalyst.jpg";
// import CharteredAccountant from "../../../assets/CharteredAccountant.jpg";
// import Economist from "../../../assets/Economist.jpg";
// import FinancialAdviser from "../../../assets/FinancialAdviser.jpg";

const roles = [
  { title: "Financial Analyst", image: FinancialAnalyst },
  { title: "Financial Planner", image: FinancialPlanner },
  { title: "Insurance Underwriter", image: InsuranceUnderwriter },
  { title: "Investment Analyst", image: InvestmentAnalyst },
  { title: "Investment Manager", image: InvestmentManager },
  { title: "Personal Financial Advisor", image: PersonalFinancialAdvisor },
  { title: "Purchase Manager", image: PurchaseManager },
  { title: "Rural Management Specialist", image: RuralManagementSpecialist },
  { 
    title: "& many more", 
    image: manymore, 
    link: "https://www.google.com/search?q=Finance+and+Economics+Careers"
  },
//   { title: "Stock Broker", image: StockBroker },
//   { title: "Tax Advisor", image: TaxAdvisor },
//   { title: "Trader", image: Trader },
//   { title: "Treasury Analyst", image: TreasuryAnalyst },
//   { title: "Account Executive", image: AccountExecutive },
//   { title: "Accountant", image: Accountant },
//   { title: "Auditor", image: Auditor },
//   { title: "Bank Manager", image: BankManager },
//   { title: "Budget Analyst", image: BudgetAnalyst },
//   { title: "Chartered Accountant", image: CharteredAccountant },
//   { title: "Economist", image: Economist },
//   { title: "Financial Adviser", image: FinancialAdviser },
];

const FinanceEconomicsMgm = () => {
  return (
    <div className="container">
      <h1>Finance & Economics Careers</h1>
      <p className="description">
        Explore various careers in finance and economics, ranging from investment management to financial planning.
      </p>
      
      <h3 className="subtitle">Click below to explore any of the following career(s)</h3>

      <div className="grid">
        {roles.map((role, index) => (
          <div key={index} className="card">
            <img src={role.image} alt={role.title} />
            <h2>{role.title}</h2>
            <a
              href={role.link || `https://www.google.com/search?q=${encodeURIComponent(role.title)}+Career`}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              See Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinanceEconomicsMgm;
