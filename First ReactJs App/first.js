import React from 'react'

export class FirstComponent extends React.Component{
    render(){

        const veriler=this.props.ilklisteprop.map((element,index)=>{
            return (
                <li key={index}>
                    {index+1}.eleman={element}
                </li>
            )
        })
        return(

<div>İlk componentim<hr/>
{this.props.ilkprob}<hr/>
<ul>
    {veriler}
</ul>
</div>


        );
    }
}