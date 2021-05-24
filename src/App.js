import React from 'react';
import Card from "./components/Card";
import List from './components/List';
import Dropdown from './components/Dropdown';

// function App() {
//   const cardList = [{path : "https://cdn.pixabay.com/photo/2017/01/25/17/20/lionel-2008448_960_720.jpg",
//                       title : "sports",
//                       content : "some random content about football"},
//                     {path : "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688",
//                       title : "weather",
//                       content : "today's weather details"},
//                       {path : "https://media.istockphoto.com/photos/capitol-picture-id171585034",
//                       title : "politics",
//                       content : "here is the politics update"}
//                     ];

//   const cards = cardList.map((card)=> {
//     return <div><Card path={card.path} content={card.content} title={card.title} ></Card><br></br></div>
//   })
//   return <div className="container m-5">
//             {cards}
//          </div>
// }




// function App() {

//   const lists = [{name : "John", role : "Devolps engineer", experience : "5 yrs"},
//                 {name : "Ricky", role : "Full stack developer", experience : "8 yrs"},
//                 {name : "William", role : "Test engineer", experience : "6 yrs"},
//                 {name : "Jack", role : "Information security engineer", experience : "10 yrs"}
//                 ];
//   const listDetails = lists.map((list) => {
//     return <List name={list.name} role={list.role} experience={list.experience}/>
//   })
//   return <div>
//             {listDetails}
//          </div>
// }


class App extends React.Component {
  constructor() {
    super();
  }
  state = {  }
  
  render() { 
    return (<div>
                <Dropdown/>
            </div> );
  }
}

export default App;
