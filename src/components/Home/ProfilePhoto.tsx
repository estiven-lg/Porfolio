
import profilePhoto from '../../assets/avatar.jpeg';

const ProfilePhoto = () => {
  return (
    <div className="profile-photo-container">
      <img 
        src={profilePhoto} 
        alt="Estiven_LG" 
        className="profile-photo"
      />
    </div>
  );
};

export default ProfilePhoto;