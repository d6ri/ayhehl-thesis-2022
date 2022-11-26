import React from 'react';
import { Link } from 'react-router-dom';

import { MdOutlinePlace } from 'react-icons/md';
import { HiArrowsPointingOut } from 'react-icons/hi2';

import Card from '../../shared/components/UI/Card';
import IndexImg from '../../shared/components/UI/IndexImg';

const CompanyItem = ({ cid, name, industry, headquarters, size }) => {
  return (
    <li>
      <Card>
        <div className='carditem__head'>
          <IndexImg src={`/images/${cid}.jpg`} alt={cid} widht='100px' height='100px' />
          <Link to={`/companies/${cid}`}>
            <h2>{name}</h2>
          </Link>
        </div>
        <div className='carditem__info'>
          <p>
            <MdOutlinePlace size='1.2em' />
            {headquarters}
          </p>
          <p>
            <HiArrowsPointingOut size='1.2em' />
            {size}
          </p>
          <p>
            {industry.length > 1 ? (
              industry.map((e) => (
                <span key={e} className='industry-label'>
                  {e}
                </span>
              ))
            ) : (
              <span className='industry-label'>{industry}</span>
            )}
          </p>
        </div>
      </Card>
    </li>
  );
};

export default CompanyItem;
