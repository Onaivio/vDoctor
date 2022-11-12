import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { Amount, Dashboard, Despose, DesposeSent, Login, Location, Signin, Notification, WasteInfo, Wallet, Profile, Welcome, Home, GreenChat } from './components';
=======
import { Amount, Dashboard, Despose, DesposeSent, Login, Location, Signin, Notification, WasteInfo, Wallet, Profile, Welcome, Home } from './components/Index';
>>>>>>> 741e52119263084a0b86d28594e393708050e8c6


function App() {
  return (
    <div className="App">
    <BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Welcome />}></Route>
        <Route path="/signin" exact element={<Signin />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/location" exact element={<Location />}></Route>
        <Route path="/dashboard" exact element={<Dashboard />}></Route>
        <Route path="/profile" exact element={<Profile />}></Route>
        <Route path="/depose" exact element={<Despose />}></Route>
        <Route path="/desposesent" exact element={<DesposeSent />}></Route>
        <Route path="/amount" exact element={<Amount />}></Route>
        <Route path="/notification" exact element={<Notification />}></Route>
        <Route path="/wallet" exact element={<Wallet />}></Route>
        <Route path="/wasteinfo" exact element={<WasteInfo />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/chat" exact element={<GreenChat />}></Route>
			</Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;
