import React from 'react';
import { useSelect } from '../hooks/useSelect';
import styles from './Form.module.css';
import PropTypes from 'prop-types';

export const Form = ({ setSearchCategory }) => {
  const OPTIONS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' }
  ];

  // Utilizar custom hook
  const [category, SelectNews] = useSelect('general', OPTIONS);

  // Submit al formulario
  const handleSubmit = e => {
    e.preventDefault();
    setSearchCategory(category);
  };

  return (
    <div className={`${styles.search} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={handleSubmit}>
          <h2 className={styles.heading}>Encuentra noticias por categoría</h2>

          <SelectNews />

          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles['btn-block']} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  setSearchCategory: PropTypes.func.isRequired
};
