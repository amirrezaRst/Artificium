import { useEffect } from "react"
import { useState } from "react"

const SingleUser = ({ setLimit, id, number }) => {
    return (
        <div
            className={`w-11 h-11 rounded-2xl bg-[#1A1D21] flex items-center justify-center ${!id && "cursor-pointer"}`}
            onClick={() => !id ? setLimit(false) : null}
        >
            {
                id ?
                    <img src={`./images/avatar${id}.png`
                    } alt="avatar" /> :
                    <span className="text-[#686b6e]">+{number - 3}</span>
            }
        </div >
    )
}

const users = [
    { id: 1, name: "user 1" },
    { id: 2, name: "user 2" },
    { id: 3, name: "user 3" },
    { id: 4, name: "user 4" },
    { id: 5, name: "user 5" },
]

const WorkspaceUser = () => {
    const [limit, setLimit] = useState(true);

    useEffect(() => {
        console.log(limit)
    }, [limit])

    return (
        <div className="user-group -space-x-2 relative">
            {users.map((item, i) => {
                if (limit) {
                    if (i <= 2) {
                        return (<SingleUser key={i} id={item.id} />)
                    }
                }
                else {
                    return (<SingleUser key={i} id={item.id} />)
                }
            })}
            {limit &&
                <SingleUser setLimit={setLimit} number={users.length} />
            }
        </div>
    );
}

export default WorkspaceUser;