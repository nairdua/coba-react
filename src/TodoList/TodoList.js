import React, { useState, useEffect } from "react";

function TodoList() {
    const [data, setData] = useState([]);

    useEffect(async () => {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const body =  await result.json()
            setData(body);
        } catch(err) {
            console.log(err);
        }
    }, []);

    return (
        <div>
            <input type="checkbox" value={data.completed}></input>
            <p>{data.title}</p>
        </div>
    );
}

export default TodoList;