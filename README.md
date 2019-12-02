Quips on Chips





**Project Description**



​	Explanation

​	My Quips on Chips website is a chip/snack review site where users can look and post reviews of different snacks. There will be three main categories for each snack: taste, cost, and “guilt” factor. Users can look at information on the site, and if they log in, add reviews and ratings themselves.  



​	Explanation of the challenges I expect to face

​	I expect to have challenges designing the site in an appealing way, as well as making sure my foundation of back/front end are solid. I also think it will be a challenge to figure out how to manipulate data in database to create averages of ratings. 



​	Clearly define MVP and post MVP

​	For MVP, I want to have a site with chips listed, where users can add ratings, update ratings, and delete their ratings. There will be a page of all chips, a page with specific information on each chip taken from the database , and a user page showing each user’s own personal snack reviews. 



​	Post MVP 

​	I’d like a search feature on the homepage that enables a user to find the specific snack they are looking for. I’d also like to have a feature that allows users to arrange snacks according to different features (best tasting, cost, etc). I would also like to give users the ability to add new snacks to the site. Further, I’d like for user to be able to add a review directly on the individual snack page, as opposed to going to a different page, for better user experience. 



**Feature List**



​	1. Look at different chip products and see users reviews

​	2. Create profile and contribute to site by adding your own reviews

​	3. Update and delete previous reviews you made onto the site.



**Entity Relationship Diagram (ERD) with tables, schema, and relations** 





































**WireFrames Above**  



**React Component Hierarchy**

| **Components**     | **Description**                                              |
| ------------------ | ------------------------------------------------------------ |
| Header             | This component will render the header.                       |
| Footer             | This component will render the footer.                       |
| Chips Show Page    | Will display all the Chips on Main Page                      |
| RegisterForm       | This component will render a register form.                  |
| LoginForm          | This component will render a login form.                     |
| Chips Single Page  | Will show ratings, reviews, photos of the individual chip    |
| Profile Page       | This component will show the user’s reviews                  |
| Create Review Page | This component will enable user to add their ratings for a product as well as write a short review |



]



**API Endpoint Documentations**

​	a. Show Page:/

​	b. Individual Chip Page: /:chipID

​	c. Review Page: user/:userID/Chips/:chipID/AddReview

​	d. Update Chip Review: :user/:userID/Chips/:chipId/Update





**Dependencies**

​	1. React-Router-Dom

​	2. Axios





**Timeframes**

​	1. Set up Github Correctly - 1 Hour

​	2. Organize Rails and React Components - 1 Hour

​	3. Find info for Database of Chips - 1 Hour

​	3. Set up database, auth, routes, etc. - 3 Hours

​	4. Show Page - 2 Hours

​	5. Individual Chip Page - 1 Hour

​	6. Log in Page - 1 Hour

​	7. Review Page - 1 Hour

​	8. Styling 3 Hours


















WireFrames Above

React Component Hierarchy


]

API Endpoint Documentations
	a. Show Page:/
	b. Individual Chip Page: /:chipID
	c. Review Page: user/:userID/Chips/:chipID/AddReview
	d. Update Chip Review: :user/:userID/Chips/:chipId/Update


Dependencies
	1. React-Router-Dom
	2. Axios


Timeframes
	1. Set up Github Correctly - 1 Hour
	2. Organize Rails and React Components - 1 Hour
	3. Find info for  Database of Chips - 1 Hour
	3. Set up database, auth, routes, etc. - 3 Hours
	4. Show Page - 2 Hours
	5. Individual Chip Page - 1 Hour
	6. Log in Page - 1 Hour
	7. Review Page - 1 Hour
	8. Styling 3 Hours
