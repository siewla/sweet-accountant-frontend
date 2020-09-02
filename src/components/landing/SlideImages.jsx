import React from 'react';

const SlideImages = () => {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="https://thinkingfocus.com/wp-content/uploads/2018/03/Calculator-880x518.jpg"
                    alt="First slide" />
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="https://mediashower.com/blog/wp-content/uploads/2017/03/calculate-1.jpg"
                    alt="Second slide" />
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="https://miro.medium.com/max/2700/1*O18a0oi3pALyPlGXE_kXVw.jpeg"
                    alt="Third slide" />
            </div>
        </div>
    </div>
    )
}

export default SlideImages