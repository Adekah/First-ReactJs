import React from 'react';

export class Form extends React.Component{
    birseyyap(e){
e.preventDefault();
const deger=document.getElementById('input').value;
console.log(deger);
        console.log("Bir şey Yaptım Ama ne yaptımki Acaba"); 
        this.props.yeniliste(deger);
    }
    render(){
        return(
            <div>
                <form onSubmit={e=>this.birseyyap}> 
                    <input type='text' id='input'></input>
                    <button onClick={this.birseyyap.bind(this)}>Gönder Bakalım</button>
                </form>
            </div>
        );
    }
}