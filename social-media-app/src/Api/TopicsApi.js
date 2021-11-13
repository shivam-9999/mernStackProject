import React from "react";
import uuid from 'react-uuid'

const userTopicsData = {
  userId:"",
  topics:[
    {
      id: uuid(),
      name: "Technology",
    }
  ]
}

export default userTopicsData





// posts: [
//   {
//     name: "Car",
//     picture:
//       "https://gomechanic.in/blog/wp-content/uploads/2020/11/How-compatible-are-Tesla-Cars-in-India-1200x900.jpg",
//     description: "A car (or automobile) is a wheeled motor vehicle used for transportation",
//   },
//   {
//     name: "helicopter",
//     picture:
//       "https://s3-prod-europe.autonews.com/s3fs-public/styles/800x600/public/Tesla-Model%20S%20PLAID%20web.jpg",
//     description:
//       "A helicopter is a type of aircraft that uses rotating, or spinning, wings called blades to fly"
//   },
// ]