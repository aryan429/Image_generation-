# Image_generation
## AI Image Generator:<br/>
  This project is a web application that generates unique images using OpenAI's DALL-E API. It is built using Vite React, MongoDB, Cloudinary, Express, and Node.js.
   It is deployed on Render.com and Netlify.

## Installation:<br/>
  To install this project, you will need to have Node.js and MongoDB installed on your system. You will also need API keys for OpenAI and Cloudinary.

## Clone the repository to your local machine:<br/>
    In the root directory, create a .env file and add your API keys for OpenAI and Cloudinary in the following format:<br/>
      ### makefile:<br/>
      REACT_APP_OPENAI_API_KEY=your_openai_api_key<br/>
      CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name<br/>
      CLOUDINARY_API_KEY=your_cloudinary_api_key<br/>
      CLOUDINARY_API_SECRET=your_cloudinary_api_secret<br/>
      MONGODB_URL=your_mongodb_url<br/>
  Install the dependencies by running npm install
  Start the development server with npm run dev
  ## Usage:<br/>
  Once the development server is running, you can access the application at http://localhost:3000. From there, you can enter a prompt for the image you want to generate and click the "Generate Image" button. The application will send the prompt to the OpenAI API and display the resulting image.

## Deployment:<br/>
  The backend of this application is deployed on Render.com, and the frontend is deployed on Netlify. To deploy the application yourself, you will need to set up accounts on these services and follow their deployment instructions.

## Contributing:<br/>
  If you find any issues with the application, feel free to open an issue or submit a pull request. We welcome contributions from the community!

## License:<br/>
  This project is licensed under the MIT license. See LICENSE for more details.
