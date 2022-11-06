import { Link } from "react-router-dom";
import './Home.css'

function Home() {


    return (
        <div className="App">
            <div className="main-container">
                <div className="header">
                    <h1>Hello</h1>
                </div>
                <div className="links">
                    <Link to='./Calculator'>
                        <button>
                            Calculator
                        </button>
                    </Link>
                    <Link to='./todo'>
                        <button>
                            Tasks
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
