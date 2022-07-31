import axios from "axios";
import React, { useEffect, useState } from "react";

const HomeList = (props) => {
    let [todo, setTodo] = useState([]); 

        useEffect(() => {
            let url = "https://jsonplaceholder.typicode.com/todos";
    
            axios.get(url)
                .then((res) => {
                    setTodo(res.data);
                    console.log(res.data);
                })
                .catch((error) => {
                    alert('error')
                });
        }, []);

        const getList = () => {
            document.getElementById('listTable').style.display = 'block';
        }

        const createPost = () => {
            let url = 'https://dummyjson.com/products/add';
            let data = {
                title: "test iPhone 9",
                description: "testAn apple mobile which is nothing like apple",
                price: 549,
                discountPercentage: 12.96,
                rating: 4.69,
                stock: 94,
                brand: "testApple",
                category: "testsmartphones",
                thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
                images: [
                "https://dummyjson.com/image/i/products/1/1.jpg",
                "https://dummyjson.com/image/i/products/1/2.jpg",
                "https://dummyjson.com/image/i/products/1/3.jpg",
                "https://dummyjson.com/image/i/products/1/4.jpg",
                "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
                ]
            };
            axios.post(url, data)
                .then((res) => {
                    if(res.status === 200){
                        console.log(res.data)
                    } else {
                        alert('Something went wrong');
                    }
                })
                .catch((error) => {
                    alert(error)
                });
        };
        
        const myList = todo.map((list, i)=> {
            return (
                <tr>
                    <td>{list['id']}</td>
                    <td>{list['title']}</td>
                </tr>
            );
        });

        const fileUpload = () => {
            let url = '';

            // form data
            let formDataObj = new FormData();
            formDataObj.append('file1', 'fileObj1');
            formDataObj.append('file2', 'fileObj2');
            formDataObj.append('file3', 'fileObj3');

            let headerConfig = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            };

            axios.post(url, formDataObj, headerConfig)
                .then((res) => {
                    if(res.status === 200){
                        console.log(res.data)
                    } else {
                        alert('Something went wrong!');
                    }
                })
                .catch((error) => {
                    alert(error);
                });
        };

    return (
        <div>
            <h1>{props.title}</h1>
            <table id="listTable" style={{display: 'none'}}>
                {myList}
            </table>
            <div>
                <button onClick={getList} className="btn btn-success">GetList</button>
            </div>
            <div>
                <button onClick={createPost} className="btn btn-info">Create Post</button>
            </div>
        </div>
    );
};

export default HomeList;