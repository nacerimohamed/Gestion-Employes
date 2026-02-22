import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from '../store/employeesSlice';
import UpdateEmployee from './UpdateEmployee';

const ListEmployee = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleDelete = (numero) => {
    if (window.confirm('Supprimer cet employé ?')) {
      dispatch(deleteEmployee(numero));
    }
  };

  return (
    <div>
      <h2>Liste des employés</h2>
      <div className="cards-container">
        {employees.map((emp) => (
          <div key={emp.numero} className="card">
            <p><strong>N° {emp.numero}</strong></p>
            <p>{emp.nom} {emp.prenom}</p>
            <p>Né le : {emp.dateNaissance}</p>
            <p>Adresse : {emp.adresse}</p>
            <div className="buttons">
              <button onClick={() => handleDelete(emp.numero)}>Supprimer</button>
              <button onClick={() => setEditingEmployee(emp)}>Modifier</button>
            </div>
          </div>
        ))}
      </div>

      {editingEmployee && (
        <UpdateEmployee
          employee={editingEmployee}
          onClose={() => setEditingEmployee(null)}
        />
      )}
    </div>
  );
};

export default ListEmployee;