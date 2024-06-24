import React, { useState, useRef } from 'react';
import FormSection from './FormSection';
import '../HomePage.css';


const HomePage = () => {
    const [showForm, setShowForm] = useState(false);
    const videoRef = useRef(null);
    const handleTimeUpdate = () => {
        if (videoRef.current.currentTime >= 40) {
            setShowForm(true);
            videoRef.current.pause();
            videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        }
    };

    return (
        <>
        <div className="container-fluid">
            <div className="text-center my-4 bg-success container-fluid">
                <div className="d-flex mx-5 justify-content my-4 align-items-center">
                <h3 className='text-white ms-5 ps-5 me-5'>Masterclass Name Starts In 00:00:00</h3>
                <h1 className='my-1'><span className='text-dark bg-danger ms-5  px-2 '>Reserve Your Seat Now</span></h1>
                </div>
            </div>

            <div className="container-fluid custom_container1">
            <div className="container py-5">
                <div className="">
            <h1 className='text-white display-5 text-center pt-5 text-nowrap'><span><i className=''>Learn/Discover What/How<span className='text-warning'>(specific big  <br />
                results)</span>
                     Using This <span className='text-warning'>(Method Name)</span> & How  <br />
                You Can get the Same Result 
                </i></span></h1>
                </div>
            </div>
            <div className="container-sm py-5">
            <p className='text-white font_30 px-5 text-center py-1'>
                <i> Learn (method), with (features or benefits) or without (objection) & Go From A 
                To B In Just (specific time)</i></p>

            </div>


            <div className="video-section text-center mb-4 mt-5">
                <div className="video-container">
                <video width="100%" controls ref={videoRef} onTimeUpdate={handleTimeUpdate}>
                    <source src="/large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {showForm && (
                    <div className="form-overlay">
                        <FormSection />
                    </div>
                )}
            </div>
            </div>
            </div>
          

        
        </div> 
        <div className="container-fluid">
         <div className="container-sm  icon_block1 shadow_custom bg-white">
            <h3 className='text-center display-6'>Featured on</h3>
            <p>
            <img src='/clients.jpeg' alt="clients" className='client_image1'/>
            </p>
        </div>
        </div>

        <div className="container-lg mt-5">
    <div className="row">
        <div className="col-sm-4">
            <div className="box text-white text-nowrap ">
                <h4 className='p-0 '>By <span className='text-bold'>Coach’s Name </span><br/>
                            Multiple National Award <br/>
                        Winning Trade</h4>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="box">
                <h4>
            <span className='text-bold'> 2 Lakhs+ </span><br/>
            Students Trained
            </h4>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="box">
                <h4>
            <span className='text-bold'> 18+ Years </span><br/>
             Of Experience
             </h4>
            </div>
        </div>
    </div>
    </div>


    <div className="container-lg register-banner">
      <div className="register-content">
        <h2 className='display-3'>Register Now For Just ₹97/-</h2>
        <p>Actuall Price <strike>₹599/-</strike></p>
        </div>
    </div>

        <div className="register-content">
        <div className="payment-icons">
          <img src="/razorpay.png" alt="Razorpay" />
          <img src="/upi.png" alt="UPI" />
          <img src="/visa.png" alt="Visa" />
          <img src="/mastercard.png" alt="Mastercard" />
          <img src="/secure.png" alt="100% Secure" />
        </div>
        <p className="price-info text-center">Price Goes Up Soon To ₹599</p>
      </div>


<div className="container-lg">
      <div className=" learn-banner">
      <h1>Learn (method name) From A Multiple Award Winner</h1>
      <div className="images-container">
        <div className="image-box"></div>
        <div className="image-box"></div>
        <div className="image-box"></div>
      </div>
      <button className="reserve-button">Yes, Reserve My Spot Now Just For ₹97</button>
    </div>
</div>


<div className="coach-profile">
      <h1>Know Your Coach <span>(Mentor Name)</span></h1>
      <div className="row">
        <div className="col-6">
      <div className="profile-section">
        
        <div className="profile-details">
          <p>(NAME) has clearly established himself as an Authority on (____) and (__________), for which he also</p>
          <h2>Received (Awards, Achievements)</h2>
          <p>and featured in Top Publications in last few years. (NAME) talks about (Method) which no one talks about.</p>
          <p>He has given hits after hits in his work on ___, ____ and ______.</p>
          <h2>Helping 200,000+ people</h2>
          <p>Get (specific results) through his seminars and events, (mentor name) is a well-known figure in (industry name).</p>
        </div>
        </div>
      </div>
      
<div className="col-6">
<div className="profile-image">
          <div className="placeholder"></div>
        </div>
      <div className="featured-on">
        <p>Featured on</p>
        <div className="logos">
          <img src="/zee-news.png" alt="Zee News" />
          <img src="/zee-news.png" alt="Zee Business" />
          <img src="/zee-news.png" alt="The Economic Times" />
          <img src="/zee-news.png" alt="India Today" />
          <img src="/zee-news.png" alt="ED" />
        </div>
      </div>
</div>
      <div className="image-boxes">
        <div className="image-box"></div>
        <div className="image-box"></div>
        <div className="image-box"></div>
      </div>
    </div>
    </div>


    
    <div className="container-lg register-banner">
      <div className="register-content">
        <h2 className='display-3'>Register Now For Just ₹97/-</h2>
        <p>Actuall Price <strike>₹599/-</strike></p>
        </div>
    </div>

    <div className="register-content">
        <div className="payment-icons">
          <img src="/razorpay.png" alt="Razorpay" />
          <img src="/upi.png" alt="UPI" />
          <img src="/visa.png" alt="Visa" />
          <img src="/mastercard.png" alt="Mastercard" />
          <img src="/secure.png" alt="100% Secure" />
        </div>
        <p className="price-info text-center">Price Goes Up Soon To ₹599</p>
      </div>


      <div className="container-lg mx-auto border">
      <h1 className='text-center text-bold display-5'>Still Not Sure?</h1>
      <h4 className='text-center text-bold '>See These Results Generated By Our Students</h4>
      <p className='text-center'>(Some Of These Were Trading For The First Time)</p>
      <div className="grid">
      <div className="image-box"></div>
      <div className="image-box"></div>
      <div className="image-box"></div>
      <div className="image-box"></div>
      <div className="image-box"></div>
      <div className="image-box"></div>
      </div>
    </div>


    <div className="container-lg register-banner">
      <div className="register-content">
        <h2 className='display-6'>Yes, I Want This __________ Now</h2>
        </div>
    </div>

    <div className="container custom_container1 py-3">
        <h3 className='text-center'><span className='text-white text-center'>What People Say About My System</span></h3>
    <div className="grid mt-4">
      <div className="image-box-video"></div>
      <div className="image-box-video"></div>
      <div className="image-box-video"></div>
      <div className="image-box-video"></div>
      <div className="image-box-video"></div>
      <div className="image-box-video"></div>
      <div className="image-box-video"></div>
      <div className="image-box-video"></div>
      <div className="image-box-video"></div>
      <div className="image-box-video1"></div>
      <div className="image-box-video1"></div>
      <div className="image-box-video1"></div>
      </div>
      </div>
      


      <div className="container-lg register-banner">
      <div className="register-content">
        <h2 className='display-3'>Register Now For Just ₹97/-</h2>
        <p>Actuall Price <strike>₹599/-</strike></p>
        </div>
    </div>

        <div className="register-content">
        <div className="payment-icons">
          <img src="/razorpay.png" alt="Razorpay" />
          <img src="/upi.png" alt="UPI" />
          <img src="/visa.png" alt="Visa" />
          <img src="/mastercard.png" alt="Mastercard" />
          <img src="/secure.png" alt="100% Secure" />
        </div>
        <p className="price-info text-center">Price Goes Up Soon To ₹599</p>
      </div>



        </>
    );
};

export default HomePage;
