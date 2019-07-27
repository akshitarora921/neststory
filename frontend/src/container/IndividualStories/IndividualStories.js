import React from "react"
import axios from 'axios'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.css";

class IndividualStories extends React.Component{
    state={
        story:[]
    }
    componentDidMount(){
        axios.get("http://localhost:3001/news/data:id")//get data for perticular id
        .then(res=>{
            let data = res.data;
            this.setState({
                story:data
            })
        })
    }
    render(){
        let options = {
        // loop: true,
        margin: 10,
        autoHeight: true,
        // nav:true,
       items:1
      };
        return(
            <div>
                {this.state.story.map(story1=>(
                    <h1>story1.heading</h1>
                    {story1.image.length > 0 ? (<OwlCarousel className="owl-theme" {...options}>
                        {
                            story1.image.map((img, id)=>(
                                <div key={id} className="item"
                                style={{
                                    minHeight: "200px",
                                    // minWidth:"250px",
                                    borderRadius: "20px",
                                    backgroundSize: "100% 100%",
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                                      img
                                    })`
                                  }}
                                ></div>
                            ))
                        }
                    </OwlCarousel>
                ))}:""
            
                <p>
                    {story1.content}
                </p>
            }
                {/* mapping function 
                    heading
                    owl corsaek for image slider
                    content*/}
            </div>
        )
    }
}

export default IndividualStories