import React from 'react';
import Loading from './components/loading';
import UserCard from './components/userCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      userInfo: [],
    }
    this.fetchUser = this.fetchUser.bind(this);
  }

  async fetchUser() {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    const { name: { title, first, last }, email, dob: { age }, picture: { large } } = data.results[0];
    return {
      fullName:`${title} ${first} ${last}`,
      email,
      age,
      picture: large,
    }
  }

  async componentDidMount() {
    const data = await this.fetchUser();
    this.setState({ userInfo: [data], loading: false })
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.userInfo[0].age < 50) return true;
  }

  render() {
    const { loading, userInfo } = this.state;
    return (
      <div className="App">
        { loading
          ? <Loading />
          : <UserCard 
              userName={ userInfo[0].fullName }
              userEmail={ userInfo[0].email }
              userImage={ userInfo[0].picture }
            />
        }
      </div>
    );
  }
}

export default App;
