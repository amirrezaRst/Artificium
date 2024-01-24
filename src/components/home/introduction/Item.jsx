import { ArrowRightSvg } from "../../Svgs";

const Item = () => {
    return (
        <div className="item w-full rounded-md py-3 px-4 flex items-center justify-between">
            <h4 className="text-white">UI wireframe</h4>
            <div><ArrowRightSvg /></div>
        </div>
    );
}

export default Item;