import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import $ from "jquery";

class launchpadDash extends React.Component {
  state = {
    launchpads: [],
    mentors: [],
    mentorName: "",
    mentorDesignation: ""
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
        // console.log("Error in axios: ", err);
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
        // console.log("Error in axios: ", err);
      });
  }

  editMentor = async mentor => {
    let mentorId = mentor.mentor_id;
    //  alert(mentor.designation)
    const { value: formValues } = await Swal.fire({
      title: `Mentor Id: ${mentorId}`,
      html:
        `<label class="float-left h4">Name</label>` +
        `<input style="margin:0px" id="Name" value="${
          mentor.name
        }" class="swal2-input">` +
        `<label style="margin-top:10px" class="float-left h4">Designation</label>` +
        `<input style="margin:0px" id="Designation" value="${
          mentor.designation
        }" class="swal2-input">`,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("Name").value,
          document.getElementById("Designation").value
        ];
      }
    });
    // console.log(formValues)
    // console.log(formValues[0])
    if (formValues) {
      if (formValues[0] === "") {
        formValues[0] = mentor.name;
      }
      if (formValues[1] === "") {
        formValues[1] = mentor.designation;
      }

      let mentorData = {
        name: formValues[0],
        designation: formValues[1]
      };
      this.setState({
        mentorName: mentorData.name,
        mentorDesignation: mentorData.designation
      });
      //  console.log(mentorData)
      axios
        .post(`/mentor/edit/${mentorId}`, mentorData)
        .then(res => {
          // alert("Mentor edit success");
          $(`#${mentor.mentor_id}name`).html(this.state.mentorName);
          // console.log("Mentor edit success: ", res);
        })
        .catch(err => {
          // alert("mentor edit err");
          // console.log("mentor edit err: ", err);
        });
    }
  };

  deleteMentor = mentor => {
    axios.delete(`/mentor/${mentor.mentor_id}`).then(result => {
      // alert("success");
      $(`#${mentor.mentor_id}`).remove();
      // console.log("Success delete mentor", result);
    });
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
                    <tr key={idi} id={mentor.mentor_id}>
                      <td id={`${mentor.mentor_id}name`}>{mentor.name}</td>
                      <td>{`${mentor.designation}desig`}</td>
                      <td>
                        <button
                          className=" btn btn-primary"
                          onClick={() => {
                            this.editMentor(mentor);
                          }}
                        >
                          Edit
                        </button>{" "}
                        <button
                          className=" btn btn-danger"
                          onClick={() => {
                            this.deleteMentor(mentor);
                          }}
                        >
                          Delete
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
    );
  }
}

export default launchpadDash;
