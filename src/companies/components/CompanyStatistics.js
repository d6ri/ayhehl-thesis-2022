import React from 'react';

import { HiStar } from 'react-icons/hi';

import { returnReviewValuesByAttribute } from '../../shared/queries';
import '../../shared/components/UI/Tab/Tabs.css';

const CompanyStatistics = ({ cid }) => {
  const attributes = {
    'flexibleSchedule': 'Rugalmas munkaidő beosztás',
    'workplaceEnvironment': 'Kellemes munkakörnyezet',
    'foreignLanguage': 'Idegennyelv tudás szükségessége',
    'mentoring': 'Mentori segítség',
    'specificKnowledge': 'Differenciált tudás szerzése',
  };
  let overallAvg = 0;
  return (
    <div className='main'>
      <h4 className='tab-subtitle'>Statisztikák a gyakornokaink visszajelzései alapján</h4>
      {Object.keys(attributes).map((attr) => {
        let average = returnReviewValuesByAttribute(cid, attr);
        overallAvg += average;
        return (
          <div className='tab-item-content' key={attr}>
            {attributes[attr]}:
            {[...Array(5)].map((star, i) => {
              return (
                <HiStar
                  size='20'
                  color={average <= i ? '#d8d8d8' : '#FFDB33'}
                  key={`attr-star-${i}`}
                />
              );
            })}
          </div>
        );
      })}
      <p
        style={{
          fontWeight: 'bolder',
          borderTop: '1px solid black',
          display: 'inline-block',
          padding: '1em',
        }}
      >
        <span>Összátlag:</span> {overallAvg / Object.keys(attributes).length}
      </p>
    </div>
  );
};

export default CompanyStatistics;
