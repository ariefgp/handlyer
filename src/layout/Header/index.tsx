import  { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDayNight } from "../../store/slice/modeSlice";
import "./styles.scss";
import { Link } from "react-router-dom";
import DarkLightSwitch from "../../components/DarkLightSwitch";
import { CONSTANTS } from "../../constants/constants";
import { RootState } from "../../store/store";

export interface IDarkLightSwitchProps {
  theme: string;
}

const Header = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const daynight = useSelector((state: RootState) => state.mode);
  const dispatch = useDispatch();
  const { mode } = daynight;

  const daynightHandler = () => {
    dispatch(changeDayNight());
  };

  const fullscreenHandler = () => {
    if (!fullscreen) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  return (
    <nav className='wrap'>
      <Link to='http://10.202.20.72:3000/'>
        <img src='http://10.202.20.72:3000/img/Logo_dikantor.png' alt='' />
      </Link>
      <div className='nav-menu'></div>
      <div className='nav-menu'>
        <a target='_blank' rel='noreferrer' href={CONSTANTS.AUTHOR_GITHUB_LINK}>
          <i className='fab fa-github'></i>
          <span>GitHub</span>
        </a>
        <div onClick={daynightHandler}>
          <DarkLightSwitch theme={mode} />
        </div>

        <button onClick={fullscreenHandler} className='fullscreen-btn'>
          <i className='fas fa-expand fa-lg'></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;
