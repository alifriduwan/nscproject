import { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'
import Header from '../../components/Header/Header';
import './Announcepage.css'

function Announcepage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1337/api/announces")
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result.data);
            },
          )
      }, [])

    return (
        <div>
            <Header />
            <div className='container'>
                <div className="card mt-5">
                    <div className="card-body">
                        <Row>
                        { items.map(item => (
                            <Col className='CARDAnn' sm={3} key={item.id} >
                                <Card className="text-center" style={{ width: '100%' }}>
                                    <Card.Body>
                                        <Card.Title className='TitleCard'>{item.attributes.title}</Card.Title>
                                            <Card.Text className='desc'>
                                                {item.attributes.description}
                                            </Card.Text>
                                        <Button className='Butback' href='/' variant="primary">กลับสู่หน้าหลัก</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Announcepage;
