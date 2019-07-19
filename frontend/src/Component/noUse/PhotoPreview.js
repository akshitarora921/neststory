import React from 'react';
import './photo-preview.css'

class PhotoPreview extends React.Component{
    render(){
        console.log(this.props.caption)
        return(
            <div className="photo-preview">
                <div className="container">
                    <img src={this.props.src} alt={this.props.caption}/>
                    <div className="caption">
                        {this.props.caption}
                    </div>
                </div>
            </div>
        )
    }
}
export default PhotoPreview