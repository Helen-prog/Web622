function Item(props){
    let {item, index, doneItem} = props;

    return (
        <div>
            <div className="content-home">
                <div className="left">
                    <label htmlFor={index}>
                        <input type="checkbox" id={index} onChange={() => doneItem(index)} /> {item.text}
                    </label>
                </div>
                <div className="right">
                    {item.done ? "+" : "-"}
                </div>
            </div>
        </div>
    )
}

export default Item;