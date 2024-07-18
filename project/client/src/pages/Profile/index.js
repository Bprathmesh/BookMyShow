import {message, Tabs} from 'antd';
import Bookings from './Bookings';

const Profile = () => {
  const navigate = useNavigate();
      const checkUser = async () => {
        const user = await axios.get("/api/users/get-current-user", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (user.data.data.role === "partner" ) {
            navigate("/partner");
            message.error("You are not allowed to access this page");
        }
        if (user.data.data.role === "admin" ) {
            navigate("/admin");
            message.error("You are not allowed to access this page");
        }
        else {

        }
    }
    checkUser();
    
      const items = [
        {
          key: '1',
          label: 'Bookings',
          children: <Bookings/>,
        }
        
      ];

    return (
        <>
        <h1>User Profile Page</h1>
            <Tabs defaultActiveKey="2" items={items} />
        </>
    )
}

export default Profile;