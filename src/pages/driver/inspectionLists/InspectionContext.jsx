/* eslint-disable react/prop-types */
import { useContext } from "react";
import { createContext, useState } from "react";


export const InspectionContext = createContext()

export const InspectionProvider = ({ children }) => {
  const [damaged, setDamaged] = useState([]);
  const [busId, setBusId] = useState('');
  const [routeId, setRouteId] = useState('');
  const [newReportID, setNewReportID] = useState(null);
  const [reportCount, setReportCount] = useState(null);

  const toggleDamaged = (part) => {
    const currentDamaged = damaged;
    const index = currentDamaged.indexOf(part);
    if(index > -1){
      currentDamaged.splice(index, 1)
    } else {
      currentDamaged.push(part);
    }
    setDamaged(currentDamaged);
    console.log(currentDamaged)
  }

  return (
    <InspectionContext.Provider value={{ reportCount, setReportCount, damaged, toggleDamaged, busId, setBusId, routeId, setRouteId, newReportID, setNewReportID }}>
      {children}
    </InspectionContext.Provider>
  );

  

}

export const InspectionAccess = () => {
    return useContext(InspectionContext)
  };