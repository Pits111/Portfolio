import './Card.css';

const Card = ({ title, imgUrl, body}) => {
    return (
        <div className="card-container">
            <p>My Skills</p>
            <div className="image-container">
                <img src={imgUrl} alt='picture' />
            </div>
            <div className="card-content">
                    <div className="cardt-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="card-body">
                        <p>{body}</p>
                    </div>

                    <div className="btn">
                        <button>
                            <a>
                                View More
                            </a>
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Card; 