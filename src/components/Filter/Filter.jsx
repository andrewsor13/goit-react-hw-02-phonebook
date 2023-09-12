import React from 'react';
import styles from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <div className={styles.filter_container}>
      <label htmlFor="filter">
        <em>Filter by Name: </em>
      </label>
      <input
        className={styles.form_input}
        type="text"
        id="filter"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search by name"
      />
    </div>
  );
}
