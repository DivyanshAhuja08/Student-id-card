document.querySelector("#Submit").addEventListener("click", updateCard);

        function updateCard() {
          
            document.querySelector("#SchoolNameVal").innerText= document.querySelector("#School").value;
            document.querySelector("#StudentNameVal").innerText=document.querySelector("#name").value;
            document.querySelector("#StudentClassVal").innerText=document.querySelector("#class").value;
            document.querySelector("#StudentDOBVal").innerText=document.querySelector("#DOB").value;
            document.querySelector("#StudentRollNOVal").innerText=document.querySelector("#roll-number").value;
            document.querySelector("#StudentCNVal").innerText=document.querySelector("#contact").value;
            document.querySelector(".forminput").classList.add("hidden");
            document.querySelector(".formoutput").classList.remove("hidden");
           
        }

        
document.querySelector(".print").addEventListener("click",function(){
    window.print();
})
document.querySelector(".another").addEventListener("click",function(){
    document.querySelector(".forminput").classList.remove("hidden");
    document.querySelector(".formoutput").classList.add("hidden");
    document.querySelector("#School").value="";
            document.querySelector("#name").value="";
        document.querySelector("#DOB").value="";
        document.querySelector("#class").value="";
            document.querySelector("#roll-number").value="";
            document.querySelector("#contact").value="";
})