import React from 'react';
import '../Styles/Card.css';

const RotatingCard = () => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-face card-front">
                    <img src='assets/images/cartao.svg' alt="Frente do Cartão" />
                </div>
                <div className="card-face card-back">
                    <img src='assets/images/verso.svg' alt="Verso do Cartão" />
                </div>
            </div>
        </div>
    );
};

export default RotatingCard;
