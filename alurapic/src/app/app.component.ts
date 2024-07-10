import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: 'https://musicart.xboxlive.com/7/cf715100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      description: 'Jonh Rambo'
    },
    {
      url:'https://scontent.ffor41-1.fna.fbcdn.net/v/t39.30808-6/296117101_596229748533264_741822184633682206_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG6WQjAaoGwcp6TPdltzgr0t2n7FTaQQci3afsVNpBByOBUrXm3DC7_hBEe5jpoyQZ2gF9uZED5z_G7C9-SprdJ&_nc_ohc=0LmmLhIy13EQ7kNvgEyW1LD&_nc_ht=scontent.ffor41-1.fna&oh=00_AYA0hItmwGHwvJ50Ib9SOoO2KMLlhWYGDO6k35d7GBRUhQ&oe=66939B38',
      description: 'Rambo Vs Matrix'
    },
    {
      url: 'https://m.media-amazon.com/images/I/71A9FHT05GL._AC_UF894,1000_QL80_.gif',
      description: 'Jonh Matrix'
    }
  ];
}
