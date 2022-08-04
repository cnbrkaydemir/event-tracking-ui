export class Events{
    
    public eventId:number|undefined;
    public eventTitle:string|undefined;
    public eventDescription:string|undefined;
    public eventDate:Date|undefined;
    public eventExpired:Date|undefined;
    public created_by:Object|undefined;
    public participants:Object[]|undefined;
    public isExpired:boolean;
    
    
    constructor(eventId?:number, eventTitle?:string, eventDesc?:string, eventDate?:Date,eventExpire?:Date,
        created_by?:Object,users?:Object[]){
            this.eventId=eventId;
            this.eventTitle=eventTitle;
            this.eventDescription=eventDesc;
            this.eventDate=eventDate;
            this.eventExpired=eventExpire;
            this.created_by=created_by;
            this.participants=users;
            this.isExpired=false;
        }
    
    
    
    
    }