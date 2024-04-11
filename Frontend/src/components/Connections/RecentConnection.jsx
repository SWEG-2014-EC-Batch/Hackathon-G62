import React from "react";
import "./RecentConnection.css";

function RecentConnection({ name, skill, projectIdea }) {
  return (
    <>
      <p className="connectionText">
        <hr /> RECENT CONNECTIONS <hr />
      </p>
      <div className="recentConnection">
        <div className="profile">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO42nkg5RWeA6roUeQEf1TcSykrEBsMt3rw&usqp=CAU"
            alt=""
          />
          <div className="about">
            <p className="name">{name}</p>
            <p className="skill">{skill}</p>
          </div>
          <p className="ProjectIdea">{projectIdea}</p>
        </div>
        <div className="profile">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="about">
            <p>Bradon Wilson</p>
            <p>Web developer</p>
          </div>
          <p className="ProjectIdea">HOTEL MANAGMENT SYSTEM</p>
        </div>
        <div className="profile">
          <img
            src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
            alt=""
          />
          <div className="about">
            <p>Bradon Wilson</p>
            <p>Web developer</p>
          </div>
          <p className="ProjectIdea">HOTEL MANAGMENT SYSTEM</p>
        </div>
        <div className="profile">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh80K2dKoYTZ3aiFlA3ia9qyZfL1kfrSE9aQ&usqp=CAU"
            alt=""
          />
          <div className="about">
            <p>Bradon Wilson</p>
            <p>Web developer</p>
          </div>
          <p className="ProjectIdea">HOTEL MANAGMENT SYSTEM</p>
        </div>
      </div>
    </>
  );
}

export default RecentConnection;
