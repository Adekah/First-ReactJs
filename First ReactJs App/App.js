import React, { Component } from 'react';
import {FirstComponent} from './first';
import {Form} from './form';



class App extends Component {
constructor(){
  super();
  this.state={
    liste:[
      "Listemin İlk elemanı",
      "Listemin ikinci elemanı",
      "Listemin üçüncü elemanı"
    
    ]
  }
  this.listeyeEkle=this.listeyeEkle.bind(this);
}


  listeyeEkle(val){
 let degiskenliste=this.state.liste;
 degiskenliste.push(val);
 this.setState({liste:degiskenliste});
  }
  render() {

    const propsabit="İlk React örneğim içindeki ilk Prop'um";
   
    return (
      <div className="App">
       İlk Kodlar 
       <hr/>
       <FirstComponent ilklisteprop={this.state.liste} ilkprob={propsabit}></FirstComponent><hr/>
       <Form  yeniliste={this.listeyeEkle}></Form>
      </div>
    );
  }
}

export default App;
