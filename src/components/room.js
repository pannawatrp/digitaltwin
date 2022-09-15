function Room(props) {
    return (
        <div className="my-3 p-3 hover:bg-gray-500 rounded-lg">
            <div className="flex grid grid-cols-2">
                <p className="text-start text-white">{props.title}</p>
                <p className="text-end text-white">{props.value}</p>
            </div>
        </div>
    )
}
export default Room