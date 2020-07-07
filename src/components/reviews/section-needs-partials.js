import React from 'react';
import iconTime from '../../images/svg/icon-time.svg';
import iconMaterials from '../../images/svg/icon-materials.svg';

const ReviewSectionNeedsPartial = ({ type, children }) => {
  return (
    <>
      <div className="grid__item">
        <h3>
          <img src={type === 'time' ? iconTime : iconMaterials} className="icon" alt={type} />
          {type === 'time' ? 'TIME' : 'MATERIALS'}
        </h3>

        {children}
      </div>
    </>
  );
};

export default ReviewSectionNeedsPartial;
