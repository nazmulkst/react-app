import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

const HomeBanner = (props) => {
    // Use State
    const [color, setColor] = useState("Red");

    const newBlue = () => {
        setColor("Blue");
    }
    const newGreen = () => {
        setColor("Green");
    }

    // Use Ref (DOM Manupulation)
    let userName = useRef();
    let password = useRef();

    const submitForm = () => {
        let a = userName.current.value;
        let b = password.current.value;
        alert(a);
        alert(b);
    };

    // Use Effect

    let [todo, setTodo] = useState([]); 

    useEffect(() => {
        // First Time Load / API Load
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res)=> {
            // alert(res.status)
            // alert(res.data)
            setTodo(res.data);
        })
        .catch((err) => {
            alert('something went wrong')
        })
    }, []);


    const editEvent = (id) => {
        let a = 'Edit id ' + id;
        alert(a);
    };

    const deleteEvent = (id) => {
        let a = 'Delete id ' + id;
        alert(a);
    }
    const viewEvent = (id) => {
        let a = 'View id ' + id;
        alert(a);
    }
    const myList = todo.map((list, i)=> {
        return (
            <tr>
                <td>{ list['userId']}</td>
                <td>{ list['id']}</td>
                <td>{ list['title']}</td>
                <td>{ list['completed']}</td>
                <td><button onClick={editEvent.bind(this,list['id'])} className="btn btn-primary">Edit</button><button onClick={deleteEvent.bind(this,list['id'])} className="btn btn-danger">Delete</button><button onClick={viewEvent.bind(this,list['id'])} className="btn btn-info">Detail View</button></td>
            </tr>
        );
    });

    if(color === 'Red'){
        return (
            <div>
                <h1>{props.subTitle}</h1>
                <h1>{props.test.name}</h1>
                <div>
                
                    <h2 style={{color:'red'}}>This is Red Color</h2>
                </div>
                <h2>{color}</h2>
                <p><button onClick={newBlue}>Change Blue</button></p>
                <p><button onClick={newGreen}>Change Green</button></p>
                <span>{props.title}</span>
                <div>
                    <p><input ref={userName} type="text" placeholder="User Name" /></p>
                    <p><input ref={password} type="text" placeholder="User Password" /></p>
                    <p><button onClick={submitForm}>Submit</button></p>

                </div>
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Completed</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myList}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    } else if(color === 'Blue'){
        return (
            <div>
                <h1>{props.subTitle}</h1>
                <h1>{props.test.name}</h1>
                <div>                
                    <h2 style={{color:'blue'}}>This is Blue Color</h2>
                </div>
                <h2>{color}</h2>
                <p><button onClick={newBlue}>Change Blue</button></p>
                <p><button onClick={newGreen}>Change Green</button></p>
                <span>{props.title}</span>
                <div>
                    <p><input ref={userName} type="text" placeholder="User Name" /></p>
                    <p><input ref={password} type="text" placeholder="User Password" /></p>
                    <p><button onClick={submitForm}>Submit</button></p>

                </div>
                <div>
                    {JSON.stringify(todo)}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h1>{props.subTitle}</h1>
                <h1>{props.test.name}</h1>
                <div>                
                    <h2 style={{color:'green'}}>This is Green Color</h2>
                </div>
                <h2>{color}</h2>
                <p><button onClick={newBlue}>Change Blue</button></p>
                <p><button onClick={newGreen}>Change Green</button></p>
                <span>{props.title}</span>
                <div>
                    <p><input ref={userName} type="text" placeholder="User Name" /></p>
                    <p><input ref={password} type="text" placeholder="User Password" /></p>
                    <p><button onClick={submitForm}>Submit</button></p>

                </div>
                <div>
                    {JSON.stringify(todo)}
                </div>
            </div>
        );
    }
};

export default HomeBanner;