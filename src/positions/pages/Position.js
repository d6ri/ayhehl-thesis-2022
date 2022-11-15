import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import IndexImg from '../../shared/components/UI/IndexImg';
import { POSLIST } from '../../testData/positions';
import { COMPLIST } from '../../testData/companies';
import './Position.css';

const Position = () => {
  const navigate = useNavigate();
  const pid = useParams().pid;
  const position = POSLIST.find((pos) => pos.pid.toString() === pid);
  const company = COMPLIST.find((comp) => comp.cid === position.cid);

  return (
    <div>
      <button data-testid='backNavBtn' onClick={() => navigate(-1)}>
        Vissza
      </button>

      <div>
        <IndexImg
          src={`/images/${position.cid}.jpg`}
          alt={position.cid}
          widht='150px'
          height='150px'
          id={`${position.cid}-img`}
        />
        <h1 data-testid='posName'>{position.name}</h1>
      </div>
      <div>
        <h3>
          Cég neve:
          {<Link to={`/companies/${position.cid}`}> {company.name}</Link>}
        </h3>
        <h3>Terület: {position.department}</h3>
        <h3>Munkavégzés helye: {position.location}</h3>
        <h3>Szerződés típusa: {position.contract} idejű</h3>
        <h3>
          {position.duration === '' ? '' : `Munkaviszony időtartama: ${position.duration} hónap`}
        </h3>
        <h3>
          Munkaórák:{' '}
          {position.schedule.length > 1
            ? `${position.schedule[0]}-${position.schedule[1]} `
            : `${position.schedule} `}
          óra / hét
        </h3>
      </div>
      <div>
        <h3>Leírás</h3>
        <p>{position.description}</p>
      </div>
    </div>
  );
};

export default Position;
