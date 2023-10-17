import { createContext, useState, useContext } from "react";

const CompanyContext = createContext({
  companies: "",
  company: "",

  setCompany: () => {},
});

export default CompanyContext;
