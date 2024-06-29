import {BsFire} from 'react-icons/bs'
import './index.css'

function Header() {
  return (
    <div className="header">
      <h1 className="headerHeading">Welcome User👋</h1>
      <p className="headerParagraph">
        Current Streak <BsFire className="BsFire" />
      </p>
    </div>
  )
}

export default Header