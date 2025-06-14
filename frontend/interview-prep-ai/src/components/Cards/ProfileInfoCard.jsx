import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom';

const ProfileInfoCard = () => {
    const { user, clearUser }=useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/");
    }
    if(!user)return null;
  return ( 
    user && (
    <div className='flex items-center'>
    {user.profileImageUrl ? (
        <img
            src={user.profileImageUrl}
            alt="Profile"
            className="w-11 h-11 bg-gray-300 rounded-full mr-3 object-cover"
        />
        ) : (
        <div className="w-11 h-11 bg-gray-300 rounded-full mr-3 flex items-center justify-center text-white text-sm font-semibold">
            {user.name?.charAt(0).toUpperCase() || "?"}
        </div>
        )}
        <div>
            <div className='text-[15px] text-black font-bold leading-3'>
                {user.name || ""}
            </div>
            <button 
                className='text-amber-600 text-sm font-semibold cursor-pointer hover:underline'
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    </div>
    )
  )
}

export default ProfileInfoCard