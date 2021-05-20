import './Card.css'; 

const Skill = ({ heading, image, text }) => {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={image} alt='picture' />
            </div>
            <div className="card-content">
                    <div className="cardt-title">
                        <h3>{heading}</h3>
                    </div>
                    <div className="card-body">
                        <p>{text}</p>
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

export default Skill; 