import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateEmployee } from '../store/employeesSlice';

const UpdateEmployee = ({ employee, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ ...employee });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(formData));
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Modifier l'employé</h2>
        <input name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
        <input name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />
        <input name="dateNaissance" type="date" value={formData.dateNaissance} onChange={handleChange} required />
        <input name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} required />
        <div className="buttons">
          <button type="submit">Enregistrer</button>
          <button type="button" onClick={onClose}>Annuler</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmployee;