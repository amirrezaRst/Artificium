import CardFooter from "./CardFooter";

const Card = ({ title, text, images = [] }) => {
    return (
        <div className="rounded-custom bg-secondary">
            <div className="md:py-3 sm:px-4 sm:py-2 px-5 py-3">
                <h4 className="text-white/90 font-medium text-lg">{title}</h4>
                <p className="text-special-gray-3 text-sm mt-2">{text}</p>
               
                <div className="grid grid-cols-3 gap-3 mt-5">
                    {!!images.length && images.map(item => (
                        <div className="rounded-custom overflow-hidden last-of-type:mb-2">
                            <img src={`./images/${item}.jpg`} alt="art" />
                        </div>
                    ))}
                </div>
            </div>

            <CardFooter />

        </div>
    );
}

export default Card;