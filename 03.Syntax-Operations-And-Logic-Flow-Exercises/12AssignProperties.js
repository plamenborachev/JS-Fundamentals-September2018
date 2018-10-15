function composeObject(properties) {

    let name1 = properties[0];
    let value1 = properties[1];
    let name2 = properties[2];
    let value2 = properties[3];
    let name3 = properties[4];
    let value3 = properties[5];

    let obj = {};
    obj[name1] = value1;
    obj[name2] = value2;
    obj[name3] = value3;

    console.log(obj);
}

composeObject(['name', 'Pesho', 'age', '23', 'gender', 'male']);
composeObject(['ssid', '90127461', 'status', 'admin', 'expires', '600']);