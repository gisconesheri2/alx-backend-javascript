interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const stdOne: Student = {
    firstName: 'Kerry',
    lastName: 'Doe',
    age: 23,
    location: 'Nairobi'
}
const stdTwo: Student = {
    firstName: 'Frumpy',
    lastName: 'Dumpy',
    age: 48,
    location: 'Mombasa'
}

const studentsList: Student[] = [stdOne, stdTwo];

const body = document.getElementsByTagName('body')[0];
const table = document.createElement('table');
const thead = document.createElement('thead');
const theadRow = document.createElement('tr')
const thFirstName = document.createElement('th');
const thLocation = document.createElement('th');

thFirstName.innerText = 'First Name';
thLocation.innerText = 'Location';

theadRow.append(thFirstName);
theadRow.append(thLocation);
thead.append(theadRow);
table.append(thead);

const tbody = document.createElement('tbody');

studentsList.forEach(std => {
    const tbodyRow = document.createElement('tr');

    const firstNameData = document.createElement('td');
    const locationData = document.createElement('td');

    firstNameData.innerText = std.firstName;
    locationData.innerText = std.location;

    tbodyRow.append(firstNameData);
    tbodyRow.append(locationData);

    tbody.append(tbodyRow);
})

table.append(tbody);
body.append(table);