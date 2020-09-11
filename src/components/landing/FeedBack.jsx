import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const FeedBack = () => {
  return (
    <div className="feedback">
      <div className="container mt-5 z-depth-1">

        <section className="text-center dark-grey-text p-5">

          <h6 className="font-weight-normal text-uppercase font-small grey-text mb-4">Testimonials</h6>

          <h2 className="font-weight-bold">What customers say about us</h2>
          <hr className="w-header my-4" />
          <p className="grey-text mx-auto mb-5">Get this app now</p>
          <ScrollAnimation animateIn="jackInTheBox">
            <div className="row">

              <div className="col-md-6 mb-4">

                <div className="card-img-100 mx-auto mb-4">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg" className="z-depth-1 rounded-circle img-fluid" alt="background" />
                </div>
                <p className="mt-3 mb-4 text-muted">"This will keep you organized and in control, of money you do have and money you will have. This application is easy to use and will help you keep track of every dollar."</p>
                <p className="font-italic font-weight-normal">- Anna Morian</p>

              </div>

              <div className="col-md-6 mb-4">

                <div className="card-img-100 mx-auto mb-4">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(15).jpg" className="z-depth-1 rounded-circle img-fluid" alt="background"/>
                </div>
                <p className="mt-3 mb-4 text-muted">"Perfect app. My husband and I use it to track all our expenses and income. We generate our household accounts and budget using this fab app. Furthermore, the developers are hands-on and extremely helpful. Do not look any further. Get this app now!."</p>
                <p className="font-italic font-weight-normal">- Teresa May</p>

              </div>

            </div>
          </ScrollAnimation>
        </section>



      </div>
    </div>

  )
}

export default FeedBack