import profilePic from '../assets/portfolio-picture.png';

export default function Home() {
    return (
        <div className='home'>
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <p className="developer-font">
                Transforming complex problems into elegant solutions, I'm Jesse Nay, a web developer with a passion for crafting intuitive and engaging digital experiences. Together, let's build the future, one line of code at a time.
            </p>
        </div>
    );
}
