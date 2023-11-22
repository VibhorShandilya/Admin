export let HomeSchema = [
  {
    
    Section1: [
      {
        Heading: "Upload Home Page Slides",
        Parent: "row",
        Page:"Home",
        child: [
          {
            type: "file",
            name: "Slide1",
            className: "col-12 mt-3 form-control ",
          },
          
        ],
        
      },
    ],
    Section2: [
      {
        Heading: "About us",
        Parent: "row",
        child: [
          {
            type: "file",
            name: "MainImage",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "minImage1",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "file",
            name: "minImage2",
            className: "col-12 mt-3 form-control",
          },

          {
            type: "text",
            name: "MainHeading",
            className: "col-12 mt-3 form-control",
            placeholder: "Main Heading",
          },
          {
            type: "Area",
            name: "MainDescription",
            className: "col-12 mt-3 form-control",
            placeholder: "Main Description",
          },
          {
            type: "text",
            name: "SubHeading-1",
            className: "col-12 mt-3 form-control",
            placeholder: "Main Description",
          },
          {
            type: "Area",
            name: "SubHeading-1-Description ",
            className: "col-12 mt-3 form-control",
            placeholder: "Main Description",
          },
          {
            type: "text",
            name: "Sub-Heading-2",
            className: "col-12 mt-3 form-control",
            placeholder: "Main Description",
          },
          {
            type: "Area",
            name: "Sub-Heading-2-Description ",
            className: "col-12 mt-3 form-control",
            placeholder: "Main Description",
          },
          {
            type: "text",
            name: "Read More Link",
            className: "col-12 mt-3 form-control",
          },
        ],

         
      },
    ],
    Section3: [
      {
        Heading: "Business Section",
        Parent: "row",
        child: [
          {
            type: "text",
            name: "MainHeading",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "SubHeading",
            className: "col-12 mt-3 form-control ",
          },

          //cardContent starts here
          {
            type: "file",
            name: "BusinessSlide1",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "CardName1",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "Area",
            name: "CardHeading1",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "Area",
            name: "BusinessSlideContent",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "KnowMore1",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "BusinessSlide2",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "text",
            name: "BusinessSlideContent2",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "CardName2",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "Area",
            name: "CardHeading2",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "KnowMore2",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "BusinessSlide3",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "text",
            name: "BusinessSlideContent3",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "CardName3",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "Area",
            name: "CardHeading3",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "KnowMore3",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "BusinessSlide4",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "text",
            name: "BusinessSlideContent4",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "CardName4",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "Area",
            name: "CardHeading4",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "KnowMore4",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "BusinessSlide5",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "text",
            name: "BusinessSlideContent5",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "CardName5",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "Area",
            name: "CardHeading5",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "KnowMore5",
            className: "col-12 mt-3 form-control ",
          },
        ],
        
      },
    ],

 Section5: [
      {
        Heading: "People and Planet",
        Parent: "row",
        child: [
          {
            type: "text",
            name: "PeopleMainHeading",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "PeopleSubHeading",
            className: "col-12 mt-3 form-control ",
          },

          //cardContent starts here
          {
            type: "file",
            name: "PeopleBusinessSlide1",
            className: "col-12 mt-3 form-control ",
          },
         
        ],
        
      },
    ],



    Section4: [
      {
        Heading: "Humble Section",
        Parent: "row",
        child: [
          {
            type: "Area",
            name: "HumbleSection",
            className: "col-12 mt-3 form-control ",
            placeholder: "HumbleSection",
          },
          {
            type: "Area",
            name: "HumbleSubSection",
            className: "col-12 mt-3 form-control",
            placeholder: "HumbleSubSection",
          },
          {
            type: "Area",
            name: "HumbleFinalSection",
            className: "col-12 mt-3 form-control",
            placeholder: "HumbleFinalSection",
          },
          {
            type: "file",
            name: "HumbleLogo",
            className: "col-12 mt-3 form-control",
          },
        ],
        btnContainer: "col-3 mt-4",
        btnClass: "btn",
        btnContent: "Submit",
        Btnstyle: { background: "blue", color: "white" },
      },
    ],
  },
];
