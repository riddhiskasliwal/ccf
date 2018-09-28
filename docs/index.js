var students = [
    "Brian",
    "Meoun Seang Meng",
    "Roeum Phearun",
    "Sam Ol Buntheoun",
    "Pou Srey Mai",
    "Soun Bory",
    "Sem Baraing",
    "Saet Sotheara",
    "Khat Sonita",
    "Phun SeyHa",
    "Choun Kimly"];
students.sort();
let list = document.getElementById("projects");
students.forEach(function(student){
    let newListItem = document.createElement("li"); 
    let newLink = document.createElement("a");
    let hrefAttribute = document.createAttribute("href");
    hrefAttribute.value = student;
    newLink.setAttributeNode(hrefAttribute);
    let text = document.createTextNode(student);
    newLink.appendChild(text);
    newListItem.appendChild(newLink);
    list.appendChild(newListItem);
});