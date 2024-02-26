import React from 'react';
import '../../scss/components/breadcumbs.scss'
import Link from 'next/link';

const Breadcrumbs = ( {link, nombre} ) => {
  return (
    <div className="breadcrumbs">
        <Link href="/">Inicio</Link>
        <span> / </span>
        <Link href={link }> {nombre}</Link>
    </div>
  );
};

export default Breadcrumbs;