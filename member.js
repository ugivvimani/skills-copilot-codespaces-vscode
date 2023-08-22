function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var about = document.getElementById("about");
    var contact = document.getElementById("contact");
    var memberContent = document.getElementById("memberContent");
    var skillsContent = document.getElementById("skillsContent");
    var aboutContent = document.getElementById("aboutContent");
    var contactContent = document.getElementById("contactContent");
    member.style.backgroundColor = "#2d2d2d";
    member.style.color = "#fff";
    skills.style.backgroundColor = "#fff";
    skills.style.color = "#2d2d2d";
    about.style.backgroundColor = "#fff";
    about.style.color = "#2d2d2d";
    contact.style.backgroundColor = "#fff";
    contact.style.color = "#2d2d2d";
    memberContent.style.display = "block";
    skillsContent.style.display = "none";
    aboutContent.style.display = "none";
    contactContent.style.display = "none";
}