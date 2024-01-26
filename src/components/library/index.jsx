import { PlusSvg } from "../Svgs";
import Card from "./Card";
import CardHeader from "./CardHeader";

const Library = () => {
    return (
        <main className="py-8 relative">

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-5 lg:gap-3 md:gap-4 sm:gap-4 gap-8 sm:divide-x divide-special-gray-2 ">

                <section className="first-of-type:sm:pl-0 sm:pl-4">
                    <CardHeader label="Images" />

                    <Card title={"Captain Drake"} text={'Natural born leader with years of experience in space exploration.'} images={["art1", "art2", "art3"]} />
                </section>

                <section className="first-of-type:sm:pl-0 sm:pl-4">
                    <CardHeader label="Documents" />

                    <Card title={"Character Bios"} text={"3 documents, 43832 words"} />
                </section>

                <section className="first-of-type:sm:pl-0 sm:pl-4">
                    <CardHeader label="Ideas" />

                    <Card title={"Concept art for potential new characters or locations."} />
                </section>

            </div>

            <button className="w-11 h-11 rounded-2xl p-2 bg-secondary hover:bg-[#0a0b0b] hover:scale-110 transition-all flex items-center justify-center absolute right-0 bottom-3">
                <PlusSvg />
            </button>

        </main>
    );
}

export default Library;