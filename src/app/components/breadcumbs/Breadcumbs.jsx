import React from 'react';
import '../../scss/components/breadcumbs.scss'

const Breadcrumbs = ( {link, nombre} ) => {
  return (
    <div className="breadcrumbs">
        <a href="/">Inicio</a>
        <span> / </span>
        <a href={link }> {nombre}</a>
    </div>
  );
};

export default Breadcrumbs;