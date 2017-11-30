import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Titel",
    "profilePic": "assets/img/speakers/bear.jpg",
		"icon": "star",
    "about": "00:00 - 00:00",
  };


  constructor() {
    let items = [
      {
				"name": "Freiarbeit",
		    "profilePic": "assets/img/speakers/bear.jpg",
				"icon": "filing",
		    "about": "08:00 - 08:45",
      },
      {
				"name": "Freiarbeit",
		    "profilePic": "assets/img/speakers/bear.jpg",
				"icon": "filing",
		    "about": "08:45 - 09:15",
      },
      {
				"name": "Pause",
		    "profilePic": "assets/img/speakers/bear.jpg",
				"icon": "sunny",
		    "about": "09:15 - 09:30",
      },
      {
				"name": "Sachunterricht",
		    "profilePic": "assets/img/speakers/bear.jpg",
				"icon": "book",
		    "about": "00:00 - 00:00",
      },
      {
				"name": "Sachunterricht",
		    "profilePic": "assets/img/speakers/bear.jpg",
				"icon": "book",
		    "about": "00:00 - 00:00",
      },
      {
				"name": "Pause",
		    "profilePic": "assets/img/speakers/bear.jpg",
				"icon": "sunny",
		    "about": "00:00 - 00:00",
      },
      {
				"name": "Schwimmen",
		    "profilePic": "assets/img/speakers/bear.jpg",
				"icon": "help-buoy",
		    "about": "00:00 - 00:00",
			},
			{
				"name": "Schwimmen",
				"profilePic": "assets/img/speakers/bear.jpg",
				"icon": "help-buoy",
				"about": "00:00 - 00:00",
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
