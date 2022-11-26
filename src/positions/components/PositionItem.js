import React from 'react';
import { Link } from 'react-router-dom';

import { FaRegBuilding } from 'react-icons/fa';
import { MdOutlinePlace } from 'react-icons/md';

import IndexImg from '../../shared/components//UI/IndexImg.js';
import Card from '../../shared/components//UI/Card.js';
import { COMPLIST } from '../../testData/companies.js';
import './PositionItem.css';

const PositionItem = ({ pid, cid, name, location, department }) => {
  const company = COMPLIST.find((comp) => comp.cid === cid);

  return (
    <li>
      <Card>
        <div className='carditem__head'>
          <IndexImg src={`/images/${cid}.jpg`} alt={cid} widht='100px' height='100px' />
          <Link to={`/positions/${pid}`}>
            <h2>{name}</h2>
          </Link>
        </div>
        <div className='carditem__info'>
          <FaRegBuilding />
          <Link to={`/companies/${cid}`}>{company.name}</Link>
          <p>
            <MdOutlinePlace size='2.5vh' />
            {location}
          </p>
          <p className={`department-label-${department.toLowerCase()} department-label`}>
            {department}
          </p>
        </div>
      </Card>
    </li>
  );
};

export default PositionItem;
