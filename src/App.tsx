import React , { useState ,useEffect} from 'react';
import './App.css';
import Button from './components/button';
import ItemList from './components/itemList/ItemList';


interface CarModel {
  id: number;
  name: string;
  checked:boolean;
}

const futureCars: CarModel[] = [
  {
    id: 1,
    name: 'Volkswagen',
    checked: false
  },
  {
    id: 2,
    name: 'BMW',
    checked: false
  },
  {
    id: 3,
    name: 'Toyota',
    checked: true
  },
  {
    id: 4,
    name: 'Nissan',
    checked: false
  },
  {
    id: 5,
    name: 'General Motors',
    checked: true
  },
  {
    id: 6,
    name: 'Hyundai',
    checked: false
  },
  {
    id: 7,
    name: 'Peugeot',
    checked: false
  },
  {
    id: 8,
    name: 'Kia',
    checked: false
  },
  {
    id: 9,
    name: 'Volvo',
    checked: false
  },
  {
    id: 10,
    name: 'Mazda',
    checked: false
  }
]


function App() {

  const [checkedList, setCheckedList] = useState([{id:0 , name:"khaled", checked:true}]);
  //statusBtn to disappear or apper apply changes button 
  const [statusBtn ,setStatusBtn] = useState(false);

  const  orderList = (list:CarModel[])=>{
    const checked = list.filter((item)=> item.checked).sort((a,b)=> a.id-b.id);
    const unchecked = list.filter((item)=> !item.checked).sort((a,b)=> a.id-b.id);
    setCheckedList([...checked , ...unchecked]);
  }

  useEffect(() => {
    resetFutureCars();
  }, [])
  

  const resetFutureCars = ()=>{
    const deepCopy=JSON.parse(JSON.stringify(futureCars))
    orderList(deepCopy);
    console.log(deepCopy);
    setStatusBtn(false);
  }

  const applyChanges = ()=>{
    orderList(checkedList);
  }

  const handleCheck = (car:CarModel,e:boolean)=> {
    console.log(e);
    setStatusBtn(true);
    const deepCopy= JSON.parse(JSON.stringify(checkedList));
    const change = deepCopy.map((item:CarModel)=>{
      item.checked= item.id===car.id ? e : item.checked;
      return item;
    });

    setCheckedList(change);
  }
  return (
    <div className="App">

      <header className="App-header">

        <div className="head">
          <Button text='Reset' operation={resetFutureCars}/>
          <h2>Future Cars</h2>
          {
            statusBtn?
            <Button text='Apply Changes' operation={applyChanges}/>
            :
            <div></div>
          }
        </div>

      <div className="body">
        {
          checkedList.map((item , index)=>(
           <div key={index} className="itemList">
            <ItemList item={item} operation={handleCheck} />
           </div>
          ))
        }
      </div>

      </header>
    </div>
  );
}

export default App;


