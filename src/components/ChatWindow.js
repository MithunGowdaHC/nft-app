// import React, { useState } from 'react';

// const ChatWindow = ({ chat, onBack }) => {
//   const [message, setMessage] = useState('');

//   const handleSend = () => {
//     console.log('Sending:', message);
//     setMessage('');
//   };

//   return (
//     <div className="flex flex-col h-full bg-gray-100">
//       <div className="bg-white p-4 flex items-center shadow-sm">
//         <button onClick={onBack} className="mr-4 text-gray-600">
//           &larr;
//         </button>
//         <img
//           className="w-10 h-10 rounded-full mr-3 object-cover"
//           src={chat.img}
//           alt={chat.name}
//         />
//         <h2 className="font-semibold">{chat.name}</h2>
//       </div>

//       <div className="flex-1 overflow-y-auto p-4">
//         <div className="bg-white p-3 rounded-lg shadow-sm mb-2 max-w-xs ml-auto">
//           {chat.text}
//         </div>
//         <div className="bg-blue-500 text-white p-3 rounded-lg shadow-sm mb-2 max-w-xs mr-auto">
//           Sample reply
//         </div>
//       </div>

//       <div className="bg-white p-4 flex items-center">
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type a message..."
//           className="flex-1 border rounded-full px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={handleSend}
//           className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;

import React from "react";
import { FaPaperPlane } from 'react-icons/fa';

const ChatWindow = () => {
  return (
    <div className="w-5/12 p-12 mt-7 mx-auto bg-gray-100 rounded-lg shadow-lg">
      <div className="space-y-10">
        <div className="flex flex-col items-start">
          <p className="bg-gray-300 text-black p-6 rounded-t-lg rounded-r-lg shadow-md">
            Amateurs think about how much money they can make. Professionals think
            about how much money they could lose.
          </p>
          <span className="text-sm text-gray-500 mt-2">4:26 AM</span>
        </div>

        <div className="flex flex-col items-end">
          <p className="bg-black text-white p-6 rounded-t-lg rounded-l-lg shadow-md">
            The price of a commodity will never go to zero. When you invest in
            commodities futures, you are not buying a piece of paper that says you
            own an intangible of the company that can go bankrupt 😌.
          </p>
          <span className="text-sm text-gray-500 mt-2">4:30 AM</span>
        </div>

        <div className="flex flex-col items-start">
          <p className="bg-gray-300 text-black p-6 rounded-t-lg rounded-r-lg shadow-md">
            Amateurs think about how much money they can make. Professionals think
            about how much money they could lose.
          </p>
          <span className="text-sm text-gray-500 mt-2">4:35 AM</span>
        </div>

        <div className="flex flex-col items-end">
          <p className="bg-black text-white p-6 rounded-t-lg rounded-l-lg shadow-md">
            It's not always easy to do what's not popular, but that's where you make
            your money. Buy stocks that look bad to less careful investors and hang
            on until their real value is recognized.
          </p>
          <span className="text-sm text-gray-500 mt-2">4:40 AM</span>
        </div>

        <div className="flex flex-col items-start">
          <p className="bg-gray-300 text-black p-6 rounded-t-lg rounded-r-lg shadow-md">
            99%+ of traders don't care about Ferraris and yachts. They just want to
            pay their bills, save a little extra money, and sleep well at night. The
            only way to do that is to bat 70% or more. Anything less, and these
            goals are nothing more than fantasy.
          </p>
          <span className="text-sm text-gray-500 mt-2">5:22 AM</span>
        </div>
      </div>

      <div className="mt-6 flex">
  <input
    placeholder="Write a new message"
    className="bg-gray-600 flex-grow h-12 p-4 rounded-l-lg text-white placeholder-gray-300"
  />
  <button className="bg-black text-white px-6 rounded-r-lg flex items-center justify-center">
    <FaPaperPlane className="w-5 h-5" />
  </button>
</div>
    </div>
  );
};

export default ChatWindow;
