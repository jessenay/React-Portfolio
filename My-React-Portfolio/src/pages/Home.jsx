import profilePic from '../assets/portfolio-picture.png';

export default function Home() {
    return (
        <div className='home'>
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <p className="developer-font">
                Hello! I'm Jesse, a Full Stack Web Developer from Utah with a passion for creating seamless, visually appealing web experiences. My expertise spans HTML, CSS, JavaScript, React, Node.js, and other technologies. Since 2023, I've been dedicated to building user-centric web applications that are not only functional but also intuitive and engaging.
                What sets me apart is my commitment to innovative problem-solving and meticulous attention to details. My portfolio highlights my versatility and ability to tackle challenges in web development, showcasing projects that range from single-page applications to full-stack solutions.
                I'm excited about opportunities to collaborate on projects or with teams where I can contribute my skills and continue to grow. Thank you for considering my work. Let's connect!
            </p>
        </div>
    );
}
