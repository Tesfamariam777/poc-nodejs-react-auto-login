import config from "./config/config";
function App() {
  const handleBookClick = async () => {
    try {
      const response = await fetch(`${config.API_URL}/token`);
      const data = await response.json();
      const token = data.token;

      //redirect to agentdemo with the JWT token for auto-login
      console.log("rederecting with token",token);
      window.location.href = `https://agentdemo.travelwits.com?token=${token}`;
    } catch (error) {
      console.log('error generating token',error);
    }
  }
  return (
    <div className="App">
      <button onClick={handleBookClick}>Book</button>
    </div>
  );
}

export default App;
