import axios from 'axios';
import React, {Component} from 'react';

class HomeMenu extends Component {
    constructor(){
        super();
        this.state = {
            color: 'red',
            todoList: []
        }
    }
    getText = () => {
      let a = this.myText.value;
      alert(a)

    }
    deleteList = (id) => {
        let a = 'Deleted Id: ' + id;
        alert(a)
    };

    viewList = (id) => {
        let b = 'View Id: ' + id;
        alert(b)
    }

    componentDidMount(){
        // API
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                this.setState({todoList: res.data})
            })
            .catch((err)=>{
            alert(err)
        })
    }
    render(){
        const myList = this.state.todoList.map((item, i)=>{
            return (
                <tr>
                    <td>{item['userId']}</td>
                    <td>{item['id']}</td>
                    <td>{item['title']}</td>
                    <td>
                        <button onClick={this.deleteList.bind(this, item['id'])} className="btn btn-danger">Delete</button>
                        <button onClick={this.viewList.bind(this, item['id'])} className="btn btn-info">View</button>
                    </td>
                </tr>
            );
        });
        if(this.state.color === 'red'){
            return (
                <div>
                    <div>
                        <h1>MY todo lists</h1>
                        <table className='table table-hover table-bordered table-condenced'>
                            <tbody>
                                {myList}
                            </tbody>
                        </table>
                    </div>
                    <h1>{this.props.title}</h1>
                    <h2 style={{color: this.state.color}}>{this.state.color}</h2>
                    <p><button onClick={()=> this.setState({color: "purple"})}>Change Purple</button></p>
                    <ul>
                        <li>{this.props.menu.home}</li>
                        <li>{this.props.menu.about}</li>
                        <li>{this.props.menu.profile}</li>
                    </ul>
                    <div>
                        <input type="text" ref={(abc) => this.myText = abc} />
                        <p><button onClick={this.getText}>Get Text</button></p>
                    </div>
                </div>
            );
        } else if(this.state.color === 'purple'){
            return (
                <div>
                    <div>
                        <h1>MY todo lists</h1>
                        <table>
                            <tbody>
                                {myList}
                            </tbody>
                        </table>
                    </div>
                    <h1>{this.props.title}</h1>
                    <h2 style={{color: this.state.color}}>{this.state.color}</h2>
                    <p><button onClick={()=> this.setState({color: "red"})}>Change Red</button></p>
                    <ul>
                        <li>{this.props.menu.home}</li>
                        <li>{this.props.menu.about}</li>
                        <li>{this.props.menu.profile}</li>
                    </ul>
                </div>
            );
        }
            
    };
}

export default HomeMenu;