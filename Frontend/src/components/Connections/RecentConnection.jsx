import React from "react";
import "./RecentConnection.css";

function RecentConnection() {
  // const [recentCollaborate, setRecentCollaborate] = useState([]);

  // useEffect(() => {
  //   // Define an async function to fetch data
  //   const fetchData = async () => {
  //     try {
  //       // Make the HTTP request using Axios
  //       const token = localStorage.getItem("token"); // Retrieve token from local storage
  //       const response = await axios.get(
  //         "https://hackathon-g6.onrender.com/api/feeds/2/collaborators/",
  //         {
  //           headers: {
  //             Authorization: ` Bearer ${token}`, // Include token in the request headers
  //           },
  //         }
  //       );
  //       // Extract the data from the response
  //       const data = response.data;
  //       console.log(data);
  //       // Set the fetched data to the state
  //       setRecentCollaborate(data);
  //     } catch (error) {
  //       console.log(error);
  //       console.error("There was a problem fetching the data:", error.message);
  //     }
  //   };

  //   // Call the async function to fetch data when the component mounts
  //   fetchData();
  // }, []);

  // console.log(recentCollaborate);

  const recentCollaborate = [
    {
      id: 1,
      image:
        "https://photogov-com.akamaized.net/examples/zz-240x288-pixel-photo/landmarks-US.webp",
      name: "John Doe",
      skill: "Web Development",
      projectIdea: "Looking for collaborators for a new web project.",
    },
    {
      id: 2,
      image:
        "https://photogov-com.akamaized.net/examples/zz-240x288-pixel-photo/landmarks-US.webp",
      name: "Jane Smith",
      skill: "Data Science",
      projectIdea: "Seeking partners for a machine learning project.",
    },
    {
      id: 3,
      image: "https://visafoto.com/img/source355x388.jpg",
      name: "Alice Johnson",
      skill: "Graphic Design",
      projectIdea: "Interested in working on creative design projects.",
    },
    {
      id: 4,
      image: "https://visafoto.com/img/source355x388.jpg",
      name: "Alice Johnson",
      skill: "Graphic Design",
      projectIdea: "Interested in working on creative design projects.",
    },
  ];

  return (
    <>
      <p className="connectionText">
        <hr /> RECENT CONNECTIONS <hr />
      </p>
      <div className="recentConnection">
        {recentCollaborate.slice(-4).map((collaborator) => (
          <div className="profile" key={collaborator.id}>
            <img src={collaborator.image} alt="image" />
            <div className="about">
              <p className="name">{collaborator.name}</p>
              <p className="skill">{collaborator.skill}</p>
            </div>
            <p className="ProjectIdea">{collaborator.projectIdea}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default RecentConnection;
