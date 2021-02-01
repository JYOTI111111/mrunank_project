class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.title2 = createElement('h2');
      this.input2 = createInput("Password");
      this.text1 = createElement('h1');
      this.text2 = createElement('h2');
      this.text3 = createElement('h2');
      this.text4 = createElement('h2');
      this.text5 = createElement('h2');
      this.text6 = createElement('h2');
      
      //this.reset = createButton('Reset');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.title2.hide();
        this.input2.hide();
        this.greeting.hide();
        this.text2.hide();
          this.text3.hide();
          this.text1.hide();
          this.text4.hide();
          this.text5.hide();
    }
  
    display(){
      this.title.html("Username: ");
      this.title.position(displayWidth/2 - 50, displayHeight/2 - 150);

      this.title2.html("Password: ");
      this.title2.position(displayWidth/2 - 50, displayHeight/2 - 80);

      this.input2.position(displayWidth/2 - 40 , displayHeight/2 - 30);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 100);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      //this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.title2.hide();
        this.input2.hide();
        this.greeting.hide();
        name3 = this.input.value();

        this.greeting.html("Hello ")
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        
        this.text1.html("Below is a list of pickers at your service");
        this.text1.position(displayWidth/2-250, displayHeight/2-250);

        this.text2.html("Seller1");
        this.text2.position(displayWidth/2-250, displayHeight/2-150);

        this.text3.html("Seller2");
        this.text3.position(displayWidth/2-250, displayHeight/2-100);

        this.text4.html("Seller3");
        this.text4.position(displayWidth/2-250, displayHeight/2-50);

        this.text5.html("Seller4");
        this.text5.position(displayWidth/2-250, displayHeight/2-0);

        this.button1 = createButton('Call for pickup');
        this.button1.position(500,500);  

        this.button1.mousePressed(()=>{ 
        
         // this.text3.hide();
          background("black");
      
          textSize(30)
          text('REQUEST PICKUP', 125, 470)
      
          
          textSize(20)
          text('Right Click to return to HomePage', 925, 30)
         
          
          pick.display();
          this.text2.hide();
          this.text3.hide();
          this.text1.hide();
          this.text4.hide();
          this.text5.hide();
       });
          
    
      });
  
    
  }
  }
  