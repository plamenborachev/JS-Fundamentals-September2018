function surveyParser(input) {
    let label;
    let rating = 0;
    let ratingCount = 0;

    let svgRegex = /<svg>((.|\n)*?)<\/svg>/gm;
    let catRegex = /<cat><text>((.|\n)*)\[((.|\n)*)]((.|\n)*)<\/text><\/cat>\s*<cat>((.|\n)*)<\/cat>/g;
    let valueRegex = /<g><val>(\d+)<\/val>(\d+)<\/g>/gm;

    let surveyMatches = input.match(svgRegex);

    if (!surveyMatches) {
        console.log("No survey found");
        return;
    } else {
        let catMatches = catRegex.exec(input);
        if (!catMatches) {
            console.log("Invalid format");
            return;
        } else {
            label = catMatches[3];
            let values;
            while ((values = valueRegex.exec(input))){
                let value = +values[1];
                let count = +values[2];

                if (value >= 1 && value <= 10 && count >=0){
                    rating += value * count;
                    ratingCount += count;
                } else {
                    console.log("Invalid format");
                    return;
                }
            }
        }
    }
    let avg = rating / ratingCount;
    console.log(`${label}: ${+avg.toFixed(2)}`);
}

surveyParser("<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>");

surveyParser("<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>");

surveyParser("<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It's great, don't mess with it!</p><p>I'd like to have the option for delivery</p>");

surveyParser("<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>");