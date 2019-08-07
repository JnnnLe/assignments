class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
    this.ticketsInLimit = [];
  }

  addAvailableTickets(ticketType, price) {
    return this.availableTickets.push(`${ticketType} - ${price}`);
  };

  searchTickets(lowerLimit, upperLimit) {
    for (let i = 0; i < this.availableTickets.length; i++) {
      let event = this.availableTickets[i];
      event = event.split(`-`);
      console.log(event)
      if (lowerLimit <= parseInt(event[1]) && parseInt(event[1]) <= upperLimit) {
        this.ticketsInLimit.push(event[0]);
      }
    }

    return this.ticketsInLimit.length === 0 ? `No available tickets` : this.ticketsInLimit; 
  }
};

const event_obj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
const event_obj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const event_obj3 = new Event("Jenny Lewis", "On the line tour 2019");
const event_array = new Array();

// pushing single object to an array
event_array.push(event_obj1);
// pushing multiple objects to an array at once
event_array.push(event_obj1, event_obj2, event_obj3);
// in order to check whether the elements are pushed, use console.log
console.log(event_array);

$(document).ready(() => {
  let html = "";
  $.each(event_array, (index, item) => {
    html+= `<li>${item.name} - ${item.description}</li>`;
  });
  // insert final html into #event...
  $("#event").html(html);
});

event_obj2.addAvailableTickets("General Admission", 25)
event_obj2.addAvailableTickets("Floor Seating", 80)

event_obj2.addAvailableTickets("Orchestra", 300)
event_obj2.addAvailableTickets("Mezzanine", 200)
event_obj2.addAvailableTickets("Balcony", 100)
console.log(event_obj2.availableTickets);

console.log(event_obj2.searchTickets(100, 300))
