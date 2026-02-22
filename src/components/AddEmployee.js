import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../store/employeesSlice';

const AddEmployee = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    numero: '',
    nom: '',
    prenom: '',
    dateNaissance: '',
    adresse: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(formData));
    setFormData({ numero: '', nom: '', prenom: '', dateNaissance: '', adresse: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un employé</h2>
      <input name="numero" placeholder="Numéro" value={formData.numero} onChange={handleChange} required />
      <input name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
      <input name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />
      <input name="dateNaissance" placeholder="Date de naissance" type="date" value={formData.dateNaissance} onChange={handleChange} required />
      <input name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} required />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddEmployee;