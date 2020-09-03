import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Information = () => {
    return (
        <div>
            <div className="information-1">
                <div className="chart-part card">
                    <img className="chart" src="https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A347ece48-0f69-11e9-a3aa-118c761d2745?source=ig"></img>
                </div>

                <div className="chart-content card">
                    <p>
                        <b>One REPORT</b> to give a clear view on your <b>spending patterns</b>. Understand where your money comes and goes with <b>easy-to-read graphs</b>.
                </p>
                </div>
            </div>

            <div className="information-2">
                <div className="chart-bill card">
                    <img className="chart" src="https://www.pngkit.com/png/detail/146-1467071_banknote-payment-already-paid-transprent-png-free-bill.png"></img>
                </div>

                <div className="bill-content-2 card">
                    <p>
                        It takes <b>seconds</b> to record <b>daily transactions</b>. Put them into <b>clear</b> and <b>visualized CATEGORIES</b>  such as Expense: Food, Shopping or Income: Salary, Gift.
                </p>
                </div>
            </div>

            <Parallax
                blur={{ min: -10, max: 10 }}
                bgImage='https://cdn.pixabay.com/photo/2020/05/30/17/18/wind-power-plant-5239642_960_720.jpg'
                bgImageAlt="the cat"
                strength={1500}
            >

                <div className="get">
                    <h1>
                        <a href="#login">GET IT NOW</a>
                    </h1>
                </div>
            </Parallax>
            <div className="bill-content card">
                <p>
                    A <b>smart, easy-to-use</b> app that allows you to <b>TRACK</b> and <b>categorize</b> your in-and-out money.
                </p>
            </div>
        </div>

    )
}

export default Information