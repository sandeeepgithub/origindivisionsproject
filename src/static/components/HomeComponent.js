import React, { useState, useEffect, useRef } from 'react';
import {Sectors, Reviews, Goals} from './DataComponent';
import './HomeComponent.css'

function HomeComponent({position}) {

    const [newPosition, setNewPosition] = useState(null)
    const [goals, setGoals] = useState(false)
    const [fields, setFields] = useState(false)
    const [products, setProducts] = useState(false)
    const [aboutus, setAboutus] = useState(false)
    const [review, setReview] = useState(Reviews[0])
    const [active, setActive] = useState(0)
  
    const goalsRef = useRef(null)    
    const fieldsRef = useRef(null)    
    const productsRef = useRef(null) 
    const aboutusRef = useRef(null) 

    useEffect(() => {
        setNewPosition(position)
        switch(newPosition) {
            case "0":
                return goalsRef.current.scrollIntoView({
                    behavior: "smooth",
                })
                case "1":
                return fieldsRef.current.scrollIntoView({
                    behavior: "smooth",
                })
            case "2":
                return productsRef.current.scrollIntoView({
                    behavior: "smooth",
                }) 
            case "3":
                return aboutusRef.current.scrollIntoView({
                    behavior: "smooth",
                })        
            default:
                return null
        }
    })   

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const val = window.scrollY

            if (val > 350 && val < 950) {
                setGoals(true)
            }
            else if (val > 700 && val < 2600){
                setFields(true)
            }
            else if (val > 2400 && val < 3300) {
                setProducts(true)
            } 
            else if (val > 3500 && val < 4100) {
                setAboutus(true)
            } 
            else {
                return null
            }
        })
    }, [])

    const handleReviewclick = (e) => {
        const target = e.target
        setReview(Reviews[parseInt(target.getAttribute('data-review'))])
        setActive(parseInt(target.getAttribute('data-review')))
        console.log(target.getAttribute('data-review'));
    }

    return(
        <React.Fragment>
            <div className="main-header">
                <h3 className="animate__animated animate__fadeIn">
                    <span>Origin</span> <span>Divisions</span> 
                </h3>
                <p className="animate__animated animate__fadeIn">We change dream to a reality.</p>
            </div>
            <div className="goals-bg">
                <div className="section goals" ref={goalsRef}>
                    <h4 className={goals ? "animate__animated animate__fadeInUp" : "hidden"}><span>Our</span> <span>Goals</span></h4>
                    <ul>
                        {Goals.map((goal) => {
                            return(
                                <li key={goal.index} className={goals ? "animate__animated animate__fadeInUp" : "hidden"}>
                                    <span> {goal.image} </span>
                                    <p> {goal.value} </p>
                                </li>
                            )
                        })}
                    </ul>                    
                </div>
            </div>
            <div className="section fields" ref={fieldsRef}>
                <h4 className={fields ? "animate__animated animate__fadeInUp" : "hidden"}><span>Our</span> <span>fields</span></h4>
                    <ul>
                        {Sectors.map((item, index) => {
                            return(
                                <li key={index}>
                                    <img className={fields ? "animate__animated animate__fadeIn" : "hidden"} src={item.image} alt={item.name} />
                                    <div>
                                        <h5> {item.name} </h5> <br />
                                        <span><i id="check" class="fa fa-check-circle"></i>{" "}{item.value["one"]}</span> <br /> 
                                        <span><i id="check" class="fa fa-check-circle"></i>{" "}{item.value["two"]}</span> <br /> 
                                        <span><i id="check" class="fa fa-check-circle"></i>{" "}{item.value["three"]}</span>
                                    </div>
                                </li>
                            ) 
                        })}     
                    </ul>
            </div>
            <div className="products-bg">
                <div className="section products" ref={productsRef}>
                    <h4 className={products ? "animate__animated animate__fadeInUp" : "hidden"}> Making our products work for everyone  </h4>
                    <p className={products ? "animate__animated animate__fadeInUp" : "hidden"}> 
                        Origin Divisions is a purpose driven technology business woring with trade professionals and our partners to transform their processes and communities they serve. Our products and social applications are available throughout US and Germany and this is just a start 
                    </p>
                    <ul>
                        <li>
                            <span> 3 </span>
                            <p> Countries</p>
                        </li>
                        <li>
                            <span> 120,000+ </span>
                            <p> Happy Customers</p>
                        </li>
                        <li>
                            <span> 5 </span>
                            <p> Years</p>
                        </li>
                    </ul>
                    <button onClick={() => {alert(`Thanks for choosing a greener initiative.`)}}> Join Us <i id="arrow" className="fa fa-arrow-right"></i> </button>
                </div>
            </div>
            <div className="section reviews">
               <img src={review.image} alt={review.name} />
               <p>{review.value}</p>
               <small><i><b>- {review.name}</b></i></small>
               <div>
                   {Reviews.map(rev => (
                       <span className={active === rev.key ? "actived" : null} onClick={e => handleReviewclick(e)} data-review={rev.key} key={rev.key}> </span>
                   ))}
               </div>
            </div>
            <div className="aboutus-bg">
                <div className="section aboutus" ref={aboutusRef}>
                    <h4 className={aboutus ? "animate__animated animate__fadeIn" : "hidden"}>   
                        Who  <span>We</span>  Are
                    </h4>
                    <p className={aboutus ? "animate__animated animate__fadeIn" : "hidden"}>
                        Origin Divisions is one of the leading orgainization functioning towards creating a better world. Started in 2014, we've been on an epic ride since. We function as an individual corporation helping out governments, other companies set up a resource to bring out advancements in the nature.
                    </p>
                    <br />  
                    <p className={aboutus ? "animate__animated animate__fadeIn" : "hidden"}>
                        We believe we can bring change. We exist to promote growth and enrich lives in our societies. Our success is not only due to the quality of our work; its down to attitude, our approach and the way we treat all as our family.
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomeComponent;

