import { LightningElement, track } from 'lwc';

export default class ConContacts extends LightningElement {
    @track Contacts =[
        {
            Id : '101',
            Name : 'koti',
            Age : 25,
            CurrentLPA  : 350000,
            Hike  : ''
        },
        {
            Id  : '102',
            Name  : 'vinay',
            Age  : 55,
            CurrentLPA  : 250000,
            Hike  : ''
        },
        {
            Id  : '103',
            Name  : 'Pramod',
            Age  : 55,
            CurrentLPA  : 150000,
            Hike  : ''
        },
        {
            Id  : '101',
            Name  : 'Archana',
            Age  : 25,
            CurrentLPA  : 450000,
            Hike  : ''
        },
    ];

    ShowHike(event){
        
    }
}