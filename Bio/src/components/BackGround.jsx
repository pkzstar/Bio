import wallpaperLight from '../assets/wallpaperlight.png';

export function Background() {
  return (
    <div>
            <div className="footerContainer">
      <img id='wallPaper' className="wallpaperLight" src={wallpaperLight} alt="light wallpaper" />
    </div>

    </div>

  );
}

export default Background;
