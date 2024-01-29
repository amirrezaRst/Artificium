import { HomeBulbSvg, HomeChatSvg, HomeDevelopSvg, HomePenSvg } from "../../Svgs";
import SingleSection from "./SingleSection";

const IntroOption = [
    {
        title: "Create Assets",
        icon: <HomeChatSvg />,
        color: "green",
        items: [
            {
                label: "UI wireframe",
            },
            {
                label: "Brochure design",
            },
            {
                label: "UI wireframe",
            },
            {
                label: "Brochure design",
            },
        ]
    },
    {
        title: "Developer Tools",
        icon: <HomeDevelopSvg />,
        color: "blue",
        items: [
            {
                label: "API Integration",
            },
            {
                label: "Test automation",
            },
            {
                label: "DB optimization",
            },
            {
                label: "Code review",
            },
        ]
    },
    {
        title: "Content Creation",
        icon: <HomePenSvg />,
        color: "purple",
        items: [
            {
                label: "Product description",
            },
            {
                label: "E-mail copy",
            },
            {
                label: "Whitepaper",
            },
            {
                label: "Press release",
            },
        ]
    },
    {
        title: "Idea Generation",
        icon: <HomeBulbSvg />,
        color: "orange",
        items: [
            {
                label: "Hashtag ideas",
            },
            {
                label: "Brainstorming",
            },
            {
                label: "Trend analysis",
            },
            {
                label: "Social media posts",
            },
        ]
    },
]

const Introduction = () => {
    return (
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:gap-12 sm:gap-6 gap-8">
            {
                IntroOption.map((item, index) => (
                    <SingleSection key={index} title={item.title} icon={item.icon} items={item.items} color={item.color} />
                ))
            }

        </div>
    );
}

export default Introduction;