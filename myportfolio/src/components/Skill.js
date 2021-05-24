import './Card.css'; 
import { Link } from 'react-router-dom';


const Skill = ({ title, imgUrl, body }) => {
    return (
        <div className="card-container">
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
                        <Link to = {`/portfolio/${title}`}>
                        <button>
                            <a>
                                View More
                            </a>
                        </button>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default Skill; 