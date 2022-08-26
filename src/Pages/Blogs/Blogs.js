import React from "react";

const Blogs = () => {
  return (
    <div className="container ">
      <h2 className="my-4 text-primary">Blogs</h2>
      <ol>
        <li>
          {" "}
          <strong className="">Authentication vs authorization: </strong>
          Authentication is the process of verifying who a user is, while
          authorization is the process of verifying what they have access to.
          Comparing these processes to a real-world example, when you go through
          security in an airport, you show your ID to authenticate your
          identity. Then, when you arrive at the gate, you present your boarding
          pass to the flight attendant, so they can authorize you to board your
          flight and allow access to the plane.
        </li>
        <li>
          <p>
            The Firebase Database is a cloud-hosted database. Data is stored as
            JSON and synchronized in realtime to every connected client. It lets
            us build rich, collaborative applications by allowing secure access
            to the database directly from client-side code
          </p>
          <p>
            The Other options of Authentications are:
            <ul>
              <p>Auth0. </p>
              <p>MongoDB</p>
              <p>Okta</p>
              <p>OAuth2</p>
            </ul>
          </p>
        </li>
        <li>
          Without Authentication, Firebase provides:
           1.Cloud Firestore. 2.Cloud Functions. 3.Authentication. 4.Hosting. Cloud
          Storage. 5.Google Analytics. 6.Predictions. 7.Cloud Messaging.
        </li>
      </ol>
    </div>
  );
};

export default Blogs;
