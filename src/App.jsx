import './App.scss'
import TopBar from './components/topBar/topbar'
import MainPage from './components/mainPage/mainPage'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TopBar />
                <MainPage />
            </header>
        </div>
    )
}

export default App
