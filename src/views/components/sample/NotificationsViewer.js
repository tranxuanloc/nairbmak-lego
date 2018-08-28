import React from 'react';
import NotificationsService from 'services/NotificationsService';

class NotificationsViewer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      count: -1
    };
  }

  async componentDidMount() {
    let {count} = await NotificationsService.getNotifications();
    this.setState({
      count
    });
  }

  render() {
    return <section className="mt-3 mb-2">
      <div className="notifications">
        {this.state.count !== -1 ? `${this.state.count} notifications awaiting!` : 'Loading...'}
      </div>
    </section>;
  }
}

export default NotificationsViewer;
