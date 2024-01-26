const SingleUser = ({ setLimit, id, number }) => {
    return (
        <div
            className={`max-sm:w-9 max-sm:h-9 max-md:w-8 max-md:h-8 w-9 h-9 rounded-2xl bg-[#1A1D21] flex items-center justify-center`}
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


const MembersList = () => {
    return (
        <div className="flex -space-x-3 md:-space-x-5 lg:-space-x-3 relative">
            {users.map((item, i) => {
                if (i <= 2) {
                    return (<SingleUser key={i} id={item.id} />)
                }
            })}
            <SingleUser number={users.length} />
        </div>
    );
}

export default MembersList;