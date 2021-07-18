import React, { Component } from 'react';
import HinhAnh2 from '../assets/img/image2.jpg'

class Product extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className ="col-sm-8 text-left">
                        <h1>What We Do</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum laborum consequuntur iste odit doloribus fugiat, qui repellendus tenetur unde ex ad laudantium quibusdam. Atque, voluptatem doloribus eaque consequatur praesentium blanditiis?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum laborum consequuntur iste odit doloribus fugiat, qui repellendus tenetur unde ex ad laudantium quibusdam. Atque, voluptatem doloribus eaque consequatur praesentium blanditiis?</p>
                    </div>
                    <div className ="col-sm-4 text-left">
                        <h1>Contact US</h1>
                        <p>CyberSoft</p>
                        <p>Su Van Hanh, quận 10, Tp.HCM</p>
                        <p>website: cybersoft.edu.vn</p>
                    </div>
                </div>
                <div className ="row">
                    <div className="col-sm-4">
                        <div className="card" style={{width:"18rem"}}>
                            <img className="card-top" src={HinhAnh2} alt="" />
                            <div className="card-bot text-left p-4">
                                <h5>Card title</h5>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary">Go somewhere</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" style={{width:"18rem"}}>
                            <img className="card-top" src={HinhAnh2} alt="" />
                            <div className="card-bot text-left p-4">
                                <h5>Card title</h5>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary">Go somewhere</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" style={{width:"18rem"}}>
                            <img className="card-top" src={HinhAnh2} alt="" />
                            <div className="card-bot text-left p-4">
                                <h5>Card title</h5>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary">Go somewhere</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;