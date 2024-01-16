// // import React from "react";
// // import PropTypes from "prop-types";

// // const Number1 = ({ messages }) => {
// //   return (
// //     <>
// //       {console.log(messages, "messages")}
// //       {messages.map((message, index) => (
// //         <div key={index}>
// //           <div
// //             className={`body ${
// //               message.key === "send" ? "sendColor" : "receiveColor"
// //             }`}
// //           >
// //             {message.body}
// //           </div>
// //           <div className="date">
// //             {new Date(message.sent_date).toLocaleString()}
// //           </div>
// //         </div>
// //       ))}
// //     </>
// //   );
// // };

// // Number1.propTypes = {
// //   messages: PropTypes.array.isRequired,
// // };

// // export default Number1;

// import React from "react";
// import PropTypes from "prop-types";

// const Number1 = ({ messages }) => {
//   // Sort messages by sent_date
//   const sortedMessages = messages.slice().sort((a, b) => {
//     return new Date(a.sent_date) - new Date(b.sent_date);
//   });

//   return (
//     <>
//       {console.log(sortedMessages, "messages")}
//       {sortedMessages.map((message, index) => (
//         <div key={index}>
//           <div
//             className={`body ${
//               message.key === "send" ? "sendColor" : "receiveColor"
//             }`}
//           >
//             {message.body}
//           </div>
//           <div className="date">
//             {new Date(message.sent_date).toLocaleString()}
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// Number1.propTypes = {
//   messages: PropTypes.array.isRequired,
// };

// export default Number1;

import React from "react";
import PropTypes from "prop-types";

const Number1 = ({ messages,type }) => {

  const uniqueMessageBodies = new Set();

  const uniqueMessages = messages.filter((message) => {
    if (!uniqueMessageBodies.has(message.body)) {
      uniqueMessageBodies.add(message.body);
      return true;
    }
    return false;
  });

  const sortedMessages = uniqueMessages.slice().sort((a, b) => {
    return new Date(a.sent_date) - new Date(b.sent_date);
  });

  return (
    <>
      {sortedMessages.map((message, index) => { 
        
        console.log(message.body, "messages")
        return(
      

        // creating div
        <div
          key={index}
          className={`body_date ${
            message.key === "send" ? "sendColor" : "receiveColor"
          }`}
        >
          <div className="text"></div>
          <div className="text1">
            <div
              className={`body ${
                message.key === "send" ? "sendColor" : "receiveColor"
              }`}
            >
            
           {type == "whatsapp" ? <div>{message.body}</div> : <img src={`${message.body}`} alt="image"/> } 
            </div>
            <div className="date">
              {new Date(message.sent_date).toLocaleString()}
            </div>
          </div>
        </div>
      )})}
    </>
  );
};

Number1.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default Number1;
