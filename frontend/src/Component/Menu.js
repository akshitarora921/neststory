import React from "react";
import "./b.css";
class Menu extends React.Component{
    render() {
         return (
    <div
      style={{
        position: "absolute",
        zIndex: "2",
        padding: "90px 20px 90px 90px",
        marginTop: "-140px",
        marginLeft: "-160px",

        backgroundColor: "white",
        msTransform: "rotate(45deg)" /* IE 9 */,
        webkitTransform: "rotate(45deg)" /* Safari 3-8 */,
        transform: "rotate(45deg)"
      }}
    >
          <i
              style={{
                  marginLeft: "100px",
                  msTransform: "rotate(-45deg)" /* IE 9 */,
                  webkitTransform: "rotate(-45deg)" /* Safari 3-8 */,
                  transform: "rotate(-45deg)"
              }}
              class="fas fa-bars fa-2x "
              
      />
    </div>
  )
    }
}
   
export default Menu;
