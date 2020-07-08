// js for increment or decrement

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  document.getElementById('number').value=value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 1 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value=value;
}

//  js for choose the grocery
var z;
var quantity=document.getElementsByClassName('chooseQuantity');
for (var i=0; i<quantity.length;i++)
{
  var x=quantity[i];
  x.addEventListener('click',aata_packet);
}
function aata_packet(event)
{
    alert('Item is Selected please select the quantinty');
    z=this.value;
    //console.log(typeof(z));
    if(z=="399")
    {
      var elements = document.getElementById("two");
      elements.classList.remove("setback");
      var element = document.getElementById("one");
      element.classList.add("setback");
    }
    else if(z=="0")
    {
      alert("Select the Quantity !");
    }
    else {
      var elements = document.getElementById("one");
      elements.classList.remove("setback");
      var element = document.getElementById("two");
      element.classList.add("setback");
    }
}

var purchase=document.getElementsByClassName('myButton')[0];
purchase.addEventListener('click',amountDeducted);

function amountDeducted()
{
  var y=document.getElementById('number').value ;
  if(isNaN(y*z))
  alert('First Select the Item !');
  else if((y*z)==0)
  alert('Select the Quantity !');
  else {
    alert("Thanks For purchasing");
    var final=` <p style="margin-bottom: 0px;padding-top: 0px;padding-left: 10px;color:#42b883;margin-top: 5px;"> = Rs ${y*z}</p> `;
    document.getElementById('result').innerHTML=final;

      var element = document.getElementById("one");
      element.classList.remove("setback");
      var elements = document.getElementById("two");
      element.classList.remove("setback");
      y="ajj";
      z="snn";
  }
}
