import { EllipseSvg } from "../components/Svgs";

const ImageCard = ({ path }) => {
    return (
        <div className="rounded-custom overflow-hidden relative">
            <img src={`./images/${path}.jpg`} className="w-full h-full" alt="art" />
            <div
                className="xl:w-9 xl:h-9 w-8 h-8 m-2 p-2 res-image-setting rounded-custom border border-special-gray-3 absolute top-0 right-0"
            >
                <EllipseSvg />
            </div>
        </div>
    );
}

export default ImageCard;

