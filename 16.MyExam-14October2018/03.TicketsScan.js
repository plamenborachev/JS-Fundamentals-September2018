function ticketsScan(infoStr, commandStr) {
    let threeNamesPattern = / [A-Z][a-zA-Z]*-[A-Z][a-zA-Z]*.-[A-Z][a-zA-Z]* /;
    let twoNamesPattern = / [A-Z][a-zA-Z]*-[A-Z][a-zA-Z]* /;
    let airportPattern = / [A-Z]{3}\/[A-Z]{3} /;
    let flightNumberPattern = / [A-Z]{1,3}\d{1,5} /;
    let companyPattern = /- [A-Z][a-zA-Z]*\*[A-Z][a-zA-Z]* /;

    let name = "";
    let threeNameMatch = infoStr.match(threeNamesPattern);
    if (threeNameMatch){
        name = threeNameMatch[0].replace(/-/g, " ").trim();
    }
    let twoNameMatch = infoStr.match(twoNamesPattern);
    if (twoNameMatch){
        name = twoNameMatch[0].replace(/-/g, " ").trim();
    }

    let flightNumber = "";
    let flightNumberMatch = infoStr.match(flightNumberPattern);
    if (flightNumberMatch){
        flightNumber = flightNumberMatch[0].trim();
    }

    let fromAirport = "";
    let toAirport = "";
    let airportMatch = infoStr.match(airportPattern);
    if (airportMatch){
        fromAirport = airportMatch[0].split("/")[0].trim();
        toAirport = airportMatch[0].split("/")[1].trim();
    }

    let company = "";
    let companyMatch = infoStr.match(companyPattern);
    if (companyMatch){
        company = companyMatch[0].replace("- ", "").replace("*", " ").trim();
    }

    switch (commandStr) {
        case "name":
            console.log(`Mr/Ms, ${name}, have a nice flight!`);
            break;
        case "flight":
            console.log(`Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`);
            break;
        case "company":
            console.log(`Have a nice flight with ${company}.`);
            break;
        case "all":
            console.log(`Mr/Ms, ${name}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`);
            break;
    }
}

ticketsScan('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_-T12G12 STD08:45 STA09:35 ', 'all');

ticketsScan(' TEST-T.-TESTOV SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ',
'flight');