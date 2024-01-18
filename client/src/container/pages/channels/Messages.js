// import React from 'react';
// import PropTypes from 'prop-types';

// function Message({ author, content }) {
//   return (
//     <div>
//       <p>
//         <strong>{author}:</strong> {content}
//       </p>
//     </div>
//   );
// }

// Message.propTypes = {
//   author: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
// };

// function Messages({ messages }) {
//   return (
//     <div>
//       {messages.map((message) => (
//         <Message key={message.id} author={message.author} content={message.content} />
//       ))}
//     </div>
//   );
// }

// export default Messages;
import React from 'react';
import PropTypes from 'prop-types';

function Message({ author, content }) {
  return (
    <div>
      <p>
        <strong>{author}:</strong> {content}
      </p>
    </div>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

function Messages({ messages }) {
  return (
    <div>
      {messages.map((message) => (
        <Message key={message.id} author={message.author} content={message.content} />
      ))}
    </div>
  );
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Messages;
