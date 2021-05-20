import Card from "./Card"

const CardsList = ({ cardsInfo }) => {
    return (
        <div className="cards-frame">
            {cardsInfo.map((card) => <Card {...card}/> )}
        </div>
    );
};

export default CardsList; 