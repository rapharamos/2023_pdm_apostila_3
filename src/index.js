import React from 'react'
import ReactDOM from 'react-dom'
import doctor1 from './images/josedasilva.jpeg'
import env from "react-dotenv"
import './stylesdiv3.css'

const App = () => {
    
    const nomeDoc = {
        doc1: 'José da Silva',
        doc2: 'Maria da Silva',
        doc3: 'Jaqueline Mendes'
    }

    const designDiv1 = {
        margin: 'auto', 
        width: 768, 
        backgroundColor: '#EEE', 
        padding:12, 
        borderStyle: 'solid', 
        borderRadius: 8, 
        borderColor: 'black', 
        borderWidth: 'thin', 
        textAlign: 'center'
    }
    
    const obterDesignDiv1 = () => {
        return designDiv1
    }

    return  <div style={obterDesignDiv1()}>
        
        <h3 style={{alignSelf: 'center'}}>Profissionais da saúde</h3>

        <div style={{margin: 'auto', width: 600, paddingLeft: 80, paddingRight: 80, paddingTop: 12, paddingBottom: 12, borderStyle: 'solid', borderRadius: 8, borderColor: 'lightgray', borderWidth: 'thin', display: 'flex', justifyContent: 'space-between'}}>
        
            <div className='div3'>
                <img style={{width: 100, borderRadius:2}} src={doctor1}/>
                <p>{nomeDoc.doc1}</p>
            </div>
            
            <div className='div3'>
                <img style={{width: 100, borderRadius:2}} src={process.env.PUBLIC_URL + '/mariadasilva.jpg'}/>
                <p>{nomeDoc.doc2}</p>
            </div>

            <div className='div3'>
                <img style={{width: 100, borderRadius:2}} src='https://i.imgur.com/B5jaHQL.jpeg'/>
                <p>{nomeDoc.doc3}</p>
        </div>

        </div>

    </div>
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)
