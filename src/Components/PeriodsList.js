import React from 'react';
import Period from './Period';
import periods from '../Requests/periods';

class PeriodsList extends React.Component {
  render () {
    return (
      <div className='period-list-container'>
        {periods.map(period => (
          <Period className='period-item' key={period.id} title={period.title} date={period.date} content={period.content} url={period.url} request={period.request} id={period.id} />
        ))}
      </div>
    );
  }
}

export default PeriodsList;
