import React from "react";
import styles from "./QuoteGenerator.css";

class QuoteGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [''],
            authors: []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const req = new XMLHttpRequest();
        req.open("GET", "https://type.fit/api/quotes", true);
        req.send();
        req.onload = () => {
            const json = JSON.parse(req.responseText);
            const count = Object.keys(json).length;
            const randomIndex = Math.floor(Math.random() * count);
            this.setState({
                //quotes: JSON.stringify(json)
                quotes: json[randomIndex].text,
                authors: json[randomIndex].author
            });
        }
    }
    render() {
        return ( <
            div className = "quote" >
            <
            button onClick = { this.handleClick } > Click
            for a new quote! < /button> <
            br / >
            <
            q > { this.state.quotes } < /q> <
            h3 > -{ this.state.authors } < /h3> <
            /div>
        )
    }
}

export default QuoteGenerator;