class Form{
    constructer(){}

    display(){
    var title=createElement('h2')
    title.html("Car Racing game")
    title.position(420,0)
     var input=createInput("name")
     var button=createButton("play")
     input.position(420,160)
     button.position(480,200)

     button.mousePressed(function(){
         input.hide()
         button.hide()
         var name=input.value()
var greeting=createElement("h3")
greeting.html("hello "+name)
greeting.position(450,160)

     })
    }
}