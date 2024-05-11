const SocialMediaIcons=()=>{
    return(
        <div
          className="flex justify-center md:justify-start my-10 gap-7"
        >
        <a className="hover:opacity-50 transition duration-500"
            href="https://www.linkedin.com/in/raghav-khandelwal-7794a1236/"
            target="_blank"
            rel="noreferrer"
        >
            <img alt="linkedin-lin" src="../assets/linkedin.png" />

        </a>
        <a className="hover:opacity-50 transition duration-500"
            href="https://github.com/raghav13d"
            target="_blank"
            rel="noreferrer"
        >
            <img alt="github-lin" src="../assets/git.png" />

        </a> 

        <a className="hover:opacity-50 transition duration-500"
            href="https://twitter.com/Raghav13d"
            target="_blank"
            rel="noreferrer"
        >
            <img alt="twitter-lin" src="../assets/x3.png" />

        </a>

        <a className="hover:opacity-50 transition duration-500"
            href="https://www.instagram.com/raghav_d13/"
            target="_blank"
            rel="noreferrer"
        >
            <img alt="instagram-lin" src="../assets/instagram.png" />

        </a>



        </div>
    );


};
export default SocialMediaIcons;