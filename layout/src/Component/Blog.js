import { height } from '@mui/system';
import { button } from 'bootstrap';
import { Card,Button} from 'react-bootstrap';

function Blog(props){
    return(

 <div className="post-container">
            {/* <div class="blog-post rounded border solid">
                <div class="blog-img d-block overflow-hidden position-relative">
                <img className="image" src={require('../Img/'+props.photo)} alt="post" />
                </div>
                <div class="content p-3">
                    <h4 class="mt-2"><a href=" " class="text-dark title">{props.text}</a></h4>
                    <div class="pt-3 mt-3 border-top d-flex">
                        <div class="author mt-2">
                           <button className='btn btn-primary'>Know More..</button>
                        </div>
                    </div>
                </div>
                
            </div> */}

<div class="container mt-100 mt-60">
    <div class="row">
        <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
                <h4 class="title mb-4">Latest Blog &amp; News</h4>
                <p class="text-muted para-desc mx-auto mb-0">Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
            </div>
        </div>

            
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('../Img/img1.avif')} height="200px"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Know More..</Button>
  </Card.Body>
</Card>
</div>
</div>
</div>

              
    )
}
export default Blog;