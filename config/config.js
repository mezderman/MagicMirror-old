/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
  address: 'localhost', // Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "", "0.0.0.0", "::" to listen on any interface
  // Default, when address config is left out, is "localhost"
  port: 8080,
  ipWhitelist: ['127.0.0.1', '::ffff:127.0.0.1', '::1'], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  language: 'en',
  timeFormat: 24,
  units: 'metric',

  modules: [
    {
      module: 'alert'
    },
    {
      module: 'updatenotification',
      position: 'top_bar'
    },
    {
      module: 'clock',
      position: 'top_left'
    },
    {
      module: 'calendar',
      header: 'US Holidays',
      position: 'top_left',
      config: {
        calendars: [
          {
            symbol: 'calendar-check-o ',
            url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
          }
        ]
      }
    },
    {
      module: 'calendar',
      header: 'Family',
      position: 'top_left',
      config: {
        calendars: [
          {
            symbol: 'calendar-check-o ',
            url: 'https://calendar.google.com/calendar/ical/juauovpq499lb59aa1atp1fsnk%40group.calendar.google.com/private-c835a694bad3673d93ef1dde7fa70ad8/basic.ics'
          }
        ]
      }
    },
    {
      module: 'compliments',
      position: 'lower_third'
    },
    {
      module: 'currentweather',
      position: 'top_right',
      config: {
        location: 'New York',
        locationID: '5128638', // ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
        appid: '8694b0df0db0163082ce5ea067dc1346'
      }
    },
    {
      module: 'weatherforecast',
      position: 'top_right',
      header: 'Weather Forecast',
      config: {
        location: 'New York',
        locationID: '5128581', // ID from http://www.openweathermap.org/help/city_list.txt
        appid: '8694b0df0db0163082ce5ea067dc1346'
      }
    },
    {
      module: 'MMM-LocalTransport',
      header: 'To New York City',
      position: 'top_left',
      config: {
        api_key: 'AIzaSyBtmP__A2_DegRmI3-yLOOEEJKAiMPUvRU',
        origin: 'Waterloo Station, London, United Kingdom',
        destination: 'Victoria Coach Station, London, United Kingdom',
        maximumEntries: 4,
        maxWalkTime: 15,
        displayWalkType: 'full',
        maxModuleWidth: 400
      }
    },
    {
      module: 'newsfeed',
      position: 'bottom_bar',
      config: {
        feeds: [
          {
            title: 'New York Times',
            url: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
          }
        ],
        showSourceTitle: true,
        showPublishDate: true
      }
    }
  ]
}

/** ************* DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {
  module.exports = config
}
