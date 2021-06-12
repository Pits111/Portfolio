import './Card.css';
import { Link } from 'react-router-dom';


const Card = ({ title, imgUrl, body}) => {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imgUrl} alt='XY' />
            </div>
            <div className="card-content">
                    <div className="cardt-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="card-body">
                        <p>{body}</p>
                    </div>
                    <div className="btn">
                        <Link to = {`/blog/${title}`}>
                        <button className="view-more">
                                View More
                        </button>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default Card; 