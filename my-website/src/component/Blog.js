import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import About from './About';
import { MdGrade } from "react-icons/md";




function Blog(){
    return(
     <div>
        <div class='container'>
         <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
                <div class="text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.01s" >
                    <div class="heading_s1 text-center">
                        <span class="sub_heading">Creative Course</span>
                        <h2>Offered Courses</h2>
                    </div>
                </div>
            </div>
        </div>
       


       <div class="row">
                        <div class="col-lg-4 col-sm-6">
                <div class="content_box radius_all_10 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.02s">
                    <div class="content_img radius_ltrt_10">
                        <a href="https://www.cdmi.in/courses/multimedia-course-training" title="Multimedia Courses">
                            <video autoplay="" muted="" loop="" class="w-100">
  <source src="https://www.cdmi.in/course_category/multimedia-training-institute.mp4" type="video/mp4">
</source></video>
                        </a>
                    </div>
                    <div class="content_desc">
                        <h4 class="content_title"><a href="https://www.cdmi.in/courses/multimedia-course-training" title="Multimedia Courses">Multimedia Courses</a></h4>
                    </div>
                    <div class="content_footer">
                        <div class="rating_stars">
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star-half"></i> 
                        </div>
                        <div class="price">
                            <a class="btn btn-theme-blue bg-theme-blue  btn-sm text-white" href="https://www.cdmi.in/courses/multimedia-course-training" title="Multimedia Courses">Know More..!</a>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="col-lg-4 col-sm-6">
                <div class="content_box radius_all_10 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.02s" >
                    <div class="content_img radius_ltrt_10">
                        <a href="https://www.cdmi.in/courses/graphics-design-training" title="UI/UX &amp; Graphics Design">
                            <video autoplay="" muted="" loop="" class="w-100">
  <source src="https://www.cdmi.in/course_category/graphics-animation-course.mp4" type="video/mp4">
</source></video>
                        </a>
                    </div>
                    <div class="content_desc">
                        <h4 class="content_title"><a href="https://www.cdmi.in/courses/graphics-design-training" title="UI/UX &amp; Graphics Design">UI/UX &amp; Graphics Design</a></h4>
                    </div>
                    <div class="content_footer">
                        <div class="rating_stars">
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star-half"></i> 
                        </div>
                        <div class="price">
                            <a class="btn btn-theme-blue bg-theme-blue  btn-sm text-white" href="https://www.cdmi.in/courses/graphics-design-training" title="UI/UX &amp; Graphics Design">Know More..!</a>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="col-lg-4 col-sm-6">
                <div class="content_box radius_all_10 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.02s" >
                    <div class="content_img radius_ltrt_10">
                        <a href="https://www.cdmi.in/courses/software-training-institute" title="Programming IT">
                            <video autoplay="" muted="" loop="" class="w-100">
  <source src="https://www.cdmi.in/course_category/it-training-institute.mp4" type="video/mp4">
</source></video>
                        </a>
                    </div>
                    <div class="content_desc">
                        <h4 class="content_title"><a href="https://www.cdmi.in/courses/software-training-institute" title="Programming IT">Programming IT</a></h4>
                    </div>
                    <div class="content_footer">
                        <div class="rating_stars">
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star-half"></i> 
                        </div>
                        <div class="price">
                            <a class="btn btn-theme-blue bg-theme-blue  btn-sm text-white" href="https://www.cdmi.in/courses/software-training-institute" title="Programming IT">Know More..!</a>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="col-lg-4 col-sm-6">
                <div class="content_box radius_all_10 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.02s">
                    <div class="content_img radius_ltrt_10">
                        <a href="https://www.cdmi.in/courses/latest-technology-course" title="Trendy Courses">
                            <video autoplay="" muted="" loop="" class="w-100">
  <source src="https://www.cdmi.in/course_category/letest-technology-course.mp4" type="video/mp4">
</source></video>
                        </a>
                    </div>
                    <div class="content_desc">
                        <h4 class="content_title"><a href="https://www.cdmi.in/courses/latest-technology-course" title="Trendy Courses">Trendy Courses</a></h4>
                    </div>
                    <div class="content_footer">
                        <div class="rating_stars">
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star-half"></i> 
                        </div>
                        <div class="price">
                            <a class="btn btn-theme-blue bg-theme-blue  btn-sm text-white" href="https://www.cdmi.in/courses/latest-technology-course" title="Trendy Courses">Know More..!</a>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="col-lg-4 col-sm-6">
                <div class="content_box radius_all_10 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.02s" >
                    <div class="content_img radius_ltrt_10">
                        <a href="https://www.cdmi.in/courses/civil-engineering-training" title="Civil-Mech. Engineering">
                            <video autoplay="" muted="" loop="" class="w-100">
  <source src="https://www.cdmi.in/course_category/civil-engineering-course.mp4" type="video/mp4"></source>
</video>
                        </a>
                    </div>
                    <div class="content_desc">
                        <h4 class="content_title"><a href="https://www.cdmi.in/courses/civil-engineering-training" title="Civil-Mech. Engineering">Civil-Mech. Engineering</a></h4>
                    </div>
                    <div class="content_footer">
                        <div class="rating_stars">
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star-half"></i> 
                        </div>
                        <div class="price">
                            <a class="btn btn-theme-blue bg-theme-blue  btn-sm text-white" href="https://www.cdmi.in/courses/civil-engineering-training" title="Civil-Mech. Engineering">Know More..!</a>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="col-lg-4 col-sm-6">
                <div class="content_box radius_all_10 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.02s" >
                    <div class="content_img radius_ltrt_10">
                        <a href="https://www.cdmi.in/courses/mechanical-engineering-training" title="Business Development">
                            <video autoplay="" muted="" loop="" class="w-100">
  <source src="https://www.cdmi.in/course_category/mechanical-engineering-course.mp4" type="video/mp4"></source>
</video>
                        </a>
                    </div>
                    <div class="content_desc">
                        <h4 class="content_title"><a href="https://www.cdmi.in/courses/mechanical-engineering-training" title="Business Development">Business Development</a></h4>
                    </div>
                    <div class="content_footer">
                        <div class="rating_stars">
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star-half"></i> 
                        </div>
                        <div class="price">
                            <a class="btn btn-theme-blue bg-theme-blue  btn-sm text-white" href="https://www.cdmi.in/courses/mechanical-engineering-training" title="Business Development">Know More..!</a>
                        </div>
                    </div>
                </div>
            </div>
                  
        </div>



       </div>
       <About/>
       </div>


      
      
     
    )
}
export default Blog;