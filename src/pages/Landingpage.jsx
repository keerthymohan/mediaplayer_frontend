import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"


function Landingpage() {
  return (
    <>
      <Container className='mt-5'>
        <Row className='d-flex justify-content-center align-items-center mt-5 '>

          <Col sm={12} md={6}>
            <h3>Welcome to <span className='text-warning'>Media Player</span> </h3>
            <p style={{ textAlign: 'justify' }} className='mt-4'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur vitae, minima quam possimus ab officia, esse odit dignissimos culpa quis sed natus, velit repellat porro adipisci deserunt fuga unde neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam officia eligendi rerum ut quos aliquid laborum repudiandae doloribus id! Deleniti illo quisquam, at architecto vero vel qui delectus esse?</p>
            <Link to={'/home'}><button className='btn btn-warning mt-4'>Get Started</button></Link>
          </Col>

          <Col sm={12} md={6} className='d-flex justify-content-center'>
            <img src="https://media1.tenor.com/images/33a46f727dbe790d436616a1f56fce9c/tenor.gif?itemid=7412752" alt="no image" className='w-50' />
          </Col>
        </Row>
      </Container>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h4 className='text-center'>Features</h4>
            <div className="row mt-5">
              <div className="col-md-4">
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://media.giphy.com/media/8PXhx64t7Eykg/giphy.gif" className='w-100' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://cdn.dribbble.com/users/1445486/screenshots/3856847/ondas-small.gif" className='w-100' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://media1.tenor.com/images/8c64f7cb741eeaa5611cda0480c8b983/tenor.gif?itemid=8183673" className='w-100' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row border border-white md-p-4 p-4">
            <div className="col-md-6">
              <h2 className='text-warning'>Simple fast and Powerful</h2>
              <p> <strong class="fs-5">Play Everything</strong>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quae inventore repellat aspernatur, omnis vitae sed error sit voluptatibus! Temporibus tenetur officiis culpa atque assumenda accusamus iure quia cum dolorem?</p> 
              <p> <strong class="fs-5">Play Everything</strong>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quae inventore repellat aspernatur, omnis vitae sed error sit voluptatibus! Temporibus tenetur officiis culpa atque assumenda accusamus iure quia cum dolorem?</p> 
              <p> <strong class="fs-5">Play Everything</strong>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quae inventore repellat aspernatur, omnis vitae sed error sit voluptatibus! Temporibus tenetur officiis culpa atque assumenda accusamus iure quia cum dolorem?</p>

            </div>
            <div className="col-md-6">
            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/Pl2vjFggJp0?si=cLzDPa3a-zI-odxW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>

    </>
  )
}

export default Landingpage