import React, { MouseEvent } from 'react';

export interface LayoutMenuProps {
  onClick: (event: MouseEvent<HTMLButtonElement>, numOfCols: number) => void;
}

export const LayoutMenu: React.FC<LayoutMenuProps> = ({ onClick }) => (
  <div>
    <button className="one-col" onClick={(e) => onClick(e, 1)}></button>
    <button className="two-cols" onClick={(e) => onClick(e, 2)}></button>
    <button className="three-cols" onClick={(e) => onClick(e, 3)}></button>
  </div>
);
