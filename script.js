
function odliczanie()
	{
		var dzisiaj = new Date();
		
		var dzien = dzisiaj.getDate();
		var miesiac = dzisiaj.getMonth()+1;
		var rok = dzisiaj.getFullYear();
		
		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		
		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
		
		var sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;
		
		document.getElementById("zegar").innerHTML = 
		 godzina+":"+minuta+":"+sekunda;
		 
		 setTimeout("odliczanie()",1000);
	}
        
        
 function KimJestem(){
     document.getElementById("title5").innerHTML = "Kim jestem? <br /> <br /> Jestem Studentem uczelni Uniwersytetu pedagogicznego w Krakowie. <br /> Studiuję na kierunku Edukacja Techniczno-Informatyczna. <br />   Od zawsze intereoswałem się Informatyką i chciałem być programistą.";
 }
 
  function CoOferuje(){
     document.getElementById("title5").innerHTML = "Co Oferuje? <br /> <br /> Oferuje państwu usługi programistyczne związane z: <br /> -tworzeniem stron internetowych <br /> -tworzeniem aplikacji sieciowych napisanych w języku java <br /> -tworzeniem programów na urządzenia mobilne"
 }
 
   function CV(){
     document.getElementById("title5").innerHTML = "Curiculum Vitae <br /> <br /> Moje życiowe doświadzczenie związane z programowaniem: <br /> -Program inżynierski do obliczania ugięć belek statycznie wyznaczalnych <br /> -strona na której państwo się znajdujecie ;)"
 }
 
 function Kontakt(){
     document.getElementById("title5").innerHTML = 'Kontakt <br /> <br /> email: lukkasz.szynnal@gmail.com <br /> nr tel: 123-456-789 <br /><br /> Biuro: <a href="https://www.google.pl/maps/place/Kazimierza+Wielkiego+97,+33-332+Krak%C3%B3w/@50.0746832,19.9127241,17z/data=!3m1!4b1!4m2!3m1!1s0x47165bb1dc045397:0xa56298bffcf902dd" class="sociallink" >Kazimierza Wielkiego 97 Kraków</a>'
 }
