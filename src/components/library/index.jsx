import Card from "./Card";
import CardHeader from "./CardHeader";

const Library = () => {
    return (
        <main className="py-8">

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

        </main>
    );
}

export default Library;