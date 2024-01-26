import { EllipseSvg } from "../Svgs";

const CardHeader = ({ label }) => {
    return (
        <div className="flex justify-between items-center mb-5">
            <h4 className="text-white/90 text-lg">{label}</h4>
            <div className="w-5 h-5">
                <EllipseSvg />
            </div>
        </div>
    );
}

export default CardHeader;