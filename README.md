# Cobinhood

<img src=“app/assets/images/money.png?raw=true” width="350"/>
Cobinhood is a stock trading website that clones from [robinhood](https://robinhood.com/us/en/) User can perform stock trading(buy and sell), search stock, and track their profolio value.

## [Live](https://cobinhood-rstation.herokuapp.com/#/) 

## Technologies used    

Ruby on Rails is backend API in this project, React and Redux is the frontend to 
handle view and state. The library FontAwesome and Recharts library takes care of icon
and graph. The external real-time stock market data is from IEX Cloud and FMP API.

* Ruby: `2.5.1p57`
* Rails: `5.2.4.4`
* React: `16.8.6`
* Redux: `4.0.1`
* Database: `postgresql`
* Webpack
* Jbuilder

* test suit:
1. run `npm install`
2. run `bundle install`
3. run `bundle exec rails db:create`
4. run `bundle exec rails db:migrated`
5. run `bundle exec rails db:seed`
4. Obtain your  API key from [IEX Cloud](https://iexcloud.io/) and [FMP](https://financialmodelingprep.com/) to retrieve real-time stock and it relatived data.
5. run `EDITOR="nano" rails credentials:edit` to open the credentials file 
to add the api keys in this format:<br/>
`cloudIEX:`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`api_key: {Your key here}`
6. run `npm start` to start webpack.

## Features 

* Profile where users can search stock and go to stock page from search dropdown.
<img src=“app/assets/images/search.gif?raw=true” width=“700”>

* Stock page where users can buy and sell, watch and unwatch stock.
<img src=“app/assets/images/buyandsell.gif?raw=true” width=“700”>

* Profile where users can view profolio value change via the graph, go and read the new via the new feature.
<img src=“app/assets/images/graphandnew.gif?raw=true” width=“700”>