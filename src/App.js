import "./App.css";
// importing components from react-router-dom package
import {

Routes,
Route,
Navigate,
} from "react-router-dom";


// import About component
import NextPage from "./components/About";


function App() {
return (
	<>
	{/* This is the alias of BrowserRouter i.e. Router */}
	
		<Routes>
		
			
		{/* This route is for about component
		with exact path "/about", in component
		props we passes the imported component*/}
		<Route path="/about" component={NextPage} element={<Navigate replace to="/" />}/>
		
			
		{/* If any route mismatches the upper
		route endpoints then, redirect triggers
		and redirects app to home component with to="/" */}
		
		</Routes>
	
	</>
);
}

export default App;
