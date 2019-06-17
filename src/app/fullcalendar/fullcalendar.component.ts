import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';


@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.css']
})
export class FullcalendarComponent implements OnInit {
  
/*
  calendarPlugins = [dayGridPlugin, interactionPlugin];


  calendarEvents= [
    { title: 'event 1', date: '2019-06-21' }
  ];

  constructor() { }

  date: any;
  eventname: String;
  

  handleDateClick(arg) { // handler method
    alert(arg.dateStr);
    //console.log('day click');
    /* this.date = arg.dateStr;
    document.getElementById("date").innerHTML=this.date; *//*
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
  */
 @Input()
 set configurations(config: any) {
    if(config) {
       this.defaultConfigurations = config; 
    }
 }
@Input() eventData: any;

defaultConfigurations: any;
constructor() {

  this.eventData = [
    {
       title: 'event1',
       start: moment()
    },
    {
       title: 'event2',
       start: moment(),
       end: moment().add(2, 'days')
    },
];

  this.defaultConfigurations = {
    editable: true,
    eventLimit: true,
    titleFormat: 'MMM D YYYY',
    header: {
       left: 'prev,next today',
       center: 'title',
       right: 'month,agendaWeek,agendaDay'
    },
    buttonText: {
       today: 'Today',
       month: 'Month',
       week: 'Week',
       day: 'Day'
    },
    views: {
       agenda: {
          eventLimit: 2
       }
    },
    allDaySlot: false,
    slotDuration: moment.duration('00:15:00'),
    slotLabelInterval: moment.duration('01:00:00'),
    firstDay: 1,
    selectable: true,
    selectHelper: true,
    events: this.eventData,

    dayClick: (date, jsEvent, activeView) => {
      this.dayClick(date, jsEvent, activeView);
      },
    eventDragStart: (timeSheetEntry, jsEvent, ui, activeView) => {
      this.eventDragStart(timeSheetEntry, jsEvent, ui, activeView);
      },
    eventDragStop: (timeSheetEntry, jsEvent, ui, activeView) => {
      this.eventDragStop(timeSheetEntry, jsEvent, ui, activeView);
      },
 };
}
dayClick(date, jsEvent, activeView) {
  console.log('day click');
}
eventDragStart(timeSheetEntry, jsEvent, ui, activeView) {
  console.log('event drag start');
}
eventDragStop(timeSheetEntry, jsEvent, ui, activeView) {
  console.log('event drag end');
}


    ngOnInit() {
      $('#full-calendar').fullCalendar(
        this.defaultConfigurations
     );
    }
}
