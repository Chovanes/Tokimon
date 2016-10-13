
function Calculate_Percentage() {
    a1num = +document.getElementById("a1num").value;
    a1den = +document.getElementById("a1den").value;
    var ans = a1num/a1den;
    ans=Math.round(ans* 100);
    document.getElementById("a1percent").innerHTML = ans;
  }
function Calculate_Percentage2() {
    a2num = +document.getElementById("a2num").value;
    a2den = +document.getElementById("a2den").value;
    var ans = a2num/a2den;
    ans=Math.round(ans* 100);
    document.getElementById("a2percent").innerHTML = ans;}

function Calculate_Percentage3() {
    a3num = +document.getElementById("a3num").value;
    a3den = +document.getElementById("a3den").value;
    var ans = a3num/a3den;
    ans=Math.round(ans* 100);
    document.getElementById("a3percent").innerHTML = ans;}

function Calculate_Percentage4() {
    a4num = +document.getElementById("a4num").value;
    a4den = +document.getElementById("a4den").value;
    var ans = a4num/a4den;
    ans=Math.round(ans* 100);
    document.getElementById("a4percent").innerHTML = ans;}

function Calculate_Mean() {
  a4num = +document.getElementById("a4num").value;
  a4den = +document.getElementById("a4den").value;
  var m4 = a4num/a4den;
  a3num = +document.getElementById("a3num").value;
  a3den = +document.getElementById("a3den").value;
  var m3 = a3num/a3den;
  a2num = +document.getElementById("a2num").value;
  a2den = +document.getElementById("a2den").value;
  var m2 = a2num/a2den;
  a1num = +document.getElementById("a1num").value;
  a1den = +document.getElementById("a1den").value;
  var m1 = a1num/a1den;
  var ans = (m1+m2+m3+m4)/4;
  ans=Math.round(ans* 100);
  var str = "If you are interested in seeking help from an academic advisor, click here"
  var advisinglink = str.link("https://www.sfu.ca/students/academicadvising/difficulty.html");
  document.getElementById("res").innerHTML = ans;

  document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: A+";

    if(ans < 95){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: A";
      document.getElementById("adv").innerHTML = "";}
    if(ans < 90){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: A-";
      document.getElementById("adv").innerHTML = "";}
    if(ans < 85){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: B+";
      document.getElementById("adv").innerHTML = "";}
    if(ans < 80){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: B";
      document.getElementById("adv").innerHTML = "";}
    if(ans < 75){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: B-";
      document.getElementById("adv").innerHTML = "";}
    if(ans < 70){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: C+";
      document.getElementById("adv").innerHTML = "";
    }
    if(ans < 65){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: C";
      document.getElementById("adv").innerHTML = advisinglink;
    }
    if(ans < 60){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: C-";
      document.getElementById("adv").innerHTML = advisinglink;
    }
    if(ans < 55){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: D";
      document.getElementById("adv").innerHTML = advisinglink;
    }
    if(ans < 50){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: F";
      document.getElementById("adv").innerHTML = advisinglink;
    }
}

function Calculate_Weighted() {
  a4num = +document.getElementById("a4num").value;
  a4den = +document.getElementById("a4den").value;
  a4weight = +document.getElementById("a4weight").value;
  var m4 = (a4num/a4den);
  a3num = +document.getElementById("a3num").value;
  a3den = +document.getElementById("a3den").value;
  a3weight = +document.getElementById("a3weight").value;
  var m3 = (a3num/a3den);
  a2num = +document.getElementById("a2num").value;
  a2den = +document.getElementById("a2den").value;
  a2weight = +document.getElementById("a2weight").value;
  var m2 = (a2num/a2den);
  a1num = +document.getElementById("a1num").value;
  a1den = +document.getElementById("a1den").value;
  a1weight = +document.getElementById("a1weight").value;
  var m1 = (a1num/a1den);
  var ans = (m1*a1weight+m2*a2weight+m3*a3weight+m4*a4weight)/((a1weight+a2weight+a3weight+a4weight));
  ans=Math.round(ans* 100);
  var str = "If you are interested in seeking help from an academic advisor, click here"
  var advisinglink = str.link("https://www.sfu.ca/students/academicadvising/difficulty.html");
  document.getElementById("res").innerHTML = ans;
  document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: A+";

    if(ans < 95){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: A";
      document.getElementById("adv").innerHTML = "";}
    if(ans < 90){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: A-";
      document.getElementById("adv").innerHTML = "";}
    if(ans < 85){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: B+";
      document.getElementById("adv").innerHTML = "";}
    if(ans < 80){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: B";
      document.getElementById("adv").innerHTML = "";}
    if(ans < 75){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: B-";
      document.getElementById("adv").innerHTML = "";}
    if(ans < 70){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: C+";
      document.getElementById("adv").innerHTML = "";
    }
    if(ans < 65){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: C";
      document.getElementById("adv").innerHTML = advisinglink;
    }
    if(ans < 60){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: C-";
      document.getElementById("adv").innerHTML = advisinglink;
    }
    if(ans < 55){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: D";
      document.getElementById("adv").innerHTML = advisinglink;
    }
    if(ans < 50){
      document.getElementById("ltrgrd").innerHTML = "Approximate letter grade: F";
      document.getElementById("adv").innerHTML = advisinglink;
    }
}
function Clear_Fields() {
    document.getElementById("a1num").value="";
    document.getElementById("a1den").value="";
    document.getElementById("a1weight").value="";
    document.getElementById("a2num").value="";
    document.getElementById("a2den").value="";
    document.getElementById("a2weight").value="";
    document.getElementById("a3num").value="";
    document.getElementById("a3den").value="";
    document.getElementById("a3weight").value="";
    document.getElementById("a4num").value="";
    document.getElementById("a4den").value="";
    document.getElementById("a4weight").value="";
    document.getElementById("a1percent").innerHTML="";
    document.getElementById("a2percent").innerHTML="";
    document.getElementById("a3percent").innerHTML="";
    document.getElementById("a4percent").innerHTML="";
    document.getElementById("a4percent").innerHTML="";
    document.getElementById("res").innerHTML = "";
}

function Letter_Grade_Weighted(){
  a4num = +document.getElementById("a4num").value;
  a4den = +document.getElementById("a4den").value;
  a4weight = +document.getElementById("a4weight").value;
  var m4 = (a4num/a4den);
  a3num = +document.getElementById("a3num").value;
  a3den = +document.getElementById("a3den").value;
  a3weight = +document.getElementById("a3weight").value;
  var m3 = (a3num/a3den);
  a2num = +document.getElementById("a2num").value;
  a2den = +document.getElementById("a2den").value;
  a2weight = +document.getElementById("a2weight").value;
  var m2 = (a2num/a2den);
  a1num = +document.getElementById("a1num").value;
  a1den = +document.getElementById("a1den").value;
  a1weight = +document.getElementById("a1weight").value;
  var m1 = (a1num/a1den);
  var ans = (m1*a1weight+m2*a2weight+m3*a3weight+m4*a4weight)/((a1weight+a2weight+a3weight+a4weight));
  var grade=Math.round(ans* 100) / 100;

}
