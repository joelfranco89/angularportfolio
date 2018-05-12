import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfoliocards',
  templateUrl: './portfoliocards.component.html',
  styleUrls: ['./portfoliocards.component.scss']
})
export class PortfoliocardsComponent implements OnInit {

  projects = [
    //Project 1
    {
      title: "Templo",
      description: "Being that this project is using both front and back end technologies, it has been my greatest accomplishment thus far. This came from an idea i had to bring people together with similar personal issues and sharing their stories.",
      technologies: [
        {
          type: "html"
        },
        {
          type: "css"
        },
        {
          type: "javascript"
        },
        {
          type: "bootstrap"
        },
        {
          type: "jquery"
        },
        {
          type: "node js"
        },
        {
          type: "json"
        },
        {
          type: "ajax"
        },
        {
          type: "mongo db"
        },
        {
          type: "visual studio code"
        },
        {
          type: "express js"
        },
        {
          type: "moments js"
        },
        {
          type: "media query"
        },
        {
          type: "heroku"
        },
        {
          type: "m lab"
        },
        {
          type: "google analytics"
        },
      ],
      link: "http://www.templousa.com"
    },
    //Project 2
    {
      title: "Wod Timer Simple",
      description: "This was the first project i buit to learn html/css/javascript. I wanted to create a timer that was desgined for crossfit workouts.",
      technologies: [
        {
          type: "html"
        },
        {
          type: "css"
        },
        {
          type: "javascript"
        },
        {
          type: "jquery"
        },
        {
          type: "sublime text editor"
        },
        {
          type: "media query"
        },
        {
          type: "heroku"
        },
      ],
      link: "http://www.wodtimersimple.com"
    },
    //Project 3
    {
      title: "Templo Store",
      description: "This is a shopify store that i created to sell merchandise with inspirational quotes",
      technologies: [
        {
          type: "shopify"
        },
        {
          type: "google analytics"
        },
        {
          type: "seo tools"
        },
        {
          type: "dropshipping"
        },
        {
          type: "design tools"
        },
      ],
      link: "http://www.templostore.com"
    },
    //Project 4
    {
      title: "Franc Stuidios Inc",
      description: "When i started my coding journey, i had an idea to write tutorials on how to do things that i struggled with when learning. ",
      technologies: [
        {
          type: "word press"
        },
      ],
      link: "http://www.templostore.com"
    }
  ]



  constructor() { }

  ngOnInit() {
  }

}
