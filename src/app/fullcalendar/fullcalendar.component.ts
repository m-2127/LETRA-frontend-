import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.css']
})
export class FullcalendarComponent implements OnInit {

  constructor() { }

  calendarPlugins = [dayGridPlugin, interactionPlugin];

  calendarEvents= [
    { title: 'event 1', date: '2019-06-21' }
  ];

  date: any;
  eventname: String;

  handleDateClick(arg) { // handler method
    alert(arg.dateStr);
    //console.log('day click');
    /* this.date = arg.dateStr;
    document.getElementById("date").innerHTML=this.date; */
    this.date = arg.dateStr;
    this.eventname = prompt("The name of the event:","Holiday");
    if (this.eventname!="null"){
    this.addEvent(this.eventname,this.date);
    }
    else{
      return;
    }
  }  

   addEvent(eventname, date) {
    this.calendarEvents = this.calendarEvents.concat(// creates a new array!
      { title: String(eventname), date: date }
  );
  
    }

    modifyTitle(eventIndex, newTitle) {
      let calendarEvents = this.calendarEvents.slice(); // a clone
      let singleEvent = Object.assign({}, calendarEvents[eventIndex]); // a clone
      singleEvent.title = newTitle;
      calendarEvents[eventIndex] = singleEvent;
      this.calendarEvents = calendarEvents; // reassign the array
    }
  

  ngOnInit() {
  }

}
