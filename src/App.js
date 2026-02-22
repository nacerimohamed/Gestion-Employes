import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEmployees } from './store/employeesSlice';
import AddEmployee from './components/AddEmployee';
import ListEmployee from './components/ListEmployee';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Gestion des Employés</h1>
      <AddEmployee />
      <ListEmployee />
    </div>
  );
}

export default App;