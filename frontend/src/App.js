import config from "./config/config";
function App() {
  const handleBookClick = async () => {
    try {
      const response = await fetch(`${config.API_URL}/generate-token`);
      const data = await response.json();
      const token = data.token;

      //redirect to agentdemo with the JWT token for auto-login
      console.log("rederecting with token",token);
      window.location.href = `https://agentdemo.travelwits.com?token=${token}`;
    } catch (error) {
      console.log('error generating token',error);
    }
  }
  const buttonStyle = {
    padding: '20px 40px',        // Large padding for a bigger button
    fontSize: '20px',            // Increase font size
    backgroundColor: '#007BFF',  // Blue background color
    color: '#FFFFFF',            // White text color
    border: 'none',              // Remove default border
    borderRadius: '8px',         // Rounded corners
    cursor: 'pointer',           // Pointer cursor on hover
    display: 'block',            // Make the button block-level element
    margin: '0 auto',            // Center the button horizontally
    textAlign: 'center',         // Ensure text is centered
  };
  return (
    <div className="App">
      <button style={buttonStyle} onClick={handleBookClick}>
      Book
    </button>
    </div>
  );
}

export default App;
