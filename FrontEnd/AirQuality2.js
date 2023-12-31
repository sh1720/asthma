AQIdata = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
async function setmap(){
    const response = await fetch("https://api.erg.ic.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json");
    const apidata = await response.json();
    barking=barnet=bexley=brent=bromley=camden=city=croydon=ealing=enfield=greenwich=hackney=hammersmith=haringey=harrow=havering=hillingdon=hounslow=islington=kc=kingston=lambeth=lewisham=merton=newham=redbridge=richmond=southwark=sutton=towerhamlet=waltham=wandsworth=westminster=AQIdata;
    barking.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[0].Species[0]["@AirQualityIndex"];
    barking.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[0].Species[1]["@AirQualityIndex"];
    barking.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(barking.NO2) == 1 || parseInt(barking.NO2) == 2 || parseInt(barking.NO2) ==3){
        document.getElementsByClassName("barking-white-icon").src = "./public/londonmaps/Barking_green.png"
    } else if (parseInt(barking.NO2) == 4 || parseInt(barking.NO2) == 5 || parseInt(barking.NO2) ==6) {
        document.getElementsByClassName("barking-white-icon").src = "./public/londonmaps/Barking_orange.png"
    } else if (parseInt(barking.NO2) == 7 || parseInt(barking.NO2) == 8 || parseInt(barking.NO2) ==9 || parseInt(barking.NO2) == 10) {
        document.getElementsByClassName("barking-white-icon").src = "./public/londonmaps/Barking_red.png"
    }


    bexley.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[0]["@AirQualityIndex"];
    bexley.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[1]["@AirQualityIndex"];
    bexley.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[2]["@AirQualityIndex"];
    bexley.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[3]["@AirQualityIndex"];
    bexley.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[2].Species[2]["@AirQualityIndex"];
    if (parseInt(bexley.NO2) == 1 || parseInt(bexley.NO2) == 2 || parseInt(bexley.NO2) ==3){
        document.getElementsByClassName("bexley-white-icon").src = "./public/londonmaps/bexley_green.png"
    } else if (parseInt(bexley.NO2) == 4 || parseInt(bexley.NO2) == 5 || parseInt(bexley.NO2) ==6) {
        document.getElementsByClassName("bexley-white-icon").src = "./public/londonmaps/bexley_orange.png"
    } else if (parseInt(bexley.NO2) == 7 || parseInt(bexley.NO2) == 8 || parseInt(bexley.NO2) ==9 || parseInt(bexley.NO2) == 10) {
        document.getElementsByClassName("bexley-white-icon").src = "./public/londonmaps/bexley_red.png"
    }

    brent.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[1]["@AirQualityIndex"];
    brent.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[2]["@AirQualityIndex"];
    brent.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[3]["@AirQualityIndex"];
    brent.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(brent.NO2) == 1 || parseInt(brent.NO2) == 2 || parseInt(brent.NO2) ==3){
        document.getElementsByClassName("brent-white-icon").src = "./public/londonmaps/brent_green.png"
    } else if (parseInt(brent.NO2) == 4 || parseInt(brent.NO2) == 5 || parseInt(brent.NO2) ==6) {
        document.getElementsByClassName("brent-white-icon").src = "./public/londonmaps/brent_orange.png"
    } else if (parseInt(brent.NO2) == 7 || parseInt(brent.NO2) == 8 || parseInt(brent.NO2) ==9 || parseInt(brent.NO2) == 10) {
        document.getElementsByClassName("brent-white-icon").src = "./public/londonmaps/brent_red.png"
    }

    bromley.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site[0].Species[0]["@AirQualityIndex"];
    bromley.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site[0].Species[1]["@AirQualityIndex"];
    bromley.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site[1].Species[2]["@AirQualityIndex"];
    if (parseInt(bromley.NO2) == 1 || parseInt(bromley.NO2) == 2 || parseInt(bromley.NO2) ==3){
        document.getElementsByClassName("bromley-white-icon").src = "./public/londonmaps/bromley_green.png"
    } else if (parseInt(bromley.NO2) == 4 || parseInt(bromley.NO2) == 5 || parseInt(bromley.NO2) ==6) {
        document.getElementsByClassName("bromley-white-icon").src = "./public/londonmaps/bromley_orange.png"
    } else if (parseInt(bromley.NO2) == 7 || parseInt(bromley.NO2) == 8 || parseInt(bromley.NO2) ==9 || parseInt(bromley.NO2) == 10) {
        document.getElementsByClassName("bromley-white-icon").src = "./public/londonmaps/bromley_red.png"
    }

    camden.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[0]["@AirQualityIndex"];
    camden.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[1]["@AirQualityIndex"];
    camden.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[2]["@AirQualityIndex"];
    camden.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[3]["@AirQualityIndex"];
    camden.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[4]["@AirQualityIndex"];
    if (parseInt(camden.NO2) == 1 || parseInt(camden.NO2) == 2 || parseInt(camden.NO2) ==3){
        document.getElementsByClassName("camden-white-icon").src = "./public/londonmaps/camden_green.png"
    } else if (parseInt(camden.NO2) == 4 || parseInt(camden.NO2) == 5 || parseInt(camden.NO2) ==6) {
        document.getElementsByClassName("camden-white-icon").src = "./public/londonmaps/camden_orange.png"
    } else if (parseInt(camden.NO2) == 7 || parseInt(camden.NO2) == 8 || parseInt(camden.NO2) ==9 || parseInt(camden.NO2) == 10) {
        document.getElementsByClassName("camden-white-icon").src = "./public/londonmaps/camden_red.png"
    }

    croydon.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[0].Species[0]["@AirQualityIndex"];
    croydon.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[2].Species[0]["@AirQualityIndex"];
    croydon.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[3].Species[1]["@AirQualityIndex"];
    if (parseInt(croydon.NO2) == 1 || parseInt(croydon.NO2) == 2 || parseInt(croydon.NO2) ==3){
        document.getElementsByClassName("croydon-white-icon").src = "./public/londonmaps/croydon_green.png"
    } else if (parseInt(croydon.NO2) == 4 || parseInt(croydon.NO2) == 5 || parseInt(croydon.NO2) ==6) {
        document.getElementsByClassName("croydon-white-icon").src = "./public/londonmaps/croydon_orange.png"
    } else if (parseInt(croydon.NO2) == 7 || parseInt(croydon.NO2) == 8 || parseInt(croydon.NO2) ==9 || parseInt(croydon.NO2) == 10) {
        document.getElementsByClassName("croydon-white-icon").src = "./public/londonmaps/croydon_red.png"
    }

    ealing.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[8].Site[1].Species[0]["@AirQualityIndex"];
    ealing.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[8].Site[2].Species[1]["@AirQualityIndex"];
    if (parseInt(ealing.NO2) == 1 || parseInt(ealing.NO2) == 2 || parseInt(ealing.NO2) ==3){
        document.getElementsByClassName("ealing-white-icon").src = "./public/londonmaps/ealing_green.png"
    } else if (parseInt(ealing.NO2) == 4 || parseInt(ealing.NO2) == 5 || parseInt(ealing.NO2) ==6) {
        document.getElementsByClassName("ealing-white-icon").src = "./public/londonmaps/ealing_orange.png"
    } else if (parseInt(ealing.NO2) == 7 || parseInt(ealing.NO2) == 8 || parseInt(ealing.NO2) ==9 || parseInt(ealing.NO2) == 10) {
        document.getElementsByClassName("ealing-white-icon").src = "./public/londonmaps/ealing_red.png"
    }

    enfield.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[9].Site[0].Species[0]["@AirQualityIndex"];
    enfield.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[9].Site[2].Species[1]["@AirQualityIndex"];
    if (parseInt(enfield.NO2) == 1 || parseInt(enfield.NO2) == 2 || parseInt(enfield.NO2) ==3){
        document.getElementsByClassName("enfield-white-icon").src = "./public/londonmaps/enfield_green.png"
    } else if (parseInt(enfield.NO2) == 4 || parseInt(enfield.NO2) == 5 || parseInt(enfield.NO2) ==6) {
        document.getElementsByClassName("enfield-white-icon").src = "./public/londonmaps/enfield_orange.png"
    } else if (parseInt(enfield.NO2) == 7 || parseInt(enfield.NO2) == 8 || parseInt(enfield.NO2) ==9 || parseInt(enfield.NO2) == 10) {
        document.getElementsByClassName("enfield-white-icon").src = "./public/londonmaps/enfield_red.png"
    }

    greenwich.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[0]["@AirQualityIndex"];
    greenwich.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[1]["@AirQualityIndex"];
    greenwich.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[2]["@AirQualityIndex"];
    greenwich.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[7].Species[4]["@AirQualityIndex"];
    greenwich.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[3].Species[1]["@AirQualityIndex"];
    if (parseInt(greenwich.NO2) == 1 || parseInt(greenwich.NO2) == 2 || parseInt(greenwich.NO2) ==3){
        document.getElementsByClassName("greenwich-white-icon").src = "./public/londonmaps/greenwich_green.png"
    } else if (parseInt(greenwich.NO2) == 4 || parseInt(greenwich.NO2) == 5 || parseInt(greenwich.NO2) ==6) {
        document.getElementsByClassName("greenwich-white-icon").src = "./public/londonmaps/greenwich_orange.png"
    } else if (parseInt(greenwich.NO2) == 7 || parseInt(greenwich.NO2) == 8 || parseInt(greenwich.NO2) ==9 || parseInt(greenwich.NO2) == 10) {
        document.getElementsByClassName("greenwich-white-icon").src = "./public/londonmaps/greenwich_red.png"
    }

    hackney.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site[0].Species[0]["@AirQualityIndex"];
    hackney.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site[0].Species[1]["@AirQualityIndex"];
    hackney.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site[0].Species[2]["@AirQualityIndex"];
    hackney.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site[0].Species[3]["@AirQualityIndex"];
    if (parseInt(hackney.NO2) == 1 || parseInt(hackney.NO2) == 2 || parseInt(hackney.NO2) ==3){
        document.getElementsByClassName("hackney-white-icon").src = "./public/londonmaps/hackney_green.png"
    } else if (parseInt(hackney.NO2) == 4 || parseInt(hackney.NO2) == 5 || parseInt(hackney.NO2) ==6) {
        document.getElementsByClassName("hackney-white-icon").src = "./public/londonmaps/hackney_orange.png"
    } else if (parseInt(hackney.NO2) == 7 || parseInt(hackney.NO2) == 8 || parseInt(hackney.NO2) ==9 || parseInt(hackney.NO2) == 10) {
        document.getElementsByClassName("hackney-white-icon").src = "./public/londonmaps/hackney_red.png"
    }

    haringey.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[13].Site[1].Species[0]["@AirQualityIndex"];
    haringey.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[13].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(haringey.NO2) == 1 || parseInt(haringey.NO2) == 2 || parseInt(haringey.NO2) ==3){
        document.getElementsByClassName("haringey-white-icon").src = "./public/londonmaps/Haringey_green.png"
    } else if (parseInt(haringey.NO2) == 4 || parseInt(haringey.NO2) == 5 || parseInt(haringey.NO2) ==6) {
        document.getElementsByClassName("haringey-white-icon").src = "./public/londonmaps/Haringey_orange.png"
    } else if (parseInt(haringey.NO2) == 7 || parseInt(haringey.NO2) == 8 || parseInt(haringey.NO2) ==9 || parseInt(haringey.NO2) == 10) {
        document.getElementsByClassName("haringey-white-icon").src = "./public/londonmaps/Haringey_red.png"
    }

    havering.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[1].Species[0]["@AirQualityIndex"];
    havering.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[1].Species[1]["@AirQualityIndex"];
    havering.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(havering.NO2) == 1 || parseInt(havering.NO2) == 2 || parseInt(havering.NO2) ==3){
        document.getElementsByClassName("havering-white-icon").src = "./public/londonmaps/Havering_green.png"
    } else if (parseInt(havering.NO2) == 4 || parseInt(havering.NO2) == 5 || parseInt(havering.NO2) ==6) {
        document.getElementsByClassName("havering-white-icon").src = "./public/londonmaps/Havering_orange.png"
    } else if (parseInt(havering.NO2) == 7 || parseInt(havering.NO2) == 8 || parseInt(havering.NO2) ==9 || parseInt(havering.NO2) == 10) {
        document.getElementsByClassName("havering-white-icon").src = "./public/londonmaps/Havering_red.png"
    }

    hillingdon.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[0]["@AirQualityIndex"];
    hillingdon.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[1]["@AirQualityIndex"];
    hillingdon.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[2]["@AirQualityIndex"];
    hillingdon.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[3]["@AirQualityIndex"];
    if (parseInt(hillingdon.NO2) == 1 || parseInt(hillingdon.NO2) == 2 || parseInt(hillingdon.NO2) ==3){
        document.getElementsByClassName("hillingdon-white-icon").src = "./public/londonmaps/hillingdon_green.png"
    } else if (parseInt(hillingdon.NO2) == 4 || parseInt(hillingdon.NO2) == 5 || parseInt(hillingdon.NO2) ==6) {
        document.getElementsByClassName("hillingdon-white-icon").src = "./public/londonmaps/hillingdon_orange.png"
    } else if (parseInt(hillingdon.NO2) == 7 || parseInt(hillingdon.NO2) == 8 || parseInt(hillingdon.NO2) ==9 || parseInt(hillingdon.NO2) == 10) {
        document.getElementsByClassName("hillingdon-white-icon").src = "./public/londonmaps/hillingdon_red.png"
    }

    islington.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[18].Site[0].Species[0]["@AirQualityIndex"];
    islington.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[18].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(islington.NO2) == 1 || parseInt(islington.NO2) == 2 || parseInt(islington.NO2) ==3){
        document.getElementsByClassName("islington-white-icon").src = "./public/londonmaps/islington_green.png"
    } else if (parseInt(islington.NO2) == 4 || parseInt(islington.NO2) == 5 || parseInt(islington.NO2) ==6) {
        document.getElementsByClassName("islington-white-icon").src = "./public/londonmaps/islington_orange.png"
    } else if (parseInt(islington.NO2) == 7 || parseInt(islington.NO2) == 8 || parseInt(islington.NO2) ==9 || parseInt(islington.NO2) == 10) {
        document.getElementsByClassName("islington-white-icon").src = "./public/londonmaps/islington_red.png"
    }

    kc.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[0]["@AirQualityIndex"];
    kc.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[1]["@AirQualityIndex"];
    kc.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[2]["@AirQualityIndex"];
    kc.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[1].Species[0]["@AirQualityIndex"];
    kc.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(kc.NO2) == 1 || parseInt(kc.NO2) == 2 || parseInt(kc.NO2) ==3){
        document.getElementsByClassName("kc-white-icon").src = "./public/londonmaps/kc_green.png"
    } else if (parseInt(kc.NO2) == 4 || parseInt(kc.NO2) == 5 || parseInt(kc.NO2) ==6) {
        document.getElementsByClassName("kc-white-icon").src = "./public/londonmaps/kc_orange.png"
    } else if (parseInt(kc.NO2) == 7 || parseInt(kc.NO2) == 8 || parseInt(kc.NO2) ==9 || parseInt(kc.NO2) == 10) {
        document.getElementsByClassName("kc-white-icon").src = "./public/londonmaps/kc_red.png"
    }

    kingston.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[0].Species[0]["@AirQualityIndex"];
    kingston.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[1].Species[1]["@AirQualityIndex"];
    kingston.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(kingston.NO2) == 1 || parseInt(kingston.NO2) == 2 || parseInt(kingston.NO2) ==3){
        document.getElementsByClassName("kingston-white-icon").src = "./public/londonmaps/kingston_green.png"
    } else if (parseInt(kingston.NO2) == 4 || parseInt(kingston.NO2) == 5 || parseInt(kingston.NO2) ==6) {
        document.getElementsByClassName("kingston-white-icon").src = "./public/londonmaps/kingston_orange.png"
    } else if (parseInt(kingston.NO2) == 7 || parseInt(kingston.NO2) == 8 || parseInt(kingston.NO2) ==9 || parseInt(kingston.NO2) == 10) {
        document.getElementsByClassName("kingston-white-icon").src = "./public/londonmaps/kingston_red.png"
    }

    lambeth.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[0]["@AirQualityIndex"];
    lambeth.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[1]["@AirQualityIndex"];
    lambeth.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[2]["@AirQualityIndex"];
    lambeth.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(lambeth.NO2) == 1 || parseInt(lambeth.NO2) == 2 || parseInt(lambeth.NO2) ==3){
        document.getElementsByClassName("lambeth-white-icon").src = "./public/londonmaps/lambeth_green.png"
    } else if (parseInt(lambeth.NO2) == 4 || parseInt(lambeth.NO2) == 5 || parseInt(lambeth.NO2) ==6) {
        document.getElementsByClassName("lambeth-white-icon").src = "./public/londonmaps/lambeth_orange.png"
    } else if (parseInt(lambeth.NO2) == 7 || parseInt(lambeth.NO2) == 8 || parseInt(lambeth.NO2) ==9 || parseInt(lambeth.NO2) == 10) {
        document.getElementsByClassName("lambeth-white-icon").src = "./public/londonmaps/lambeth_red.png"
    }

    lewisham.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[0]["@AirQualityIndex"];
    lewisham.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[1]["@AirQualityIndex"];
    lewisham.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[2]["@AirQualityIndex"];
    lewisham.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[3]["@AirQualityIndex"];
    if (parseInt(lewisham.NO2) == 1 || parseInt(lewisham.NO2) == 2 || parseInt(lewisham.NO2) ==3){
        document.getElementsByClassName("lewisham-white-icon").src = "./public/londonmaps/lewisham_green.png"
    } else if (parseInt(lewisham.NO2) == 4 || parseInt(lewisham.NO2) == 5 || parseInt(lewisham.NO2) ==6) {
        document.getElementsByClassName("lewisham-white-icon").src = "./public/londonmaps/lewisham_orange.png"
    } else if (parseInt(lewisham.NO2) == 7 || parseInt(lewisham.NO2) == 8 || parseInt(lewisham.NO2) ==9 || parseInt(lewisham.NO2) == 10) {
        document.getElementsByClassName("lewisham-white-icon").src = "./public/londonmaps/lewisham_red.png"
    }

    merton.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[23].Site[1].Species[0]["@AirQualityIndex"];
    merton.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[23].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(merton.NO2) == 1 || parseInt(merton.NO2) == 2 || parseInt(merton.NO2) ==3){
        document.getElementsByClassName("merton-white-icon").src = "./public/londonmaps/merton_green.png"
    } else if (parseInt(merton.NO2) == 4 || parseInt(merton.NO2) == 5 || parseInt(merton.NO2) ==6) {
        document.getElementsByClassName("merton-white-icon").src = "./public/londonmaps/merton_orange.png"
    } else if (parseInt(merton.NO2) == 7 || parseInt(merton.NO2) == 8 || parseInt(merton.NO2) ==9 || parseInt(merton.NO2) == 10) {
        document.getElementsByClassName("merton-white-icon").src = "./public/londonmaps/merton_red.png"
    }

    newham.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[0]["@AirQualityIndex"];
    newham.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[1]["@AirQualityIndex"];
    newham.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(newham.NO2) == 1 || parseInt(newham.NO2) == 2 || parseInt(newham.NO2) ==3){
        document.getElementsByClassName("newham-white-icon").src = "./public/londonmaps/newham_green.png"
    } else if (parseInt(newham.NO2) == 4 || parseInt(newham.NO2) == 5 || parseInt(newham.NO2) ==6) {
        document.getElementsByClassName("newham-white-icon").src = "./public/londonmaps/newham_orange.png"
    } else if (parseInt(newham.NO2) == 7 || parseInt(newham.NO2) == 8 || parseInt(newham.NO2) ==9 || parseInt(newham.NO2) == 10) {
        document.getElementsByClassName("newham-white-icon").src = "./public/londonmaps/newham_red.png"
    }

    redbridge.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[0]["@AirQualityIndex"];
    redbridge.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[1]["@AirQualityIndex"];
    redbridge.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[2]["@AirQualityIndex"];
    redbridge.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[3]["@AirQualityIndex"];
    if (parseInt(redbridge.NO2) == 1 || parseInt(redbridge.NO2) == 2 || parseInt(redbridge.NO2) ==3){
        document.getElementsByClassName("redbridge-white-icon").src = "./public/londonmaps/redbridge_green.png"
    } else if (parseInt(redbridge.NO2) == 4 || parseInt(redbridge.NO2) == 5 || parseInt(redbridge.NO2) ==6) {
        document.getElementsByClassName("redbridge-white-icon").src = "./public/londonmaps/redbridge_orange.png"
    } else if (parseInt(redbridge.NO2) == 7 || parseInt(redbridge.NO2) == 8 || parseInt(redbridge.NO2) ==9 || parseInt(redbridge.NO2) == 10) {
        document.getElementsByClassName("redbridge-white-icon").src = "./public/londonmaps/redbridge_red.png"
    }

    richmond.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[0].Species[0]["@AirQualityIndex"];
    richmond.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[1].Species[1]["@AirQualityIndex"];
    richmond.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[0].Species[1]["@AirQualityIndex"];
    richmond.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[2].Species[1]["@AirQualityIndex"];
    if (parseInt(richmond.NO2) == 1 || parseInt(richmond.NO2) == 2 || parseInt(richmond.NO2) ==3){
        document.getElementsByClassName("richmond-white-icon").src = "./public/londonmaps/richmond_green.png"
    } else if (parseInt(richmond.NO2) == 4 || parseInt(richmond.NO2) == 5 || parseInt(richmond.NO2) ==6) {
        document.getElementsByClassName("richmond-white-icon").src = "./public/londonmaps/richmond_orange.png"
    } else if (parseInt(richmond.NO2) == 7 || parseInt(richmond.NO2) == 8 || parseInt(richmond.NO2) ==9 || parseInt(richmond.NO2) == 10) {
        document.getElementsByClassName("richmond-white-icon").src = "./public/londonmaps/richmond_red.png"
    }

    southwark.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[0]["@AirQualityIndex"];
    southwark.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[1]["@AirQualityIndex"];
    southwark.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[2]["@AirQualityIndex"];
    southwark.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[3]["@AirQualityIndex"];
    if (parseInt(southwark.NO2) == 1 || parseInt(southwark.NO2) == 2 || parseInt(southwark.NO2) ==3){
        document.getElementsByClassName("southwark-white-icon").src = "./public/londonmaps/southwark_green.png"
    } else if (parseInt(southwark.NO2) == 4 || parseInt(southwark.NO2) == 5 || parseInt(southwark.NO2) ==6) {
        document.getElementsByClassName("southwark-white-icon").src = "./public/londonmaps/southwark_orange.png"
    } else if (parseInt(southwark.NO2) == 7 || parseInt(southwark.NO2) == 8 || parseInt(southwark.NO2) ==9 || parseInt(southwark.NO2) == 10) {
        document.getElementsByClassName("southwark-white-icon").src = "./public/londonmaps/southwark_red.png"
    }

    sutton.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[0].Species[0]["@AirQualityIndex"];
    sutton.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[0].Species[1]["@AirQualityIndex"];
    sutton.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(sutton.NO2) == 1 || parseInt(sutton.NO2) == 2 || parseInt(sutton.NO2) ==3){
        document.getElementsByClassName("sutton-white-icon").src = "./public/londonmaps/sutton_green.png"
    } else if (parseInt(sutton.NO2) == 4 || parseInt(sutton.NO2) == 5 || parseInt(sutton.NO2) ==6) {
        document.getElementsByClassName("sutton-white-icon").src = "./public/londonmaps/sutton_orange.png"
    } else if (parseInt(sutton.NO2) == 7 || parseInt(sutton.NO2) == 8 || parseInt(sutton.NO2) ==9 || parseInt(sutton.NO2) == 10) {
        document.getElementsByClassName("sutton-white-icon").src = "./public/londonmaps/sutton_red.png"
    }

    towerhamlet.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[0]["@AirQualityIndex"];
    towerhamlet.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[1]["@AirQualityIndex"];
    towerhamlet.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(towerhamlet.NO2) == 1 || parseInt(towerhamlet.NO2) == 2 || parseInt(towerhamlet.NO2) ==3){
        document.getElementsByClassName("towerhamlet-white-icon").src = "./public/londonmaps/towerhamlet_green.png"
    } else if (parseInt(towerhamlet.NO2) == 4 || parseInt(towerhamlet.NO2) == 5 || parseInt(towerhamlet.NO2) ==6) {
        document.getElementsByClassName("towerhamlet-white-icon").src = "./public/londonmaps/towerhamlet_orange.png"
    } else if (parseInt(towerhamlet.NO2) == 7 || parseInt(towerhamlet.NO2) == 8 || parseInt(towerhamlet.NO2) ==9 || parseInt(towerhamlet.NO2) == 10) {
        document.getElementsByClassName("towerhamlet-white-icon").src = "./public/londonmaps/towerhamlet_red.png"
    }

    wandsworth.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[30].Site[0].Species[0]["@AirQualityIndex"];
    wandsworth.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[30].Site[0].Species[1]["@AirQualityIndex"];
    wandsworth.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[30].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(wandsworth.NO2) == 1 || parseInt(wandsworth.NO2) == 2 || parseInt(wandsworth.NO2) ==3){
        document.getElementsByClassName("wandsworth-white-icon").src = "./public/londonmaps/wandsworth_green.png"
    } else if (parseInt(wandsworth.NO2) == 4 || parseInt(wandsworth.NO2) == 5 || parseInt(wandsworth.NO2) ==6) {
        document.getElementsByClassName("wandsworth-white-icon").src = "./public/londonmaps/wandsworth_orange.png"
    } else if (parseInt(wandsworth.NO2) == 7 || parseInt(wandsworth.NO2) == 8 || parseInt(wandsworth.NO2) ==9 || parseInt(wandsworth.NO2) == 10) {
        document.getElementsByClassName("wandsworth-white-icon").src = "./public/londonmaps/wandsworth_red.png"
    }

    westminster.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[0]["@AirQualityIndex"];
    westminster.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[1]["@AirQualityIndex"];
    westminster.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[2]["@AirQualityIndex"];
    westminster.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[3]["@AirQualityIndex"];
    if (parseInt(westminster.NO2) == 1 || parseInt(westminster.NO2) == 2 || parseInt(westminster.NO2) ==3){
        document.getElementsByClassName("westminster-white-1-icon").src = "./public/londonmaps/westminster_green.png"
    } else if (parseInt(westminster.NO2) == 4 || parseInt(westminster.NO2) == 5 || parseInt(westminster.NO2) ==6) {
        document.getElementsByClassName("westminster-white-1-icon").src = "./public/londonmaps/westminster_orange.png"
        } else if (parseInt(westminster.NO2) == 7 || parseInt(westminster.NO2) == 8 || parseInt(westminster.NO2) ==9 || parseInt(haringey.NO2) == 10) {
        document.getElementsByClassName("westminster-white-1-icon").src = "./public/londonmaps/westminster_red.png"
    }


}

setmap();