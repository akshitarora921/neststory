import React from "react";
import axios from "axios";
import Swal from 'sweetalert2'

class launchpadDash extends React.Component {
  state = {
    launchpads: [],
    mentors: [],
    launchpadId: "0",
    mentorName: "",
    mentorDesg: "",
    mentorImage: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/launchpad/all")
      .then(res => {
        let data = res.data;
        this.setState({
          launchpads: data
        });
      })
      .catch(err => {
        console.log("Error in axios: ", err);
      });

    axios
      .get("http://localhost:3001/mentor/all")
      .then(res => {
        let data = res.data;
        this.setState({
          mentors: data
        });
      })
      .catch(err => {
        console.log("Error in axios: ", err);
      });
  }

   editMentor = async(mentor) => {
      let mentorId = mentor.mentor_id;

      const { value: formValues } = await Swal.fire({
        title: `Mentor Id: ${mentorId}`,
        html:`<label class="float-left h4">Name</label>`+
        `<input style="margin:0px" id="Name" placeHolder=${mentor.name} class="swal2-input">` +
        `<label style="margin-top:10px" class="float-left h4">Designation</label>`+
        `<input style="margin:0px" id="Designation" placeHolder=${mentor.designation} class="swal2-input">`,
   focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('Name').value,
            document.getElementById('Designation').value
          ]
        }
      })
      console.log(formValues)
      console.log(formValues[0])
       if (formValues[0] === "")
            {formValues[0]=mentor.name}
       if (formValues[1] === "")
           {formValues[1] = mentor.designation}
       
       let mentorData = {
           name: formValues[0],
           designation:formValues[1]
       }
       console.log(mentorData)
       axios.post(`/mentor/edit/${mentorId}`, mentorData)
           .then(res => {
           console.log("Mentor edit success: ", res)
           })
           .catch(err => {
           console.log("mentor edit err: ", err)
       })
     
      
  };

  render() {
    return (
      <div className="container">
        {this.state.launchpads.map((launchpad, id) => (
          <div key={id}>
            <h3>{launchpad.heading}</h3>
            <table className="table table-hower">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mentors
                  .filter(
                    mentor => mentor.launchpad_id === launchpad.launchpad_id
                  )
                  .map((mentor, idi) => (
                    <tr key={idi}>
                      <td>{mentor.name}</td>
                      <td>{mentor.designation}</td>
                      <td>
                        <button
                          className=" btn btn-primary"
                          onClick={() => {
                            this.editMentor(mentor);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <br />
          </div>
        ))}
      </div>
      //   <div className="container">
      //     <div className="col-md-12 col-sm-12 ">
      //       <h2 className="section-heading">Mentor Input</h2>
      //     </div>
      //     <form>

      //       {/* Input Launchpad Id */}
      //       <div className="form-group">
      //         <label>Launchpad Name</label>
      //         <select
      //           name="launchpadId"
      //           onChange={this.handleChangeMentor}
      //           className="form-control"
      //         >
      //           {this.state.launchpads.map((launchpad, id) => (
      //             <option key={id} value={`${launchpad.launchpad_id}`}>
      //               {launchpad.heading}
      //             </option>
      //           ))}
      //         </select>
      //       </div>

      //       {/* Input mentor name */}
      //       <div className="form-group">
      //         <label>Name</label>
      //         <input
      //           onChange={this.handleChangeMentor}
      //           name="mentorName"
      //           type="text"
      //           className="form-control"
      //           placeholder="Name"
      //         />
      //       </div>

      //       {/* Input mentor name */}
      //       <div className="form-group">
      //         <label>Designation</label>
      //         <input
      //           onChange={this.handleChangeMentor}
      //           name="mentorDesg"
      //           type="text"
      //           className="form-control"
      //           placeholder="Designation"
      //         />
      //       </div>

      //       {/* Input Mentor Image */}
      //       <div className="form-group">
      //         <div className="form-group">
      //           <label htmlFor="exampleFormControlFile1">
      //             Mentor Image Input
      //           </label>
      //           <input
      //             type="file"
      //             name="mentorImage"
      //             className="form-control-file"
      //             onChange={this.handleChangeMentor}
      //           />
      //         </div>
      //       </div>

      //       <div className="form-group">
      //         <button
      //           onClick={this.handleSubmitMentor}
      //           className="btn-submit btn btn-primary"
      //         >
      //           Upload
      //         </button>
      //       </div>
      //     </form>
      //   </div>
    );
  }
}

export default launchpadDash;
