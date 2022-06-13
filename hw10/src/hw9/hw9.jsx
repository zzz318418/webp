
   import React from'react';

   class NameForm extends React.Component {
       constructor(props) {
       super(props);
       this.state = {
       value: '',
       itemList: [],
       };
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       }
       handleChange(event) {
       this.setState({value: event.target.value});
       }
       handleSubmit(event) {                  //新增貼文
       this.state.itemList.push(this.state.value);
       this.setState({value: '', itemList: this.state.itemList,});
       event.preventDefault();
       }
       render() {
       return (
       <div>
       <form onSubmit={this.handleSubmit}>
       <label style={{
      color: 'blue',
      textAlign: 'center'
    }}>
       CGU ToDo List
       <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Submit" />
       </form>
       <ul style={{ textAlign: 'left' }}>
       {this.state.itemList.map((item, index) => <li id={index} key={`item_${index}`}>{
           <div id={index}>
            {<button onClick={() => {var obj = document.getElementById(index);obj.innerHTML = "<button>完成</button>"+"<s>"+item+"</s>"+"<button>刪除</button>";}}>完成</button>}
           {item}
           {<button onClick={() => {var obj = document.getElementById(index);obj.parentNode.removeChild(obj);}}>刪除</button>}</div>}</li>) }
       </ul>
       </div>
       );
       }
      }
      export default NameForm;