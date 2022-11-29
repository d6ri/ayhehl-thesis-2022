import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { IoChevronBackOutline } from 'react-icons/io5';

import Card from '../../shared/components/UI/Card';
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
      <button data-testid='backNavBtn' className='btn btn-back' onClick={() => navigate(-1)}>
        <IoChevronBackOutline size='2vh' />
        Vissza
      </button>
      <Card className='details'>
        <div className='details-head'>
          <IndexImg
            src={`/images/${position.cid}.jpg`}
            alt={position.cid}
            widht='150px'
            height='150px'
            id={`${position.cid}-img`}
          />
          <h1 data-testid='posName'>{position.name}</h1>
        </div>
        <div className='details-pos'>
          <table>
            <tbody>
              <tr>
                <td>Cég neve</td>
                <td>{<Link to={`/companies/${position.cid}`}> {company.name}</Link>}</td>
              </tr>
              <tr>
                <td>Terület</td>
                <td>{position.department}</td>
              </tr>
              <tr>
                <td>Munkavégzés helye</td>
                <td>{position.location}</td>
              </tr>
              <tr>
                <td>Szerződés típusa</td>
                <td>{position.contract} idejű</td>
              </tr>
              <tr>
                <td>Munkaviszony időtartama</td>
                <td>{position.duration} hónap</td>
              </tr>
              <tr>
                <td>Munkaórák</td>
                <td>
                  {position.schedule.length > 1
                    ? `${position.schedule[0]}-${position.schedule[1]} `
                    : `${position.schedule} `}
                  óra / hét
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='about-container'>
          <span className='about-label'>A pozícióról</span>
          <p>{position.description}</p>
        </div>
      </Card>
    </div>
  );
};

export default Position;
