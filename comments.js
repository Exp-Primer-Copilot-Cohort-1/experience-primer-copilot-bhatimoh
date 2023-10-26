// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

// Use body-parser middleware
app.use(bodyParser.json());

// Create event handler for comment created
app.post('/events', async (req, res) => {
  const { type, data } = req.body;
  console.log('Received Event', type);

  // Check type of event
  if (type === 'CommentCreated') {
    // Get data from event
    const { id, content, postId } = data;

    // Create status for comment
    const status = content.includes('orange') ? 'rejected' : 'approved';

    // Send event to event bus
    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        id,
        postId,
        content,
        status,
      },
    });
  }

  // Send response
  res.send({});
});

// Set port
const port = 4003;

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});