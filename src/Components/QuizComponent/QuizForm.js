import { React, useState } from "react";
import axios from "axios";
import "./QuizFormStyle.css";
import ChampLogo from "../../assets/champ-logo.png";

import { RotatingLines } from "react-loader-spinner";

function QuizForm() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [school, setSchool] = useState("");
  const [pupilClass, setPupilClass] = useState("");
  const [email, setEmail] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [parentName, setParentName] = useState("");
  const [phoneNumber, setPhone] = useState("");

  const [isLoading, setIsLoading] =useState(false)
  const [isSuccess, setIsSucess] =useState(0)
  const [successMessage, setSuccessMessage] =useState("")

  const handleFullName = (event) => {
    const name = event.target.value;
    setFullName(name);
  };

  const handleUserName = (event) => {
    const name = event.target.value;
    setUserName(name);
  };

  const handleSchool = (event) => {
    const sch = event.target.value;
    setSchool(sch);
  };
  const handlePupilClass = (event) => {
    const pupil = event.target.value;
    setPupilClass(pupil);
  };
  const handleEmail = (event) => {
    const mail = event.target.value;
    setEmail(mail);
  };
  const handleInstructorName = (event) => {
    const instructor = event.target.value;
    setInstructorName(instructor);
  };

  const handleParentName = (event) => {
    const parent = event.target.value;
    setParentName(parent);
  };
  const handlePhone = (event) => {
    const phone = event.target.value;
    setPhone(phone);
  };

  const registerUser = async (e) => {
    e.preventDefault();
    

    try {
      setIsLoading(true)
      const response = await axios.post(
        "https://educhamps.ng/api/v1/quiz/register-quiz",
        // "http://localhost:5000/api/v1/quiz/register-quiz",
        {
          fullName: fullName,
          userName:userName,
          school: school,
          pupilClass: pupilClass,
          email: email,
          instructorName: instructorName,
          parentName: parentName,
          phoneNumber: phoneNumber,
        }
      );
      setIsLoading(false)
      setIsSucess(1)
      setSuccessMessage(response.data['message'])
      setFullName("");
      setUserName("")
      setSchool("");
      setPupilClass("")
      setEmail("")
      setInstructorName("")
      setParentName("")
      setPhone("")
      console.log(response);
    } catch (error) {

      setIsSucess(2)
      setIsLoading(false)

      if(error.response){
        setSuccessMessage(error.response.data['message'])
      }else{
        setSuccessMessage(" Error! Something went wrong try again.")
      }
     
      console.error(error);
    }
  };

  return (
    <section id="quiz">
      <div className="quiz-form">
        <div className="sub-body-heading">Get Started</div>

        <hr className="hoz-line"></hr>

        <div className="form-main">
          <div className="form-left">
            <main>
              <div>
                <img
                  className="form-image"
                  src={ChampLogo}
                  alt="champ-logo"
                ></img>
              </div>

              <small className="form-content">
                {" "}
                Unleash your intellectual prowess at Educhamps! Join us for an
                unforgettable journey of knowledge and excitement, where the
                brightest minds collide. Challenge yourself and compete against
                the best. Register by filling the fileds with valid details.
              </small>
            </main>
          </div>

          <main className="form-section">
            <form onSubmit={registerUser} className="form-body">
              <h3>Educhamps Competition Form</h3>
              <label htmlFor="fullName">Pupil/Student Full name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => handleFullName(e)}
                required
              />
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={userName}
                onChange={(e) => handleUserName(e)}
                required
              />

              <label htmlFor="school">School</label>
              <input
                type="text"
                id="school"
                name="school"
                value={school}
                onChange={(e) => handleSchool(e)}
                required
              />
              <label htmlFor="pupilClass">Class</label>
              <input
                type="text"
                id="pupilClass"
                name="pupilClass"
                value={pupilClass}
                onChange={(e) => handlePupilClass(e)}
                required
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => handleEmail(e)}
                required
              />
              <label htmlFor="instructorName">Instructor's Name</label>
              <input
                type="text"
                id="instructorName"
                name="instructorName"
                value={instructorName}
                onChange={(e) => handleInstructorName(e)}
                required
              />
              <label htmlFor="parentName">Parent/Guidance Full Name</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={parentName}
                onChange={(e) => handleParentName(e)}
                required
              />
              <label htmlFor="phoneNumber"> Parent/Guidance Phone Number</label>
              <input
                type="tel"
                id="tel"
                name="phoneNumber"
                value={phoneNumber}
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={(e) => handlePhone(e)}
                required
              />

              {/* Gender
            State
            LGA
            Chose Age [Lower Primary (4-7), Upper primary(7-10), Junoir Secondary 10-14, Senior (13-18)] */}

              <div className="form-button">
                {isLoading?
                <div className="loaderIndicator">
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="30"
                    visible={true}
                  />
                </div>:

                <button className="btn" type="submit">
                  Register
                </button>}
              </div>
            </form>
            
            {isSuccess ===1 ? <div className="successMsg">
              {successMessage}
            </div>:isSuccess ===2?<div className="failMsg">
            {successMessage}
            </div> :<div></div>}
           
          </main>
          
        </div>

        
      </div>

   
    </section>
  );
}

export default QuizForm;
