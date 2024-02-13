
function trend(id, title, content) {
    return (
        <div className="w-[390px] h-62 from-pink-400 to-purple-300 bg-gradient-to-b rounded-3xl my-2 mx-auto">
            <div id={id} className="from-neutral-900 bg-gradient-to-b to-neutral-950 rounded-3xl p-2 m-[2px]">
                <h1 className="text-xl text-neutral-300 py-3 text-left px-6 font-bold capitalize">{title}</h1>
                <p className="text-neutral-400 font-light italic text-left px-7 mb-5 overflow-ellipsis line-clamp-2">{content}</p>
            </div>
        </div>

    )
}

export default trend
