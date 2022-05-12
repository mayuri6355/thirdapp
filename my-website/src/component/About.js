import React from "react";
import Section from "./Section";
 function About(){
     return(
         <div className="container">
        <div class="row">
        <div class="col-12">
            <div class="text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.07s" >
                <div class="medium_divider"></div>
                <a href=" " class="data" title="View all courses">View All Courses <i class="ion-ios-arrow-thin-right ml-1"></i></a>
            </div>
        </div>
        <section class="small_pt small_pt small_pb overflow-hidden">
    <div class="container-fluid p-0">
        <div class="row no-gutters align-items-center">
            <div class="col-lg-7 col-md-12 about_text">
                <div class="box_shadow1 bg-white overlap_section padding_eight_all ">
                    <div class="animation animated fadeInLeft" data-animation="fadeInLeft" data-animation-delay="0.02s" >
                            <div class="heading_s1"> 
                              <span class="sub_heading">About Us</span>
                              <h6>IT Career in Surat, moving towards the better Tomorrow!</h6>
                             
                            </div>
                            <p class="text-justify pr-4">
                              Creative Design &amp; Multimedia Institute(CDMI)  is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing &amp; All types of IT Courses with 7 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. 
    Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.

                            </p>                        
                           <div class="row">
                                <div class="col-12">
                                    <div class="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.07s" >
                                        <a href="#" title="Click here for Enroll Now.." data-toggle="modal" data-target="#inquiry" class="data">Enroll Now..! <i class="ion-ios-arrow-thin-right ml-1"></i></a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-12 about_video">
                <div class="animation animated fadeInRight" data-animation="fadeInRight" data-animation-delay="0.03s" >
                    <div class="overlay_bg_30 about_img z_index_minus1">    
                        <img class="w-100" src="https://www.cdmi.in/assets/front/images/about-us.jpg" alt="about_img"></img>                    </div>
                    <a href="https://www.youtube.com/watch?v=Vnap7ADkQKA" title="View on youtube" class="video_popup video_play">
                        <span class="ripple"><i class="ion-play ml-1"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
<Section/>

    </div>
     )
 }

 export default About;