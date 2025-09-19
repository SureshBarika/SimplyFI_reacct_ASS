import {useState,useEffect} from "react"
import "./index.css"

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
            { userData == null ? <h1>Loading...</h1> :
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