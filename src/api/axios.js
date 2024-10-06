import axios from 'axios';
import Home from './components/Home';
try {
      const response = await axios.get(`http://152.67.176.72:8081/userauth?username=${username}&password=${password}`);

      if (response.data["auth"] == true) {
        // Redirect to dashboard on successful login
        navigate('Home');
      } else {
        // Show error message if credentials are incorrect
        setError('Invalid username or password');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while trying to log in');
    }
  };