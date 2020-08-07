import { LogoutOutlined, ProfileOutlined } from '@ant-design/icons'
export default [
    
    {
        key: "profile",
        icon: <ProfileOutlined />,
        action: "editProfile",
        display: "Manage Profile"
    },
    
    {
        key: "logout",
        icon: <LogoutOutlined />,
        action: "forceLogout",
        display: "Logout"
    }
]