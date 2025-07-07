interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1:Student = {firstName: "Roland", lastName: "Regin", age: 20, location: "USA"};
const student2:Student = {firstName: "Roman", lastName: "Adam", age: 22, location: "France"};

let studentList:Array<Student> = [student1, student2];

// Create the table
const table = document.createElement("table");
const thead = document.createElement("thead");
const tr = document.createElement("tr")
const headers = Object.keys(studentList[0]);

// Append the headers
headers.forEach(key => {
    const th = document.createElement("th");
    th.textContent = key.toUpperCase();
    tr.appendChild(th);
})
thead.appendChild(tr);
table.appendChild(thead);

// Append the rows
const tbody = document.createElement("tbody");
studentList.forEach(item => {
    const row = document.createElement("tr");
    headers.forEach(key=> {
        const td = document.createElement("td");
        td.textContent = item[key as keyof Student] as string;
        row.appendChild(td);
    })
    tbody.appendChild(row);
})
table.appendChild(tbody);






