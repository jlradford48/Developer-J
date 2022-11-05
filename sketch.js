function setup()
{
	createCanvas(800,600);
    
}

function draw()
{
   background(220)
    textSize(32);
  fill(0,0,255);
  stroke(3);
  text("Jameel's Kandinsky", 240,50); 
    
    //Outside frame of painting
    noStroke();
    fill(245,245,245);
    rect(130,105,505,405);
    
    //Painting surface
    noStroke();
    fill(250,235,215);
    rect(135,110,495,395);
    fill(255);
    stroke(1);
    
    //Burly wood swath
     noStroke()
    fill(222,184,135,210);
    beginShape();
        vertex(631,110);
        vertex(600,110);
        vertex(137,390);
        vertex(137,505);
        vertex(165,505);
    endShape(CLOSE);
    fill(255);
    stroke(1);  
    
    //Yellow circle ontop of the vertex
    noStroke();
    fill(255,215,0,50);
    ellipse(3255,315,95,95);
    fill(255);
    stroke(1);
        
    //Yellow circle under the green circle
    noStroke();
    fill(255,215,0,50);
    ellipse(425,345,75,75);
    fill(255);
    stroke(1);
    
    //Olive drab colored ball
    noStroke();
    fill(107,142,35,150);
    ellipse(453,280,101,101);
    fill(255);
    stroke(1) 
    
    //2 Yellow circle over the green circle
    noStroke();
    fill(255,215,0,50);
    ellipse(425,345,75,75);
    fill(255);
    stroke(1);
    
    //Little Red circle on the Cadet blue swath
    strokeWeight(2);
    fill(255,0,0,150);
    ellipse(375,170,10,10);
    fill(255);
    stroke(1);
    
    //Cadet blue swath
    noStroke()
    fill(95,158,160,190);
    quad(225,110,310,110,630,350,630,490);
    stroke(1)        
    
    //Thick black Circle
    fill(255,0,0,0);
    strokeWeight(15);
    ellipse(385, 300, 350,330);
    strokeWeight(1);
    
    //Bigger Olive drab colored ball
    noStroke();
    fill(128,128,0,235);
    ellipse(375,315,125,125);
    fill(255);
    stroke(1);
    
    //Purple circle over the vertex
    noStroke();
    fill(128,0,128,185);
    ellipse(473,215,45,45);
    fill(255);
    stroke(1);
    
    //Little Larger Red circle on the canvas
    strokeWeight(5)
    fill(255,0,0,245);
    ellipse(260,260,23,23);
    fill(255);
    stroke(1);
    
    //Pink circle under the blue swath
    strokeWeight(1);
    fill(255,0,255,50);
    ellipse(325,220,85,85);
    fill(255);
    
    //Little Red circle on the blue swath
    strokeWeight(1);
    fill(255,0,0,185);
    ellipse(375,170,10,10);
    fill(255);
    stroke(1);
    
    //Little Blue circle on the canvas
    strokeWeight(2);
    fill(0,0,128,185);
    ellipse(240,305,10,10);
    fill(255);
    stroke(1);
}