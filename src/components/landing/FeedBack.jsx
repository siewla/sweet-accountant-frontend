import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const FeedBack = () => {
  return (
    <div className="feedback">
      <div class="container mt-5 z-depth-1">

        <section class="text-center dark-grey-text p-5">

          <h6 class="font-weight-normal text-uppercase font-small grey-text mb-4">Testimonials</h6>

          <h2 class="font-weight-bold">What customers say about us</h2>
          <hr class="w-header my-4" />
          <p class="grey-text mx-auto mb-5">Get this app now</p>
          <ScrollAnimation animateIn="jackInTheBox">
            <div class="row">

              <div class="col-md-6 mb-4">

                <div class="card-img-100 mx-auto mb-4">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg" class="z-depth-1 rounded-circle img-fluid" alt="smaple image" />
                </div>
                <p class="mt-3 mb-4 text-muted">"This will keep you organized and in control, of money you do have and money you will have. This application is easy to use and will help you keep track of every dollar."</p>
                <p class="font-italic font-weight-normal">- Anna Morian</p>

              </div>

              <div class="col-md-6 mb-4">

                <div class="card-img-100 mx-auto mb-4">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(15).jpg" class="z-depth-1 rounded-circle img-fluid" alt="smaple image" />
                </div>
                <p class="mt-3 mb-4 text-muted">"Perfect app. My husband and I use it to track all our expenses and income. We generate our household accounts and budget using this fab app. Furthermore, the developers are hands-on and extremely helpful. Do not look any further. Get this app now!."</p>
                <p class="font-italic font-weight-normal">- Teresa May</p>

              </div>

            </div>
          </ScrollAnimation>
        </section>



      </div>
    </div>

  )
}

export default FeedBack