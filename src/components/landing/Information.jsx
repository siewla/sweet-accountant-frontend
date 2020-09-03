import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Information = () => {
    return (
        <React.Fragment>
            <Parallax
                blur={{ min: -10, max: 10 }}
                bgImage='https://cdn.pixabay.com/photo/2020/08/14/12/34/saltburn-pier-5487835_960_720.jpg'
                bgImageAlt="the cat"
                strength={1500}
                className="parallax"
            >
                <div className="information-1">
                    <div className="chart-content">
                        <p>
                            One report to give a clear view on your spending patterns. Understand where your money comes and goes with easy-to-read graphs.
                </p>
                    </div>
                    <img className="chart" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNYvUjx2Z-VZ2RcKJmqUXe1b3gmphWXPxfKA&usqp=CAU"></img>

                </div>
            </Parallax>
            <div className="information">
                <p>
                    GET IT NOW
            </p>
            </div>
            <Parallax
                blur={{ min: -10, max: 10 }}
                bgImage='https://cdn.pixabay.com/photo/2020/06/29/13/10/cornflowers-5352633_960_720.jpg'
                bgImageAlt="the cat"
                strength={1500}
                className="parallax"
            >
                <div className="information-1">
                    <img className="bill" src="https://www.pngkit.com/png/detail/146-1467071_banknote-payment-already-paid-transprent-png-free-bill.png"></img>
                    <div className="bill-content">
                        <p>
                            A smart, easy-to-use app that allows you to track and categorize your in-and-out money.
                            It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.
                </p>
                    </div>
                </div>

            </Parallax>

        </React.Fragment>
    )
}

export default Information