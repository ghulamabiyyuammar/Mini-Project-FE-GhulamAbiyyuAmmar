import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#1b2430',
        color: 'white',
        textAlign: 'center',
        padding: '27px',
        fontSize: '0.8em',
    };

    return (
        <div style={footerStyle}>
            <p>
                @2023 StudyWeb powered by
                <span className="text-brightColor"> Ghulam Abiyyu Ammar</span> |
                All rights reserved
            </p>
        </div>
    );
};

export default Footer;
