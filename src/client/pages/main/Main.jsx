
import './main.css';
import Header from '../../Components/Header/Header';
import SideBar from '../../Components/SideBar/SideBar';
import ChatBoot from '../../Components/ChatBoot/ChatBoot';

function Main() {
  return (
    <div className='Main'>
      <Header />
      <div className='Main-Container'>
        <SideBar />
        <ChatBoot />
      </div>
    </div>
  );
}

export default Main;
