# Virtual Reality

Check out the live demo of Virtual Reality: [Live Demo](https://cheerful-selkie-39e8de.netlify.app/)

Welcome to my  Photo Upload and Management Web App! This is a responsive web application where users can upload, view, replace, and download photos. Additionally, users can manage their profiles, view subscription types, and check their photo download history.

## Features

- **User Authentication**: Users must log in to access the full range of services.
- **Photo Upload**: Users can upload photos and view them on the homepage.
- **Photo Replacement**: Users can replace uploaded photos if needed.
- **Photo Download**: Users can download photos, and download details will be saved in their profile download folder.
- **User Dashboard**: 
  - **Profile**: View and manage user profiles.
  - **Subscription Type**: Static subscription type display.
  - **Download Photo History**: View history of downloaded photos.

## Tech Stack

### Frontend

- **React**: Version 18.2.0
- **React Query**: Version 5.27.5
- **Cloudinary**: Version 2.0.3
- **Firebase**: Version 10.8.1
- **React Router DOM**: Version 6.22.3
- **Tailwind CSS**: Integrated using `tailwind-merge`

### Backend

- **Express**: Version 4.18.3
- **MongoDB**: Version 6.4.0
- **JSON Web Token (JWT)**: Version 9.0.2

## Additional Libraries and Tools

- **React Hook Form**: Version 7.51.0
- **Framer Motion**: Version 11.0.8
- **React Icons**: Version 5.0.1
- **React Toastify**: Version 10.0.4
- **LocalForage**: Version 1.10.0
- **Match Sorter**: Version 6.3.4
- **Sort By**: Version 1.2.0
- **Hamburger React**: Version 2.5.0

## Backend Dependencies

- **CORS**: Version 2.8.5
- **Dotenv**: Version 16.4.5

## Deployment

The application is hosted on AWS, but the current demo link is a netlify link. Photo storage is managed using Cloudinary.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`
3. Set up environment variables of firebase for frontend as specified in `.env.local`.
4. Set up environment variables for backend as specified in `.env`.
5. Run the backend server using `npm run dev`.
6. Run the frontend development server using `npm run dev`.

## Contributing

I welcome contributions to enhance and improve Edumart! Please feel free to fork this repository, make changes, and submit pull requests.

## Acknowledgements

I would like to express my gratitude to the open-source community for their invaluable contributions and support that made this project possible.

---

_This README serves as a guide and overview of Virtual Reality. For detailed instructions and additional information, please refer to the project documentation or contact the contributor._
