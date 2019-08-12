# neststory

Alpha version of Neststory

[![Build Status](https://travis-ci.org/crsandeep/simple-react-full-stack.svg?branch=master)](https://travis-ci.org/crsandeep/simple-react-full-stack)

Nest Story is an informational website for all techies.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/akshitarora921/neststory

# Go inside the directory
cd neststory
```

**Starting node-server from /server:**

1. Import donorapp.sql into MySQL server. If needed, find the following lines in your server/app.js and modify it as per your configuration.

   ```js
   app.use(function(req, res, next) {
     res.locals.connection = mysql.createConnection({
       host: "your_host",
       user: "your_root",
       database: "your_database_name",
       password: "your_password_here"
     });
     res.locals.connection.connect();
     next();
   });
   ```

2. Do `npm install` - This will install all the dependencies listed in the package.json.
3. `npm start` will start the server on localhost:3001

**Starting the react application /frontend:**

1. From the root directory, go to frontend folder. Do `npm install` in the frontend folder.
2. Do `npm start` and the client will be started at localhost:3000. The proxy is already configured to make all the requests to localhost:3001

## Documentation

### Important Components

#### Dashboard

It is the Admin panel where admin can add news, launchpad and mentors details and can edit mentors.

#### Landing Page

It is the first page which users can see when they open the website. It is build up with small components.

#### Launchpad

This page contains all the launchpad details with all the mentors.

#### User Login/Registration

let the user do login and registration and on registration, the password is encrypted using SHA45 and then stored to the database.

## Folder Structure

```
neststory
├─ frontend
│  ├─ public
│  │  ├─ image
│  │  │  └─ favicon.png
│  │  └─ index.html
│  ├─ README.md
│  └─ src
│     ├─ Assets
│     │  ├─ footer.png
│     │  ├─ modal-back1.png
│     │  ├─ modal-back111.png
│     │  ├─ modal-back2.png
│     │  └─ modal-back21.png
│     ├─ Component
│     │  ├─ Ad
│     │  │  └─ Ad.js
│     │  ├─ Banner
│     │  │  ├─ banner.css
│     │  │  └─ Banner.js
│     │  ├─ Entrepreneurship
│     │  │  ├─ entrepreneurship.css
│     │  │  └─ Entrepreneurship.js
│     │  ├─ Footer
│     │  │  ├─ footer.css
│     │  │  └─ Footer.js
│     │  ├─ Header
│     │  │  ├─ header.css
│     │  │  ├─ Header.js
│     │  │  └─ NewsSlider.js
│     │  ├─ Innovations
│     │  │  ├─ innovation.css
│     │  │  └─ Innovations.js
│     │  ├─ LatestStories
│     │  │  ├─ lateststories.css
│     │  │  └─ LatestStories.js
│     │  ├─ Sidebar
│     │  │  ├─ sidebar.css
│     │  │  └─ Sidebar.js
│     │  ├─ Videos
│     │  │  ├─ videos.css
│     │  │  └─ Videos.js
│     │  └─ WithAuth
│     │     └─ WithAuth.js
│     ├─ container
│     │  ├─ Dashboard
│     │  │  ├─ dashboardheader.css
│     │  │  ├─ DashboardHeader.js
│     │  │  ├─ DashboardMain.js
│     │  │  ├─ launchpadDash.js
│     │  │  ├─ MentorDash.js
│     │  │  └─ MentorEditDash.js
│     │  ├─ Entrepreneurship
│     │  │  ├─ entrepreneurship.css
│     │  │  └─ Entrepreneurship.js
│     │  ├─ Global
│     │  │  ├─ global.css
│     │  │  └─ Global.js
│     │  ├─ IndividualStory
│     │  │  ├─ individualstory.css
│     │  │  └─ IndividualStory.js
│     │  ├─ Innovation
│     │  │  ├─ innovation.css
│     │  │  └─ Innovation.js
│     │  ├─ landingPage
│     │  │  └─ LandingPage.js
│     │  ├─ Launchpad
│     │  │  ├─ launchpad.css
│     │  │  └─ Launchpad.js
│     │  ├─ stories
│     │  │  ├─ stories.css
│     │  │  └─ Stories.js
│     │  └─ Videos
│     │     ├─ videos.css
│     │     └─ Videos.js
│     ├─ index.css
│     ├─ index.js
│     ├─ routes
│     │  └─ routes.js
│     └─ serviceWorker.js
├─ README.md
└─ server
   ├─ .gitignore
   ├─ app.js
   ├─ bin
   │  ├─ db.js
   │  └─ www
   ├─ keys
   │  ├─ private.key
   │  └─ public.key
   ├─ middleware
   │  └─ authtoken.js
   ├─ model
   │  ├─ banner.js
   │  ├─ checkauth.js
   │  ├─ entrepreneurship.js
   │  ├─ globalNews.js
   │  ├─ innovation.js
   │  ├─ latestStories.js
   │  ├─ launchpad.js
   │  ├─ mentor.js
   │  ├─ news.js
   │  ├─ newsheader.js
   │  ├─ subscription.js
   │  ├─ userlogin.js
   │  ├─ usersignup.js
   │  └─ videos.js
   ├─ node_modules
   ├─ public
   │  ├─ image
   │  │  └─ news
   │  ├─ javascripts
   │  └─ stylesheets
   │     └─ style.css
   ├─ routes
   │  └─ routes.js
   ├─ sql
   │  ├─ neststory_launchpad.sql
   │  ├─ neststory_mentors.sql
   │  ├─ neststory_news.sql
   │  ├─ neststory_subscription.sql
   │  └─ neststory_users.sql
   └─ views
      ├─ error.jade
      ├─ index.jade
      └─ layout.jade

```

### Table Structures

#### News

| Field           | Type         |
| --------------- | ------------ |
| id              | int(11)      |
| heading         | varchar(255) |
| content         | mediumtext   |
| author          | varchar(45)  |
| image           | varchar(255) |
| video           | varchar(255) |
| video_thumbnail | varchar(255) |
| date            | date         |
| zone            | varchar(45)  |
| tags            | varchar(255) |
| category        | varchar(45)  |
| trending        | varchar(45)  |
| sub_category    | varchar(45)  |
| views_count     | int(11)      |

### User

| Field        | Type         |
| ------------ | ------------ |
| id           | int(11)      |
| first_name   | varchar(45)  |
| last_name    | varchar(45)  |
| email        | varchar(45)  |
| password     | varchar(255) |
| created_date | date         |
| isadmin      | tinyint(4)   |
| phone        | varchar(45)  |

### Subscription

| Field | Type         |
| ----- | ------------ |
| id    | int(11)      |
| email | varchar(100) |

### Launchpad

| Field           | Type         |
| --------------- | ------------ |
| launchpad_id    | int(11)      |
| heading         | varchar(55)  |
| content         | mediumtext   |
| video           | varchar(255) |
| video_thumbnail | varchar(255) |

### Mentor

| Field        | Type         |
| ------------ | ------------ |
| mentor_id    | int(11)      |
| name         | varchar(25)  |
| designation  | varchar(100) |
| image        | varchar(255) |
| launchpad_id | int(11)      |
