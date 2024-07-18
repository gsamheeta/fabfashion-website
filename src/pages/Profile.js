import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
    const [profile, setProfile] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: ''
    });

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [oldPasswordVerified, setOldPasswordVerified] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:8000/api/profile/', {
                headers: {
                    'Authorization': `Token ${token}`
                }
            });
            const data = await response.json();
            setProfile(data);
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8000/api/profile/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(profile)
        });

        if (response.ok) {
            alert('Profile updated successfully');
        } else {
            alert('Error updating profile');
        }
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setPasswordError('New passwords do not match');
            return;
        }
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8000/api/change_password/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify({
                old_password: oldPassword,
                new_password: newPassword
            })
        });

        if (response.ok) {
            alert('Password updated successfully');
            setShowPasswordModal(false);
        } else {
            const data = await response.json();
            setPasswordError(data.error);
        }
    };

    const verifyOldPassword = async () => {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8000/api/verify_old_password/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify({ old_password: oldPassword })
        });

        if (response.ok) {
            setOldPasswordVerified(true);
        } else {
            setOldPasswordVerified(false);
            setPasswordError('Old password is incorrect');
        }
    };

    return (
        <div className="profile-page">
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={profile.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="first_name"
                        value={profile.first_name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="last_name"
                        value={profile.last_name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Update Profile</button>
            </form>
            <button onClick={() => setShowPasswordModal(true)}>Change Password</button>
            {showPasswordModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowPasswordModal(false)}>&times;</span>
                        <h2>Change Password</h2>
                        <form onSubmit={handlePasswordChange}>
                            <label>
                                Old Password:
                                <input
                                    type="password"
                                    value={oldPassword}
                                    onChange={(e) => {
                                        setOldPassword(e.target.value);
                                        setPasswordError('');
                                    }}
                                    onBlur={verifyOldPassword}
                                />
                                {oldPasswordVerified && (
                                    <img
                                        src="/images/green_right.jpg"
                                        alt="Verified"
                                        className="verified-icon"
                                    />
                                )}
                            </label>
                            <label>
                                New Password:
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => {
                                        setNewPassword(e.target.value);
                                        setPasswordError('');
                                    }}
                                    disabled={!oldPasswordVerified}
                                />
                            </label>
                            <label>
                                Confirm New Password:
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        setPasswordError('');
                                    }}
                                    disabled={!oldPasswordVerified}
                                />
                            </label>
                            {passwordError && <p className="error">{passwordError}</p>}
                            <button type="submit" disabled={!oldPasswordVerified}>Update Password</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
