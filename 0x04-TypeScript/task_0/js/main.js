var stdOne = {
    firstName: 'Kerry',
    lastName: 'Doe',
    age: 23,
    location: 'Nairobi'
};
var stdTwo = {
    firstName: 'Frumpy',
    lastName: 'Dumpy',
    age: 48,
    location: 'Mombasa'
};
var studentsList = [stdOne, stdTwo];
var body = document.getElementsByTagName('body')[0];
var table = document.createElement('table');
var thead = document.createElement('thead');
var theadRow = document.createElement('tr');
var thFirstName = document.createElement('th');
var thLocation = document.createElement('th');
thFirstName.innerText = 'First Name';
thLocation.innerText = 'Location';
theadRow.append(thFirstName);
theadRow.append(thLocation);
thead.append(theadRow);
table.append(thead);
var tbody = document.createElement('tbody');
studentsList.forEach(function (std) {
    var tbodyRow = document.createElement('tr');
    var firstNameData = document.createElement('td');
    var locationData = document.createElement('td');
    firstNameData.innerText = std.firstName;
    locationData.innerText = std.location;
    tbodyRow.append(firstNameData);
    tbodyRow.append(locationData);
    tbody.append(tbodyRow);
});
table.append(tbody);
body.append(table);
