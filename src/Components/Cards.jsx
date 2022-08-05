import React from "react";
import "./Cards.css";
import "./cards-logo.svg";

const cardLogo = < svg width = "93"
height = "62"
viewBox = "0 0 93 62"
fill = "none"
xmlns = "http://www.w3.org/2000/svg" >
    <
    g filter = "url(#filter0_d_17_5)" >
    <
    rect x = "53.0668"
y = "0.32251"
width = "35"
height = "50"
rx = "3"
transform = "rotate(15 53.0668 0.32251)"
fill = "#9146FF" / >
    <
    rect x = "53.4203"
y = "0.934882"
width = "34"
height = "49"
rx = "2.5"
transform = "rotate(15 53.4203 0.934882)"
stroke = "black" / >
    <
    /g> <
    g filter = "url(#filter1_d_17_5)" >
    <
    rect x = "27"
y = "1"
width = "35"
height = "50"
rx = "3"
fill = "#8D8D8D" / >
    <
    rect x = "27.5"
y = "1.5"
width = "34"
height = "49"
rx = "2.5"
stroke = "black"
strokeMiterlimit = "4.13357" / >
    <
    /g> <
    g filter = "url(#filter2_d_17_5)" >
    <
    rect x = "0.125824"
y = "9.3812"
width = "35"
height = "50"
rx = "3"
transform = "rotate(-15 0.125824 9.3812)"
fill = "#9146FF" / >
    <
    rect x = "0.738196"
y = "9.73475"
width = "34"
height = "49"
rx = "2.5"
transform = "rotate(-15 0.738196 9.73475)"
stroke = "black" / >
    <
    /g> <
    defs >
    <
    filter id = "filter0_d_17_5"
x = "40.7993"
y = "0.996002"
width = "51.4014"
height = "60.008"
filterUnits = "userSpaceOnUse"
colorInterpolationFilters = "sRGB" >
    <
    feFlood floodOpacity = "0"
result = "BackgroundImageFix" / >
    <
    feColorMatrix in = "SourceAlpha"
type = "matrix"
values = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
result = "hardAlpha" / >
    <
    feOffset dx = "4"
dy = "2" / >
    <
    feGaussianBlur stdDeviation = "1" / >
    <
    feComposite in2 = "hardAlpha"
operator = "out" / >
    <
    feColorMatrix type = "matrix"
values = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" / >
    <
    feBlend mode = "darken"
in2 = "BackgroundImageFix"
result = "effect1_dropShadow_17_5" / >
    <
    feBlend mode = "normal" in = "SourceGraphic"
in2 = "effect1_dropShadow_17_5"
result = "shape" / >
    <
    /filter> <
    filter id = "filter1_d_17_5"
x = "27"
y = "1"
width = "41"
height = "54"
filterUnits = "userSpaceOnUse"
colorInterpolationFilters = "sRGB" >
    <
    feFlood floodOpacity = "0"
result = "BackgroundImageFix" / >
    <
    feColorMatrix in = "SourceAlpha"
type = "matrix"
values = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
result = "hardAlpha" / >
    <
    feOffset dx = "4"
dy = "2" / >
    <
    feGaussianBlur stdDeviation = "1" / >
    <
    feComposite in2 = "hardAlpha"
operator = "out" / >
    <
    feColorMatrix type = "matrix"
values = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" / >
    <
    feBlend mode = "darken"
in2 = "BackgroundImageFix"
result = "effect1_dropShadow_17_5" / >
    <
    feBlend mode = "normal" in = "SourceGraphic"
in2 = "effect1_dropShadow_17_5"
result = "shape" / >
    <
    /filter> <
    filter id = "filter2_d_17_5"
x = "0.799316"
y = "0.996033"
width = "51.4014"
height = "60.008"
filterUnits = "userSpaceOnUse"
colorInterpolationFilters = "sRGB" >
    <
    feFlood floodOpacity = "0"
result = "BackgroundImageFix" / >
    <
    feColorMatrix in = "SourceAlpha"
type = "matrix"
values = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
result = "hardAlpha" / >
    <
    feOffset dx = "4"
dy = "2" / >
    <
    feGaussianBlur stdDeviation = "1" / >
    <
    feComposite in2 = "hardAlpha"
operator = "out" / >
    <
    feColorMatrix type = "matrix"
values = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" / >
    <
    feBlend mode = "darken"
in2 = "BackgroundImageFix"
result = "effect1_dropShadow_17_5" / >
    <
    feBlend mode = "normal" in = "SourceGraphic"
in2 = "effect1_dropShadow_17_5"
result = "shape" / >
    <
    /filter> <
    /defs> <
    /svg>


class Cards extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                white: [],
                id: []
            }
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            const json = require("../cah-cards-compact.json");
            const whiteCount = Object.keys(json['white']).length;
            let cards = [];
            let i = 0;
            while (i < 6) {
                const randomIndex = Math.floor(Math.random() * whiteCount);
                if (!cards.includes(randomIndex)) {
                    cards.push(json['white'][randomIndex]);
                    i++;
                }
            }
            //console.log('whiteCount: ' + whiteCount + ' randomIndex: ' + randomIndex);
            this.setState({
                white: cards,
                id: [1, 2, 3, 4, 5, 6]
            });
        }
        render() {
            const cards = this.state.white.map((i, id) =>
                <
                div className = "white-card"
                key = { id } >
                <
                div className = "white-card-text" > { i } < /div> <
                div className = "card-logo" > { cardLogo } <
                /div> <
                /div>);
                return ( <
                    div >
                    <
                    h1 > Card < /h1><br / >
                    <
                    button onClick = { this.handleClick } > Click
                    for a card < /button><br / > { /* <div className="white-card"> */ } <
                    div className = "card-wrapper" > { cards } <
                    /div> { /* </div> */ } <
                    /div>
                );
            }
        }

        export default Cards;