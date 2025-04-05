import logo from './logo.svg';
import './App.css';
import SideSection from './components/SideSection';
import MainSection from './components/MainSection';
import { createContext, useCallback, useState } from 'react';

export const FilterContext = createContext({})

function App() {
  const [filter, setFilter] = useState({
    "category":[],
    "price":[],
    "rating":[]
  })
  console.log(filter, setFilter, "d")
  const data =()=>{
    return {filter, setFilter}
  }
  return (
    <FilterContext.Provider value={data}>
    <div className="App flex flex-row mt-4">
    <SideSection filter={filter} setFilter={setFilter}/>
    <MainSection filter={filter} setFilter={setFilter} />
    </div>
    </FilterContext.Provider>
  );
}

export default App;
