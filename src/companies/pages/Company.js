import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { IoChevronBackOutline } from 'react-icons/io5';

import { COMPLIST } from '../../testData/companies';
import IndexImg from '../../shared/components/UI/IndexImg';
import CompanyAbout from '../components/CompanyAbout.js';
import CompaniesPos from '../components/CompaniesPos';
import CompanyContact from '../components/CompanyContact';
import Reviews from '../../reviews/components/Reviews';
import Tabs from '../../shared/components/UI/Tab/Tabs';
import Tab from '../../shared/components/UI/Tab/Tab';
import { AuthContext } from '../../shared/context/auth-context';
import CompanyStatistics from '../components/CompanyStatistics';
import './Company.css';
import Card from '../../shared/components/UI/Card';

const Company = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const cid = useParams().cid;
  const company = COMPLIST.find((comp) => comp.cid.toString() === cid);

  return (
    <div>
      <button onClick={() => navigate(-1)} className='btn btn-back'>
        <IoChevronBackOutline />
        Vissza
      </button>
      <Card className='details'>
        <div className='details-head'>
          <IndexImg
            src={`/images/${company.cid}.jpg`}
            alt={company.cid}
            widht='150px'
            height='150px'
          />
          <h1>{company.name}</h1>
        </div>
        <div className='details-pos'>
          <table>
            <tbody>
              <tr>
                <td>Iparág</td>
                <td>{company.industry}</td>
              </tr>
              <tr>
                <td>Cég mérete</td>
                <td>{company.size}</td>
              </tr>
              <tr>
                <td>Székhely</td>
                <td>{company.headquarters}</td>
              </tr>
              <tr>
                <td>Alapítás éve</td>
                <td>{company.founded}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Tabs>
          <Tab
            id={'aboutTab'}
            navTitle={'Rólunk'}
            content={<CompanyAbout description={company.desc} />}
          />
          <Tab
            id={'companyPositions'}
            navTitle={'Gyakornoki pozíciók'}
            content={<CompaniesPos cid={company.cid} />}
          />
          <Tab
            id={'companyContact'}
            navTitle={'Kapcsolat'}
            content={<CompanyContact contact={company.contact} />}
          />
          <Tab
            id={'companyStatistics'}
            navTitle={'Statisztikák'}
            content={<CompanyStatistics cid={company.cid} />}
          />
          {auth.isLoggedIn && (
            <Tab
              id={'companyReviews'}
              navTitle={'Vélemények'}
              content={<Reviews cid={company.cid} />}
            />
          )}
        </Tabs>
      </Card>
    </div>
  );
};

export default Company;
