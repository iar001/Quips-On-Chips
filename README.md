Quips on Chips


Project Description

	Explanation
	My Quips on Chips website is a chip/snack review site where users can look and post reviews of different snacks.  There will be three main categories for each snack: taste, cost, and “guilt” factor.  Users can look at information on the site, and if they log in, add reviews and ratings themselves.  

	Explanation of the challenges I expect to face
	I expect to have challenges designing the site in an appealing way, as well as making sure my foundation of back/front end are solid.  I also think it will be a challenge to figure out how to manipulate data in database to create averages of ratings. 

	Clearly define MVP and post MVP
	For MVP, I want to have a site with chips  listed, where users can add ratings and review, update, and delete their posts.  There will be a page of all chips, a page with specific information on each chip taken from the database, and a user page showing each user’s own personal snack reviews. 

	Post MVP 
	I’d like a search feature on the homepage that enables a user to find the specific snack they are looking for.  I’d also like to have a feature that allows users to arrange snacks according to different features (best tasting, cost, etc).  I would also like to give users the ability to add new snacks to the site.  Further, I’d like for user to be able to add a review directly on the individual snack page, as opposed to going to a different page, for better user experience. 

Feature List

Entity Relationship Diagram (ERD) with tables, schema, and relations










Wireframes of the User Interface

React Component Hierarchy

1. Header
2. Footer
3. Snack List Component with links to each individual snack when you click
4. Individual Snack Component with link to add review if you are logged in
5. Review Component where user will add their ratings for a snack, along with any 	   review they have.
6. Profile Page Component where user can see each of their own reviews.  This is where there will be link to update or delete their reviews.
7.  Update or delete page, linked via the profile page component
8.  Login/Register Page.  This will be at the top of home screen, as well as top of individual snack pages. 

API Endpoint Documentations
	a. Show Page:/
	b. Individual Chip Page: /:chipID
	c. Review Page: user/:userID/Chips/:chipID/AddReview
	d. Update Chip Review: :user/:userID/Chips/:chipId/Update


Dependencies
	As of now, I do not believe there will be any third party information necessary for Quips on Chips.

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

