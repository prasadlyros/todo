function TodoTrash(props){
    const {data, fun, del, trash} = props
    return(
        <>
        <h1>Trash Items</h1>
            {
                data.map((item) => (
                    <div key={item.title}>
                    <p>Title : {item.title}</p>
                    <p>Desc : {item.desc}</p>
                    <button onClick={(e) =>fun(e,item.id)}>Undo</button>
                    <button onClick={()=> del(item.id)}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}

export default TodoTrash