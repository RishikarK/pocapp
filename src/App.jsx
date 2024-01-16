import React, { useEffect, useState } from "react";
import axios from "axios";
import Number1 from "./components/Number1";
import "./App.css";

const App = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [myData, setMyData] = useState({ result: [] });

  const onClickHandler = (subject) => {
    setSelectedSubject(subject);
  };

  const myFunction = async () => {
    try {
      let response = await axios.get("http://192.168.1.63:4000/send");
      console.log(response.data, "data");
      setMyData(response.data);
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response || error.message || error
      );
    }
  };

  useEffect(() => {
    myFunction();
  }, []);
  console.log(myData)

  return (
    <>
      <div className="container">
        {Array.isArray(myData.result) &&
          myData.result?.map((result) => (
            <div
              key={result.subject}
              className={`whatsapp ${
                selectedSubject === result.subject ? "selected" : ""
              }`}
              onClick={() => {
                onClickHandler(result.subject);
              }}
            >
              <div style={{ display: "flex" }}>
                <div className="image"></div>
                <div className="lead_subject">
                  <div className="leadNo">{result.lead_no}</div>
                  <div className="subjects">{result.subject}</div>
                </div>
              </div>
              <div
                className={`arrow ${
                  selectedSubject === result.subject
                    ? "selected"
                    : "notSelected"
                }`}
              >
                &rarr;
              </div>
            </div>
          ))}
      </div>

      {selectedSubject && (
        <div className="messages">
          <div className="app">
            <Number1
            
            type = {
              myData.result.find(
                (result) => result.subject === selectedSubject
              )?.type || null
            }
              messages={
                myData.result.find(
                  (result) => result.subject === selectedSubject
                )?.messages || []
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
