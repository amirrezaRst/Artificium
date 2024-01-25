import { ArrowRightSvg } from "../../Svgs";

const Item = ({ label }) => {
    return (
        <div className="item w-full rounded-md py-3 px-4 flex items-center justify-between">
            <h4 className="text-white text-sm">{label}</h4>
            <div><ArrowRightSvg /></div>
        </div>
    );
}

export default Item;