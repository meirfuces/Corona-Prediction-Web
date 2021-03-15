# Corona-Prediction-Web

Introduction: 
1.1 Purpose: The main purpose of this document is to provide an explanation about the sofware requirement specification (srs) of Corona Forecasting- WebSite 	 
1.2 Scope:  
software product name: Corona Forecasting- WebSite
The software product will allow users to predict details about future corona sickness around the world in specific time/place: 
• Get current updated data
• Predict statistics in a specific place by choose 
• Predict statistics in a specific time by choose. 
• Filter the relevant data. 
 	 
 
The Overall Description   
 
Many people around the world struggling with covid-19 spreading pandemic. One of the biggest problems with this pandemic is its spreading rate, which is very high. In this project we will make data about future forecast accessible to users all around the world with web-site that will predict the state of the pandemic around the world and will help people make decisions or know how to act about the pandemic growth.   
 
2.1  Product Perspective  
The Corona Forecasting- WebSite will be written in html, react, css, Js, flask and python language. The system consists of several main components: display, algorithm, data. Client server. 
2.1.1 System Interfaces 
The system should interface with Google’s Map and React Libraries

2.1.2 Hardware Interfaces 
The system has no hardware interface requirements because our product is a Website. Maybe, a virtual machine will be needed to run the algorithm and update the site
 
2.1.3 User stories 
1. A person who wants to know the corona disease in the world in the past. Option to select how much time back to display in the graph.
2. A person who wants to know the morbidity of the corona in the country of choice. Option to select how much time back to display in the graph
3. A person who wants to know the prediction of corona patients in the world. Option of some time in the future.
4. A person who wants to know the prediction of Corona patients by country, a choice of how long in the future.
2.1.4 Use cases 
•  A user who wants to know the current corona data in the world
1.	Graph and text display on home page

•	A user who wants to know the current corona data in his country
1.	Select his country
2.	Graph and text display on page

•	A user who wants to know the prediction of Corona patients in the future in his country
1.	 Select his country
2.	The user selects the future time to display in the graph
3.	Graph and text display on page.

2.1.5 Inner actions 
There will be a server that gets updated data from scraping
There will be a scraper that will get new data every 24 hours.

We will send this data to a server (local) that will run certain algorithm which is predicting the future statistics about corona sickness.
A user that wants to know about prediction in certain place will have few options:
First the website will show global statistics about the whole world's population.
If I want to show specific place there will be a map/list of places which I can choose from and "bar" that determines the time I want the prediction result about.
There will be also an option to compare places in the world 

our data from:
https://ourworldindata.org/coronavirus-source-data
