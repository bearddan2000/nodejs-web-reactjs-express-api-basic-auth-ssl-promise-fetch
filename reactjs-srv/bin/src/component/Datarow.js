import './Datarow.css';

function Datarow(props) {
    return (
      <div key={props.dataFieldId} className="flex-container">
        <div className="item1">{props.dataFieldId}</div>
        <div className="item2">{props.dataFieldBreed}</div>
        <div className="item3">{props.dataFieldColor}</div>
      </div>
    );
  }
  
  export default Datarow;