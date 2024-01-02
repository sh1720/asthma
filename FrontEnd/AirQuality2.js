AQIdata = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
async function setmap(){
    const response = await fetch("https://api.erg.ic.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json");
    const apidata = await response.json();
    barking=barnet=bexley=brent=bromley=camden=city=croydon=ealing=enfield=greenwich=hackney=hammersmith=haringey=harrow=havering=hillingdon=hounslow=islington=kc=kingston=lambeth=lewisham=merton=newham=redbridge=richmond=southwark=sutton=towerhamlet=waltham=wandsworth=westminster=AQIdata;
    //barking
    barking.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[0].Species[0]["@AirQualityIndex"];
    barking.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[0].Species[1]["@AirQualityIndex"];
    barking.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(barking.NO2) == 1 || parseInt(barking.NO2) == 2 || parseInt(barking.NO2) ==3){
        const imgsrc = document.getElementById("barking");
         imgsrc.src = "./public/londonmaps/Barking_green.png";
    } else if (parseInt(barking.NO2) == 4 || parseInt(barking.NO2) == 5 || parseInt(barking.NO2) ==6) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_orange.png";
    } else if (parseInt(barking.NO2) == 7 || parseInt(barking.NO2) == 8 || parseInt(barking.NO2) ==9 || parseInt(barking.NO2) == 10) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_red.png";
    }
    //barnet
    const imgsrcbarnet = document.getElementById('barnet');
    imgsrcbarnet.src = "./public/londonmaps/barnet_white.png";
    //bexley
    bexley.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[0]["@AirQualityIndex"];
    bexley.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[1]["@AirQualityIndex"];
    bexley.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[2]["@AirQualityIndex"];
    bexley.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[3]["@AirQualityIndex"];
    bexley.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[2].Species[2]["@AirQualityIndex"];
    if (parseInt(bexley.NO2) == 1 || parseInt(bexley.NO2) == 2 || parseInt(bexley.NO2) ==3){
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_green.png";
    } else if (parseInt(bexley.NO2) == 4 || parseInt(bexley.NO2) == 5 || parseInt(bexley.NO2) ==6) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_orange.png";
    } else if (parseInt(bexley.NO2) == 7 || parseInt(bexley.NO2) == 8 || parseInt(bexley.NO2) ==9 || parseInt(bexley.NO2) == 10) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_red.png";
    }
    //brent
    brent.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[1]["@AirQualityIndex"];
    brent.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[2]["@AirQualityIndex"];
    brent.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[3]["@AirQualityIndex"];
    brent.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(brent.NO2) == 1 || parseInt(brent.NO2) == 2 || parseInt(brent.NO2) ==3){
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_green.png";
    } else if (parseInt(brent.NO2) == 4 || parseInt(brent.NO2) == 5 || parseInt(brent.NO2) ==6) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_orange.png";
    } else if (parseInt(brent.NO2) == 7 || parseInt(brent.NO2) == 8 || parseInt(brent.NO2) ==9 || parseInt(brent.NO2) == 10) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_red.png";
    }
    //bromley
    bromley.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[0]["@AirQualityIndex"];
    bromley.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[1]["@AirQualityIndex"];
    bromley.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[2]["@AirQualityIndex"];
    if (parseInt(bromley.NO2) == 1 || parseInt(bromley.NO2) == 2 || parseInt(bromley.NO2) ==3){
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_green.png";
    } else if (parseInt(bromley.NO2) == 4 || parseInt(bromley.NO2) == 5 || parseInt(bromley.NO2) ==6) {
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_orange.png";
    } else if (parseInt(bromley.NO2) == 7 || parseInt(bromley.NO2) == 8 || parseInt(bromley.NO2) ==9 || parseInt(bromley.NO2) == 10) {
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_red.png";
    }
    //camden
    camden.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[0]["@AirQualityIndex"];
    camden.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[1]["@AirQualityIndex"];
    camden.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[2]["@AirQualityIndex"];
    camden.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[3]["@AirQualityIndex"];
    camden.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[4]["@AirQualityIndex"];
    if (parseInt(camden.NO2) == 1 || parseInt(camden.NO2) == 2 || parseInt(camden.NO2) ==3){
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_green.png";
    } else if (parseInt(camden.NO2) == 4 || parseInt(camden.NO2) == 5 || parseInt(camden.NO2) ==6) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_orange.png";
    } else if (parseInt(camden.NO2) == 7 || parseInt(camden.NO2) == 8 || parseInt(camden.NO2) ==9 || parseInt(camden.NO2) == 10) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_red.png";
    }
    //city
    const imgsrccity = document.getElementById('city');
    imgsrccity.src = "./public/londonmaps/city_white.png";
    //croydon
    croydon.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[0].Species["@AirQualityIndex"];
    croydon.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[2].Species["@AirQualityIndex"];
    croydon.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[3].Species[1]["@AirQualityIndex"];
    if (parseInt(croydon.NO2) == 1 || parseInt(croydon.NO2) == 2 || parseInt(croydon.NO2) ==3){
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_green.png";
    } else if (parseInt(croydon.NO2) == 4 || parseInt(croydon.NO2) == 5 || parseInt(croydon.NO2) ==6) {
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_orange.png";
    } else if (parseInt(croydon.NO2) == 7 || parseInt(croydon.NO2) == 8 || parseInt(croydon.NO2) ==9 || parseInt(croydon.NO2) == 10) {
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_red.png";
    }
    //ealing
    ealing.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[8].Site[1].Species[0]["@AirQualityIndex"];
    ealing.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[8].Site[2].Species[1]["@AirQualityIndex"];
    if (parseInt(ealing.NO2) == 1 || parseInt(ealing.NO2) == 2 || parseInt(ealing.NO2) ==3){
        const imgsrc6 = document.getElementById("ealing");
        imgsrc6.src = "./public/londonmaps/ealing_green.png";
    } else if (parseInt(ealing.NO2) == 4 || parseInt(ealing.NO2) == 5 || parseInt(ealing.NO2) ==6) {
        const imgsrc6 = document.getElementById("ealing");
        imgsrc6.src = "./public/londonmaps/ealing_orange.png";
    } else if (parseInt(ealing.NO2) == 7 || parseInt(ealing.NO2) == 8 || parseInt(ealing.NO2) ==9 || parseInt(ealing.NO2) == 10) {
        const imgsrc6 = document.getElementById("ealing");
        imgsrc6.src = "./public/londonmaps/ealing_red.png";
    }
    //enfield
    enfield.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[9].Site[0].Species["@AirQualityIndex"];
    enfield.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[9].Site[2].Species[1]["@AirQualityIndex"];
    if (parseInt(enfield.NO2) == 1 || parseInt(enfield.NO2) == 2 || parseInt(enfield.NO2) ==3){
        const imgsrc7 = document.getElementById("enfield");
        imgsrc7.src = "./public/londonmaps/enfield_green.png";
    } else if (parseInt(enfield.NO2) == 4 || parseInt(enfield.NO2) == 5 || parseInt(enfield.NO2) ==6) {
        const imgsrc7 = document.getElementById("enfield");
        imgsrc7.src = "./public/londonmaps/enfield_orange.png";
    } else if (parseInt(enfield.NO2) == 7 || parseInt(enfield.NO2) == 8 || parseInt(enfield.NO2) ==9 || parseInt(enfield.NO2) == 10) {
        const imgsrc7 = document.getElementById("enfield");
        imgsrc7.src = "./public/londonmaps/enfield_red.png";
    }
    //greenwich
    greenwich.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[0]["@AirQualityIndex"];
    greenwich.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[1]["@AirQualityIndex"];
    greenwich.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[2]["@AirQualityIndex"];
    greenwich.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[7].Species[4]["@AirQualityIndex"];
    greenwich.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[3].Species[1]["@AirQualityIndex"];
    if (parseInt(greenwich.NO2) == 1 || parseInt(greenwich.NO2) == 2 || parseInt(greenwich.NO2) ==3){
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_green.png";
    } else if (parseInt(greenwich.NO2) == 4 || parseInt(greenwich.NO2) == 5 || parseInt(greenwich.NO2) ==6) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_orange.png";
    } else if (parseInt(greenwich.NO2) == 7 || parseInt(greenwich.NO2) == 8 || parseInt(greenwich.NO2) ==9 || parseInt(greenwich.NO2) == 10) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_red.png";
    }
    //hackney
    hackney.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[0]["@AirQualityIndex"];
    hackney.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[1]["@AirQualityIndex"];
    hackney.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[2]["@AirQualityIndex"];
    hackney.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[3]["@AirQualityIndex"];
    if (parseInt(hackney.NO2) == 1 || parseInt(hackney.NO2) == 2 || parseInt(hackney.NO2) ==3){
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_green.png";
    } else if (parseInt(hackney.NO2) == 4 || parseInt(hackney.NO2) == 5 || parseInt(hackney.NO2) ==6) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_orange.png";
    } else if (parseInt(hackney.NO2) == 7 || parseInt(hackney.NO2) == 8 || parseInt(hackney.NO2) ==9 || parseInt(hackney.NO2) == 10) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_red.png";
    }
    //hammersmith
    const imgsrchammersmith = document.getElementById('hammersmith');
    imgsrchammersmith.src = "./public/londonmaps/hammersmith_white.png";
    //haringey
    haringey.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[13].Site[1].Species[0]["@AirQualityIndex"];
    haringey.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[13].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(haringey.NO2) == 1 || parseInt(haringey.NO2) == 2 || parseInt(haringey.NO2) ==3){
        const imgsrc10 = document.getElementById("haringey");
        imgsrc10.src = "./public/londonmaps/Haringey_green.png";
    } else if (parseInt(haringey.NO2) == 4 || parseInt(haringey.NO2) == 5 || parseInt(haringey.NO2) ==6) {
        const imgsrc10 = document.getElementById("haringey");
        imgsrc10.src = "./public/londonmaps/Haringey_orange.png";
    } else if (parseInt(haringey.NO2) == 7 || parseInt(haringey.NO2) == 8 || parseInt(haringey.NO2) ==9 || parseInt(haringey.NO2) == 10) {
        const imgsrc10 = document.getElementById("haringey");
        imgsrc10.src = "./public/londonmaps/Haringey_red.png";
    }
    //harrow
    const imgsrcharrow = document.getElementById('harrow');
    imgsrcharrow.src = "./public/londonmaps/harrow_white.png";
    //havering
    havering.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[1].Species[0]["@AirQualityIndex"];
    havering.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[1].Species[1]["@AirQualityIndex"];
    havering.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(havering.NO2) == 1 || parseInt(havering.NO2) == 2 || parseInt(havering.NO2) ==3){
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_green.png";
    } else if (parseInt(havering.NO2) == 4 || parseInt(havering.NO2) == 5 || parseInt(havering.NO2) ==6) {
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_orange.png";
    } else if (parseInt(havering.NO2) == 7 || parseInt(havering.NO2) == 8 || parseInt(havering.NO2) ==9 || parseInt(havering.NO2) == 10) {
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_red.png";
    }
    //hillingdon
    hillingdon.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[0]["@AirQualityIndex"];
    hillingdon.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[1]["@AirQualityIndex"];
    hillingdon.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[2]["@AirQualityIndex"];
    hillingdon.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[3]["@AirQualityIndex"];
    if (parseInt(hillingdon.NO2) == 1 || parseInt(hillingdon.NO2) == 2 || parseInt(hillingdon.NO2) ==3){
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_green.png";
    } else if (parseInt(hillingdon.NO2) == 4 || parseInt(hillingdon.NO2) == 5 || parseInt(hillingdon.NO2) ==6) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_orange.png";
    } else if (parseInt(hillingdon.NO2) == 7 || parseInt(hillingdon.NO2) == 8 || parseInt(hillingdon.NO2) ==9 || parseInt(hillingdon.NO2) == 10) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_red.png";
    }
    //hounslow
    const imgsrchounslow = document.getElementById('hounslow');
    imgsrchounslow.src = "./public/londonmaps/hounslow_white.png"
    //islington
    islington.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[18].Site[0].Species[0]["@AirQualityIndex"];
    islington.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[18].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(islington.NO2) == 1 || parseInt(islington.NO2) == 2 || parseInt(islington.NO2) ==3){
        const imgsrc13 = document.getElementById("islington");
        imgsrc13.src = "./public/londonmaps/islington_green.png";
    } else if (parseInt(islington.NO2) == 4 || parseInt(islington.NO2) == 5 || parseInt(islington.NO2) ==6) {
        const imgsrc13 = document.getElementById("islington");
        imgsrc13.src = "./public/londonmaps/islington_orange.png";
    } else if (parseInt(islington.NO2) == 7 || parseInt(islington.NO2) == 8 || parseInt(islington.NO2) ==9 || parseInt(islington.NO2) == 10) {
        const imgsrc13 = document.getElementById("islington");
        imgsrc13.src = "./public/londonmaps/islington_red.png";
    }
    //kc
    kc.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[0]["@AirQualityIndex"];
    kc.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[1]["@AirQualityIndex"];
    kc.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[2]["@AirQualityIndex"];
    kc.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[1].Species[0]["@AirQualityIndex"];
    kc.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(kc.NO2) == 1 || parseInt(kc.NO2) == 2 || parseInt(kc.NO2) ==3){
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_green.png";
    } else if (parseInt(kc.NO2) == 4 || parseInt(kc.NO2) == 5 || parseInt(kc.NO2) ==6) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_orange.png";
    } else if (parseInt(kc.NO2) == 7 || parseInt(kc.NO2) == 8 || parseInt(kc.NO2) ==9 || parseInt(kc.NO2) == 10) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_red.png";
    }
    //kingston
    kingston.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[0].Species[0]["@AirQualityIndex"];
    kingston.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[1].Species[1]["@AirQualityIndex"];
    kingston.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(kingston.NO2) == 1 || parseInt(kingston.NO2) == 2 || parseInt(kingston.NO2) ==3){
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_green.png";
    } else if (parseInt(kingston.NO2) == 4 || parseInt(kingston.NO2) == 5 || parseInt(kingston.NO2) ==6) {
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_orange.png";
    } else if (parseInt(kingston.NO2) == 7 || parseInt(kingston.NO2) == 8 || parseInt(kingston.NO2) ==9 || parseInt(kingston.NO2) == 10) {
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_red.png";
    }
    //lambeth
    lambeth.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[0]["@AirQualityIndex"];
    lambeth.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[1]["@AirQualityIndex"];
    lambeth.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[2]["@AirQualityIndex"];
    lambeth.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(lambeth.NO2) == 1 || parseInt(lambeth.NO2) == 2 || parseInt(lambeth.NO2) ==3){
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_green.png";
    } else if (parseInt(lambeth.NO2) == 4 || parseInt(lambeth.NO2) == 5 || parseInt(lambeth.NO2) ==6) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_orange.png";
    } else if (parseInt(lambeth.NO2) == 7 || parseInt(lambeth.NO2) == 8 || parseInt(lambeth.NO2) ==9 || parseInt(lambeth.NO2) == 10) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_red.png";
    }
    //lewisham
    lewisham.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[0]["@AirQualityIndex"];
    lewisham.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[1]["@AirQualityIndex"];
    lewisham.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[2]["@AirQualityIndex"];
    lewisham.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[3]["@AirQualityIndex"];
    if (parseInt(lewisham.NO2) == 1 || parseInt(lewisham.NO2) == 2 || parseInt(lewisham.NO2) ==3){
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_green.png";
    } else if (parseInt(lewisham.NO2) == 4 || parseInt(lewisham.NO2) == 5 || parseInt(lewisham.NO2) ==6) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_orange.png";
    } else if (parseInt(lewisham.NO2) == 7 || parseInt(lewisham.NO2) == 8 || parseInt(lewisham.NO2) ==9 || parseInt(lewisham.NO2) == 10) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_red.png";
    }
    //merton
    merton.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[23].Site[1].Species["@AirQualityIndex"];
    merton.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[23].Site[0].Species["@AirQualityIndex"];
    if (parseInt(merton.NO2) == 1 || parseInt(merton.NO2) == 2 || parseInt(merton.NO2) ==3){
        const imgsrc18 = document.getElementById("merton");
        imgsrc18.src = "./public/londonmaps/merton_green.png";
    } else if (parseInt(merton.NO2) == 4 || parseInt(merton.NO2) == 5 || parseInt(merton.NO2) ==6) {
        const imgsrc18 = document.getElementById("merton");
        imgsrc18.src = "./public/londonmaps/merton_orange.png";
    } else if (parseInt(merton.NO2) == 7 || parseInt(merton.NO2) == 8 || parseInt(merton.NO2) ==9 || parseInt(merton.NO2) == 10) {
        const imgsrc18 = document.getElementById("merton");
        imgsrc18.src = "./public/londonmaps/merton_red.png";
    }
    //newham
    newham.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[0]["@AirQualityIndex"];
    newham.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[1]["@AirQualityIndex"];
    newham.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(newham.NO2) == 1 || parseInt(newham.NO2) == 2 || parseInt(newham.NO2) ==3){
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_green.png";
    } else if (parseInt(newham.NO2) == 4 || parseInt(newham.NO2) == 5 || parseInt(newham.NO2) ==6) {
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_orange.png";
    } else if (parseInt(newham.NO2) == 7 || parseInt(newham.NO2) == 8 || parseInt(newham.NO2) ==9 || parseInt(newham.NO2) == 10) {
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_red.png";
    }
    //redbridge
    redbridge.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[0]["@AirQualityIndex"];
    redbridge.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[1]["@AirQualityIndex"];
    redbridge.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[2]["@AirQualityIndex"];
    redbridge.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[3]["@AirQualityIndex"];
    if (parseInt(redbridge.NO2) == 1 || parseInt(redbridge.NO2) == 2 || parseInt(redbridge.NO2) ==3){
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_green.png";
    } else if (parseInt(redbridge.NO2) == 4 || parseInt(redbridge.NO2) == 5 || parseInt(redbridge.NO2) ==6) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_orange.png";
    } else if (parseInt(redbridge.NO2) == 7 || parseInt(redbridge.NO2) == 8 || parseInt(redbridge.NO2) ==9 || parseInt(redbridge.NO2) == 10) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_red.png";
    }
    //richmond
    richmond.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[0].Species[0]["@AirQualityIndex"];
    richmond.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[1].Species[1]["@AirQualityIndex"];
    richmond.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[0].Species[1]["@AirQualityIndex"];
    richmond.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[2].Species[1]["@AirQualityIndex"];
    if (parseInt(richmond.NO2) == 1 || parseInt(richmond.NO2) == 2 || parseInt(richmond.NO2) ==3){
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_green.png";
    } else if (parseInt(richmond.NO2) == 4 || parseInt(richmond.NO2) == 5 || parseInt(richmond.NO2) ==6) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_orange.png";
    } else if (parseInt(richmond.NO2) == 7 || parseInt(richmond.NO2) == 8 || parseInt(richmond.NO2) ==9 || parseInt(richmond.NO2) == 10) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_red.png";
    }
    //southwark
    southwark.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[0]["@AirQualityIndex"];
    southwark.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[1]["@AirQualityIndex"];
    southwark.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[2]["@AirQualityIndex"];
    southwark.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[3]["@AirQualityIndex"];
    if (parseInt(southwark.NO2) == 1 || parseInt(southwark.NO2) == 2 || parseInt(southwark.NO2) ==3){
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_green.png";
    } else if (parseInt(southwark.NO2) == 4 || parseInt(southwark.NO2) == 5 || parseInt(southwark.NO2) ==6) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_orange.png";
    } else if (parseInt(southwark.NO2) == 7 || parseInt(southwark.NO2) == 8 || parseInt(southwark.NO2) ==9 || parseInt(southwark.NO2) == 10) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_red.png";
    }
    //sutton
    sutton.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[0].Species[0]["@AirQualityIndex"];
    sutton.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[0].Species[1]["@AirQualityIndex"];
    sutton.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(sutton.NO2) == 1 || parseInt(sutton.NO2) == 2 || parseInt(sutton.NO2) ==3){
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_green.png";
    } else if (parseInt(sutton.NO2) == 4 || parseInt(sutton.NO2) == 5 || parseInt(sutton.NO2) ==6) {
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_orange.png";
    } else if (parseInt(sutton.NO2) == 7 || parseInt(sutton.NO2) == 8 || parseInt(sutton.NO2) ==9 || parseInt(sutton.NO2) == 10) {
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_red.png";
    }
    //towerhamlet
    towerhamlet.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[0]["@AirQualityIndex"];
    towerhamlet.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[1]["@AirQualityIndex"];
    towerhamlet.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(towerhamlet.NO2) == 1 || parseInt(towerhamlet.NO2) == 2 || parseInt(towerhamlet.NO2) ==3){
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_green.png";
    } else if (parseInt(towerhamlet.NO2) == 4 || parseInt(towerhamlet.NO2) == 5 || parseInt(towerhamlet.NO2) ==6) {
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_orange.png";
    } else if (parseInt(towerhamlet.NO2) == 7 || parseInt(towerhamlet.NO2) == 8 || parseInt(towerhamlet.NO2) ==9 || parseInt(towerhamlet.NO2) == 10) {
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_red.png";
    }
    //waltham
    const imgsrcwaltham = document.getElementById('walthamforest');
    imgsrcwaltham.src = "./public/londonmaps/walthamforest_white.png";
    //wandsworth
    wandsworth.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[0]["@AirQualityIndex"];
    wandsworth.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[1]["@AirQualityIndex"];
    wandsworth.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(wandsworth.NO2) == 1 || parseInt(wandsworth.NO2) == 2 || parseInt(wandsworth.NO2) ==3){
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_green.png";
    } else if (parseInt(wandsworth.NO2) == 4 || parseInt(wandsworth.NO2) == 5 || parseInt(wandsworth.NO2) ==6) {
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_orange.png";
    } else if (parseInt(wandsworth.NO2) == 7 || parseInt(wandsworth.NO2) == 8 || parseInt(wandsworth.NO2) ==9 || parseInt(wandsworth.NO2) == 10) {
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_red.png";
    }
    //westminster
    westminster.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[0]["@AirQualityIndex"];
    westminster.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[1]["@AirQualityIndex"];
    westminster.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[2]["@AirQualityIndex"];
    westminster.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[3]["@AirQualityIndex"];
    if (parseInt(westminster.NO2) == 1 || parseInt(westminster.NO2) == 2 || parseInt(westminster.NO2) ==3){
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_green.png";
    } else if (parseInt(westminster.NO2) == 4 || parseInt(westminster.NO2) == 5 || parseInt(westminster.NO2) ==6) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_orange.png";
        } else if (parseInt(westminster.NO2) == 7 || parseInt(westminster.NO2) == 8 || parseInt(westminster.NO2) ==9 || parseInt(haringey.NO2) == 10) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_red.png";
    }


}

//for SO2 data display
async function setmapSO2() {
    const response = await fetch("https://api.erg.ic.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json");
    const apidata = await response.json();
    barking = barnet = bexley = brent = bromley = camden = city = croydon = ealing = enfield = greenwich = hackney = hammersmith = haringey = harrow = havering = hillingdon = hounslow = islington = kc = kingston = lambeth = lewisham = merton = newham = redbridge = richmond = southwark = sutton = towerhamlet = waltham = wandsworth = westminster = AQIdata;
    //barking
    barking.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(barking.SO2) == 1 || parseInt(barking.SO2) == 2 || parseInt(barking.SO2) == 3) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_green.png";
    } else if (parseInt(barking.SO2) == 4 || parseInt(barking.SO2) == 5 || parseInt(barking.SO2) == 6) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_orange.png";
    } else if (parseInt(barking.SO2) == 7 || parseInt(barking.SO2) == 8 || parseInt(barking.SO2) == 9 || parseInt(barking.SO2) == 10) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_red.png";
    }
    //barnet
    const imgsrcbarnet = document.getElementById('barnet');
    imgsrcbarnet.src = "./public/londonmaps/barnet_white.png";
    //bexley
    bexley.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[2].Species[2]["@AirQualityIndex"];
    if (parseInt(bexley.SO2) == 1 || parseInt(bexley.SO2) == 2 || parseInt(bexley.SO2) == 3) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_green.png";
    } else if (parseInt(bexley.SO2) == 4 || parseInt(bexley.SO2) == 5 || parseInt(bexley.SO2) == 6) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_orange.png";
    } else if (parseInt(bexley.SO2) == 7 || parseInt(bexley.SO2) == 8 || parseInt(bexley.SO2) == 9 || parseInt(bexley.SO2) == 10) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_red.png";
    }
    //brent
    const imgsrcbrent = document.getElementById('brent');
    imgsrcbrent.src = "./public/londonmaps/brent_white.png";
    //bromley
    const imgsrcbromley = document.getElementById('bromley');
    imgsrcbromley.src = "./public/londonmaps/bromley_white.png";
    //camden
    camden.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[4]["@AirQualityIndex"];
    if (parseInt(camden.SO2) == 1 || parseInt(camden.SO2) == 2 || parseInt(camden.SO2) == 3) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_green.png";
    } else if (parseInt(camden.SO2) == 4 || parseInt(camden.SO2) == 5 || parseInt(camden.SO2) == 6) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_orange.png";
    } else if (parseInt(camden.SO2) == 7 || parseInt(camden.SO2) == 8 || parseInt(camden.SO2) == 9 || parseInt(camden.SO2) == 10) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_red.png";
    }
    //city
    const imgsrccity = document.getElementById('city');
    imgsrccity.src = "./public/londonmaps/city_white.png";
    //croydon
    const imgsrccroydon = document.getElementById('croydon');
    imgsrcbcroydon.src = "./public/londonmaps/croydon_white.png";
    //ealing
    const imgsrcealing = document.getElementById('ealing');
    imgsrcealing.src = "./public/londonmaps/ealing_white.png";
    //enfield
    const imgsrcenfield = document.getElementById('enfield');
    imgsrcenfield.src = "./public/londonmaps/enfield_white.png";
    //greenwich
    greenwich.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[7].Species[4]["@AirQualityIndex"];
    if (parseInt(greenwich.SO2) == 1 || parseInt(greenwich.SO2) == 2 || parseInt(greenwich.SO2) == 3) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_green.png";
    } else if (parseInt(greenwich.SO2) == 4 || parseInt(greenwich.SO2) == 5 || parseInt(greenwich.SO2) == 6) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_orange.png";
    } else if (parseInt(greenwich.SO2) == 7 || parseInt(greenwich.SO2) == 8 || parseInt(greenwich.SO2) == 9 || parseInt(greenwich.SO2) == 10) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_red.png";
    }
    //hackney
    const imgsrchackney = document.getElementById('hackney');
    imgsrchackney.src = "./public/londonmaps/hackney_white.png";
    //hammersmith
    const imgsrchammersmith = document.getElementById('hammersmith');
    imgsrchammersmith.src = "./public/londonmaps/hammersmith_white.png";
    //haringey
    const imgsrcharingey = document.getElementById('haringey');
    imgsrcharingey.src = "./public/londonmaps/Haringey_white.png";
    //harrow
    const imgsrcharrow = document.getElementById('harrow');
    imgsrcharrow.src = "./public/londonmaps/harrow_white.png";
    //havering
    const imgsrchavering = document.getElementById('havering');
    imgsrchavering.src = "./public/londonmaps/Havering_white.png";
    //hillingdon
    const imgsrchillingdon = document.getElementById('hillingdon');
    imgsrchillingdon.src = "./public/londonmaps/hillingdon_white.png";
    //hounslow
    const imgsrchounslow = document.getElementById('hounslow');
    imgsrchounslow.src = "./public/londonmaps/hounslow_white.png";
    //islington
    const imgsrcislington = document.getElementById('islington');
    imgsrcislington.src = "./public/londonmaps/islington_white.png";
    //kc
    kc.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(kc.SO2) == 1 || parseInt(kc.SO2) == 2 || parseInt(kc.SO2) == 3) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_green.png";
    } else if (parseInt(kc.SO2) == 4 || parseInt(kc.SO2) == 5 || parseInt(kc.SO2) == 6) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_orange.png";
    } else if (parseInt(kc.SO2) == 7 || parseInt(kc.SO2) == 8 || parseInt(kc.SO2) == 9 || parseInt(kc.SO2) == 10) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_red.png";
    }
    //kingston
    const imgsrckingston = document.getElementById('kingston');
    imgsrckingston.src = "./public/londonmaps/barnet_white.png";
    //lambeth
    lambeth.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(lambeth.SO2) == 1 || parseInt(lambeth.SO2) == 2 || parseInt(lambeth.SO2) == 3) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_green.png";
    } else if (parseInt(lambeth.SO2) == 4 || parseInt(lambeth.SO2) == 5 || parseInt(lambeth.SO2) == 6) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_orange.png";
    } else if (parseInt(lambeth.SO2) == 7 || parseInt(lambeth.SO2) == 8 || parseInt(lambeth.SO2) == 9 || parseInt(lambeth.SO2) == 10) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_red.png";
    }
    //lewisham
    const imgsrclewisham = document.getElementById('lewisham');
    imgsrclewisham.src = "./public/londonmaps/lewisham_white.png";
    //merton
    const imgsrcmerton = document.getElementById('merton');
    imgsrcmerton.src = "./public/londonmaps/merton_white.png";
    //newham
    const imgsrcnewham = document.getElementById('newham');
    imgsrcnewham.src = "./public/londonmaps/newham_white.png";
    //redbridge
    const imgsrcredbridge = document.getElementById('redbridge');
    imgsrcredbridge.src = "./public/londonmaps/redbridge_white.png";
    //richmond
    const imgsrcrichmond = document.getElementById('richmond');
    imgsrcrichmond.src = "./public/londonmaps/richmond_white.png";
    //southwark
    const imgsrcsouthwark = document.getElementById('southwark');
    imgsrcsouthwark.src = "./public/londonmaps/southwark_white.png";
    //sutton
    const imgsrcsutton = document.getElementById('sutton');
    imgsrcsutton.src = "./public/londonmaps/sutton_white.png";
    //towerhamlet
    const imgsrctowerhamlet = document.getElementById('towerhamlet');
    imgsrctowerhamlet.src = "./public/londonmaps/towerhamlet_white.png";
    //walthamforest
    const imgsrcwaltham = document.getElementById('walthamforest');
    imgsrcwaltham.src = "./public/londonmaps/walthamforest_white.png";
    //westminster
    const imgsrcwestminster = document.getElementById('westminster');
    imgsrcwestminster.src = "./public/londonmaps/westminster_white.png";

}


//for NO2 reading display
async function setmapNO2(){
    const response = await fetch("https://api.erg.ic.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json");
    const apidata = await response.json();
    barking=barnet=bexley=brent=bromley=camden=city=croydon=ealing=enfield=greenwich=hackney=hammersmith=haringey=harrow=havering=hillingdon=hounslow=islington=kc=kingston=lambeth=lewisham=merton=newham=redbridge=richmond=southwark=sutton=towerhamlet=waltham=wandsworth=westminster=AQIdata;
    //barking
    barking.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(barking.NO2) == 1 || parseInt(barking.NO2) == 2 || parseInt(barking.NO2) ==3){
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_green.png";
    } else if (parseInt(barking.NO2) == 4 || parseInt(barking.NO2) == 5 || parseInt(barking.NO2) ==6) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_orange.png";
    } else if (parseInt(barking.NO2) == 7 || parseInt(barking.NO2) == 8 || parseInt(barking.NO2) ==9 || parseInt(barking.NO2) == 10) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_red.png";
    }
    //barnet
    const imgsrcbarnet = document.getElementById('barnet');
    imgsrcbarnet.src = "./public/londonmaps/barnet_white.png";
    //bexley
    bexley.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(bexley.NO2) == 1 || parseInt(bexley.NO2) == 2 || parseInt(bexley.NO2) ==3){
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_green.png";
    } else if (parseInt(bexley.NO2) == 4 || parseInt(bexley.NO2) == 5 || parseInt(bexley.NO2) ==6) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_orange.png";
    } else if (parseInt(bexley.NO2) == 7 || parseInt(bexley.NO2) == 8 || parseInt(bexley.NO2) ==9 || parseInt(bexley.NO2) == 10) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_red.png";
    }
    //brent
    brent.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(brent.NO2) == 1 || parseInt(brent.NO2) == 2 || parseInt(brent.NO2) ==3){
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_green.png";
    } else if (parseInt(brent.NO2) == 4 || parseInt(brent.NO2) == 5 || parseInt(brent.NO2) ==6) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_orange.png";
    } else if (parseInt(brent.NO2) == 7 || parseInt(brent.NO2) == 8 || parseInt(brent.NO2) ==9 || parseInt(brent.NO2) == 10) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_red.png";
    }
    //bromley
    bromley.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[0]["@AirQualityIndex"];
    if (parseInt(bromley.NO2) == 1 || parseInt(bromley.NO2) == 2 || parseInt(bromley.NO2) ==3){
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_green.png";
    } else if (parseInt(bromley.NO2) == 4 || parseInt(bromley.NO2) == 5 || parseInt(bromley.NO2) ==6) {
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_orange.png";
    } else if (parseInt(bromley.NO2) == 7 || parseInt(bromley.NO2) == 8 || parseInt(bromley.NO2) ==9 || parseInt(bromley.NO2) == 10) {
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_red.png";
    }
    //camden
    camden.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(camden.NO2) == 1 || parseInt(camden.NO2) == 2 || parseInt(camden.NO2) ==3){
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_green.png";
    } else if (parseInt(camden.NO2) == 4 || parseInt(camden.NO2) == 5 || parseInt(camden.NO2) ==6) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_orange.png";
    } else if (parseInt(camden.NO2) == 7 || parseInt(camden.NO2) == 8 || parseInt(camden.NO2) ==9 || parseInt(camden.NO2) == 10) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_red.png";
    }
    //city
    const imgsrccity = document.getElementById('city');
    imgsrccity.src = "./public/londonmaps/city_white.png";
    //croydon
    croydon.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[0].Species["@AirQualityIndex"];
    if (parseInt(croydon.NO2) == 1 || parseInt(croydon.NO2) == 2 || parseInt(croydon.NO2) ==3){
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_green.png";
    } else if (parseInt(croydon.NO2) == 4 || parseInt(croydon.NO2) == 5 || parseInt(croydon.NO2) ==6) {
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_orange.png";
    } else if (parseInt(croydon.NO2) == 7 || parseInt(croydon.NO2) == 8 || parseInt(croydon.NO2) ==9 || parseInt(croydon.NO2) == 10) {
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_red.png";
    }
    //ealing
    ealing.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[8].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(ealing.NO2) == 1 || parseInt(ealing.NO2) == 2 || parseInt(ealing.NO2) ==3){
        const imgsrc6 = document.getElementById("ealing");
        imgsrc6.src = "./public/londonmaps/ealing_green.png";
    } else if (parseInt(ealing.NO2) == 4 || parseInt(ealing.NO2) == 5 || parseInt(ealing.NO2) ==6) {
        const imgsrc6 = document.getElementById("ealing");
        imgsrc6.src = "./public/londonmaps/ealing_orange.png";
    } else if (parseInt(ealing.NO2) == 7 || parseInt(ealing.NO2) == 8 || parseInt(ealing.NO2) ==9 || parseInt(ealing.NO2) == 10) {
        const imgsrc6 = document.getElementById("ealing");
        imgsrc6.src = "./public/londonmaps/ealing_red.png";
    }
    //enfield
    enfield.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[9].Site[0].Species["@AirQualityIndex"];
    if (parseInt(enfield.NO2) == 1 || parseInt(enfield.NO2) == 2 || parseInt(enfield.NO2) ==3){
        const imgsrc7 = document.getElementById("enfield");
        imgsrc7.src = "./public/londonmaps/enfield_green.png";
    } else if (parseInt(enfield.NO2) == 4 || parseInt(enfield.NO2) == 5 || parseInt(enfield.NO2) ==6) {
        const imgsrc7 = document.getElementById("enfield");
        imgsrc7.src = "./public/londonmaps/enfield_orange.png";
    } else if (parseInt(enfield.NO2) == 7 || parseInt(enfield.NO2) == 8 || parseInt(enfield.NO2) ==9 || parseInt(enfield.NO2) == 10) {
        const imgsrc7 = document.getElementById("enfield");
        imgsrc7.src = "./public/londonmaps/enfield_red.png";
    }
    //greenwich
    greenwich.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[0]["@AirQualityIndex"];
    if (parseInt(greenwich.NO2) == 1 || parseInt(greenwich.NO2) == 2 || parseInt(greenwich.NO2) ==3){
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_green.png";
    } else if (parseInt(greenwich.NO2) == 4 || parseInt(greenwich.NO2) == 5 || parseInt(greenwich.NO2) ==6) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_orange.png";
    } else if (parseInt(greenwich.NO2) == 7 || parseInt(greenwich.NO2) == 8 || parseInt(greenwich.NO2) ==9 || parseInt(greenwich.NO2) == 10) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_red.png";
    }
    //hackney
    hackney.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[0]["@AirQualityIndex"];
    if (parseInt(hackney.NO2) == 1 || parseInt(hackney.NO2) == 2 || parseInt(hackney.NO2) ==3){
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_green.png";
    } else if (parseInt(hackney.NO2) == 4 || parseInt(hackney.NO2) == 5 || parseInt(hackney.NO2) ==6) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_orange.png";
    } else if (parseInt(hackney.NO2) == 7 || parseInt(hackney.NO2) == 8 || parseInt(hackney.NO2) ==9 || parseInt(hackney.NO2) == 10) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_red.png";
    }
    //hammersmith
    const imgsrchammersmith = document.getElementById('hammersmith');
    imgsrchammersmith.src = "./public/londonmaps/hammersmith_white.png";
    //haringey
    haringey.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[13].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(haringey.NO2) == 1 || parseInt(haringey.NO2) == 2 || parseInt(haringey.NO2) ==3){
        const imgsrc10 = document.getElementById("haringey");
        imgsrc10.src = "./public/londonmaps/Haringey_green.png";
    } else if (parseInt(haringey.NO2) == 4 || parseInt(haringey.NO2) == 5 || parseInt(haringey.NO2) ==6) {
        const imgsrc10 = document.getElementById("haringey");
        imgsrc10.src = "./public/londonmaps/Haringey_orange.png";
    } else if (parseInt(haringey.NO2) == 7 || parseInt(haringey.NO2) == 8 || parseInt(haringey.NO2) ==9 || parseInt(haringey.NO2) == 10) {
        const imgsrc10 = document.getElementById("haringey");
        imgsrc10.src = "./public/londonmaps/Haringey_red.png";
    }
    //harrow
    const imgsrcharrow = document.getElementById('harrow');
    imgsrcharrow.src = "./public/londonmaps/harrow_white.png";
    //havering
    havering.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(havering.NO2) == 1 || parseInt(havering.NO2) == 2 || parseInt(havering.NO2) ==3){
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_green.png";
    } else if (parseInt(havering.NO2) == 4 || parseInt(havering.NO2) == 5 || parseInt(havering.NO2) ==6) {
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_orange.png";
    } else if (parseInt(havering.NO2) == 7 || parseInt(havering.NO2) == 8 || parseInt(havering.NO2) ==9 || parseInt(havering.NO2) == 10) {
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_red.png";
    }
    //hillingdon
    hillingdon.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(hillingdon.NO2) == 1 || parseInt(hillingdon.NO2) == 2 || parseInt(hillingdon.NO2) ==3){
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_green.png";
    } else if (parseInt(hillingdon.NO2) == 4 || parseInt(hillingdon.NO2) == 5 || parseInt(hillingdon.NO2) ==6) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_orange.png";
    } else if (parseInt(hillingdon.NO2) == 7 || parseInt(hillingdon.NO2) == 8 || parseInt(hillingdon.NO2) ==9 || parseInt(hillingdon.NO2) == 10) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_red.png";
    }
    //hounslow
    const imgsrchounslow = document.getElementById('hounslow');
    imgsrchounslow.src = "./public/londonmaps/hounslow_white.png"
    //islington
    islington.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[18].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(islington.NO2) == 1 || parseInt(islington.NO2) == 2 || parseInt(islington.NO2) ==3){
        const imgsrc13 = document.getElementById("islington");
        imgsrc13.src = "./public/londonmaps/islington_green.png";
    } else if (parseInt(islington.NO2) == 4 || parseInt(islington.NO2) == 5 || parseInt(islington.NO2) ==6) {
        const imgsrc13 = document.getElementById("islington");
        imgsrc13.src = "./public/londonmaps/islington_orange.png";
    } else if (parseInt(islington.NO2) == 7 || parseInt(islington.NO2) == 8 || parseInt(islington.NO2) ==9 || parseInt(islington.NO2) == 10) {
        const imgsrc13 = document.getElementById("islington");
        imgsrc13.src = "./public/londonmaps/islington_red.png";
    }
    //kc
    kc.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(kc.NO2) == 1 || parseInt(kc.NO2) == 2 || parseInt(kc.NO2) ==3){
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_green.png";
    } else if (parseInt(kc.NO2) == 4 || parseInt(kc.NO2) == 5 || parseInt(kc.NO2) ==6) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_orange.png";
    } else if (parseInt(kc.NO2) == 7 || parseInt(kc.NO2) == 8 || parseInt(kc.NO2) ==9 || parseInt(kc.NO2) == 10) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_red.png";
    }
    //kingston
    kingston.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(kingston.NO2) == 1 || parseInt(kingston.NO2) == 2 || parseInt(kingston.NO2) ==3){
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_green.png";
    } else if (parseInt(kingston.NO2) == 4 || parseInt(kingston.NO2) == 5 || parseInt(kingston.NO2) ==6) {
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_orange.png";
    } else if (parseInt(kingston.NO2) == 7 || parseInt(kingston.NO2) == 8 || parseInt(kingston.NO2) ==9 || parseInt(kingston.NO2) == 10) {
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_red.png";
    }
    //lambeth
    lambeth.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(lambeth.NO2) == 1 || parseInt(lambeth.NO2) == 2 || parseInt(lambeth.NO2) ==3){
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_green.png";
    } else if (parseInt(lambeth.NO2) == 4 || parseInt(lambeth.NO2) == 5 || parseInt(lambeth.NO2) ==6) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_orange.png";
    } else if (parseInt(lambeth.NO2) == 7 || parseInt(lambeth.NO2) == 8 || parseInt(lambeth.NO2) ==9 || parseInt(lambeth.NO2) == 10) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_red.png";
    }
    //lewisham
    lewisham.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(lewisham.NO2) == 1 || parseInt(lewisham.NO2) == 2 || parseInt(lewisham.NO2) ==3){
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_green.png";
    } else if (parseInt(lewisham.NO2) == 4 || parseInt(lewisham.NO2) == 5 || parseInt(lewisham.NO2) ==6) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_orange.png";
    } else if (parseInt(lewisham.NO2) == 7 || parseInt(lewisham.NO2) == 8 || parseInt(lewisham.NO2) ==9 || parseInt(lewisham.NO2) == 10) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_red.png";
    }
    //merton
    merton.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[23].Site[1].Species["@AirQualityIndex"];
    if (parseInt(merton.NO2) == 1 || parseInt(merton.NO2) == 2 || parseInt(merton.NO2) ==3){
        const imgsrc18 = document.getElementById("merton");
        imgsrc18.src = "./public/londonmaps/merton_green.png";
    } else if (parseInt(merton.NO2) == 4 || parseInt(merton.NO2) == 5 || parseInt(merton.NO2) ==6) {
        const imgsrc18 = document.getElementById("merton");
        imgsrc18.src = "./public/londonmaps/merton_orange.png";
    } else if (parseInt(merton.NO2) == 7 || parseInt(merton.NO2) == 8 || parseInt(merton.NO2) ==9 || parseInt(merton.NO2) == 10) {
        const imgsrc18 = document.getElementById("merton");
        imgsrc18.src = "./public/londonmaps/merton_red.png";
    }
    //newham
    newham.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(newham.NO2) == 1 || parseInt(newham.NO2) == 2 || parseInt(newham.NO2) ==3){
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_green.png";
    } else if (parseInt(newham.NO2) == 4 || parseInt(newham.NO2) == 5 || parseInt(newham.NO2) ==6) {
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_orange.png";
    } else if (parseInt(newham.NO2) == 7 || parseInt(newham.NO2) == 8 || parseInt(newham.NO2) ==9 || parseInt(newham.NO2) == 10) {
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_red.png";
    }
    //redbridge
    redbridge.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(redbridge.NO2) == 1 || parseInt(redbridge.NO2) == 2 || parseInt(redbridge.NO2) ==3){
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_green.png";
    } else if (parseInt(redbridge.NO2) == 4 || parseInt(redbridge.NO2) == 5 || parseInt(redbridge.NO2) ==6) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_orange.png";
    } else if (parseInt(redbridge.NO2) == 7 || parseInt(redbridge.NO2) == 8 || parseInt(redbridge.NO2) ==9 || parseInt(redbridge.NO2) == 10) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_red.png";
    }
    //richmond
    richmond.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(richmond.NO2) == 1 || parseInt(richmond.NO2) == 2 || parseInt(richmond.NO2) ==3){
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_green.png";
    } else if (parseInt(richmond.NO2) == 4 || parseInt(richmond.NO2) == 5 || parseInt(richmond.NO2) ==6) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_orange.png";
    } else if (parseInt(richmond.NO2) == 7 || parseInt(richmond.NO2) == 8 || parseInt(richmond.NO2) ==9 || parseInt(richmond.NO2) == 10) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_red.png";
    }
    //southwark
    southwark.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(southwark.NO2) == 1 || parseInt(southwark.NO2) == 2 || parseInt(southwark.NO2) ==3){
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_green.png";
    } else if (parseInt(southwark.NO2) == 4 || parseInt(southwark.NO2) == 5 || parseInt(southwark.NO2) ==6) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_orange.png";
    } else if (parseInt(southwark.NO2) == 7 || parseInt(southwark.NO2) == 8 || parseInt(southwark.NO2) ==9 || parseInt(southwark.NO2) == 10) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_red.png";
    }
    //sutton
    sutton.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(sutton.NO2) == 1 || parseInt(sutton.NO2) == 2 || parseInt(sutton.NO2) ==3){
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_green.png";
    } else if (parseInt(sutton.NO2) == 4 || parseInt(sutton.NO2) == 5 || parseInt(sutton.NO2) ==6) {
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_orange.png";
    } else if (parseInt(sutton.NO2) == 7 || parseInt(sutton.NO2) == 8 || parseInt(sutton.NO2) ==9 || parseInt(sutton.NO2) == 10) {
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_red.png";
    }
    //towerhamlet
    towerhamlet.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(towerhamlet.NO2) == 1 || parseInt(towerhamlet.NO2) == 2 || parseInt(towerhamlet.NO2) ==3){
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_green.png";
    } else if (parseInt(towerhamlet.NO2) == 4 || parseInt(towerhamlet.NO2) == 5 || parseInt(towerhamlet.NO2) ==6) {
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_orange.png";
    } else if (parseInt(towerhamlet.NO2) == 7 || parseInt(towerhamlet.NO2) == 8 || parseInt(towerhamlet.NO2) ==9 || parseInt(towerhamlet.NO2) == 10) {
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_red.png";
    }
    //waltham
    const imgsrcwaltham = document.getElementById('walthamforest');
    imgsrcwaltham.src = "./public/londonmaps/walthamforest_white.png";
    //wandsworth
    wandsworth.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(wandsworth.NO2) == 1 || parseInt(wandsworth.NO2) == 2 || parseInt(wandsworth.NO2) ==3){
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_green.png";
    } else if (parseInt(wandsworth.NO2) == 4 || parseInt(wandsworth.NO2) == 5 || parseInt(wandsworth.NO2) ==6) {
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_orange.png";
    } else if (parseInt(wandsworth.NO2) == 7 || parseInt(wandsworth.NO2) == 8 || parseInt(wandsworth.NO2) ==9 || parseInt(wandsworth.NO2) == 10) {
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_red.png";
    }
    //westminster
    westminster.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(westminster.NO2) == 1 || parseInt(westminster.NO2) == 2 || parseInt(westminster.NO2) ==3){
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_green.png";
    } else if (parseInt(westminster.NO2) == 4 || parseInt(westminster.NO2) == 5 || parseInt(westminster.NO2) ==6) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_orange.png";
    } else if (parseInt(westminster.NO2) == 7 || parseInt(westminster.NO2) == 8 || parseInt(westminster.NO2) ==9 || parseInt(haringey.NO2) == 10) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_red.png";
    }


}

//for O3 data display
async function setmapO3(){
    const response = await fetch("https://api.erg.ic.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json");
    const apidata = await response.json();
    barking=barnet=bexley=brent=bromley=camden=city=croydon=ealing=enfield=greenwich=hackney=hammersmith=haringey=harrow=havering=hillingdon=hounslow=islington=kc=kingston=lambeth=lewisham=merton=newham=redbridge=richmond=southwark=sutton=towerhamlet=waltham=wandsworth=westminster=AQIdata;
    //barking
    const imgsrcbarking = document.getElementById('barking');
    imgsrcbarking.src = "./public/londonmaps/Barking_white.png";
    //barnet
    const imgsrcbarnet = document.getElementById('barnet');
    imgsrcbarnet.src = "./public/londonmaps/barnet_white.png";
    //bexley
    bexley.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(bexley.O3) == 1 || parseInt(bexley.O3) == 2 || parseInt(bexley.O3) ==3){
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_green.png";
    } else if (parseInt(bexley.O3) == 4 || parseInt(bexley.O3) == 5 || parseInt(bexley.O3) ==6) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_orange.png";
    } else if (parseInt(bexley.O3) == 7 || parseInt(bexley.O3) == 8 || parseInt(bexley.O3) ==9 || parseInt(bexley.O3) == 10) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_red.png";
    }
    //brent
    brent.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(brent.O3) == 1 || parseInt(brent.O3) == 2 || parseInt(brent.O3) ==3){
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_green.png";
    } else if (parseInt(brent.O3) == 4 || parseInt(brent.O3) == 5 || parseInt(brent.O3) ==6) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_orange.png";
    } else if (parseInt(brent.O3) == 7 || parseInt(brent.O3) == 8 || parseInt(brent.O3) ==9 || parseInt(brent.O3) == 10) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_red.png";
    }
    //bromley
    const imgsrcbromley = document.getElementById('bromley');
    imgsrcbromley.src = "./public/londonmaps/bromley_white.png";
    //camden
    camden.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(camden.O3) == 1 || parseInt(camden.O3) == 2 || parseInt(camden.O3) ==3){
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_green.png";
    } else if (parseInt(camden.O3) == 4 || parseInt(camden.O3) == 5 || parseInt(camden.O3) ==6) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_orange.png";
    } else if (parseInt(camden.O3) == 7 || parseInt(camden.O3) == 8 || parseInt(camden.O3) ==9 || parseInt(camden.O3) == 10) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_red.png";
    }
    //city
    const imgsrccity = document.getElementById('city');
    imgsrccity.src = "./public/londonmaps/city_white.png";
    //croydon
    const imgsrccroydon = document.getElementById('croydon');
    imgsrccroydon.src = "./public/londonmaps/croydon_white.png";
    //ealing
    const imgsrcealing = document.getElementById('ealing');
    imgsrcealing.src = "./public/londonmaps/ealing_white.png";
    //enfield
    const imgsrcenfield = document.getElementById('enfield');
    imgsrcenfield.src = "./public/londonmaps/enfield_white.png";
    //greenwich
    greenwich.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[3].Species[1]["@AirQualityIndex"];
    if (parseInt(greenwich.O3) == 1 || parseInt(greenwich.O3) == 2 || parseInt(greenwich.O3) ==3){
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_green.png";
    } else if (parseInt(greenwich.O3) == 4 || parseInt(greenwich.O3) == 5 || parseInt(greenwich.O3) ==6) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_orange.png";
    } else if (parseInt(greenwich.O3) == 7 || parseInt(greenwich.O3) == 8 || parseInt(greenwich.O3) ==9 || parseInt(greenwich.O3) == 10) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_red.png";
    }
    //hackney
    hackney.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[1]["@AirQualityIndex"];
    if (parseInt(hackney.O3) == 1 || parseInt(hackney.O3) == 2 || parseInt(hackney.O3) ==3){
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_green.png";
    } else if (parseInt(hackney.O3) == 4 || parseInt(hackney.O3) == 5 || parseInt(hackney.O3) ==6) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_orange.png";
    } else if (parseInt(hackney.O3) == 7 || parseInt(hackney.O3) == 8 || parseInt(hackney.O3) ==9 || parseInt(hackney.O3) == 10) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_red.png";
    }
    //hammersmith
    const imgsrchammersmith = document.getElementById('hammersmith');
    imgsrchammersmith.src = "./public/londonmaps/hammersmith_white.png";
    //haringey
    haringey.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[13].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(haringey.O3) == 1 || parseInt(haringey.O3) == 2 || parseInt(haringey.O3) ==3){
        const imgsrc10 = document.getElementById("haringey");
        imgsrc10.src = "./public/londonmaps/Haringey_green.png";
    } else if (parseInt(haringey.O3) == 4 || parseInt(haringey.O3) == 5 || parseInt(haringey.O3) ==6) {
        const imgsrc10 = document.getElementById("haringey");
        imgsrc10.src = "./public/londonmaps/Haringey_orange.png";
    } else if (parseInt(haringey.O3) == 7 || parseInt(haringey.O3) == 8 || parseInt(haringey.O3) ==9 || parseInt(haringey.O3) == 10) {
        const imgsrc10 = document.getElementById("haringey");
        imgsrc10.src = "./public/londonmaps/Haringey_red.png";
    }
    //harrow
    const imgsrcharrow = document.getElementById('harrow');
    imgsrcharrow.src = "./public/londonmaps/harrow_white.png";
    //havering
    const imgsrchavering = document.getElementById('havering');
    imgsrchavering.src = "./public/londonmaps/Havering_white.png";
    //hillingdon
    hillingdon.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(hillingdon.O3) == 1 || parseInt(hillingdon.O3) == 2 || parseInt(hillingdon.O3) ==3){
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_green.png";
    } else if (parseInt(hillingdon.O3) == 4 || parseInt(hillingdon.O3) == 5 || parseInt(hillingdon.O3) ==6) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_orange.png";
    } else if (parseInt(hillingdon.O3) == 7 || parseInt(hillingdon.O3) == 8 || parseInt(hillingdon.O3) ==9 || parseInt(hillingdon.O3) == 10) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_red.png";
    }
    //hounslow
    const imgsrchounslow = document.getElementById('hounslow');
    imgsrchounslow.src = "./public/londonmaps/hounslow_white.png"
    //islington
    const imgsrcislington = document.getElementById('islington');
    imgsrcislington.src = "./public/londonmaps/islington_white.png";
    //kc
    kc.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(kc.O3) == 1 || parseInt(kc.O3) == 2 || parseInt(kc.O3) ==3){
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_green.png";
    } else if (parseInt(kc.O3) == 4 || parseInt(kc.O3) == 5 || parseInt(kc.O3) ==6) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_orange.png";
    } else if (parseInt(kc.O3) == 7 || parseInt(kc.O3) == 8 || parseInt(kc.O3) ==9 || parseInt(kc.O3) == 10) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_red.png";
    }
    //kingston
    const imgsrckingston = document.getElementById('kingston');
    imgsrckingston.src = "./public/londonmaps/kingston_white.png";
    //lambeth
    const imgsrclambeth = document.getElementById('lambeth');
    imgsrclambeth.src = "./public/londonmaps/lambeth_white.png";
    //lewisham
    lewisham.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(lewisham.O3) == 1 || parseInt(lewisham.O3) == 2 || parseInt(lewisham.O3) ==3){
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_green.png";
    } else if (parseInt(lewisham.O3) == 4 || parseInt(lewisham.O3) == 5 || parseInt(lewisham.O3) ==6) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_orange.png";
    } else if (parseInt(lewisham.O3) == 7 || parseInt(lewisham.O3) == 8 || parseInt(lewisham.O3) ==9 || parseInt(lewisham.O3) == 10) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_red.png";
    }
    //merton
    const imgsrcmerton = document.getElementById('merton');
    imgsrcmerton.src = "./public/londonmaps/merton_white.png";
    //newham
    const imgsrcnewham = document.getElementById('newham');
    imgsrcnewham.src = "./public/londonmaps/newham_white.png";
    //redbridge
    redbridge.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(redbridge.O3) == 1 || parseInt(redbridge.O3) == 2 || parseInt(redbridge.O3) ==3){
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_green.png";
    } else if (parseInt(redbridge.O3) == 4 || parseInt(redbridge.O3) == 5 || parseInt(redbridge.O3) ==6) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_orange.png";
    } else if (parseInt(redbridge.O3) == 7 || parseInt(redbridge.O3) == 8 || parseInt(redbridge.O3) ==9 || parseInt(redbridge.O3) == 10) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_red.png";
    }
    //richmond
    richmond.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(richmond.O3) == 1 || parseInt(richmond.O3) == 2 || parseInt(richmond.O3) ==3){
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_green.png";
    } else if (parseInt(richmond.O3) == 4 || parseInt(richmond.O3) == 5 || parseInt(richmond.O3) ==6) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_orange.png";
    } else if (parseInt(richmond.O3) == 7 || parseInt(richmond.O3) == 8 || parseInt(richmond.O3) ==9 || parseInt(richmond.O3) == 10) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_red.png";
    }
    //southwark
    southwark.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(southwark.O3) == 1 || parseInt(southwark.O3) == 2 || parseInt(southwark.O3) ==3){
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_green.png";
    } else if (parseInt(southwark.O3) == 4 || parseInt(southwark.O3) == 5 || parseInt(southwark.O3) ==6) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_orange.png";
    } else if (parseInt(southwark.O3) == 7 || parseInt(southwark.O3) == 8 || parseInt(southwark.O3) ==9 || parseInt(southwark.O3) == 10) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_red.png";
    }
    //sutton
    const imgsrcsutton = document.getElementById('sutton');
    imgsrcsutton.src = "./public/londonmaps/sutton_white.png";
    //towerhamlet
    const imgsrctowerhamlet = document.getElementById('towerhamlet');
    imgsrctowerhamlet.src = "./public/londonmaps/towerhamlet_white.png";
    //waltham
    const imgsrcwaltham = document.getElementById('walthamforest');
    imgsrcwaltham.src = "./public/londonmaps/walthamforest_white.png";
    //wandsworth
    wandsworth.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(wandsworth.O3) == 1 || parseInt(wandsworth.O3) == 2 || parseInt(wandsworth.O3) ==3){
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_green.png";
    } else if (parseInt(wandsworth.O3) == 4 || parseInt(wandsworth.O3) == 5 || parseInt(wandsworth.O3) ==6) {
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_orange.png";
    } else if (parseInt(wandsworth.O3) == 7 || parseInt(wandsworth.O3) == 8 || parseInt(wandsworth.O3) ==9 || parseInt(wandsworth.O3) == 10) {
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_red.png";
    }
    //westminster
    westminster.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(westminster.O3) == 1 || parseInt(westminster.O3) == 2 || parseInt(westminster.O3) ==3){
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_green.png";
    } else if (parseInt(westminster.O3) == 4 || parseInt(westminster.O3) == 5 || parseInt(westminster.O3) ==6) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_orange.png";
    } else if (parseInt(westminster.O3) == 7 || parseInt(westminster.O3) == 8 || parseInt(westminster.O3) ==9 || parseInt(haringey.O3) == 10) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_red.png";
    }


}

//for PM10 data display
async function setmapPM10(){
    const response = await fetch("https://api.erg.ic.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json");
    const apidata = await response.json();
    barking=barnet=bexley=brent=bromley=camden=city=croydon=ealing=enfield=greenwich=hackney=hammersmith=haringey=harrow=havering=hillingdon=hounslow=islington=kc=kingston=lambeth=lewisham=merton=newham=redbridge=richmond=southwark=sutton=towerhamlet=waltham=wandsworth=westminster=AQIdata;
    //barking
    barking.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(barking.PM10) == 1 || parseInt(barking.PM10) == 2 || parseInt(barking.PM10) ==3){
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_green.png";
    } else if (parseInt(barking.PM10) == 4 || parseInt(barking.PM10) == 5 || parseInt(barking.PM10) ==6) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_orange.png";
    } else if (parseInt(barking.PM10) == 7 || parseInt(barking.PM10) == 8 || parseInt(barking.PM10) ==9 || parseInt(barking.PM10) == 10) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_red.png";
    }
    //barnet
    const imgsrcbarnet = document.getElementById('barnet');
    imgsrcbarnet.src = "./public/londonmaps/barnet_white.png";
    //bexley
    bexley.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(bexley.PM10) == 1 || parseInt(bexley.PM10) == 2 || parseInt(bexley.PM10) ==3){
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_green.png";
    } else if (parseInt(bexley.PM10) == 4 || parseInt(bexley.PM10) == 5 || parseInt(bexley.PM10) ==6) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_orange.png";
    } else if (parseInt(bexley.P    ) == 7 || parseInt(bexley.PM10) == 8 || parseInt(bexley.PM10) ==9 || parseInt(bexley.PM10) == 10) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_red.png";
    }
    //brent
    brent.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(brent.PM10) == 1 || parseInt(brent.PM10) == 2 || parseInt(brent.PM10) ==3){
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_green.png";
    } else if (parseInt(brent.PM10) == 4 || parseInt(brent.PM10) == 5 || parseInt(brent.PM10) ==6) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_orange.png";
    } else if (parseInt(brent.PM10) == 7 || parseInt(brent.PM10) == 8 || parseInt(brent.PM10) ==9 || parseInt(brent.PM10) == 10) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_red.png";
    }
    //bromley
    bromley.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[1]["@AirQualityIndex"];
    if (parseInt(bromley.PM10) == 1 || parseInt(bromley.PM10) == 2 || parseInt(bromley.PM10) ==3){
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_green.png";
    } else if (parseInt(bromley.PM10) == 4 || parseInt(bromley.PM10) == 5 || parseInt(bromley.PM10) ==6) {
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_orange.png";
    } else if (parseInt(bromley.PM10) == 7 || parseInt(bromley.PM10) == 8 || parseInt(bromley.PM10) ==9 || parseInt(bromley.PM10) == 10) {
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_red.png";
    }
    //camden
    camden.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(camden.PM10) == 1 || parseInt(camden.PM10) == 2 || parseInt(camden.PM10) ==3){
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_green.png";
    } else if (parseInt(camden.PM10) == 4 || parseInt(camden.PM10) == 5 || parseInt(camden.PM10) ==6) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_orange.png";
    } else if (parseInt(camden.PM10) == 7 || parseInt(camden.PM10) == 8 || parseInt(camden.PM10) ==9 || parseInt(camden.PM10) == 10) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_red.png";
    }
    //city
    const imgsrccity = document.getElementById('city');
    imgsrccity.src = "./public/londonmaps/city_white.png";
    //croydon
    croydon.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[3].Species[1]["@AirQualityIndex"];
    if (parseInt(croydon.PM10) == 1 || parseInt(croydon.PM10) == 2 || parseInt(croydon.PM10) ==3){
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_green.png";
    } else if (parseInt(croydon.PM10) == 4 || parseInt(croydon.PM10) == 5 || parseInt(croydon.PM10) ==6) {
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_orange.png";
    } else if (parseInt(croydon.PM10) == 7 || parseInt(croydon.PM10) == 8 || parseInt(croydon.PM10) ==9 || parseInt(croydon.PM10) == 10) {
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_red.png";
    }
    //ealing
    ealing.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[8].Site[2].Species[1]["@AirQualityIndex"];
    if (parseInt(ealing.PM10) == 1 || parseInt(ealing.PM10) == 2 || parseInt(ealing.PM10) ==3){
        const imgsrc6 = document.getElementById("ealing");
        imgsrc6.src = "./public/londonmaps/ealing_green.png";
    } else if (parseInt(ealing.PM10) == 4 || parseInt(ealing.PM10) == 5 || parseInt(ealing.PM10) ==6) {
        const imgsrc6 = document.getElementById("ealing");
        imgsrc6.src = "./public/londonmaps/ealing_orange.png";
    } else if (parseInt(ealing.PM10) == 7 || parseInt(ealing.PM10) == 8 || parseInt(ealing.PM10) ==9 || parseInt(ealing.PM10) == 10) {
        const imgsrc6 = document.getElementById("ealing");
        imgsrc6.src = "./public/londonmaps/ealing_red.png";
    }
    //enfield
    enfield.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[9].Site[2].Species[1]["@AirQualityIndex"];
    if (parseInt(enfield.PM10) == 1 || parseInt(enfield.PM10) == 2 || parseInt(enfield.PM10) ==3){
        const imgsrc7 = document.getElementById("enfield");
        imgsrc7.src = "./public/londonmaps/enfield_green.png";
    } else if (parseInt(enfield.PM10) == 4 || parseInt(enfield.PM10) == 5 || parseInt(enfield.PM10) ==6) {
        const imgsrc7 = document.getElementById("enfield");
        imgsrc7.src = "./public/londonmaps/enfield_orange.png";
    } else if (parseInt(enfield.PM10) == 7 || parseInt(enfield.PM10) == 8 || parseInt(enfield.PM10) ==9 || parseInt(enfield.PM10) == 10) {
        const imgsrc7 = document.getElementById("enfield");
        imgsrc7.src = "./public/londonmaps/enfield_red.png";
    }
    //greenwich
    greenwich.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[1]["@AirQualityIndex"];
    if (parseInt(greenwich.PM10) == 1 || parseInt(greenwich.PM10) == 2 || parseInt(greenwich.PM10) ==3){
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_green.png";
    } else if (parseInt(greenwich.PM10) == 4 || parseInt(greenwich.PM10) == 5 || parseInt(greenwich.PM10) ==6) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_orange.png";
    } else if (parseInt(greenwich.PM10) == 7 || parseInt(greenwich.PM10) == 8 || parseInt(greenwich.PM10) ==9 || parseInt(greenwich.PM10) == 10) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_red.png";
    }
    //hackney
    hackney.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[2]["@AirQualityIndex"];
    if (parseInt(hackney.PM10) == 1 || parseInt(hackney.PM10) == 2 || parseInt(hackney.PM10) ==3){
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_green.png";
    } else if (parseInt(hackney.PM10) == 4 || parseInt(hackney.PM10) == 5 || parseInt(hackney.PM10) ==6) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_orange.png";
    } else if (parseInt(hackney.PM10) == 7 || parseInt(hackney.PM10) == 8 || parseInt(hackney.PM10) ==9 || parseInt(hackney.PM10) == 10) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_red.png";
    }
    //hammersmith
    const imgsrchammersmith = document.getElementById('hammersmith');
    imgsrchammersmith.src = "./public/londonmaps/hammersmith_white.png";
    //haringey
    const imgsrcharingey = document.getElementById('haringey');
    imgsrcharingey.src = "./public/londonmaps/Haringey_white.png";
    //harrow
    const imgsrcharrow = document.getElementById('harrow');
    imgsrcharrow.src = "./public/londonmaps/harrow_white.png";
    //havering
    havering.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(havering.PM10) == 1 || parseInt(havering.PM10) == 2 || parseInt(havering.PM10) ==3){
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_green.png";
    } else if (parseInt(havering.PM10) == 4 || parseInt(havering.PM10) == 5 || parseInt(havering.PM10) ==6) {
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_orange.png";
    } else if (parseInt(havering.PM10) == 7 || parseInt(havering.PM10) == 8 || parseInt(havering.PM10) ==9 || parseInt(havering.PM10) == 10) {
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_red.png";
    }
    //hillingdon
    hillingdon.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[2]["@AirQualityIndex"];
    if (parseInt(hillingdon.PM10) == 1 || parseInt(hillingdon.PM10) == 2 || parseInt(hillingdon.PM10) ==3){
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_green.png";
    } else if (parseInt(hillingdon.PM10) == 4 || parseInt(hillingdon.PM10) == 5 || parseInt(hillingdon.PM10) ==6) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_orange.png";
    } else if (parseInt(hillingdon.PM10) == 7 || parseInt(hillingdon.PM10) == 8 || parseInt(hillingdon.PM10) ==9 || parseInt(hillingdon.PM10) == 10) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_red.png";
    }
    //hounslow
    const imgsrchounslow = document.getElementById('hounslow');
    imgsrchounslow.src = "./public/londonmaps/hounslow_white.png"
    //islington
    islington.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[18].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(islington.PM10) == 1 || parseInt(islington.PM10) == 2 || parseInt(islington.PM10) ==3){
        const imgsrc13 = document.getElementById("islington");
        imgsrc13.src = "./public/londonmaps/islington_green.png";
    } else if (parseInt(islington.PM10) == 4 || parseInt(islington.PM10) == 5 || parseInt(islington.PM10) ==6) {
        const imgsrc13 = document.getElementById("islington");
        imgsrc13.src = "./public/londonmaps/islington_orange.png";
    } else if (parseInt(islington.PM10) == 7 || parseInt(islington.PM10) == 8 || parseInt(islington.PM10) ==9 || parseInt(islington.PM10) == 10) {
        const imgsrc13 = document.getElementById("islington");
        imgsrc13.src = "./public/londonmaps/islington_red.png";
    }
    //kc
    kc.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(kc.PM10) == 1 || parseInt(kc.PM10) == 2 || parseInt(kc.PM10) ==3){
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_green.png";
    } else if (parseInt(kc.PM10) == 4 || parseInt(kc.PM10) == 5 || parseInt(kc.PM10) ==6) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_orange.png";
    } else if (parseInt(kc.PM10) == 7 || parseInt(kc.PM10) == 8 || parseInt(kc.PM10) ==9 || parseInt(kc.PM10) == 10) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_red.png";
    }
    //kingston
    kingston.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(kingston.PM10) == 1 || parseInt(kingston.PM10) == 2 || parseInt(kingston.PM10) ==3){
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_green.png";
    } else if (parseInt(kingston.PM10) == 4 || parseInt(kingston.PM10) == 5 || parseInt(kingston.PM10) ==6) {
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_orange.png";
    } else if (parseInt(kingston.PM10) == 7 || parseInt(kingston.PM10) == 8 || parseInt(kingston.PM10) ==9 || parseInt(kingston.PM10) == 10) {
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_red.png";
    }
    //lambeth
    lambeth.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(lambeth.PM10) == 1 || parseInt(lambeth.PM10) == 2 || parseInt(lambeth.PM10) ==3){
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_green.png";
    } else if (parseInt(lambeth.PM10) == 4 || parseInt(lambeth.PM10) == 5 || parseInt(lambeth.PM10) ==6) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_orange.png";
    } else if (parseInt(lambeth.PM10) == 7 || parseInt(lambeth.PM10) == 8 || parseInt(lambeth.PM10) ==9 || parseInt(lambeth.PM10) == 10) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_red.png";
    }
    //lewisham
    lewisham.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(lewisham.PM10) == 1 || parseInt(lewisham.PM10) == 2 || parseInt(lewisham.PM10) ==3){
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_green.png";
    } else if (parseInt(lewisham.PM10) == 4 || parseInt(lewisham.PM10) == 5 || parseInt(lewisham.PM10) ==6) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_orange.png";
    } else if (parseInt(lewisham.PM10) == 7 || parseInt(lewisham.PM10) == 8 || parseInt(lewisham.PM10) ==9 || parseInt(lewisham.PM10) == 10) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_red.png";
    }
    //merton
    merton.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[23].Site[0].Species["@AirQualityIndex"];
    if (parseInt(merton.PM10) == 1 || parseInt(merton.PM10) == 2 || parseInt(merton.PM10) ==3){
        const imgsrc18 = document.getElementById("merton");
        imgsrc18.src = "./public/londonmaps/merton_green.png";
    } else if (parseInt(merton.PM10) == 4 || parseInt(merton.PM10) == 5 || parseInt(merton.PM10) ==6) {
        const imgsrc18 = document.getElementById("merton");
        imgsrc18.src = "./public/londonmaps/merton_orange.png";
    } else if (parseInt(merton.PM10) == 7 || parseInt(merton.PM10) == 8 || parseInt(merton.PM10) ==9 || parseInt(merton.PM10) == 10) {
        const imgsrc18 = document.getElementById("merton");
        imgsrc18.src = "./public/londonmaps/merton_red.png";
    }
    //newham
    newham.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(newham.PM10) == 1 || parseInt(newham.PM10) == 2 || parseInt(newham.PM10) ==3){
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_green.png";
    } else if (parseInt(newham.PM10) == 4 || parseInt(newham.PM10) == 5 || parseInt(newham.PM10) ==6) {
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_orange.png";
    } else if (parseInt(newham.PM10) == 7 || parseInt(newham.PM10) == 8 || parseInt(newham.PM10) ==9 || parseInt(newham.PM10) == 10) {
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_red.png";
    }
    //redbridge
    redbridge.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[2]["@AirQualityIndex"];
    if (parseInt(redbridge.PM10) == 1 || parseInt(redbridge.PM10) == 2 || parseInt(redbridge.PM10) ==3){
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_green.png";
    } else if (parseInt(redbridge.PM10) == 4 || parseInt(redbridge.PM10) == 5 || parseInt(redbridge.PM10) ==6) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_orange.png";
    } else if (parseInt(redbridge.PM10) == 7 || parseInt(redbridge.PM10) == 8 || parseInt(redbridge.PM10) ==9 || parseInt(redbridge.PM10) == 10) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_red.png";
    }
    //richmond
    richmond.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(richmond.PM10) == 1 || parseInt(richmond.PM10) == 2 || parseInt(richmond.PM10) ==3){
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_green.png";
    } else if (parseInt(richmond.PM10) == 4 || parseInt(richmond.PM10) == 5 || parseInt(richmond.PM10) ==6) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_orange.png";
    } else if (parseInt(richmond.PM10) == 7 || parseInt(richmond.PM10) == 8 || parseInt(richmond.PM10) ==9 || parseInt(richmond.PM10) == 10) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_red.png";
    }
    //southwark
    southwark.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[2]["@AirQualityIndex"];
    if (parseInt(southwark.PM10) == 1 || parseInt(southwark.PM10) == 2 || parseInt(southwark.PM10) ==3){
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_green.png";
    } else if (parseInt(southwark.PM10) == 4 || parseInt(southwark.PM10) == 5 || parseInt(southwark.PM10) ==6) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_orange.png";
    } else if (parseInt(southwark.PM10) == 7 || parseInt(southwark.PM10) == 8 || parseInt(southwark.PM10) ==9 || parseInt(southwark.PM10) == 10) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_red.png";
    }
    //sutton
    sutton.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(sutton.PM10) == 1 || parseInt(sutton.PM10) == 2 || parseInt(sutton.PM10) ==3){
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_green.png";
    } else if (parseInt(sutton.PM10) == 4 || parseInt(sutton.PM10) == 5 || parseInt(sutton.PM10) ==6) {
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_orange.png";
    } else if (parseInt(sutton.PM10) == 7 || parseInt(sutton.PM10) == 8 || parseInt(sutton.PM10) ==9 || parseInt(sutton.PM10) == 10) {
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_red.png";
    }
    //towerhamlet
    towerhamlet.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(towerhamlet.PM10) == 1 || parseInt(towerhamlet.PM10) == 2 || parseInt(towerhamlet.PM10) ==3){
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_green.png";
    } else if (parseInt(towerhamlet.PM10) == 4 || parseInt(towerhamlet.PM10) == 5 || parseInt(towerhamlet.PM10) ==6) {
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_orange.png";
    } else if (parseInt(towerhamlet.PM10) == 7 || parseInt(towerhamlet.PM10) == 8 || parseInt(towerhamlet.PM10) ==9 || parseInt(towerhamlet.PM10) == 10) {
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_red.png";
    }
    //waltham
    const imgsrcwaltham = document.getElementById('walthamforest');
    imgsrcwaltham.src = "./public/londonmaps/walthamforest_white.png";
    //wandsworth
    wandsworth.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(wandsworth.PM10) == 1 || parseInt(wandsworth.PM10) == 2 || parseInt(wandsworth.PM10) ==3){
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_green.png";
    } else if (parseInt(wandsworth.PM10) == 4 || parseInt(wandsworth.PM10) == 5 || parseInt(wandsworth.PM10) ==6) {
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_orange.png";
    } else if (parseInt(wandsworth.PM10) == 7 || parseInt(wandsworth.PM10) == 8 || parseInt(wandsworth.PM10) ==9 || parseInt(wandsworth.PM10) == 10) {
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_red.png";
    }
    //westminster
    westminster.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(westminster.PM10) == 1 || parseInt(westminster.PM10) == 2 || parseInt(westminster.PM10) ==3){
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_green.png";
    } else if (parseInt(westminster.PM10) == 4 || parseInt(westminster.PM10) == 5 || parseInt(westminster.PM10) ==6) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_orange.png";
    } else if (parseInt(westminster.PM10) == 7 || parseInt(westminster.PM10) == 8 || parseInt(westminster.PM10) ==9 || parseInt(haringey.PM10) == 10) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_red.png";
    }


}


//for PM2.5 data display
async function setmapPM25(){
    const response = await fetch("https://api.erg.ic.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json");
    const apidata = await response.json();
    barking=barnet=bexley=brent=bromley=camden=city=croydon=ealing=enfield=greenwich=hackney=hammersmith=haringey=harrow=havering=hillingdon=hounslow=islington=kc=kingston=lambeth=lewisham=merton=newham=redbridge=richmond=southwark=sutton=towerhamlet=waltham=wandsworth=westminster=AQIdata;
    //barking
    const imgsrcbarking = document.getElementById('barking');
    imgsrcbarking.src = "./public/londonmaps/Barking_white.png";
    //barnet
    const imgsrcbarnet = document.getElementById('barnet');
    imgsrcbarnet.src = "./public/londonmaps/barnet_white.png";
    //bexley
    bexley.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[3]["@AirQualityIndex"];
    if (parseInt(bexley.PM25) == 1 || parseInt(bexley.PM25) == 2 || parseInt(bexley.PM25) ==3){
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_green.png";
    } else if (parseInt(bexley.PM25) == 4 || parseInt(bexley.PM25) == 5 || parseInt(bexley.PM25) ==6) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_orange.png";
    } else if (parseInt(bexley.PM25) == 7 || parseInt(bexley.PM25) == 8 || parseInt(bexley.PM25) ==9 || parseInt(bexley.PM25) == 10) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_red.png";
    }
    //brent
    brent.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[3]["@AirQualityIndex"];
    if (parseInt(brent.PM25) == 1 || parseInt(brent.PM25) == 2 || parseInt(brent.PM25) ==3){
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_green.png";
    } else if (parseInt(brent.PM25) == 4 || parseInt(brent.PM25) == 5 || parseInt(brent.PM25) ==6) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_orange.png";
    } else if (parseInt(brent.PM25) == 7 || parseInt(brent.PM25) == 8 || parseInt(brent.PM25) ==9 || parseInt(brent.PM25) == 10) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_red.png";
    }
    //bromley
    bromley.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[2]["@AirQualityIndex"];
    if (parseInt(bromley.PM25) == 1 || parseInt(bromley.PM25) == 2 || parseInt(bromley.PM25) ==3){
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_green.png";
    } else if (parseInt(bromley.PM25) == 4 || parseInt(bromley.PM25) == 5 || parseInt(bromley.PM25) ==6) {
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_orange.png";
    } else if (parseInt(bromley.PM25) == 7 || parseInt(bromley.PM25) == 8 || parseInt(bromley.PM25) ==9 || parseInt(bromley.PM25) == 10) {
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_red.png";
    }
    //camden
    camden.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[3]["@AirQualityIndex"];
    if (parseInt(camden.PM25) == 1 || parseInt(camden.PM25) == 2 || parseInt(camden.PM25) ==3){
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_green.png";
    } else if (parseInt(camden.PM25) == 4 || parseInt(camden.PM25) == 5 || parseInt(camden.PM25) ==6) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_orange.png";
    } else if (parseInt(camden.PM25) == 7 || parseInt(camden.PM25) == 8 || parseInt(camden.PM25) ==9 || parseInt(camden.PM25) == 10) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_red.png";
    }
    //city
    const imgsrccity = document.getElementById('city');
    imgsrccity.src = "./public/londonmaps/city_white.png";
    //croydon
    croydon.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[2].Species["@AirQualityIndex"];
    if (parseInt(croydon.PM25) == 1 || parseInt(croydon.PM25) == 2 || parseInt(croydon.PM25) ==3){
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_green.png";
    } else if (parseInt(croydon.PM25) == 4 || parseInt(croydon.PM25) == 5 || parseInt(croydon.PM25) ==6) {
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_orange.png";
    } else if (parseInt(croydon.PM25) == 7 || parseInt(croydon.PM25) == 8 || parseInt(croydon.PM25) ==9 || parseInt(croydon.PM25) == 10) {
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_red.png";
    }
    //ealing
    const imgsrcealing = document.getElementById('ealing');
    imgsrcealing.src = "./public/londonmaps/ealing_white.png";
    //enfield
    const imgsrcenfield = document.getElementById('enfield');
    imgsrcenfield.src = "./public/londonmaps/enfield_white.png";
    //greenwich
    greenwich.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[2]["@AirQualityIndex"];
    if (parseInt(greenwich.PM25) == 1 || parseInt(greenwich.PM25) == 2 || parseInt(greenwich.PM25) ==3){
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_green.png";
    } else if (parseInt(greenwich.PM25) == 4 || parseInt(greenwich.PM25) == 5 || parseInt(greenwich.PM25) ==6) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_orange.png";
    } else if (parseInt(greenwich.PM25) == 7 || parseInt(greenwich.PM25) == 8 || parseInt(greenwich.PM25) ==9 || parseInt(greenwich.PM25) == 10) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_red.png";
    }
    //hackney
    hackney.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[3]["@AirQualityIndex"];
    if (parseInt(hackney.PM25) == 1 || parseInt(hackney.PM25) == 2 || parseInt(hackney.PM25) ==3){
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_green.png";
    } else if (parseInt(hackney.PM25) == 4 || parseInt(hackney.PM25) == 5 || parseInt(hackney.PM25) ==6) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_orange.png";
    } else if (parseInt(hackney.PM25) == 7 || parseInt(hackney.PM25) == 8 || parseInt(hackney.PM25) ==9 || parseInt(hackney.PM25) == 10) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_red.png";
    }
    //hammersmith
    const imgsrchammersmith = document.getElementById('hammersmith');
    imgsrchammersmith.src = "./public/londonmaps/hammersmith_white.png";
    //haringey
    const imgsrcharingey = document.getElementById('haringey');
    imgsrcharingey.src = "./public/londonmaps/Haringey_white.png";
    //harrow
    const imgsrcharrow = document.getElementById('harrow');
    imgsrcharrow.src = "./public/londonmaps/harrow_white.png";
    //havering
    havering.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(havering.PM25) == 1 || parseInt(havering.PM25) == 2 || parseInt(havering.PM25) ==3){
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_green.png";
    } else if (parseInt(havering.PM25) == 4 || parseInt(havering.PM25) == 5 || parseInt(havering.PM25) ==6) {
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_orange.png";
    } else if (parseInt(havering.PM25) == 7 || parseInt(havering.PM25) == 8 || parseInt(havering.PM25) ==9 || parseInt(havering.PM25) == 10) {
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_red.png";
    }
    //hillingdon
    hillingdon.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[3]["@AirQualityIndex"];
    if (parseInt(hillingdon.PM25) == 1 || parseInt(hillingdon.PM25) == 2 || parseInt(hillingdon.PM25) ==3){
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_green.png";
    } else if (parseInt(hillingdon.PM25) == 4 || parseInt(hillingdon.PM25) == 5 || parseInt(hillingdon.PM25) ==6) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_orange.png";
    } else if (parseInt(hillingdon.PM25) == 7 || parseInt(hillingdon.PM25) == 8 || parseInt(hillingdon.PM25) ==9 || parseInt(hillingdon.PM25) == 10) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_red.png";
    }
    //hounslow
    const imgsrchounslow = document.getElementById('hounslow');
    imgsrchounslow.src = "./public/londonmaps/hounslow_white.png"
    //islington
    const imgsrcislington = document.getElementById('islington');
    imgsrcislington.src = "./public/londonmaps/islington_white.png";
    //kc
    kc.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(kc.PM25) == 1 || parseInt(kc.PM25) == 2 || parseInt(kc.PM25) ==3){
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_green.png";
    } else if (parseInt(kc.PM25) == 4 || parseInt(kc.PM25) == 5 || parseInt(kc.PM25) ==6) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_orange.png";
    } else if (parseInt(kc.PM25) == 7 || parseInt(kc.PM25) == 8 || parseInt(kc.PM25) ==9 || parseInt(kc.PM25) == 10) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_red.png";
    }
    //kingston
    kingston.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(kingston.PM25) == 1 || parseInt(kingston.PM25) == 2 || parseInt(kingston.PM25) ==3){
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_green.png";
    } else if (parseInt(kingston.PM25) == 4 || parseInt(kingston.PM25) == 5 || parseInt(kingston.PM25) ==6) {
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_orange.png";
    } else if (parseInt(kingston.PM25) == 7 || parseInt(kingston.PM25) == 8 || parseInt(kingston.PM25) ==9 || parseInt(kingston.PM25) == 10) {
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_red.png";
    }
    //lambeth
    lambeth.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(lambeth.PM25) == 1 || parseInt(lambeth.PM25) == 2 || parseInt(lambeth.PM25) ==3){
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_green.png";
    } else if (parseInt(lambeth.PM25) == 4 || parseInt(lambeth.PM25) == 5 || parseInt(lambeth.PM25) ==6) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_orange.png";
    } else if (parseInt(lambeth.PM25) == 7 || parseInt(lambeth.PM25) == 8 || parseInt(lambeth.PM25) ==9 || parseInt(lambeth.PM25) == 10) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_red.png";
    }
    //lewisham
    lewisham.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[3]["@AirQualityIndex"];
    if (parseInt(lewisham.PM25) == 1 || parseInt(lewisham.PM25) == 2 || parseInt(lewisham.PM25) ==3){
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_green.png";
    } else if (parseInt(lewisham.PM25) == 4 || parseInt(lewisham.PM25) == 5 || parseInt(lewisham.PM25) ==6) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_orange.png";
    } else if (parseInt(lewisham.PM25) == 7 || parseInt(lewisham.PM25) == 8 || parseInt(lewisham.PM25) ==9 || parseInt(lewisham.PM25) == 10) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_red.png";
    }
    //merton
    const imgsrcmerton = document.getElementById('merton');
    imgsrcmerton.src = "./public/londonmaps/merton_white.png";
    //newham
    newham.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(newham.PM25) == 1 || parseInt(newham.PM25) == 2 || parseInt(newham.PM25) ==3){
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_green.png";
    } else if (parseInt(newham.PM25) == 4 || parseInt(newham.PM25) == 5 || parseInt(newham.PM25) ==6) {
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_orange.png";
    } else if (parseInt(newham.PM25) == 7 || parseInt(newham.PM25) == 8 || parseInt(newham.PM25) ==9 || parseInt(newham.PM25) == 10) {
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_red.png";
    }
    //redbridge
    redbridge.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[3]["@AirQualityIndex"];
    if (parseInt(redbridge.PM25) == 1 || parseInt(redbridge.PM25) == 2 || parseInt(redbridge.PM25) ==3){
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_green.png";
    } else if (parseInt(redbridge.PM25) == 4 || parseInt(redbridge.PM25) == 5 || parseInt(redbridge.PM25) ==6) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_orange.png";
    } else if (parseInt(redbridge.PM25) == 7 || parseInt(redbridge.PM25) == 8 || parseInt(redbridge.PM25) ==9 || parseInt(redbridge.PM25) == 10) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_red.png";
    }
    //richmond
    richmond.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[2].Species[1]["@AirQualityIndex"];
    if (parseInt(richmond.PM25) == 1 || parseInt(richmond.PM25) == 2 || parseInt(richmond.PM25) ==3){
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_green.png";
    } else if (parseInt(richmond.PM25) == 4 || parseInt(richmond.PM25) == 5 || parseInt(richmond.PM25) ==6) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_orange.png";
    } else if (parseInt(richmond.PM25) == 7 || parseInt(richmond.PM25) == 8 || parseInt(richmond.PM25) ==9 || parseInt(richmond.PM25) == 10) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_red.png";
    }
    //southwark
    southwark.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[3]["@AirQualityIndex"];
    if (parseInt(southwark.PM25) == 1 || parseInt(southwark.PM25) == 2 || parseInt(southwark.PM25) ==3){
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_green.png";
    } else if (parseInt(southwark.PM25) == 4 || parseInt(southwark.PM25) == 5 || parseInt(southwark.PM25) ==6) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_orange.png";
    } else if (parseInt(southwark.PM25) == 7 || parseInt(southwark.PM25) == 8 || parseInt(southwark.PM25) ==9 || parseInt(southwark.PM25) == 10) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_red.png";
    }
    //sutton
    sutton.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(sutton.PM25) == 1 || parseInt(sutton.PM25) == 2 || parseInt(sutton.PM25) ==3){
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_green.png";
    } else if (parseInt(sutton.PM25) == 4 || parseInt(sutton.PM25) == 5 || parseInt(sutton.PM25) ==6) {
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_orange.png";
    } else if (parseInt(sutton.PM25) == 7 || parseInt(sutton.PM25) == 8 || parseInt(sutton.PM25) ==9 || parseInt(sutton.PM25) == 10) {
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_red.png";
    }
    //towerhamlet
    towerhamlet.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(towerhamlet.PM25) == 1 || parseInt(towerhamlet.PM25) == 2 || parseInt(towerhamlet.PM25) ==3){
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_green.png";
    } else if (parseInt(towerhamlet.PM25) == 4 || parseInt(towerhamlet.PM25) == 5 || parseInt(towerhamlet.PM25) ==6) {
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_orange.png";
    } else if (parseInt(towerhamlet.PM25) == 7 || parseInt(towerhamlet.PM25) == 8 || parseInt(towerhamlet.PM25) ==9 || parseInt(towerhamlet.PM25) == 10) {
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_red.png";
    }
    //waltham
    const imgsrcwaltham = document.getElementById('walthamforest');
    imgsrcwaltham.src = "./public/londonmaps/walthamforest_white.png";
    //wandsworth
    const imgsrcwandsworth = document.getElementById('wandsworth');
    imgsrcwandsworth.src = "./public/londonmaps/wandsworth_white.png";
    //westminster
    westminster.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[3]["@AirQualityIndex"];
    if (parseInt(westminster.PM25) == 1 || parseInt(westminster.PM25) == 2 || parseInt(westminster.PM25) ==3){
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_green.png";
    } else if (parseInt(westminster.PM25) == 4 || parseInt(westminster.PM25) == 5 || parseInt(westminster.PM25) ==6) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_orange.png";
    } else if (parseInt(westminster.PM25) == 7 || parseInt(westminster.PM25) == 8 || parseInt(westminster.PM25) ==9 || parseInt(haringey.PM25) == 10) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_red.png";
    }


}