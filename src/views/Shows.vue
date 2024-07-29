<template>
  <div class="shows">
    <h1>Our upcoming events:</h1>
    <div class="upcoming-shows" >
      <div class="show" v-for="event in events" :key="event.id">
        <div class="date"><strong>{{ formatEventDate(event.start.dateTime) }} - <span class="time">{{ formatEventDateTime(event.start.dateTime) }}</span></strong></div>
        <div class="location"><strong>Location: </strong> <span v-html="formatLocation(event.location)"></span></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .upcoming-shows {
    width: 500px;
    max-width: 100%;
    font-size: 20px;
    gap: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    @media (max-width : 767px) {
      width: 100%;
    }
  }
  .show {
    width: 100%;
    background: #cad4e7;
    border-radius: 8px;
    padding: 16px;
    strong {
      color: #000;
    }
    .time {
      color: #003663;
    }
    @media (max-width : 767px) {
      width: 90%;
    }
  }
</style>
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        // Initialize an empty array to store the events
        events: []
      };
    },
    methods: {
      fetchEvents() {
        const calendarId = 't31si8596lsncako7hvtg5pqn8@group.calendar.google.com';
        const apiKey = 'AIzaSyB0PZ4lORwcNoUlBPgxIHdsxvQh9I7yj5U'; // Replace with your API Key
        const timeMin = new Date().toISOString();
        const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?maxResults=10&singleEvents=true&orderBy=startTime&timeMin=${timeMin}&key=${apiKey}`;

        axios.get(url)
        .then(response => {
          // Update the events state with the filtered events
          this.events = response.data.items;
        })
        .catch(error => {
          console.error("There was an error fetching the events: ", error);
        });
      },
      formatEventDate(date) {
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
      },
      formatEventDateTime(dateTime) {
        const options = { hour: 'numeric', minute: 'numeric', hour12: true };
        return new Date(dateTime).toLocaleTimeString('en-US', options);
      },
      formatLocation(location) {
        if (!location) return '';
        // Split the location string at the first comma
        const parts = location.split(/,(.+)/);
        // Encode the entire original location for use in a URL
        const encodedLocation = encodeURIComponent(location.trim());
        // Construct the Google Maps URL with the full location
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
        return `<a href="${mapsUrl}" target="_blank">${parts[0].trim()}</a>`;
      }
    },
    // Fetch events when the component is mounted
    mounted() {
      this.fetchEvents();
    }
  };
</script>