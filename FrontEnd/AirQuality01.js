
async function setlocation(input){
    const response = await fetch("https://api.erg.ic.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json");
    const apidata = await response.json();
    //barking
    const barking = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    barking.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[0].Species[0]["@AirQualityIndex"];
    barking.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[0].Species[1]["@AirQualityIndex"];
    barking.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[1].Species[1]["@AirQualityIndex"];
    if (input =="Barking"){
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Barking";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = barking.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = barking.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = barking.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = barking.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = barking.SO2;
    }
    //barnet
    const barnet = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    if (input =="Barnet"){
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Barnet";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = barnet.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = barnet.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = barnet.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = barnet.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = barnet.SO2;
    }
    //bexley
    const bexley = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    bexley.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[0]["@AirQualityIndex"];
    bexley.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[1]["@AirQualityIndex"];
    bexley.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[2]["@AirQualityIndex"];
    bexley.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[3]["@AirQualityIndex"];
    bexley.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[2].Species[2]["@AirQualityIndex"];
    if (input =="Bexley") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Bexley";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = bexley.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = bexley.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = bexley.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = bexley.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = bexley.SO2;
    }
    //brent
    const brent = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    brent.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[1]["@AirQualityIndex"];
    brent.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[2]["@AirQualityIndex"];
    brent.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[3]["@AirQualityIndex"];
    brent.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[1].Species[0]["@AirQualityIndex"];
    if (input =="Brent") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Brent";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = brent.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = brent.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = brent.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = brent.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = brent.SO2;
    }
    //bromley
    const bromley = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    bromley.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[0]["@AirQualityIndex"];
    bromley.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[1]["@AirQualityIndex"];
    bromley.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[2]["@AirQualityIndex"];
    if (input =="Bromley") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Bromley";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = bromley.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = bromley.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = bromley.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = bromley.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = bromley.SO2;
    }
    //camden
    const camden = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    camden.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[0]["@AirQualityIndex"];
    camden.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[1]["@AirQualityIndex"];
    camden.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[2]["@AirQualityIndex"];
    camden.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[3]["@AirQualityIndex"];
    camden.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[4]["@AirQualityIndex"];
    if (input =="Camden") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Camden";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = camden.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = camden.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = camden.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = camden.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = camden.SO2;
    }
    //city
    const city = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    if (input =="City of London") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "City of London";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = city.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = city.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = city.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = city.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = city.SO2;
    }
    //croydon
    const croydon = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    croydon.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[0].Species["@AirQualityIndex"];
    croydon.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[2].Species["@AirQualityIndex"];
    croydon.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[3].Species[1]["@AirQualityIndex"];
    if (input =="Croydon") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Croydon";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = croydon.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = croydon.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = croydon.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = croydon.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = croydon.SO2;
    }
    //ealing
    const ealing = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    ealing.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[8].Site[1].Species[0]["@AirQualityIndex"];
    ealing.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[8].Site[2].Species[1]["@AirQualityIndex"];
    if (input =="Ealing") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Ealing";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = ealing.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = ealing.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = ealing.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = ealing.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = ealing.SO2;
    }
    //enfield
    const enfield = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    enfield.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[9].Site[0].Species["@AirQualityIndex"];
    enfield.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[9].Site[2].Species[1]["@AirQualityIndex"];
    if (input =="Enfield") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Enfield";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = enfield.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = enfield.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = enfield.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = enfield.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = enfield.SO2;
    }
    //greenwich
    const greenwich = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    greenwich.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[0]["@AirQualityIndex"];
    greenwich.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[1]["@AirQualityIndex"];
    greenwich.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[2]["@AirQualityIndex"];
    greenwich.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[7].Species[4]["@AirQualityIndex"];
    greenwich.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[3].Species[1]["@AirQualityIndex"];
    if (input =="Greenwich") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Greenwich";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = greenwich.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = greenwich.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = greenwich.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = greenwich.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = greenwich.SO2;
    }
    //hackney
    const hackney = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    hackney.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[0]["@AirQualityIndex"];
    hackney.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[1]["@AirQualityIndex"];
    hackney.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[2]["@AirQualityIndex"];
    hackney.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[3]["@AirQualityIndex"];
    if (input =="Hackney") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Hackney";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = hackney.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = hackney.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = hackney.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = hackney.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = hackney.SO2;
    }
    //hammersmith
    const hammersmith = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    if (input =="Hammersmith") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Hammersmith";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = hammersmith.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = hammersmith.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = hammersmith.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = hammersmith.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = hammersmith.SO2;
    }

    //haringey
    const haringey = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    haringey.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[13].Site[1].Species[0]["@AirQualityIndex"];
    haringey.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[13].Site[1].Species[1]["@AirQualityIndex"];
    if (input =="Haringey") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Haringey";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = haringey.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = haringey.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = haringey.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = haringey.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = haringey.SO2;
    }
    //harrow
    const harrow = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    if (input =="Harrow") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Harrow";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = harrow.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = harrow.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = harrow.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = harrow.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = harrow.SO2;
    }

    //havering
    const havering = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    havering.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[1].Species[0]["@AirQualityIndex"];
    havering.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[1].Species[1]["@AirQualityIndex"];
    havering.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[0].Species[2]["@AirQualityIndex"];
    if (input =="Havering") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Havering";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = havering.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = havering.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = havering.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = havering.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = havering.SO2;
    }

    //hillingdon
    const hillingdon = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    hillingdon.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[0]["@AirQualityIndex"];
    hillingdon.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[1]["@AirQualityIndex"];
    hillingdon.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[2]["@AirQualityIndex"];
    hillingdon.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[3]["@AirQualityIndex"];
    if (input =="Hillingdon") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Hillingdon";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = hillingdon.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = hillingdon.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = hillingdon.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = hillingdon.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = hillingdon.SO2;
    }

    //hounslow
    const hounslow = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    if (input =="Hounslow") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Hounslow";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = hounslow.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = hounslow.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = hounslow.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = hounslow.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = hounslow.SO2;
    }

    //islington
    const islington = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    islington.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[18].Site[0].Species[0]["@AirQualityIndex"];
    islington.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[18].Site[0].Species[1]["@AirQualityIndex"];
    if (input =="Islington") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Islington";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = islington.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = islington.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = islington.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = islington.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = islington.SO2;
    }

    //kc
    const kc = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    kc.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[0]["@AirQualityIndex"];
    kc.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[1]["@AirQualityIndex"];
    kc.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[2]["@AirQualityIndex"];
    kc.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[1].Species[0]["@AirQualityIndex"];
    kc.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[1].Species[1]["@AirQualityIndex"];
    if (input =="Kensington and Chelsea") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Kensington & Chelsea";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = kc.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = kc.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = kc.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = kc.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = kc.SO2;
    }

    //kingston
    const kingston = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    kingston.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[0].Species[0]["@AirQualityIndex"];
    kingston.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[1].Species[1]["@AirQualityIndex"];
    kingston.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[0].Species[1]["@AirQualityIndex"];
    if (input =="Kingston") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Kingston";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = kingston.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = kingston.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = kingston.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = kingston.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = kingston.SO2;
    }

    //lambeth
    const lambeth = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    lambeth.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[0]["@AirQualityIndex"];
    lambeth.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[1]["@AirQualityIndex"];
    lambeth.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[2]["@AirQualityIndex"];
    lambeth.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[1].Species[1]["@AirQualityIndex"];
    if (input =="Lambeth") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Lambeth";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = lambeth.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = lambeth.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = lambeth.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = lambeth.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = lambeth.SO2;
    }

    //lewisham
    const lewisham = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    lewisham.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[0]["@AirQualityIndex"];
    lewisham.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[1]["@AirQualityIndex"];
    lewisham.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[2]["@AirQualityIndex"];
    lewisham.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[3]["@AirQualityIndex"];
    if (input =="Lewisham") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Lewisham";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = lewisham.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = lewisham.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = lewisham.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = lewisham.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = lewisham.SO2;
    }

    //merton
    const merton = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    merton.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[23].Site[1].Species["@AirQualityIndex"];
    merton.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[23].Site[0].Species["@AirQualityIndex"];
    if (input =="Merton") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Merton";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = merton.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = merton.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = merton.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = merton.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = merton.SO2;
    }

    //newham
    const newham = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    newham.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[0]["@AirQualityIndex"];
    newham.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[1]["@AirQualityIndex"];
    newham.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[2]["@AirQualityIndex"];
    if (input =="Newham") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Newham";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = newham.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = newham.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = newham.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = newham.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = newham.SO2;
    }
    //redbridge
    const redbridge = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    redbridge.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[0]["@AirQualityIndex"];
    redbridge.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[1]["@AirQualityIndex"];
    redbridge.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[2]["@AirQualityIndex"];
    redbridge.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[3]["@AirQualityIndex"];
    if (input =="Redbridge") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Redbridge";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = redbridge.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = redbridge.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = redbridge.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = redbridge.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = redbridge.SO2;
    }

    //richmond
    const richmond = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    richmond.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[0].Species[0]["@AirQualityIndex"];
    richmond.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[1].Species[1]["@AirQualityIndex"];
    richmond.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[0].Species[1]["@AirQualityIndex"];
    richmond.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[2].Species[1]["@AirQualityIndex"];
    if (input =="Richmond") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Richmond";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = richmond.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = richmond.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = richmond.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = richmond.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = richmond.SO2;
    }

    //southwark
    const southwark = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    southwark.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[0]["@AirQualityIndex"];
    southwark.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[1]["@AirQualityIndex"];
    southwark.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[2]["@AirQualityIndex"];
    southwark.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[3]["@AirQualityIndex"];
    if (input =="Southwark") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Southwark";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = southwark.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = southwark.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = southwark.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = southwark.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = southwark.SO2;
    }

    //sutton
    const sutton = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    sutton.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[0].Species[0]["@AirQualityIndex"];
    sutton.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[0].Species[1]["@AirQualityIndex"];
    sutton.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[1].Species[1]["@AirQualityIndex"];
    if (input =="Sutton") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Sutton";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = sutton.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = sutton.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = sutton.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = sutton.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = sutton.SO2;
    }

    //towerhamlet
    const towerhamlet = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    towerhamlet.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[0]["@AirQualityIndex"];
    towerhamlet.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[1]["@AirQualityIndex"];
    towerhamlet.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[2]["@AirQualityIndex"];
    if (input =="Tower Hamlets") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Tower Hamlets";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = towerhamlet.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = towerhamlet.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = towerhamlet.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = towerhamlet.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = towerhamlet.SO2;
    }

    //waltham
    const waltham = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    if (input =="Waltham Forest") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Waltham Forest";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = waltham.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = waltham.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = waltham.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = waltham.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = waltham.SO2;
    }

    //wandsworth
    const wandsworth = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    wandsworth.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[0]["@AirQualityIndex"];
    wandsworth.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[1]["@AirQualityIndex"];
    wandsworth.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[1].Species[1]["@AirQualityIndex"];
    if (input =="Wandsworth") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Wandsworth";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = wandsworth.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = wandsworth.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = wandsworth.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = wandsworth.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = wandsworth.SO2;
    }

    //westminster
    const westminster = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
    westminster.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[0]["@AirQualityIndex"];
    westminster.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[1]["@AirQualityIndex"];
    westminster.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[2]["@AirQualityIndex"];
    westminster.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[3]["@AirQualityIndex"];
    if (input =="Westminster") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Westminster";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = westminster.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = westminster.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = westminster.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = westminster.SO2;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = westminster.SO2;
    }


}
const areaname = localStorage.getItem('areaname');
localStorage.clear();
setlocation(areaname);