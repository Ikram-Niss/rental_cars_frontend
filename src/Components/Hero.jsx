import './Hero.css';

const Hero = ({ heroData, setHeroCount, heroCount, playStatus }) => {
    return (
        <div className='hero'>
            <div className='hero-taxt'>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>

            <div className='hero-explore'>
                <p>Explore the features</p>
            </div>

            <div className='hero-dot-play'>
                <ul className='hero-dots'>
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                </ul>
                <div className="hero-play">
                    <img onClick={()=>setPlayStatus(!playStatus)} src="" alt="" />
                    <p>See the video</p>
                </div>
            </div>
        </div>
        
    );
};

export default Hero;
