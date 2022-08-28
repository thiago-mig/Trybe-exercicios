import React from 'react';
import PropTypes from 'prop-types';

class UserCard extends React.Component {
  render() {
    const { userImage, userName, userEmail } = this.props;
    return (
      <div>
        <img src={ userImage } alt={`foto de ${userName}`} />
        <h1>{ userName }</h1>
        <h2>{ userEmail}</h2>
      </div>
    );
  }
}

UserCard.propTypes = {
  userEmail: PropTypes.string,
  userImage: PropTypes.string,
  userName: PropTypes.string,
}

UserCard.defaultProps = {
  userEmail: 'userEmail',
  userImage: 'userImage',
  userName: 'userName',
}
export default UserCard;