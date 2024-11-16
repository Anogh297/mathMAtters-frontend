import React from 'react';
import FermatTheorem from './FermatTheorem';
import EuclidTheorem from './EuclidTheorem';
import ChineseRemainder from './ChineseRemainder';

const MathArticles = () => {
    return (
        <>
            <div className='bg-math bg-fixed'>
                <div className="space-y-8 max-w-6xl bg-opacity-90 bg-white mx-auto border-2 border-dotted border-red-400">
                    <FermatTheorem />
                    <EuclidTheorem />
                    <ChineseRemainder />
                </div>
            </div>
        </>
    );
};

export default MathArticles;
