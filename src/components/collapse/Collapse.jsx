import React, { useState } from 'react';

function Collapse({ title, children }) {
    const [isOpenList, setIsOpenList] = useState(false);

    const toggleCollapse = () => {
        setIsOpenList(!isOpenList);
    }

    return (
        <div className="collapse">
            <div className="collapse__header">
                <div className="collapse__title">
                    <h2>{title}</h2>
                    <button className={`collapse__title--button ${isOpenList ? 'open' : ''}`} onClick={toggleCollapse}>
                        <i className="fa-solid fa-chevron-up"></i>
                    </button>
                </div>
                {isOpenList && (
                    <div className="collapse__content">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Collapse;