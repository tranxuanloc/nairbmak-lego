import React from 'react';

import lego from 'static/images/lego.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default class Home extends React.Component {

  onButtonClick = () => {
    let data = {

      "domain_name": "OHMNILABS UAT",

      "cust_rfr_id": Date.now().toString(),

      "title": "Mr.",

      "first_name": "Phong",

      "middle_name": "Hong",

      "last_name": "Vu",

      "nationality": "VIETNAMESE",

      "country_of_residence": "VIETNAM",

      "gender": "MALE",

      "date_of_birth": "28/02/1987",

      "ssic_code": "UNKNOWN - UNKNOWN",

      "ssoc_code": "UNKNOWN - UNKNOWN",

      "onboarding_mode": "UNKNOWN",

      "payment_mode": "UNKNOWN",

      "product_service_complexity": "UNKNOWN"

    };
    axios({
        url: "https://p2.cynopsis-solutions.com/artemis_ohmnilabs_uat/api/individual_customer",
        method: 'post',
        data,
        headers: { 'Content-Type': 'application/json', 'WEB2PY-USER-TOKEN': "39a04d73-8976-4012-9c04-2d555eadd2c0" }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="site_wrapper">
        <div className="site-upper">
          {this.props.header}
        </div>
        <main className="main bg-white">
          <div className="container text-center" style={{ marginTop: 40 }}>
            <img src={lego} className="lego-logo" alt="Lego logo" />
            <hr />
            <h1>Welcome to Kambria Lego!</h1>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
          </p>
            <p>
              <button className="btn btn-secondary" icon={<FontAwesomeIcon icon={faCoffee} />} onClick={this.onButtonClick}>Learn More</button>
            </p>
          </div>
        </main>
        {this.props.footer}
      </div>);
  }
}