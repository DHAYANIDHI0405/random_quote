import React, {useState, useEffect} from 'react';
import './App.css';
function Quote() {

    const[quote, setQuote]= useState("");
    const[author, setAuthor] = useState("");
    useEffect(()=>{
    fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quote =>{
               setQuote(quote.content);
               setAuthor(quote.author);
               
            }
            )
        )
    },[]);

    let fetchNewQuote = () => {
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quote =>{
               setQuote(quote.content);
               setAuthor(quote.author);
                
            }
            )
        )
    }
    return(
        <section id='quote'>
            <div className="App">
            <div className="quote">
                <h1>{quote}</h1>
                <s1>-{author}</s1>
            </div><br/>
            <button className="butt" onClick={fetchNewQuote}>Next Quote</button>

        </div>
        </section>
    );
}
export default Quote;