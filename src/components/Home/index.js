import {useState,useEffect} from "react"
import "./index.css"

import { ThreeDots } from "react-loader-spinner";

import ListItem from "../ListItem"


const Home = () => {
    const [userData,updateUserData] = useState(null)

    const fetchData = async () => {
        let options = {
            "Method":"GET"
        }
        let data = await fetch("https://jsonplaceholder.typicode.com/users",options)
        let users = await data.json()
        // console.log(users)
        let AddFeaturesData = users.map((user) => {
            user["like"] = false
            return user
        })
        updateUserData(AddFeaturesData)
        console.log(AddFeaturesData)
    }

    const deleteuser = (id) => {
        const filterData = userData.filter((user) => {
            if (user.id !== id) {
                return user
            }
        })
        updateUserData(filterData)
    }

    const updateLike = (id) => {
        const filterdate = userData.map((user) => {
            if (user.id === id) {
                user.like = !user.like
            }
            return user 
        })
        console.log(filterdate)
        updateUserData(filterdate)
    }

    useEffect(() => {
        fetchData()
    },[1])


    return (
        <div className="main-cont">
            { userData == null ? (
                 <div className="flex items-center justify-center h-screen">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3498db"   // blue color
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
            ) :
            <ul className="users-list">
                {userData.map((user) => {
                    return <ListItem key={user.id} user={user} deleteUser={deleteuser} updateLike={updateLike} />
                })}
            </ul>
            }
        </div>
    )
}

export default Home