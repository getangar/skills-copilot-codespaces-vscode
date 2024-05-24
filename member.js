function skillsMember() {
  var member = document.getElementById("member").value;
  var memberError = document.getElementById("memberError");
  if (member == "") {
    memberError.innerHTML = "Please enter a valid member name";
    memberError.style.color = "red";
    return false;
  }
  memberError.innerHTML = "Valid member name";
  memberError.style.color = "green";
  return true;
}