exports.register = async (req, res) => {
    try {
      // Registration logic here
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  exports.login = async (req, res) => {
    try {
      // Login logic here
      res.json({ message: 'User logged in successfully' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };