import React from 'react';

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("auth"));
    console.log("Profile User:", user);
    return (
        <div style={{ width: "400px", margin: "40px auto" }}>
            <h2>User Profile</h2>
            <div className="profile-card">
                <p><strong>Name:</strong> {user?.name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
            </div>
        </div>
    );
};

export default Profile;
